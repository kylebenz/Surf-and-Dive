// Automatic image optimisation pipeline.
//
// Authors drop full-size originals into /media (any size, JPEG/PNG/WebP/AVIF/TIFF/GIF).
// This module turns every original into web-ready, content-hashed files in
// /public/_media and writes a manifest the site's components read at build time:
//
//   - detects original dimensions and format, applies EXIF orientation
//   - never upscales; caps delivery at 2000px wide
//   - AVIF + WebP + a JPEG (or PNG when the image has transparency) fallback
//   - widths 480 / 768 / 1200 / 1600 / 2000, only those the original can support
//   - strips EXIF/GPS/camera metadata, converts to sRGB
//   - descriptive filenames: <context>-<title>-<hash>-<width>.<ext>
//   - stores width, height, aspect ratio and dominant colour
//   - reads an optional <name>.json sidecar for title / alt / caption / credit / focus
//
// Results are cached by content hash, so unchanged originals are never re-encoded.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import os from 'node:os';
import sharp from 'sharp';

export const PIPELINE_VERSION = 2;
export const WIDTHS = [480, 768, 1200, 1600, 2000];
export const MAX_WIDTH = WIDTHS[WIDTHS.length - 1];
/**
 * Visually high quality for travel photography; tuned per format, not one number for all.
 * Encoder effort is kept low on purpose: at these settings higher AVIF effort produced the
 * same file size while taking ~15x longer, which would make builds with hundreds of photos slow.
 */
export const QUALITY = {
  avif: { quality: 60, effort: 2 },
  webp: { quality: 80, effort: 4 },
  jpeg: { quality: 82, mozjpeg: true },
  png: { compressionLevel: 9, effort: 4 },
};
/** Originals encoded at the same time (each encode is single-threaded in many build containers). */
const PARALLEL = Math.max(1, Math.min(8, (os.availableParallelism?.() ?? os.cpus().length) || 1));
export const IMAGE_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tif', '.tiff', '.gif'];
const UNSUPPORTED_EXT = ['.heic', '.heif', '.raw', '.cr2', '.nef', '.arw', '.dng', '.psd', '.bmp'];
const LARGE_ORIGINAL = 25 * 1024 * 1024;

export const paths = (root = process.cwd()) => ({
  root,
  media: path.join(root, 'media'),
  out: path.join(root, 'public', '_media'),
  manifest: path.join(root, '.astro', 'media-manifest.json'),
  cache: process.env.MEDIA_CACHE_DIR || path.join(root, 'node_modules', '.cache', 'surf-and-dive-media'),
});

const walk = (d) =>
  fs.existsSync(d)
    ? fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
        if (e.name.startsWith('.')) return [];
        const p = path.join(d, e.name);
        return e.isDirectory() ? walk(p) : [p];
      })
    : [];

export const slugify = (s) =>
  String(s)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const titleCase = (s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const SLOT_WORDS = {
  hero: 'ocean landscape',
  surf: 'surfing',
  dive: 'diving',
  freedive: 'freediving',
  'marine-life': 'marine life',
  landscape: 'coastline',
  experience: 'time on the water',
  culture: 'local culture',
  luxury: 'where to stay',
  signature: 'signature ocean moment',
};

/** A starting point for alt text, derived from where the file was placed. Authors should replace it. */
export function suggestAlt(key) {
  const parts = key.split('/');
  const name = parts[parts.length - 1];
  if (parts[0] === 'destinations' && parts.length === 3) return `${titleCase(parts[1])}: ${SLOT_WORDS[name] ?? titleCase(name).toLowerCase()}`;
  if (parts[0] === 'home') return 'Ocean landscape';
  if (parts[0] === 'blog' && parts.length === 3) return `${titleCase(parts[1])}: ${titleCase(name).toLowerCase()}`;
  return titleCase(name);
}

export function readSidecar(file) {
  const p = file.replace(/\.[^.]+$/, '.json');
  if (!fs.existsSync(p)) return {};
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.warn(`[media] Ignoring invalid JSON in ${path.relative(process.cwd(), p)}: ${e.message}`);
    return {};
  }
}

/** Widths to generate for an original of width `w`: standard steps it can fill, plus its own width if smaller than the cap. */
export function widthsFor(w) {
  const out = WIDTHS.filter((x) => x <= w);
  if (w < MAX_WIDTH && !out.some((x) => Math.abs(x - w) / w < 0.1)) out.push(w);
  return out.length ? out : [w];
}

const hex = (c) => '#' + [c.r, c.g, c.b].map((v) => v.toString(16).padStart(2, '0')).join('');

async function encode(file, cacheDir) {
  const input = sharp(file, { failOn: 'none', limitInputPixels: 268402689 }).rotate();
  const meta = await sharp(file, { failOn: 'none' }).metadata();
  // Dimensions after EXIF orientation is applied.
  const swap = (meta.orientation ?? 1) >= 5;
  const width = swap ? meta.height : meta.width;
  const height = swap ? meta.width : meta.height;
  const hasAlpha = Boolean(meta.hasAlpha);
  const fallback = hasAlpha ? 'png' : 'jpeg';
  const stats = await input.clone().stats();
  const variants = { avif: [], webp: [], [fallback]: [] };

  fs.mkdirSync(cacheDir, { recursive: true });
  for (const w of widthsFor(width)) {
    const resized = input.clone().resize({ width: w, withoutEnlargement: true }).toColourspace('srgb');
    await Promise.all(
      Object.keys(variants).map(async (fmt) => {
        const out = path.join(cacheDir, `${w}.${fmt === 'jpeg' ? 'jpg' : fmt}`);
        const info = await resized.clone()[fmt](QUALITY[fmt]).toFile(out);
        variants[fmt].push({ w: info.width, h: info.height, file: path.basename(out), bytes: info.size });
      }),
    );
  }
  for (const list of Object.values(variants)) list.sort((a, b) => a.w - b.w);
  const record = {
    v: PIPELINE_VERSION,
    width,
    height,
    format: meta.format,
    hasAlpha,
    fallback,
    color: hex(stats.dominant),
    variants,
  };
  fs.writeFileSync(path.join(cacheDir, 'meta.json'), JSON.stringify(record));
  return record;
}

/**
 * Processes every original in /media. Returns { manifest, warnings, stats }.
 * Options: { root, writeSidecars: create <name>.json stubs for images without one, log }
 */
export async function processImages({ root = process.cwd(), writeSidecars = false, log = console.log } = {}) {
  const p = paths(root);
  const files = walk(p.media);
  const warnings = [];
  const manifest = {};
  let encoded = 0, reused = 0;

  for (const f of files.filter((x) => UNSUPPORTED_EXT.includes(path.extname(x).toLowerCase()))) {
    warnings.push(`${path.relative(root, f)}: format not supported for the web. Export it as JPEG (or PNG for transparency) and upload that instead.`);
  }

  // Video posters generated by the video pipeline live next to videos and are processed like any image.
  const images = files.filter((x) => IMAGE_EXT.includes(path.extname(x).toLowerCase()));
  fs.rmSync(p.out, { recursive: true, force: true });
  fs.mkdirSync(p.out, { recursive: true });

  // 1. Hash and encode (cached), several originals at a time.
  const seen = new Set();
  const jobs = [];
  for (const file of images) {
    const rel = path.relative(p.media, file).split(path.sep).join('/');
    const key = rel.replace(/\.[^.]+$/, '');
    if (seen.has(key)) {
      warnings.push(`media/${rel}: another file named "${key}" already exists with a different extension; this one is ignored.`);
      continue;
    }
    seen.add(key);
    jobs.push({ file, rel, key });
  }
  let next = 0;
  const worker = async () => {
    while (next < jobs.length) {
      const job = jobs[next++];
      const buf = fs.readFileSync(job.file);
      job.bytes = buf.length;
      if (buf.length > LARGE_ORIGINAL) warnings.push(`media/${job.rel} is ${(buf.length / 1048576).toFixed(0)} MB. It will be optimised, but originals over 25 MB slow down the repository; a 6000px high-quality JPEG is plenty.`);
      job.hash = crypto.createHash('sha1').update(buf).update(`v${PIPELINE_VERSION}`).digest('hex').slice(0, 10);
      job.cacheDir = path.join(p.cache, job.hash);
      try {
        job.rec = JSON.parse(fs.readFileSync(path.join(job.cacheDir, 'meta.json'), 'utf8'));
        if (job.rec.v !== PIPELINE_VERSION) job.rec = null;
      } catch {}
      if (job.rec) { reused++; continue; }
      try {
        job.rec = await encode(job.file, job.cacheDir);
        encoded++;
        log(`[media] optimised media/${job.rel} (${job.rec.width}×${job.rec.height} ${job.rec.format})`);
      } catch (e) {
        warnings.push(`media/${job.rel}: could not be processed (${e.message}).`);
      }
    }
  };
  await Promise.all(Array.from({ length: PARALLEL }, worker));

  // 2. Publish under descriptive names and build the manifest.
  for (const { file, rel, key, rec, hash, cacheDir, bytes } of jobs) {
    if (!rec) continue;

    const side = readSidecar(file);
    const suggested = suggestAlt(key);
    if (writeSidecars && !fs.existsSync(file.replace(/\.[^.]+$/, '.json'))) {
      const stub = { title: titleCase(key.split('/').pop()), alt: suggested, caption: '', credit: '' };
      fs.writeFileSync(file.replace(/\.[^.]+$/, '.json'), JSON.stringify(stub, null, 2) + '\n');
      Object.assign(side, stub);
      log(`[media] created media/${key}.json; edit its title and alt text to describe the photograph`);
    }

    // e.g. destinations/fiji/hero + title "Cloudbreak at dawn" → fiji-hero-cloudbreak-at-dawn
    const words = key.split('/').slice(-2).filter((s) => !['destinations', 'blog', 'gallery', 'videos'].includes(s)).map(slugify);
    const t = slugify(side.title || '');
    if (t && !words.includes(t)) words.push(t);
    const descriptive = words.join('-').slice(0, 70).replace(/-+$/, '') || 'image';
    const variants = {};
    for (const [fmt, list] of Object.entries(rec.variants)) {
      variants[fmt] = list.map((v) => {
        const name = `${descriptive}-${hash.slice(0, 8)}-${v.w}.${fmt === 'jpeg' ? 'jpg' : fmt}`;
        const dest = path.join(p.out, name);
        try {
          fs.linkSync(path.join(cacheDir, v.file), dest);
        } catch {
          fs.copyFileSync(path.join(cacheDir, v.file), dest);
        }
        return { w: v.w, h: v.h, url: `/_media/${name}`, bytes: v.bytes };
      });
    }

    const alt = typeof side.alt === 'string' ? side.alt.trim() : '';
    manifest[key] = {
      key,
      source: `media/${rel}`,
      title: side.title || '',
      alt,
      altIsSuggestion: !alt || alt === suggested,
      suggestedAlt: suggested,
      caption: side.caption || '',
      credit: side.credit || '',
      focus: side.focus || '',
      width: rec.width,
      height: rec.height,
      aspectRatio: +(rec.width / rec.height).toFixed(4),
      originalFormat: rec.format,
      originalBytes: bytes,
      color: rec.color,
      fallback: rec.fallback,
      variants,
    };
  }

  fs.mkdirSync(path.dirname(p.manifest), { recursive: true });
  fs.writeFileSync(p.manifest, JSON.stringify(manifest, null, 1));
  return { manifest, warnings, stats: { images: Object.keys(manifest).length, encoded, reused } };
}

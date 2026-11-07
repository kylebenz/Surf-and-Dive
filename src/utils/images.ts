import fs from 'node:fs';
import path from 'node:path';

/**
 * Build-time access to optimised images.
 *
 * Originals live in /media and are processed automatically by the media pipeline
 * (scripts/media/images.mjs, run by src/integrations/media.mjs) into AVIF, WebP and a
 * JPEG/PNG fallback at several widths. This module reads the pipeline's manifest and
 * returns everything a component needs to render a responsive <picture>.
 */

type Variant = { w: number; h: number; url: string; bytes: number };
type ManifestEntry = {
  key: string;
  source: string;
  title: string;
  alt: string;
  altIsSuggestion: boolean;
  suggestedAlt: string;
  caption: string;
  credit: string;
  focus: string;
  focusMobile?: string;
  width: number;
  height: number;
  aspectRatio: number;
  color: string;
  fallback: 'jpeg' | 'png';
  variants: Record<string, Variant[]>;
};

export type ResolvedImage = {
  key: string;
  /** Fallback src (a mid-size JPEG/PNG) for browsers without srcset support. */
  src: string;
  /** Fallback-format srcset. */
  srcset: string;
  /** Modern formats in preference order. */
  sources: { type: string; srcset: string }[];
  fallbackType: string;
  width: number;
  height: number;
  aspectRatio: number;
  /** Dominant colour, painted while the image loads. */
  color: string;
  /** CSS object-position for crops, e.g. "50% 30%". */
  focus: string;
  /** object-position below 768px wide, when the crop needs re-centring on phones. */
  focusMobile: string;
  alt: string;
  altIsSuggestion: boolean;
  title: string;
  caption?: string;
  credit?: string;
  variants: Record<string, Variant[]>;
};

const MANIFEST = path.join(process.cwd(), '.astro', 'media-manifest.json');
let cached: { mtime: number; data: Record<string, ManifestEntry> } | null = null;

function manifest(): Record<string, ManifestEntry> {
  try {
    const mtime = fs.statSync(MANIFEST).mtimeMs;
    if (!cached || cached.mtime !== mtime) cached = { mtime, data: JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) };
    return cached.data;
  } catch {
    return {};
  }
}

const srcset = (list: Variant[]) => list.map((v) => `${v.url} ${v.w}w`).join(', ');

/** All manifest keys under a prefix, e.g. listMedia('gallery/fiji'). Sorted by key. */
export function listMedia(prefix: string): string[] {
  const p = prefix.replace(/^\/+|\/+$/g, '') + '/';
  return Object.keys(manifest()).filter((k) => k.startsWith(p)).sort();
}

/**
 * Returns an optimised image by media key (path inside /media without the extension,
 * e.g. "destinations/fiji/hero"), or null when no photograph has been uploaded yet.
 * Alt text precedence: explicit `alt` (data files) > sidecar JSON > generated suggestion.
 */
export function getImage(
  key: string,
  overrides: { alt?: string; caption?: string; credit?: string } = {},
): ResolvedImage | null {
  const e = manifest()[key.replace(/^\/?(media\/)?/, '').replace(/\.[a-z0-9]+$/i, '')];
  if (!e) return null;
  const fb = e.variants[e.fallback] ?? [];
  const mid = fb.find((v) => v.w >= 1200) ?? fb[fb.length - 1];
  const explicitAlt = overrides.alt?.trim();
  return {
    key: e.key,
    src: mid?.url ?? '',
    srcset: srcset(fb),
    sources: (['avif', 'webp'] as const).filter((f) => e.variants[f]?.length).map((f) => ({ type: `image/${f}`, srcset: srcset(e.variants[f]) })),
    fallbackType: e.fallback === 'png' ? 'image/png' : 'image/jpeg',
    width: e.width,
    height: e.height,
    aspectRatio: e.aspectRatio,
    color: e.color,
    focus: e.focus,
    focusMobile: e.focusMobile || '',
    alt: explicitAlt || e.alt || e.suggestedAlt,
    altIsSuggestion: !explicitAlt && e.altIsSuggestion,
    title: e.title,
    caption: overrides.caption || e.caption || undefined,
    credit: overrides.credit || e.credit || undefined,
    variants: e.variants,
  };
}

/**
 * Resolves an image slot. `dir` + `base` give the conventional location inside /media
 * (e.g. dir "destinations/fiji", base "hero" → media/destinations/fiji/hero.jpg);
 * `src` can point at any other media key instead.
 */
export function resolveImage(opts: {
  src?: string;
  dir: string;
  base: string;
  alt?: string;
  caption?: string;
  credit?: string;
}): ResolvedImage | null {
  const overrides = { alt: opts.alt, caption: opts.caption, credit: opts.credit };
  return (opts.src ? getImage(opts.src, overrides) : null) ?? getImage(`${opts.dir.replace(/^\/+|\/+$/g, '')}/${opts.base}`, overrides);
}

/** Absolute-path URL of a mid-size fallback (JPEG/PNG) for Open Graph and structured data. */
export const shareImage = (img: ResolvedImage | null) => {
  if (!img) return undefined;
  const fb = img.variants[img.fallbackType === 'image/png' ? 'png' : 'jpeg'] ?? [];
  return (fb.find((v) => v.w >= 1200) ?? fb[fb.length - 1])?.url;
};

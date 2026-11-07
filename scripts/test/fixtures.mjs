// Synthetic test media for CI: photo-like images (gradient + film-grain noise) and short
// videos, written into /media only where no file exists yet, so real photography is never
// overwritten. Used by the Performance workflow together with MEDIA_TEST_PAGE=1.
// Never commit the generated files.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const media = path.join(process.cwd(), 'media');
const target = (rel) => {
  const f = path.join(media, rel);
  if (fs.existsSync(f)) return null;
  fs.mkdirSync(path.dirname(f), { recursive: true });
  return f;
};

async function photo(rel, w, h, hue, { png = false, exifRotate = false } = {}) {
  const f = target(rel);
  if (!f) return;
  const noise = await sharp({ create: { width: w, height: h, channels: 3, noise: { type: 'gaussian', mean: 128, sigma: 28 } } }).blur(1.5).raw().toBuffer();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${hue},55%,72%)"/><stop offset=".45" stop-color="hsl(${hue + 10},65%,45%)"/><stop offset="1" stop-color="hsl(${hue + 20},60%,18%)"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><circle cx="${w * 0.7}" cy="${h * 0.25}" r="${h * 0.08}" fill="#fff6d8" opacity=".85"/></svg>`;
  let img = sharp(Buffer.from(svg)).composite([{ input: noise, raw: { width: w, height: h, channels: 3 }, blend: 'soft-light' }]);
  if (png) return img.png().toFile(f);
  img = img.jpeg({ quality: 92 });
  if (exifRotate) img = img.withMetadata({ orientation: 6 });
  await img.toFile(f);
}

function video(rel, filter, seconds, audio) {
  const f = target(rel);
  if (!f) return;
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'lavfi', '-i', filter, ...(audio ? ['-f', 'lavfi', '-i', `sine=frequency=330:duration=${seconds}`] : []),
    '-t', String(seconds), '-c:v', 'libx264', '-preset', 'ultrafast', '-crf', '20', ...(audio ? ['-c:a', 'aac', '-shortest'] : []), f]);
}

await photo('home/hero.jpg', 5000, 3333, 190);
await photo('destinations/fiji/hero.jpg', 4032, 3024, 185, { exifRotate: true });
await photo('destinations/fiji/surf.jpg', 1100, 1400, 200);
await photo('destinations/fiji/landscape.png', 2400, 1500, 30, { png: true });
await photo('blog/maldives-vs-bali-luxury-surf-dive/image-1.jpg', 3000, 1800, 175);
for (let i = 1; i <= 8; i++) await photo(`gallery/fiji/${String(i).padStart(2, '0')}.jpg`, 2600, i % 3 ? 1733 : 3250, 160 + i * 8);
video('videos/swell-loop.mp4', 'gradients=size=1920x1080:rate=30:speed=0.02', 5, false);
video('videos/reef-drift.mp4', 'testsrc2=size=3840x2160:rate=60', 4, true);
console.log('Test fixtures ready in media/ (do not commit them).');

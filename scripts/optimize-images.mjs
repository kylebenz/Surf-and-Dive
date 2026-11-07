// Creates responsive WebP variants (-640, -1280, -1920) next to every source image
// in /public/images. Variants are picked up automatically by the image resolver.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'public/images');
const WIDTHS = [640, 1280, 1920];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const sources = walk(dir).filter((f) => /\.(webp|avif|jpe?g|png)$/i.test(f) && !/-\d+\.webp$/.test(f));
let made = 0;
for (const file of sources) {
  const stem = file.replace(/\.[^.]+$/, '');
  const meta = await sharp(file).metadata();
  for (const w of WIDTHS) {
    const out = `${stem}-${w}.webp`;
    if (fs.existsSync(out) || (meta.width && meta.width < w * 0.9)) continue;
    await sharp(file).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    made++;
  }
}
console.log(`Processed ${sources.length} source images, wrote ${made} variants.`);

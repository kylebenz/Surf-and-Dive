// npm run images:report
// Audits every image slot: filled or empty, alt text status, original size and what is delivered.
import fs from 'node:fs';
import path from 'node:path';
import { processImages } from './media/images.mjs';

const { manifest, warnings } = await processImages({ log: () => {} });
const root = process.cwd();
const SLOTS = ['hero', 'surf', 'dive', 'freedive', 'marine-life', 'landscape', 'experience', 'culture', 'luxury', 'signature'];
const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
const kb = (n) => Math.round(n / 1024) + ' KB';
const describe = (e) => {
  const avif = e.variants.avif ?? [];
  const phone = avif.find((v) => v.w >= 1080) ?? avif[avif.length - 1];
  const alt = e.altIsSuggestion ? 'ALT NEEDS WRITING' : 'alt ok';
  return `${e.width}×${e.height}, original ${mb(e.originalBytes)} → phone ${phone ? kb(phone.bytes) : '?'} AVIF · ${alt}`;
};

let total = 0, filled = 0, needAlt = 0;
console.log('\nDESTINATION IMAGE SLOTS (media/destinations/<slug>/<slot>.jpg)\n');
const destDir = path.join(root, 'src/data/destinations');
for (const f of fs.readdirSync(destDir).filter((x) => x.endsWith('.ts') && !x.startsWith('_') && x !== 'index.ts').sort()) {
  const src = fs.readFileSync(path.join(destDir, f), 'utf8');
  const slug = /slug: '([^']+)'/.exec(src)?.[1];
  console.log(`■ ${slug}`);
  for (const slot of SLOTS) {
    total++;
    const e = manifest[`destinations/${slug}/${slot}`];
    if (e) { filled++; if (e.altIsSuggestion) needAlt++; }
    console.log(`   ${e ? 'FILLED' : 'empty '}  ${slot.padEnd(12)} ${e ? describe(e) : ''}`);
  }
}
console.log(`\nDestinations: ${filled}/${total} slots filled.`);

const other = Object.values(manifest).filter((e) => !e.key.startsWith('destinations/'));
if (other.length) {
  console.log('\nOTHER IMAGES\n');
  for (const e of other) { if (e.altIsSuggestion) needAlt++; console.log(`   ${e.key.padEnd(50)} ${describe(e)}`); }
}
if (needAlt) console.log(`\n${needAlt} image(s) still use the suggested alt text. Edit "alt" in the image's .json file (media/...) to describe the actual photograph.`);
for (const w of warnings) console.log(`warning: ${w}`);
console.log('');

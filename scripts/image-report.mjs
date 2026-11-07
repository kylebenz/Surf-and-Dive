// Audits all destination and guide image slots: filled / empty / missing alt.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pub = path.join(root, 'public');
const EXT = ['.avif', '.webp', '.jpg', '.jpeg', '.png'];
const SLOTS = [
  ['hero', 'hero'], ['surf', 'surf'], ['dive', 'dive'], ['freedive', 'freedive'], ['marine-life', 'marine-life'],
  ['landscape', 'landscape'], ['human-experience', 'experience'], ['culture', 'culture'], ['luxury-stay', 'luxury'], ['signature', 'signature'],
];
const find = (dir, base) => EXT.map((e) => path.join(dir, base + e)).find((p) => fs.existsSync(p));

let total = 0, filled = 0, missingAlt = 0;
const destDir = path.join(root, 'src/data/destinations');
const files = fs.readdirSync(destDir).filter((f) => f.endsWith('.ts') && !f.startsWith('_') && f !== 'index.ts');
console.log('\nDESTINATION IMAGE SLOTS\n');
for (const f of files.sort()) {
  const src = fs.readFileSync(path.join(destDir, f), 'utf8');
  const slug = /slug: '([^']+)'/.exec(src)?.[1];
  const block = src.slice(src.indexOf('destinationImages('));
  console.log(`■ ${slug}`);
  for (const [type, file] of SLOTS) {
    total++;
    const brief = new RegExp(`['"]?${type}['"]?: '([^']*)'`).exec(block)?.[1] ?? '';
    const altSet = new RegExp(`${type.includes('-') ? `'${type}'` : type}: \\{[^}]*alt: '[^']+`).test(block);
    const hit = find(path.join(pub, 'images/destinations', slug), file);
    if (hit) { filled++; if (!altSet) missingAlt++; }
    const state = hit ? (altSet ? 'FILLED     ' : 'FILLED (!) ') : 'empty      ';
    console.log(`   ${state} ${file.padEnd(12)} ${hit ? path.relative(pub, hit) : ''}${hit && !altSet ? '  ← add alt text' : ''}${!hit ? `  brief: ${brief}` : ''}`);
  }
}
console.log(`\nDestinations: ${filled}/${total} slots filled, ${missingAlt} filled without alt text.`);

const gDir = path.join(root, 'src/content/guides');
let gTotal = 0, gFilled = 0;
for (const f of fs.readdirSync(gDir).filter((x) => x.endsWith('.md'))) {
  const slug = f.replace(/\.md$/, '');
  const fm = fs.readFileSync(path.join(gDir, f), 'utf8').split('---')[1];
  const n = (fm.match(/- \{ label:/g) || []).length;
  for (let i = 1; i <= n; i++) { gTotal++; if (find(path.join(pub, 'images/blog', slug), `image-${i}`)) gFilled++; }
}
console.log(`Guides: ${gFilled}/${gTotal} image slots filled.\n`);

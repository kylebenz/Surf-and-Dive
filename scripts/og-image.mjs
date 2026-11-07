// Generates the default Open Graph card (typographic, no photography).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
const W = 1200, H = 630;
let paths = '';
for (let i = 0; i < 16; i++) {
  const y0 = 40 + i * 38;
  let d = '';
  for (let s = 0; s <= 60; s++) {
    const x = (W / 60) * s;
    const y = y0 + Math.sin(s / 6 + i * 0.35) * (10 + i * 0.8);
    d += `${s ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  paths += `<path d="${d}" stroke="#5fb7b4" stroke-opacity="${(0.12 + (i % 5) * 0.05).toFixed(2)}" fill="none" stroke-width="1.2"/>`;
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
<rect width="100%" height="100%" fill="#082B36"/>${paths}
<text x="80" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="74" fill="#F3F7F5">Luxury Ocean Holidays,</text>
<text x="80" y="385" font-family="Georgia, 'Times New Roman', serif" font-size="74" fill="#F3F7F5">Curated Around the Water</text>
<text x="80" y="170" font-family="Helvetica, Arial, sans-serif" font-size="24" letter-spacing="6" fill="#D8F0EA">SURF AND DIVE</text>
<text x="80" y="520" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#A9C3C4">Surf · Dive · Freedive, for European travellers</text>
</svg>`;
mkdirSync('public/og', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/og/surf-and-dive-default.png');
console.log('Wrote public/og/surf-and-dive-default.png');

// Adds Google image sitemap entries (<image:image>) to dist/sitemap.xml after every build.
//
// For each page in the sitemap it lists the photographs actually rendered on that page (images
// from the media pipeline, /_media/), using the largest JPEG/PNG version: the highest-quality
// file Google can index. Runs from src/integrations/media.mjs, so new photos and new pages are
// covered automatically. https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
import fs from 'node:fs';
import path from 'node:path';

const NS = 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';

/** Largest JPEG/PNG candidate from an <img> tag's srcset (or its src). */
function bestFile(tag) {
  const srcset = /\ssrcset="([^"]*)"/.exec(tag)?.[1] ?? '';
  const src = /\ssrc="([^"]*)"/.exec(tag)?.[1] ?? '';
  const list = srcset
    .split(',')
    .map((s) => s.trim().split(/\s+/))
    .filter(([u]) => u)
    .map(([u, w]) => ({ u, w: parseInt(w, 10) || 0 }))
    .sort((a, b) => b.w - a.w);
  return (list[0]?.u ?? src) || null;
}

export function addImagesToSitemap(dist) {
  const file = path.join(dist, 'sitemap.xml');
  if (!fs.existsSync(file)) return 0;
  let xml = fs.readFileSync(file, 'utf8');
  if (!xml.includes(NS)) xml = xml.replace('<urlset ', `<urlset ${NS} `);
  let total = 0;
  xml = xml.replace(/<url><loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g, (whole, loc, rest) => {
    const url = new URL(loc);
    const page = path.join(dist, decodeURIComponent(url.pathname), 'index.html');
    if (!fs.existsSync(page)) return whole;
    // Inert <template> markup (lazy ads/embeds) is not part of the page.
    const html = fs.readFileSync(page, 'utf8').replace(/<template[\s\S]*?<\/template>/g, '');
    const seen = new Set();
    for (const m of html.matchAll(/<img\b[^>]*>/g)) {
      const best = bestFile(m[0]);
      if (!best || !best.startsWith('/_media/')) continue;
      seen.add(new URL(best, url.origin).toString());
      if (seen.size >= 1000) break; // Google's per-URL limit
    }
    if (!seen.size) return whole;
    total += seen.size;
    const images = [...seen].map((u) => `<image:image><image:loc>${u}</image:loc></image:image>`).join('');
    return `<url><loc>${loc}</loc>${rest}${images}</url>`;
  });
  fs.writeFileSync(file, xml);
  return total;
}

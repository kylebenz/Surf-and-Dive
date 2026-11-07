// Post-build QA over /dist: titles, descriptions, H1s, canonicals, internal links,
// image alt attributes and brand consistency. Run after `npm run build`.
import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
// Search-engine verification files (e.g. google*.html) are plain text, not pages.
const pages = walk(dist).filter((f) => f.endsWith('.html') && !/^google[0-9a-f]+\.html$/.test(path.basename(f)));
const problems = [];
const titles = new Map(), descs = new Map();
const exists = (href) => {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return true;
  const p = path.join(dist, clean);
  return fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html')));
};
let links = 0, redirects = 0;
for (const file of pages) {
  const rel = '/' + path.relative(dist, file).replace(/index\.html$/, '');
  const html = fs.readFileSync(file, 'utf8');
  const refresh = /<meta http-equiv="refresh" content="0;url=([^"]+)"/.exec(html);
  if (refresh) {
    redirects++;
    if (!exists(refresh[1])) problems.push(`${rel}: redirect target missing ${refresh[1]}`);
    continue;
  }
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1];
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1];
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (!title) problems.push(`${rel}: missing <title>`);
  if (!desc) problems.push(`${rel}: missing meta description`);
  if (desc) {
    // Bing Webmaster Tools flags descriptions outside 25-160 characters as an error.
    const len = desc.replace(/&(#\d+|#x[0-9a-f]+|\w+);/gi, '_').length;
    if (len < 25 || len > 160) problems.push(`${rel}: meta description is ${len} characters (keep 25-160)`);
  }
  if (h1s !== 1) problems.push(`${rel}: ${h1s} <h1> elements`);
  if (!rel.startsWith('/404') && !/<link rel="canonical"/.test(html)) problems.push(`${rel}: missing canonical`);
  if (title) titles.set(title, [...(titles.get(title) || []), rel]);
  if (desc) descs.set(desc, [...(descs.get(desc) || []), rel]);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt(=|[\s>])/.test(m[0])) problems.push(`${rel}: <img> without alt`);
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    links++;
    if (!exists(m[1])) problems.push(`${rel}: broken internal link ${m[1]}`);
  }
  if (new RegExp(["ocean", "luxe"].join("\\s*"), "i").test(html)) problems.push(`${rel}: contains the retired working title`);
}
for (const [t, ps] of titles) if (ps.length > 1) problems.push(`Duplicate title "${t}": ${ps.join(', ')}`);
for (const [d, ps] of descs) if (ps.length > 1) problems.push(`Duplicate description on: ${ps.join(', ')}`);
console.log(`Checked ${pages.length - redirects} pages, ${redirects} redirects and ${links} internal links.`);
if (problems.length) { console.log(problems.join('\n')); process.exitCode = 1; } else console.log('No problems found.');

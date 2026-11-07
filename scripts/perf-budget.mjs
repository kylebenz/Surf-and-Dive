// Performance budget for every built page. Runs automatically after `astro build`
// (src/integrations/media.mjs) and standalone with `npm run perf:budget`.
//
// Sizes are measured as delivered: Brotli-compressed, as the CDN serves them.
// Errors fail CI (PERF_BUDGET_STRICT=1 during the build, or the CLI exit code);
// warnings are printed so a regression is never silent.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

export const BUDGET = {
  /** HTML document incl. inlined critical CSS, KB brotli. */
  htmlKB: 60,
  /** All CSS needed for first render (inline + linked), KB brotli. */
  cssKB: 20,
  /** First-party JavaScript loaded on page load (inline + bundles), KB brotli. */
  jsKB: 20,
  /** Fonts preloaded in <head>. */
  fontPreloads: 2,
  /** Images loaded immediately (not lazy), as a ~1080px-wide AVIF a phone would fetch, KB. */
  initialImageKB: 250,
  /** All images on the page at a ~768px AVIF, KB (warning only: lazy images load on scroll). */
  totalImageKB: 2000,
  /** Requests needed before the page is usable (document, CSS, JS, preloads, eager images). */
  initialRequests: 15,
  /** Images allowed to have fetchpriority="high". */
  priorityImages: 1,
};

// Quality 9 is within a few percent of maximum compression and much faster to measure.
const br = (buf) => zlib.brotliCompressSync(buf, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 9 } }).length;
const assetSize = new Map();
const brFile = (f) => { if (!assetSize.has(f)) assetSize.set(f, br(fs.readFileSync(f))); return assetSize.get(f); };
const kb = (n) => Math.round((n / 1024) * 10) / 10;
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const attr = (tag, name) => new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i').exec(tag)?.slice(1).find((x) => x !== undefined);
const isExternal = (u) => /^(https?:)?\/\//i.test(u);

/** Picks the srcset candidate a browser would choose for `px` device pixels, as an AVIF where available. */
function candidateBytes(dist, srcset, px) {
  const list = (srcset || '').split(',').map((s) => s.trim().split(/\s+/)).filter((x) => x[0]).map(([u, w]) => ({ u, w: parseInt(w, 10) || 0 })).sort((a, b) => a.w - b.w);
  if (!list.length) return 0;
  const pick = list.find((c) => c.w >= px) ?? list[list.length - 1];
  for (const u of [pick.u.replace(/\.(jpg|png|webp)$/, '.avif'), pick.u]) {
    const f = path.join(dist, decodeURIComponent(u.split('?')[0]));
    if (!isExternal(u) && fs.existsSync(f)) return fs.statSync(f).size;
  }
  return 0;
}

export function auditPage(dist, file) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(dist, file).split(path.sep).join('/').replace(/index\.html$/, '');
  const errors = [], warnings = [];
  const m = { page: rel };
  const fileBr = (u) => {
    const f = path.join(dist, decodeURIComponent(u.split('?')[0]));
    return fs.existsSync(f) ? brFile(f) : 0;
  };

  m.htmlKB = kb(br(Buffer.from(html)));

  // CSS
  const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((x) => x[1]).join('');
  let cssBytes = css ? br(Buffer.from(css)) : 0;
  const sheets = [...html.matchAll(/<link\b[^>]*rel=["']?stylesheet[^>]*>/g)].map((x) => attr(x[0], 'href'));
  let requests = 1;
  for (const h of sheets) {
    if (isExternal(h)) errors.push(`third-party stylesheet ${h} blocks rendering`);
    else { cssBytes += fileBr(h); requests++; }
  }
  m.cssKB = kb(cssBytes);

  // JavaScript (first party). Third-party scripts must be loaded after consent/interaction, never in HTML.
  let js = '', jsBytes = 0;
  for (const s of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    const type = attr(s[0], 'type') || '';
    if (/ld\+json|application\/json/.test(type)) continue;
    const src = attr(s[0], 'src');
    if (src) {
      if (isExternal(src)) errors.push(`third-party script in HTML: ${src} (load it after consent or on interaction)`);
      else { jsBytes += fileBr(src); requests++; }
    } else js += s[2];
  }
  m.jsKB = kb(jsBytes + (js.trim() ? br(Buffer.from(js)) : 0));
  if (/<iframe\b/i.test(html.replace(/<template[\s\S]*?<\/template>/g, ''))) errors.push('<iframe> in the initial HTML: use LazyEmbed or VideoEmbed so it loads on demand');

  // Preloads
  const preloads = [...html.matchAll(/<link\b[^>]*rel=["']?preload[^>]*>/g)].map((x) => x[0]);
  const fontPre = preloads.filter((p) => /as=["']?font/.test(p)).length;
  const imgPre = preloads.filter((p) => /as=["']?image/.test(p)).length;
  requests += preloads.length;
  if (fontPre > BUDGET.fontPreloads) errors.push(`${fontPre} font preloads (budget ${BUDGET.fontPreloads})`);
  if (imgPre > 1) errors.push(`${imgPre} image preloads: preload at most the one LCP image`);

  // Images
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((x) => x[0]);
  let initial = 0, total = 0, priority = 0;
  imgs.forEach((tag) => {
    const src = attr(tag, 'src') || '';
    const name = src.split('/').pop();
    if (!attr(tag, 'width') || !attr(tag, 'height')) errors.push(`<img> without width/height (layout shift): ${name}`);
    if (!src.startsWith('/_media/') && !src.startsWith('data:')) warnings.push(`image not from the media pipeline (unoptimised): ${src}`);
    const lazy = attr(tag, 'loading') === 'lazy';
    const high = attr(tag, 'fetchpriority') === 'high';
    if (high) priority++;
    if (high && lazy) errors.push(`priority image is lazy-loaded: ${name}`);
    const srcset = attr(tag, 'srcset') || src;
    total += candidateBytes(dist, srcset, 768);
    if (!lazy) { initial += candidateBytes(dist, srcset, 1080); requests++; }
  });
  m.images = imgs.length;
  m.initialImageKB = kb(initial);
  m.totalImageKB = kb(total);
  if (priority > BUDGET.priorityImages) errors.push(`${priority} images with fetchpriority=high (only the LCP image may have it)`);

  // Video
  for (const v of html.matchAll(/<video\b[^>]*>/g)) {
    if (attr(v[0], 'preload') !== 'none') errors.push('<video> must use preload="none" (load on demand)');
    if (/\sautoplay[\s>=]/.test(v[0])) errors.push('<video autoplay> in HTML downloads the video immediately; use the Video component');
  }

  // Duplicate tracking: GTM and a direct GA4 tag together count every page view twice.
  const gtm = /const gtmId = "([^"]+)"/.exec(html)?.[1];
  const ga4 = /const ga4Id = "([^"]+)"/.exec(html)?.[1];
  if (gtm && ga4) warnings.push(`both GTM (${gtm}) and a direct GA4 tag (${ga4}) are installed: page views are counted twice. Configure GA4 inside GTM and unset PUBLIC_GA4_ID.`);

  m.requests = requests;
  const over = (k, label) => { if (m[k] > BUDGET[k]) errors.push(`${label} ${m[k]} over budget ${BUDGET[k]}`); };
  over('htmlKB', 'HTML KB'); over('cssKB', 'CSS KB'); over('jsKB', 'JS KB'); over('initialImageKB', 'initial image KB');
  if (m.requests > BUDGET.initialRequests) errors.push(`${m.requests} initial requests over budget ${BUDGET.initialRequests}`);
  if (m.totalImageKB > BUDGET.totalImageKB) warnings.push(`total image weight ${m.totalImageKB} KB over ${BUDGET.totalImageKB} KB: consider a Gallery (thumbnails first) or fewer images`);
  return { m, errors, warnings };
}

/** Audits every page in dist. Returns true when no budget errors were found. */
export function runBudget({ dist, log = console.log, warn = console.warn } = {}) {
  const pages = walk(dist).filter((f) => f.endsWith('.html') && !/\bgoogle[0-9a-f]+\.html$/.test(f));
  const rows = [];
  let errorCount = 0, warnCount = 0;
  for (const f of pages) {
    const html = fs.readFileSync(f, 'utf8');
    if (/http-equiv="refresh"/.test(html)) continue;
    const { m, errors, warnings } = auditPage(dist, f);
    rows.push(m);
    for (const e of errors) { warn(`[budget] ${m.page}: ${e}`); errorCount++; }
    for (const w of warnings) { warn(`[budget] ${m.page}: warning: ${w}`); warnCount++; }
  }
  // Worst page per template, so new templates and heavy outliers stand out.
  const groups = {};
  for (const r of rows) {
    const g = r.page === '/' || r.page.endsWith('.html') ? r.page : '/' + r.page.split('/')[1] + (r.page.split('/').length > 3 ? '/*' : '/');
    const cur = (groups[g] ??= { template: g, pages: 0 });
    cur.pages++;
    for (const k of ['htmlKB', 'cssKB', 'jsKB', 'requests', 'initialImageKB', 'totalImageKB']) cur[k] = Math.max(cur[k] ?? 0, r[k]);
  }
  const cols = ['template', 'pages', 'htmlKB', 'cssKB', 'jsKB', 'requests', 'initialImageKB', 'totalImageKB'];
  const width = (c) => Math.max(c.length, ...Object.values(groups).map((g) => String(g[c]).length));
  log(`[budget] worst page per template (budget: HTML ${BUDGET.htmlKB} KB, CSS ${BUDGET.cssKB} KB, JS ${BUDGET.jsKB} KB, initial images ${BUDGET.initialImageKB} KB, ${BUDGET.initialRequests} requests)`);
  log('[budget] ' + cols.map((c) => c.padEnd(width(c))).join('  '));
  for (const g of Object.values(groups).sort((a, b) => a.template.localeCompare(b.template))) log('[budget] ' + cols.map((c) => String(g[c]).padEnd(width(c))).join('  '));
  log(`[budget] ${rows.length} pages checked: ${errorCount} error(s), ${warnCount} warning(s)`);
  return errorCount === 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const ok = runBudget({ dist: path.resolve(process.argv[2] || 'dist') });
  process.exit(ok ? 0 : 1);
}

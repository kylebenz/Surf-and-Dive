// IndexNow: tell Bing (and Yandex, Seznam, Naver...) the moment pages are added, changed or removed,
// instead of waiting for them to re-crawl. https://www.indexnow.org/
//
// Two parts, no dependencies (Node built-ins only):
//
// 1. writeManifest(dist): runs after every build (src/integrations/media.mjs). Writes
//    dist/indexnow-manifest.json with a fingerprint (hash) of every indexable page.
//
// 2. CLI, run by the "IndexNow" GitHub workflow on every push to the production branch:
//      node scripts/indexnow.mjs submit [--wait-for <commit>] [--previous file] [--out file] [--all] [--dry-run]
//    - finds the live origin (SITE_ORIGIN env, or whichever of the candidate domains answers)
//    - with --wait-for, waits until the live site serves the build of that commit (the manifest
//      records the commit; Vercel, Netlify and Cloudflare Pages all expose it to the build), so it
//      works whatever the host and whether or not the host reports deployments to GitHub
//    - checks the key file is live at https://<host>/<KEY>.txt
//    - compares the live manifest with the previous one and submits only new, changed and
//      removed URLs (or every page with --all; also on the first run)
//
// The key is public by design: it only proves the submitter controls the site.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const KEY = '518bec9702d805a3d53be5998658c92d';
export const MANIFEST = 'indexnow-manifest.json';
const CANDIDATES = ['https://surfanddive.com', 'https://www.surfanddive.com'];
const ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

/** Fingerprints every indexable page in dist (skips redirects, noindex pages and verification files). */
export function writeManifest(dist) {
  const pages = {};
  for (const f of walk(dist).filter((x) => x.endsWith('index.html'))) {
    const html = fs.readFileSync(f, 'utf8');
    if (/http-equiv="refresh"/.test(html) || /<meta name="robots" content="noindex/.test(html)) continue;
    const rel = '/' + path.relative(dist, f).split(path.sep).join('/').replace(/index\.html$/, '');
    pages[rel] = crypto.createHash('sha1').update(html).digest('hex').slice(0, 16);
  }
  const sorted = Object.fromEntries(Object.entries(pages).sort(([a], [b]) => a.localeCompare(b)));
  const env = process.env;
  const commit = env.VERCEL_GIT_COMMIT_SHA || env.COMMIT_REF || env.CF_PAGES_COMMIT_SHA || env.GITHUB_SHA || '';
  fs.writeFileSync(path.join(dist, MANIFEST), JSON.stringify({ version: 1, commit, builtAt: new Date().toISOString(), pages: sorted }));
  return Object.keys(sorted).length;
}

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };

async function get(url) {
  const res = await fetch(url, { redirect: 'follow', cache: 'no-store', headers: { 'user-agent': 'surf-and-dive-indexnow' } });
  return res;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fresh = (u) => `${u}${u.includes('?') ? '&' : '?'}t=${Date.now()}`;

/**
 * Waits until the live site serves the build of `sha`. If the host does not record the commit,
 * waits until the pages differ from the last submission (or a few minutes pass), then continues.
 */
async function waitForDeploy(origin, sha, previous, minutes) {
  const until = Date.now() + minutes * 60_000;
  const fallbackAt = Date.now() + Math.min(minutes, 8) * 60_000;
  for (let n = 0; ; n++) {
    let m = null;
    try { m = await (await get(fresh(`${origin}/${MANIFEST}`))).json(); } catch {}
    if (m?.commit && m.commit === sha) { console.log(`Live site is serving commit ${sha.slice(0, 7)}.`); return m; }
    if (m && !m.commit) {
      const changed = !previous || JSON.stringify(previous.pages) !== JSON.stringify(m.pages);
      if (changed || Date.now() > fallbackAt) { console.log('The host does not record the commit; continuing with the live pages.'); return m; }
    }
    if (Date.now() > until) throw new Error(`The live site did not serve commit ${sha.slice(0, 7)} within ${minutes} minutes (it serves ${m?.commit?.slice(0, 7) || 'an unknown build'}). Is the production deploy failing?`);
    if (n % 3 === 0) console.log(`Waiting for the deploy of ${sha.slice(0, 7)} to go live (currently ${m?.commit?.slice(0, 7) || 'unknown'})...`);
    await sleep(20_000);
  }
}

async function findOrigin() {
  const list = process.env.SITE_ORIGIN ? [process.env.SITE_ORIGIN.replace(/\/+$/, '')] : CANDIDATES;
  for (const c of list) {
    try {
      const res = await get(`${c}/`);
      if (res.ok) return new URL(res.url).origin; // after redirects: the origin that actually serves the site
    } catch {}
  }
  throw new Error(`None of ${list.join(', ')} answered. Set the SITE_ORIGIN repository variable to the live site, e.g. https://surfanddive.com`);
}

async function submit() {
  const all = args.includes('--all');
  const dry = args.includes('--dry-run');
  const prevFile = opt('--previous');
  const outFile = opt('--out');

  const origin = await findOrigin();
  const host = new URL(origin).host;
  console.log(`Live site: ${origin}`);

  let previous = null;
  try { previous = JSON.parse(fs.readFileSync(prevFile, 'utf8')); } catch {}
  const waitFor = opt('--wait-for');
  const current = waitFor ? await waitForDeploy(origin, waitFor, previous, Number(opt('--timeout') || 20)) : await (await get(fresh(`${origin}/${MANIFEST}`))).json();

  const keyRes = await get(`${origin}/${KEY}.txt`);
  const keyText = keyRes.ok ? (await keyRes.text()).trim() : '';
  if (keyText !== KEY) throw new Error(`Key file ${origin}/${KEY}.txt is not live yet (status ${keyRes.status}). Deploy the site first.`);


  // The site's canonical URLs come from SITE_URL. If they point at another host, search engines see
  // two addresses for every page: warn so it can be fixed in Vercel (Settings → Environment Variables).
  const home = await (await get(`${origin}/`)).text();
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(home)?.[1];
  if (canonical && new URL(canonical).host !== host) {
    console.warn(`::warning::Canonical URLs use ${new URL(canonical).host} but the site is served from ${host}. Set SITE_URL=${origin} in Vercel and redeploy.`);
  }

  let paths;
  if (all || !previous) {
    paths = Object.keys(current.pages);
    console.log(all ? 'Submitting every page (--all).' : 'No previous record found: submitting every page once.');
  } else {
    const changed = Object.keys(current.pages).filter((p) => previous.pages[p] !== current.pages[p]);
    const removed = Object.keys(previous.pages).filter((p) => !(p in current.pages));
    paths = [...changed, ...removed];
    console.log(`${changed.length} new or changed page(s), ${removed.length} removed page(s).`);
  }

  if (paths.length) {
    const urlList = paths.map((p) => origin + p);
    for (let i = 0; i < urlList.length; i += 10000) {
      const batch = urlList.slice(i, i + 10000);
      const body = { host, key: KEY, keyLocation: `${origin}/${KEY}.txt`, urlList: batch };
      if (dry) { console.log(`[dry run] would submit ${batch.length} URL(s):\n  ${batch.join('\n  ')}`); continue; }
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
      const meaning = { 200: 'accepted', 202: 'accepted (key validation pending)', 400: 'bad request', 403: 'key not valid for this host', 422: 'URLs do not belong to this host', 429: 'too many requests' }[res.status] ?? '';
      console.log(`IndexNow responded ${res.status} ${meaning} for ${batch.length} URL(s).`);
      if (res.status >= 300) throw new Error(`IndexNow submission failed: ${res.status} ${meaning} ${await res.text()}`);
      for (const u of batch) console.log(`  ${u}`);
    }
  } else {
    console.log('Nothing changed: no submission needed.');
  }

  if (outFile && !dry) {
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, JSON.stringify(current));
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  if (args[0] !== 'submit') {
    console.log('Usage: node scripts/indexnow.mjs submit [--wait-for <commit>] [--timeout <minutes>] [--previous file] [--out file] [--all] [--dry-run]');
    process.exit(1);
  }
  submit().catch((e) => { console.error(`::error::${e.message}`); process.exit(1); });
}

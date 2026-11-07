// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync } from 'node:fs';

// The canonical production origin. Set SITE_URL in the build environment
// (e.g. SITE_URL=https://www.example.com) before launch — every canonical URL,
// Open Graph URL, sitemap entry and structured-data @id is derived from it.
const SITE_URL = process.env.SITE_URL || 'https://www.surfanddive.com';

// The blog moved from /guides/ to /blog/. Every old address gets a redirect page
// (meta refresh + canonical) so links keep working on any static host. Hosts that
// read public/_redirects or vercel.json also send a permanent 301.
const blogSlugs = readdirSync(new URL('./src/content/guides/', import.meta.url))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''));
const redirects = {
  '/guides': { status: 301, destination: '/blog/' },
  ...Object.fromEntries(blogSlugs.map((s) => [`/guides/${s}`, { status: 301, destination: `/blog/${s}/` }])),
};

export default defineConfig({
  redirects,
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});

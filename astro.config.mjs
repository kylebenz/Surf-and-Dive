// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync } from 'node:fs';
import media from './src/integrations/media.mjs';

// The canonical production origin. Set SITE_URL in the build environment
// (e.g. SITE_URL=https://www.example.com) before launch — every canonical URL,
// Open Graph URL, sitemap entry and structured-data @id is derived from it.
const SITE_URL = process.env.SITE_URL || 'https://surfanddive.com';

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
  integrations: [media()],
  redirects,
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // All CSS is inlined: each page needs only ~5-10 KB (compressed), and inlining removes
    // the render-blocking stylesheet round trips (measured ~0.9 s on slow mobile).
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

// The canonical production origin. Set SITE_URL in the build environment
// (e.g. SITE_URL=https://www.example.com) before launch — every canonical URL,
// Open Graph URL, sitemap entry and structured-data @id is derived from it.
const SITE_URL = process.env.SITE_URL || 'https://www.surfanddive.com';

export default defineConfig({
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

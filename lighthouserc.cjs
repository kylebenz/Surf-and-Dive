// Lighthouse CI, mobile (the default: Moto G Power viewport, 4x CPU slowdown, slow 4G).
// Run: npm run build && npx @lhci/cli@0.15.1 autorun
// Desktop: npx @lhci/cli@0.15.1 autorun --config=lighthouserc.desktop.cjs
//
// One URL per page template. When a new template is added (itinerary, hotel, activity,
// gallery or video page, ...), add a representative URL here so it is protected too.
// INP needs real interactions, so it is measured in the field (web_vitals events via GTM);
// Total Blocking Time is its lab proxy here.
const urls = [
  '/', // homepage
  '/destinations/', // destination index
  '/destinations/fiji/', // destination page
  '/blog/', // blog index
  '/blog/maldives-vs-bali-luxury-surf-dive/', // blog article / travel guide
  '/compare/maldives-vs-bali/', // comparison
  '/surf/', // activity hub
  '/best-by-month/january/', // seasonal guide
  '/europe/germany/', // market page
  '/dev/media/', // gallery, video, embeds, affiliate box (built in CI with MEDIA_TEST_PAGE=1)
].map((p) => `http://localhost/${p.replace(/^\//, '')}`);

const assertions = {
  'categories:performance': ['error', { minScore: 0.9 }],
  'categories:accessibility': ['error', { minScore: 0.95 }],
  'categories:best-practices': ['error', { minScore: 0.95 }],
  'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
  'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
  'total-blocking-time': ['error', { maxNumericValue: 200 }],
  'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
  'server-response-time': ['warn', { maxNumericValue: 600 }],
  'total-byte-weight': ['warn', { maxNumericValue: 1600000 }],
  'unsized-images': 'error',
  'lcp-lazy-loaded': 'error',
};

module.exports = {
  urls,
  assertions,
  ci: {
    collect: { staticDistDir: './dist', url: urls, numberOfRuns: 3 },
    assert: {
      assertMatrix: [
        { matchingUrlPattern: '.*', assertions },
        // SEO is checked on public pages only (the test page is noindex on purpose).
        { matchingUrlPattern: '^(?!.*/dev/).*$', assertions: { 'categories:seo': ['error', { minScore: 0.95 }] } },
      ],
    },
    upload: { target: 'filesystem', outputDir: './.lighthouseci/mobile' },
  },
};

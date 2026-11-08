# Surf and Dive

**Luxury Ocean Holidays, Curated Around the Water.**

A premium editorial travel publication for European travellers who want exceptional surf,
diving and freediving, and an exceptional place to stay around it. Built with
[Astro](https://astro.build) as a fully static site: near-zero JavaScript, fast, accessible
and search-friendly.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
npm run qa         # post-build checks: titles, meta, H1s, canonicals, links, alt, brand
npm run media            # optimise new photos now + create their title/alt files
npm run media:video      # convert videos in media/videos/ (needs ffmpeg; CI does it on upload)
npm run images:report    # every image slot: filled, sizes, alt text still to write
npm run perf:budget      # performance budget for every page (also runs after each build)
npm run test:browsers    # loading/layout/media tests: iPhone, iPad, Android, Safari, Chrome, Firefox
npm run perf:lighthouse  # Lighthouse CI, mobile + desktop, against dist/
```

Set the production origin before building (used for canonicals, Open Graph, sitemap and
structured data):

```bash
SITE_URL=https://www.your-domain.com npm run build
```

Optionally set `PUBLIC_CONTACT_ENDPOINT` to any service that accepts JSON POSTs
(Formspree, Basin, a serverless function…). Without it, the contact form validates but
tells visitors the enquiry service is not yet connected. See `.env.example`.

Analytics: Google Tag Manager container `GTM-NWN96HQ3` is built in (override with
`PUBLIC_GTM_ID`, or set it empty to disable). `PUBLIC_GA4_ID` adds a direct GA4 tag;
leave it empty when GA4 is configured inside GTM, or page views are counted twice.

## What's inside (99 pages)

| Route | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/destinations/` (filterable finder) + 20 × `/destinations/[slug]/` | `src/data/destinations/*.ts` |
| `/surf/`, `/dive/`, `/freediving/`, `/luxury-ocean-holidays/` | `src/pages/*.astro` |
| `/best-by-month/` + 12 months | `src/data/seasonal.ts` |
| `/compare/` + 5 comparisons | `src/data/comparisons.ts` |
| `/blog/` + 32 blog posts | `src/content/guides/*.md` |
| `/europe/` + 12 markets | `src/data/countries.ts` |
| `/about/`, `/contact/`, `/editorial-standards/`, `/responsible-travel/`, `/ocean-safety/`, `/privacy/`, `/terms/`, `404` | `src/pages/` |
| `/sitemap.xml`, `/robots.txt` | `src/pages/*.ts` |
| `/google741b8f7b798a5098.html` (Search Console verification) | `public/` |

## SEO and analytics

- **robots.txt** (`src/pages/robots.txt.ts`): allows all crawlers and points to the sitemap.
- **Canonical URLs**: every page gets an absolute `<link rel="canonical">` built from
  `SITE_URL` with a trailing slash, matching the sitemap exactly. Old `/guides/` redirect
  pages are `noindex` with a canonical to the new `/blog/` address.
- **Structured data (JSON-LD)**: every page outputs `Organization` (with `/logo.png`),
  `WebSite` and a `WebPage` node (`AboutPage` / `ContactPage` where relevant) linked by
  `@id`, plus a `BreadcrumbList`. Blog posts add `BlogPosting`, comparisons add `Article`,
  destinations add `TouristDestination`, and hubs add `ItemList` and `FAQPage`. Helpers
  live in `src/utils/seo.ts`; the site-wide nodes are added in `src/layouts/BaseLayout.astro`.
- **Google Tag Manager / GA4** (`src/components/Analytics.astro`): GTM (and the optional
  direct GA4 tag) load only after the visitor clicks Accept on the cookie banner (Google
  Consent Mode v2, defaults denied). Add GA4 as a tag inside GTM. Decline is
  as easy as Accept, "Cookie settings" in the footer reopens the banner, and withdrawing
  consent removes the `_ga` cookies. Google signals and ad personalisation are off. The
  privacy policy describes analytics automatically whenever GTM or GA4 is enabled.

## IndexNow (Bing and other search engines)

Bing, Yandex, Seznam and Naver are told about new, changed and removed pages within minutes of
each production deploy, instead of waiting to re-crawl (Google does not use IndexNow; it reads the
sitemap). How it works:

- The key file `public/6d0c85f42fdd4302affe6d1e93637a5f.txt` proves ownership (keys are public by design).
- Every build writes `/indexnow-manifest.json`: a fingerprint of each indexable page (the same 98
  pages as the sitemap; redirects, noindex and test pages are left out).
- The **IndexNow** GitHub workflow runs on every push to the production branch. It finds the live
  address (`https://surfanddive.com` or `https://www.surfanddive.com`, or the `SITE_ORIGIN`
  repository variable), waits until the live site serves that commit (each build records its
  commit in the manifest; up to 20 minutes), checks the key file, compares fingerprints with the
  last run and submits only what changed. The first run submits every page once. It works with
  any host, whether or not the host reports deployments to GitHub.
- To resubmit everything: Actions → IndexNow → Run workflow → tick "all".
- It warns in the run log if the canonical URLs (from `SITE_URL`) use a different host than the live
  site, e.g. www vs non-www. Fix that by setting `SITE_URL` in Vercel to the live address.
- Results appear in Bing Webmaster Tools → IndexNow.

## Google Search Console

Ownership is verified two ways, so either method works in Search Console:

- **HTML file**: `public/google741b8f7b798a5098.html`, served at `/google741b8f7b798a5098.html`.
- **Meta tag**: `<meta name="google-site-verification">` in `src/layouts/BaseLayout.astro`.

Keep both in place after verification; removing them un-verifies the property.

The sitemap at `/sitemap.xml` is generated at build time and lists every indexable page
(home, hubs, destinations, months, comparisons, blog posts, Europe markets, info pages).
New destinations, posts or comparisons are added automatically. After verifying, submit
`https://<your-domain>/sitemap.xml` under **Sitemaps**. Its URLs use `SITE_URL`, which
must match the verified property exactly (including `www` or not).

## Editing content

Content lives in data, not components:

- **Destinations**, one file per destination in `src/data/destinations/`. Scores, spots,
  seasons, itineraries, FAQs, SEO, related content and the ten image slots are all there.
- **Blog posts**: Markdown with front matter in `src/content/guides/`. The filename is the URL slug (`/blog/<filename>/`).
  Front matter holds SEO title, meta description, keywords, related destinations/posts,
  the image guide, FAQs and source notes (schema in `src/content.config.ts`).
- **Months**: `src/data/seasonal.ts` (the seasonal matrix from the master spec).
- **Comparisons**: `src/data/comparisons.ts` (twelve criteria per pair; no universal winners).
- **European markets**: `src/data/countries.ts`.
- **Site-wide**: `src/config/site.ts` (brand, navigation, locales, review date).

## Redirects

The blog moved from `/guides/` to `/blog/`. Every old address is redirected:

- Astro generates a redirect page at each `/guides/…` URL (configured in `astro.config.mjs`),
  so links keep working on any static host.
- `public/_redirects` (Netlify, Cloudflare Pages) and `vercel.json` (Vercel) send a permanent
  301 on hosts that support them. For other hosts, add an equivalent rule:
  `/guides/*` → `/blog/:splat` (301).

## Photography and video

All 200 destination image slots (20 × 10) and every guide image slot start **empty** and render
as intentional, labelled placeholders, never stock or AI imagery. Upload full-size originals to
`media/` and they are optimised and placed automatically. See `media/README.md` (author guide).

## Performance (Core Web Vitals)

Targets, mobile first: **LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1**. They are engineering targets
checked continuously, not guarantees: field results depend on visitors' devices and networks.

**Media pipeline** (`scripts/media/images.mjs`, run by `src/integrations/media.mjs` before every
build and live in `npm run dev`). Every original in `media/` becomes AVIF + WebP + JPEG/PNG at
480/768/1200/1600/2000 px (never upscaled), EXIF-rotated, metadata stripped, sRGB, content-hashed
descriptive file names in `/_media/`, with width, height, aspect ratio and dominant colour in a
manifest. Encodes are cached by content hash (`node_modules/.cache/surf-and-dive-media`), so only
new photos cost build time (~2 s each). Videos: `scripts/media/videos.mjs` → 480/720/1080p
MP4 + WebM, ≤ 30 fps, fast-start, poster frame through the image pipeline.

**Delivery rules built into the components**

- `Picture`: `<picture>` with `srcset`/`sizes`, intrinsic `width`/`height` (no CLS), dominant
  colour while loading. `priority` (one per page, enforced) = eager + `fetchpriority="high"` for
  the LCP image; everything else lazy. No image preload: the hero `<img>` is early in the HTML,
  so the preload scanner finds it without one.
- Video, YouTube/Vimeo, maps, widgets and galleries load nothing heavy until needed (see
  `media/README.md`). Background video starts after page load, only in view, never with
  reduced motion or Save-Data. Affiliate links are plain links (`rel="sponsored"`).
- All CSS is inlined (~5–10 KB per page, no render-blocking requests); the two above-the-fold
  fonts are preloaded, the rest load on demand with `font-display: swap`.
- GTM loads only after consent and, for returning visitors, after page load when the main
  thread is idle. Real-user LCP/INP/CLS/FCP/TTFB are pushed to the dataLayer as `web_vitals`
  events (consent only). In GTM: a Custom Event trigger `web_vitals` and a GA4 event tag with
  parameters `metric_name`, `metric_value`, `metric_rating`, `metric_id`.
- Caching (`vercel.json`): hashed `/_astro/`, `/_media/`, `/videos/` are immutable for a year;
  HTML revalidates on every deploy. Vercel serves everything from its CDN with Brotli.

**Regression protection**

- After every build the budget (`scripts/perf-budget.mjs`) checks each page: HTML ≤ 60 KB, CSS ≤
  20 KB, JS ≤ 20 KB (compressed), ≤ 250 KB of images before scroll, ≤ 15 initial requests, every
  `<img>` sized, ≤ 1 high-priority image, no third-party scripts/iframes/stylesheets in HTML,
  videos `preload="none"`, no duplicate GA4. Warnings locally; failures in CI.
- GitHub **Performance** workflow (every pull request): strict budget, Lighthouse CI mobile and
  desktop (median of 3 runs; LCP ≤ 2.5 s, CLS ≤ 0.1, TBT ≤ 200 ms, performance ≥ 90) on one page
  per template, and Playwright tests on iPhone/iPad Safari (WebKit), Android Chrome, desktop
  Safari, Chrome and Firefox. CI builds a hidden `/dev/media/` page (`MEDIA_TEST_PAGE=1`) with
  synthetic fixtures so galleries, video, embeds and affiliate boxes are measured too.
- New page template (itinerary, hotel, activity, ...)? Add one URL to `lighthouserc.cjs`.

## Languages

English launches first. `/de/`, `/fr/`, `/es/`, `/it/` are reserved in `src/config/site.ts`
(`LOCALES`). hreflang is only emitted for enabled locales: enable one only after native-language
editorial review.

## Design system

Tokens in `src/styles/global.css`: Deep Ocean `#082B36`, Ocean Teal `#087F8C`, Emerald `#10A878`,
Seafoam `#D8F0EA`, Sand `#F4EFE6`, Shell `#FAFAF7`, Navy `#102A43`, Slate `#62727A`, Coral `#E8896B`
(used sparingly). Cormorant Garamond for display, Inter for text, both self-hosted.
Motion is subtle, progressive (content is visible without JS) and disabled under
`prefers-reduced-motion`.

## Before launch

- [ ] Set `SITE_URL` to the real domain.
- [ ] Commission or license photography; upload to `media/` and write alt text, captions and credits.
- [ ] Connect `PUBLIC_CONTACT_ENDPOINT`.
- [ ] Have privacy and terms reviewed and completed with the operator's legal details.
- [ ] Re-verify seasonal, access and regulatory details (see guide source notes).
- [ ] Verify the domain in Search Console and submit `/sitemap.xml`.
- [ ] In GTM, add a Google tag with the GA4 Measurement ID (trigger: Initialization - All Pages) and publish.
- [ ] In GTM, add the `web_vitals` event (see Performance) and watch field LCP/INP/CLS in GA4 and Search Console's Core Web Vitals report.
- [ ] Final human editorial review.

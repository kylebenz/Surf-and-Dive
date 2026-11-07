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
npm run images:report    # status of all 200 destination + 160 guide image slots
npm run images:optimize  # responsive WebP variants for supplied photography
```

Set the production origin before building (used for canonicals, Open Graph, sitemap and
structured data):

```bash
SITE_URL=https://www.your-domain.com npm run build
```

Optionally set `PUBLIC_CONTACT_ENDPOINT` to any service that accepts JSON POSTs
(Formspree, Basin, a serverless function…). Without it, the contact form validates but
tells visitors the enquiry service is not yet connected. See `.env.example`.

Analytics: Google Tag Manager container `GTM-PN3PMB7H` is built in (override with
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

## Photography

All 200 destination image slots (20 × 10) and every guide image slot start **empty** and render
as intentional, labelled placeholders, never stock or AI imagery. Drop correctly named files
into `public/images/…` and they appear automatically. See `public/images/README.md`.

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
- [ ] Commission or license photography; add alt text, captions and credits.
- [ ] Connect `PUBLIC_CONTACT_ENDPOINT`.
- [ ] Have privacy and terms reviewed and completed with the operator's legal details.
- [ ] Re-verify seasonal, access and regulatory details (see guide source notes).
- [ ] Verify the domain in Search Console and submit `/sitemap.xml`.
- [ ] In GTM, add a Google tag with the GA4 Measurement ID (trigger: Initialization - All Pages) and publish.
- [ ] Final human editorial review.

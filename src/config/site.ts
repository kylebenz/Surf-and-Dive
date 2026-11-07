export const SITE = {
  name: 'Surf and Dive',
  tagline: 'Luxury Ocean Holidays, Curated Around the Water',
  description:
    "Discover the world's most compelling ocean escapes for surfing, diving and freediving, curated for travellers who want extraordinary water and exceptional places to stay.",
  footerLine: 'Luxury ocean travel for travellers who care about the water.',
  locale: 'en_GB',
  lang: 'en',
  editor: 'Surf and Dive Editorial Team',
  /** Date the editorial library was last reviewed as a whole. */
  lastReviewed: '2026-11-06',
  published: '2026-11-06',
  ogImage: '/og/surf-and-dive-default.png',
  /** Square raster logo for structured data (Google prefers PNG over SVG). */
  logo: '/logo.png',
} as const;

/**
 * Google Analytics 4. Set PUBLIC_GA4_ID (e.g. G-XXXXXXXXXX) in the build
 * environment. When empty, no analytics code or cookie banner is output.
 * GA only loads after the visitor accepts analytics cookies.
 */
export const ANALYTICS = {
  ga4Id: ((import.meta.env.PUBLIC_GA4_ID as string | undefined) ?? '').trim(),
} as const;

export const NAV = [
  { label: 'Destinations', href: '/destinations/' },
  { label: 'Surf', href: '/surf/' },
  { label: 'Dive', href: '/dive/' },
  { label: 'Freedive', href: '/freediving/' },
  { label: 'Luxury', href: '/luxury-ocean-holidays/' },
  { label: 'Best by Month', href: '/best-by-month/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Compare', href: '/compare/' },
] as const;

/**
 * Locale architecture. English launches first. The other locales are reserved
 * routes (/de/, /fr/, /es/, /it/) that must only be enabled once native-language
 * editorial review is complete: set `enabled: true` and add the localised
 * pages under src/pages/<code>/. hreflang tags are only emitted for enabled locales.
 */
export const LOCALES = [
  { code: 'en', hreflang: 'en', prefix: '', label: 'English', enabled: true },
  { code: 'de', hreflang: 'de', prefix: '/de', label: 'Deutsch', enabled: false },
  { code: 'fr', hreflang: 'fr', prefix: '/fr', label: 'Français', enabled: false },
  { code: 'es', hreflang: 'es', prefix: '/es', label: 'Español', enabled: false },
  { code: 'it', hreflang: 'it', prefix: '/it', label: 'Italiano', enabled: false },
] as const;

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
 * Analytics. Both load only after the visitor accepts analytics cookies.
 *
 * - gtmId: Google Tag Manager container. Configure GA4 and any other tags
 *   inside GTM. Override with PUBLIC_GTM_ID; set it to an empty value to disable.
 * - ga4Id: optional direct GA4 tag (PUBLIC_GA4_ID). Leave empty when GA4 is
 *   set up inside GTM, or every page view is counted twice.
 *
 * When both are empty, no analytics code or cookie banner is output.
 */
const env = (v: string | undefined, fallback = '') => (v ?? fallback).trim();
export const ANALYTICS = {
  gtmId: env(import.meta.env.PUBLIC_GTM_ID as string | undefined, 'GTM-PN3PMB7H'),
  ga4Id: env(import.meta.env.PUBLIC_GA4_ID as string | undefined),
} as const;
export const ANALYTICS_ENABLED = Boolean(ANALYTICS.gtmId || ANALYTICS.ga4Id);

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

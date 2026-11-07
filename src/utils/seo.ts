import { SITE } from '../config/site';

export const absoluteUrl = (pathname: string, site: URL | string) =>
  new URL(pathname, site).toString();

/** Appends the brand only when it keeps the title a sensible length. */
export function pageTitle(title: string): string {
  if (title.includes(SITE.name)) return title;
  const withBrand = `${title} | ${SITE.name}`;
  return withBrand.length <= 65 ? withBrand : title;
}

export type Crumb = { label: string; href: string };

export function breadcrumbLd(crumbs: Crumb[], site: URL | string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href, site),
    })),
  };
}

export function faqLd(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function organizationLd(site: URL | string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': absoluteUrl('/#organization', site),
    name: SITE.name,
    url: absoluteUrl('/', site),
    logo: absoluteUrl('/favicon.svg', site),
    description: SITE.description,
  };
}

export function websiteLd(site: URL | string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website', site),
    name: SITE.name,
    url: absoluteUrl('/', site),
    inLanguage: 'en',
    publisher: { '@id': absoluteUrl('/#organization', site) },
  };
}

export function itemListLd(items: { name: string; href: string }[], site: URL | string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: absoluteUrl(it.href, site),
    })),
  };
}

export const formatDate = (d: Date | string) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export const readingTime = (text: string) => Math.max(2, Math.round(text.split(/\s+/).length / 220));

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

export function breadcrumbLd(crumbs: Crumb[], site: URL | string, id?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    ...(id ? { '@id': id } : {}),
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
    logo: {
      '@type': 'ImageObject',
      '@id': absoluteUrl('/#logo', site),
      url: absoluteUrl(SITE.logo, site),
      width: 512,
      height: 512,
      caption: SITE.name,
    },
    image: { '@id': absoluteUrl('/#logo', site) },
    description: SITE.description,
  };
}

/** Reference to the site-wide Organization node, for publisher/author fields. */
export const organizationRef = (site: URL | string) => ({ '@id': absoluteUrl('/#organization', site) });

/** WebPage node for every indexable page; ties the page to the WebSite and its breadcrumb. */
export function webPageLd(opts: {
  site: URL | string;
  url: string;
  name: string;
  description: string;
  image: string;
  type?: string;
  breadcrumbId?: string;
  published?: Date;
  modified?: Date;
}) {
  const { site, url, name, description, image, type = 'WebPage', breadcrumbId, published, modified } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-GB',
    isPartOf: { '@id': absoluteUrl('/#website', site) },
    publisher: organizationRef(site),
    primaryImageOfPage: { '@type': 'ImageObject', url: image },
    ...(breadcrumbId ? { breadcrumb: { '@id': breadcrumbId } } : {}),
    ...(published ? { datePublished: published.toISOString() } : {}),
    ...(modified ? { dateModified: modified.toISOString() } : {}),
  };
}

/** Article node (blog posts, comparison pages). */
export function articleLd(opts: {
  site: URL | string;
  url: string;
  type?: 'Article' | 'BlogPosting';
  headline: string;
  description: string;
  image: string;
  published: Date;
  modified: Date;
  section?: string;
  keywords?: string[];
  author?: string;
}) {
  const { site, url, type = 'Article', headline, description, image, published, modified, section, keywords, author = SITE.editor } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#article`,
    headline: headline.length > 110 ? `${headline.slice(0, 107)}...` : headline,
    description,
    image: [image],
    datePublished: published.toISOString(),
    dateModified: modified.toISOString(),
    inLanguage: 'en-GB',
    mainEntityOfPage: { '@id': `${url}#webpage` },
    isPartOf: { '@id': absoluteUrl('/#website', site) },
    author: { '@type': 'Organization', name: author, url: absoluteUrl('/about/', site) },
    publisher: organizationRef(site),
    ...(section ? { articleSection: section } : {}),
    ...(keywords?.length ? { keywords: keywords.join(', ') } : {}),
  };
}

export function websiteLd(site: URL | string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website', site),
    name: SITE.name,
    url: absoluteUrl('/', site),
    inLanguage: 'en-GB',
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

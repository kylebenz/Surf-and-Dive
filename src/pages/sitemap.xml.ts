import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { destinations } from '../data/destinations';
import { seasons } from '../data/seasonal';
import { comparisons } from '../data/comparisons';
import { markets } from '../data/countries';
import { SITE } from '../config/site';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://surfanddive.com');
  const guides = await getCollection('guides');
  const lastmod = SITE.lastReviewed;
  const entries: { path: string; lastmod: string; priority: string; changefreq: string }[] = [
    { path: '/', lastmod, priority: '1.0', changefreq: 'weekly' },
    ...['/destinations/', '/surf/', '/dive/', '/freediving/', '/luxury-ocean-holidays/', '/best-by-month/', '/blog/', '/compare/', '/europe/']
      .map((path) => ({ path, lastmod, priority: '0.9', changefreq: 'weekly' })),
    ...destinations.map((d) => ({ path: `/destinations/${d.slug}/`, lastmod, priority: '0.8', changefreq: 'monthly' })),
    ...seasons.map((s) => ({ path: `/best-by-month/${s.month}/`, lastmod, priority: '0.7', changefreq: 'monthly' })),
    ...comparisons.map((c) => ({ path: `/compare/${c.slug}/`, lastmod, priority: '0.7', changefreq: 'monthly' })),
    ...guides.map((g) => ({ path: `/blog/${g.id}/`, lastmod: g.data.updatedDate.toISOString().slice(0, 10), priority: '0.7', changefreq: 'monthly' })),
    ...markets.map((m) => ({ path: `/europe/${m.slug}/`, lastmod, priority: '0.6', changefreq: 'monthly' })),
    ...['/about/', '/contact/', '/editorial-standards/', '/responsible-travel/', '/ocean-safety/', '/privacy/', '/terms/']
      .map((path) => ({ path, lastmod, priority: '0.4', changefreq: 'yearly' })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url><loc>${new URL(e.path, base).toString()}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

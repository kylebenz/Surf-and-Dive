import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Editorial guides. One Markdown file per article in src/content/guides/.
 * The filename (without .md) is the URL slug: /guides/<slug>/.
 */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    number: z.number(),
    /** H1 */
    title: z.string(),
    /** <title> */
    seoTitle: z.string(),
    /** Meta description */
    description: z.string(),
    category: z.enum(['Destinations', 'Surf', 'Diving', 'Freediving', 'Seasonal', 'Comparison', 'Planning', 'Safety', 'Responsible Travel']),
    primaryKeyword: z.string(),
    keywords: z.array(z.string()),
    /** Unique standfirst shown beneath the H1. */
    dek: z.string(),
    author: z.string().default('Surf and Dive Editorial Team'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    relatedDestinations: z.array(z.string()).min(2),
    activities: z.array(z.enum(['surf', 'dive', 'freediving', 'luxury-ocean-holidays'])).min(1),
    relatedGuides: z.array(z.string()).min(1),
    comparison: z.string().optional(),
    months: z.array(z.string()).default([]),
    images: z.array(
      z.object({
        label: z.string(),
        kind: z.enum(['photo', 'graphic']).default('photo'),
        brief: z.string(),
        src: z.string().default(''),
        alt: z.string().default(''),
        caption: z.string().optional(),
        credit: z.string().optional(),
      }),
    ),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    sources: z.array(z.object({ name: z.string(), url: z.string().optional(), note: z.string().optional() })).default([]),
    showChecklist: z.boolean().default(true),
  }),
});

export const collections = { guides };

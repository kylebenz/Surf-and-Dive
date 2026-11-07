import type { Destination, Activity } from '../types';
import { maldives } from './maldives';
import { baliNusaPenida } from './bali-nusa-penida';
import { fiji } from './fiji';
import { frenchPolynesia } from './french-polynesia';
import { hawaii } from './hawaii';
import { mentawaiIslands } from './mentawai-islands';
import { siargao } from './siargao';
import { costaRica } from './costa-rica';
import { sriLanka } from './sri-lanka';
import { azores } from './azores';
import { madeira } from './madeira';
import { canaryIslands } from './canary-islands';
import { portugal } from './portugal';
import { fernandoDeNoronha } from './fernando-de-noronha';
import { mexicoPacific } from './mexico-pacific';
import { mozambique } from './mozambique';
import { seychelles } from './seychelles';
import { mauritius } from './mauritius';
import { southAfrica } from './south-africa';
import { philippines } from './philippines';

/** The 20-destination editorial portfolio, in master-database order. */
export const destinations: Destination[] = [
  maldives, baliNusaPenida, fiji, frenchPolynesia, hawaii,
  mentawaiIslands, siargao, costaRica, sriLanka, azores,
  madeira, canaryIslands, portugal, fernandoDeNoronha, mexicoPacific,
  mozambique, seychelles, mauritius, southAfrica, philippines,
];

const bySlug = new Map(destinations.map((d) => [d.slug, d]));

export function getDestination(slug: string): Destination {
  const d = bySlug.get(slug);
  if (!d) throw new Error(`Unknown destination slug: ${slug}`);
  return d;
}

export const destinationUrl = (slug: string) => `/destinations/${slug}/`;

export function score(d: Destination, a: Activity): number {
  switch (a) {
    case 'surf': return d.surf.score;
    case 'dive': return d.diving.score;
    case 'freedive': return d.freediving.score;
    case 'luxury': return d.luxury.score;
    case 'scenery': return d.scenery.score;
  }
}

export function topFor(a: Activity, min = 9): Destination[] {
  return destinations
    .filter((d) => score(d, a) >= min)
    .sort((x, y) => score(y, a) - score(x, a) || x.name.localeCompare(y.name));
}

/** Featured on the homepage, a deliberate spread of regions and activities. */
export const featuredSlugs = ['maldives', 'fiji', 'bali-nusa-penida', 'french-polynesia', 'madeira', 'philippines'];

export const REGIONS = [
  'Indian Ocean', 'Southeast Asia', 'South Pacific', 'North Pacific',
  'Central America', 'South America', 'Atlantic Europe', 'Africa',
] as const;

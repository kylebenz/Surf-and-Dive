import type { Destination } from '../types';
import { destinationImages } from './_images';

export const canaryIslands: Destination = {
  name: 'Canary Islands',
  displayName: 'the Canary Islands',
  country: 'Spain',
  region: 'Atlantic Europe',
  slug: 'canary-islands',

  positioning: 'Europe’s winter-sun surf archipelago — volcanic reefs, varied islands and marine reserves within a short flight.',
  hero_headline: 'The Canary Islands: Volcanic Reefs and Winter Sun',
  hero_subheadline: 'Fuerteventura’s north shore, Lanzarote’s volcanic reefs, Tenerife’s south coast and El Hierro’s marine reserve — surf and dive choice across seven islands.',
  overview:
    'The Canary Islands offer multiple islands and a strong surf culture, making them useful when you want to choose your coastline around conditions and travel style. Fuerteventura and Lanzarote hold some of Europe’s most respected volcanic reef breaks alongside learner-friendly beaches; Tenerife and Gran Canaria add more developed resort infrastructure; and El Hierro, the smallest and most remote, is known for its marine reserve. For European travellers, the islands are one of the easiest winter-sun answers: mild temperatures, short flights and the option of a four- or five-night ocean escape.',
  why_visit: [
    'Surf variety across islands lets you pick a coast to match swell, wind and ability.',
    'Winter sun without long-haul travel — the shortest route to warm air and Atlantic surf for much of Europe.',
    'A wide range of stays, from design-led rural hotels on Lanzarote to large luxury resorts on Tenerife.',
  ],

  surf: {
    score: 9,
    spots: ['North Shore, Fuerteventura', 'El Cotillo, Fuerteventura', 'Famara, Lanzarote (beginner-friendly beach)', 'La Santa / El Quemao, Lanzarote (expert)', 'El Médano, Tenerife', 'Las Américas, Tenerife', 'El Confital, Gran Canaria'],
    best_for: ['Beginners at beach breaks such as Famara', 'Intermediate surfers', 'Advanced volcanic reef surfers', 'Winter-sun surf trips'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'Surf is possible year-round, with the most consistent North Atlantic swells typically arriving roughly October to March.',
    notes:
      'The archipelago’s volcanic reefs can be sharp, shallow and powerful; several are firmly expert territory. Long sandy beaches such as Famara and parts of Fuerteventura suit lessons and improvers. Wind is a constant factor — the islands are also a major kitesurf and windsurf destination — so early sessions are often best.',
  },

  diving: {
    score: 8,
    sites: ['La Restinga Marine Reserve, El Hierro', 'Museo Atlántico underwater sculpture museum, Lanzarote', 'El Cabrón Marine Reserve, Gran Canaria', 'Tenerife south-coast reefs and wrecks'],
    marine_life: ['Angel sharks (seasonal, protected)', 'Rays', 'Groupers', 'Turtles (Tenerife)', 'Atlantic reef fish'],
    season: 'Diving is possible year-round; water is typically warmest in late summer and autumn.',
    notes:
      'El Hierro’s La Restinga area is the archipelago’s best-known dive region. The Museo Atlántico off Lanzarote offers a distinctive dive among underwater sculptures designed to become an artificial reef. Angel sharks are critically endangered — observe only, at distance.',
  },

  freediving: {
    score: 7,
    locations: ['La Restinga (El Hierro)', 'Sheltered south-coast bays on Tenerife and Gran Canaria'],
    notes:
      'Calm southern coasts and deep water near shore make some islands appealing for freediving training. Use qualified instructors, a buddy and surface support, and follow marine-reserve rules.',
  },

  marine_life_notes:
    'Look out for rays, groupers and, around some islands, protected angel sharks and turtles. Avoid operators that feed animals, and respect marine reserves.',

  luxury: {
    score: 8,
    angle: 'Luxury resorts and villas.',
    stay_types: ['Luxury resorts on Tenerife and Gran Canaria', 'Design-led rural hotels on Lanzarote', 'Private villas with sea views', 'Boutique surf houses on Fuerteventura'],
    experiences: ['Private surf coaching', 'Volcanic landscape tours', 'Canarian wine tasting on Lanzarote', 'Spa and thalassotherapy', 'Boat trips for whale and dolphin watching with licensed operators'],
  },

  scenery: {
    score: 9,
    landscape: 'Lava fields, volcanic cones, dunes, pine forests and dramatic cliffs varying island by island.',
    water: 'Clear Atlantic water, temperate in winter and mild in late summer.',
  },

  core_zones: ['Tenerife', 'Fuerteventura', 'Lanzarote', 'Gran Canaria', 'El Hierro'],
  best_months: ['january', 'february', 'march', 'october', 'november', 'december'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Mild and sunny for much of the year; winters are typically warm by European standards.' },
    { label: 'Surf', detail: 'Year-round, with the most consistent swell typically roughly October to March.' },
    { label: 'Diving', detail: 'Year-round; warmest water late summer and autumn.' },
    { label: 'European calendar', detail: 'Ideal for winter sun, Christmas, half-term and long weekends.' },
  ],
  european_seasonal_angle:
    'The Canaries are Europe’s most accessible winter-sun ocean destination — warm air and consistent surf in the months when mainland Europe is coldest, all within a short-haul flight.',
  season_types: ['winter-sun', 'year-round'],
  recommended_duration: '5–8 nights; longer if combining two islands.',

  traveller_profiles: ['couples', 'family', 'winter-sun', 'active-luxury', 'solo'],
  best_audience: 'European winter sun, surf and short-haul luxury.',
  audience_notes: [
    { profile: 'Winter-sun surfers', detail: 'Consistent winter swell and multiple islands to choose from.' },
    { profile: 'Families', detail: 'Easy access, resort infrastructure and learner-friendly beaches.' },
    { profile: 'Experienced surfers', detail: 'Heavy volcanic reefs on Lanzarote and Fuerteventura.' },
    { profile: 'Not ideal for', detail: 'Travellers seeking tropical water temperatures or coral reefs.' },
  ],

  itinerary: [
    { days: 'Day 1', title: 'Arrive in Lanzarote', detail: 'Check into a design-led rural hotel or villa; sunset over the volcanic landscape.' },
    { days: 'Days 2–3', title: 'Surf Famara and the north', detail: 'Lessons or guided sessions matched to your level; volcanic landscape tour in the afternoon.' },
    { days: 'Day 4', title: 'Dive Museo Atlántico', detail: 'A guided dive among the underwater sculptures; Canarian wine tasting later.' },
    { days: 'Days 5–7', title: 'Fuerteventura', detail: 'Short ferry across for north-shore reefs or El Cotillo’s beaches, plus dunes and quiet beaches.' },
  ],

  planning_notes: [
    'Wind affects surf quality — early mornings are often cleanest.',
    'Volcanic reefs are sharp; reef boots and a first-aid kit are useful.',
    'Inter-island ferries make two-island trips easy; check schedules in advance.',
    'Respect marine reserves and protected species such as angel sharks.',
    'Peak winter periods book early, particularly Christmas and half-term.',
  ],

  faqs: [
    { question: 'Are the Canary Islands good for beginner surfers?', answer: 'Yes. Beaches such as Famara on Lanzarote and parts of Fuerteventura suit lessons, while the volcanic reef breaks are best left to experienced surfers.' },
    { question: 'When is the best time to surf the Canary Islands?', answer: 'Surf is possible year-round; the most consistent swell typically arrives roughly October to March.' },
    { question: 'Which Canary Island is best for diving?', answer: 'El Hierro, with the La Restinga marine reserve, is the best known. Lanzarote’s Museo Atlántico and Gran Canaria’s El Cabrón reserve are also popular.' },
  ],

  seo: {
    title: 'Canary Islands Luxury Surf & Dive Holidays | Winter Sun',
    meta: 'Plan a luxury Canary Islands surf and dive holiday: volcanic reefs, beginner beaches, marine reserves and Europe’s easiest winter-sun ocean escape.',
    primary_keywords: ['Canary Islands surf holiday', 'Canary Islands winter sun surf'],
    secondary_keywords: ['Fuerteventura surf', 'Lanzarote surf', 'El Hierro diving', 'Tenerife luxury resort'],
  },

  related_destinations: ['madeira', 'portugal', 'azores', 'mauritius'],
  related_articles: ['canary-islands-vs-madeira-winter-sun', 'best-winter-sun-surf-holidays-europe', 'where-to-surf-january-luxury-ocean-escapes', 'best-luxury-surf-holidays-europeans'],
  comparisons: ['canary-islands-vs-madeira'],

  images: destinationImages('canary-islands', {
    hero: 'Volcanic coastline with Atlantic swell breaking along a reef, Lanzarote or Fuerteventura.',
    surf: 'Surfer on a volcanic reef wave with lava rock in the foreground.',
    dive: 'Diver at the Museo Atlántico sculptures, natural light.',
    freedive: 'Freediver in deep blue water off El Hierro.',
    'marine-life': 'Angel shark resting on sand, photographed at distance.',
    landscape: 'Famara cliffs and beach from above.',
    'human-experience': 'Surfers walking across black lava toward the line-up.',
    culture: 'Papas arrugadas and mojo, or a volcanic vineyard at La Geria.',
    'luxury-stay': 'Rural design hotel terrace with ocean view.',
    signature: 'Winter sunset over a volcanic point with a clean set rolling in.',
  }),
};

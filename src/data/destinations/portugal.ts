import type { Destination } from '../types';
import { destinationImages } from './_images';

export const portugal: Destination = {
  name: 'Portugal',
  displayName: 'Portugal',
  country: 'Portugal',
  region: 'Atlantic Europe',
  slug: 'portugal',

  positioning: 'Europe’s densest surf coastline, with surf towns, seafood, wine and design hotels a short flight from home.',
  hero_headline: 'Portugal: Europe’s Atlantic Surf Coast',
  hero_subheadline: 'Ericeira’s World Surfing Reserve, Peniche’s Supertubos, the spectacle of Nazaré and the quiet coves of the Algarve — paired with design hotels, wine and long seafood lunches.',
  overview:
    'Portugal packs a remarkable amount of surf into one coastline. Visit Portugal describes more than 850 km of coast and highlights Ericeira, Peniche, Nazaré, Costa da Caparica, the Algarve, Madeira and the Azores among its surf areas, with very different wave environments and skill requirements. For a premium trip, the surrounding culture matters as much as the waves: surf towns with cafés and seafood, design hotels in Comporta and the Alentejo, Lisbon an hour away and wine regions inland. It is the European wildcard — a serious surf trip without a long-haul flight. (Madeira and the Azores have their own guides on Surf and Dive.)',
  why_visit: [
    'Density of options: within a short drive you can usually find a coast facing the right way for the swell and wind.',
    'It works for every level, from gentle summer beach breaks to some of Europe’s most powerful waves.',
    'The land is part of the luxury: food, wine, design hotels and Lisbon’s culture all within easy reach.',
  ],

  surf: {
    score: 10,
    spots: ['Ericeira (World Surfing Reserve)', 'Peniche and Supertubos', 'Nazaré, Praia do Norte (big-wave spectating)', 'Costa da Caparica', 'Sagres and the western Algarve (Arrifana, Tonel, Beliche)', 'Alentejo coast'],
    best_for: ['Beginners (summer beach breaks)', 'Intermediate surfers', 'Advanced surfers', 'Short European surf trips'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'Surf is possible year-round. Autumn (roughly September to November) is often considered a sweet spot of swell, warmth and fewer crowds; summer is smaller and suits learners; winter brings big, powerful swell.',
    notes:
      'Visit Portugal describes Ericeira as a recognised surfing reserve and highlights Peniche and Nazaré among major surf areas. Peniche’s peninsula offers coasts facing different directions, which makes it very flexible. Nazaré’s giant winter waves are for elite big-wave teams only — but watching from the lighthouse is a memorable experience. Beginners should stay at sandy beaches with schools, especially in summer.',
  },

  diving: {
    score: 7,
    sites: ['Berlengas archipelago (off Peniche)', 'Arrábida and Sesimbra', 'Algarve wrecks and artificial reefs', 'Sagres coast'],
    marine_life: ['Octopus', 'Nudibranchs', 'Groupers', 'Conger eels', 'Seasonal sunfish (offshore)', 'Dolphins'],
    season: 'Diving is typically best in late summer and early autumn, when seas are calmer and water warmer.',
    notes:
      'Portugal’s diving is temperate and Atlantic. The Berlengas, a protected archipelago off Peniche, are the standout, with caves, gullies and rich life. Conditions change quickly with swell.',
  },

  freediving: {
    score: 6,
    locations: ['Berlengas on calm days', 'Arrábida coast', 'Sheltered Algarve coves'],
    notes:
      'Cooler water and variable visibility make Portugal a secondary freediving destination, but calm summer days around the Berlengas and Arrábida can be rewarding with qualified local support.',
  },

  marine_life_notes:
    'Temperate Atlantic life — octopus, nudibranchs, groupers — and frequent dolphin sightings offshore. Respect the Berlengas’ protected status and local fishing rules.',

  luxury: {
    score: 8,
    angle: 'Boutique hotels and coastal stays.',
    stay_types: ['Design hotels in Comporta and the Alentejo', 'Boutique surf hotels in Ericeira', 'Clifftop resorts in the Algarve', 'Restored quintas and farmhouses'],
    experiences: ['Private surf coaching and guiding', 'Lisbon and Sintra day trips', 'Wine tastings in the Alentejo', 'Seafood lunches in fishing towns', 'Coastal walks along the Rota Vicentina'],
  },

  scenery: {
    score: 9,
    landscape: 'Ochre cliffs, long Atlantic beaches, pine forest and whitewashed fishing towns.',
    water: 'Cool, clear Atlantic water; wetsuits are needed for most of the year.',
  },

  core_zones: ['Ericeira', 'Peniche', 'Nazaré', 'Lisbon coast and Comporta', 'Algarve and Sagres', 'Alentejo'],
  best_months: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Warm, dry summers and mild, wetter winters. Spring and autumn are often pleasant.' },
    { label: 'Surf', detail: 'Year-round; autumn often a sweet spot, summer smaller, winter powerful.' },
    { label: 'Diving', detail: 'Typically best late summer and early autumn.' },
    { label: 'European calendar', detail: 'Perfect for long weekends, Easter, summer holidays and autumn breaks.' },
  ],
  european_seasonal_angle:
    'Portugal suits almost every European holiday window. Summer is ideal for learners and families; September and October often deliver the best balance of swell, warmth and space.',
  season_types: ['summer', 'shoulder', 'year-round'],
  recommended_duration: '4–8 nights. Short trips work well because travel time from much of Europe is short.',

  traveller_profiles: ['couples', 'family', 'serious-surfer', 'active-luxury', 'solo'],
  best_audience: 'Broad surf choice and European accessibility.',
  audience_notes: [
    { profile: 'Surfers of every level', detail: 'Unmatched choice of breaks within a compact area.' },
    { profile: 'Couples with one surfer', detail: 'Cafés, seafood, walks, Lisbon and Sintra keep non-surf days interesting.' },
    { profile: 'Families', detail: 'Summer beach breaks with established schools.' },
    { profile: 'Not ideal for', detail: 'Travellers wanting warm water or coral reef diving.' },
  ],

  itinerary: [
    { days: 'Days 1–3', title: 'Ericeira', detail: 'Boutique hotel in Ericeira; coached sessions matched to the swell, seafood lunches and a Sintra afternoon.' },
    { days: 'Days 4–5', title: 'Peniche', detail: 'Surf whichever side of the peninsula is working; boat to the Berlengas for diving or snorkelling on a calm day.' },
    { days: 'Day 6', title: 'Nazaré', detail: 'Watch the waves from the lighthouse in season — a spectator’s day.' },
    { days: 'Days 7–8', title: 'Comporta', detail: 'Finish with design-hotel calm, rice fields, long beaches and slow dinners.' },
  ],

  planning_notes: [
    'Match beaches to ability; Portugal’s Atlantic can be powerful even in summer.',
    'Wetsuit thickness varies by season — check before packing.',
    'Nazaré’s big waves are for spectating only for nearly all travellers.',
    'Lifeguarded beaches operate in the bathing season; follow flags.',
    'Berlengas visits may be subject to visitor limits — check current rules.',
  ],

  faqs: [
    { question: 'Where is the best surf in Portugal?', answer: 'Visit Portugal highlights Ericeira, Peniche, Nazaré, Costa da Caparica and the Algarve. The best choice depends on your level, the season and the swell direction.' },
    { question: 'When is the best time to surf in Portugal?', answer: 'Surf is possible year-round. Many surfers favour autumn (roughly September to November); summer suits beginners; winter is for experienced surfers.' },
    { question: 'Portugal or Indonesia?', answer: 'For a week or long weekend, Portugal. For a two-week tropical reset, Indonesia. For a serious surf trip, choose by season and wave type.' },
  ],

  seo: {
    title: 'Portugal Luxury Surf Holidays | Ericeira, Peniche & Algarve',
    meta: 'Plan a luxury Portugal surf holiday: Ericeira’s surfing reserve, Peniche, Nazaré and the Algarve, with design hotels, seafood and the best seasons to go.',
    primary_keywords: ['Portugal luxury surf holiday', 'Portugal surf trip'],
    secondary_keywords: ['Ericeira surf', 'Peniche surf', 'Comporta luxury hotel', 'Portugal autumn surf'],
  },

  related_destinations: ['madeira', 'azores', 'canary-islands', 'south-africa'],
  related_articles: ['portugal-vs-indonesia-luxury-surf', 'best-luxury-surf-holidays-europeans', 'best-summer-surf-holidays-europeans', 'best-autumn-ocean-holidays-europe', 'choose-surf-destination-non-surfer-partner'],
  comparisons: ['portugal-vs-indonesia'],

  images: destinationImages('portugal', {
    hero: 'Ericeira cliffs above an Atlantic reef break with surfers in the water.',
    surf: 'Surfer in a Supertubos barrel at Peniche.',
    dive: 'Diver in a gully at the Berlengas with temperate reef life.',
    freedive: 'Snorkeller in a clear Arrábida cove.',
    'marine-life': 'Octopus on rocky reef in natural light.',
    landscape: 'Ochre cliffs of the western Algarve at golden hour.',
    'human-experience': 'Surfers checking the swell from the cliff in Ericeira.',
    culture: 'Grilled fish and vinho verde at a harbour tasca.',
    'luxury-stay': 'Comporta design hotel overlooking dunes and the Atlantic.',
    signature: 'Nazaré lighthouse and a giant winter wave, crowd for scale.',
  }),
};

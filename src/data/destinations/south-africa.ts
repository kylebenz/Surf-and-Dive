import type { Destination } from '../types';
import { destinationImages } from './_images';

export const southAfrica: Destination = {
  name: 'South Africa',
  displayName: 'South Africa',
  country: 'South Africa',
  region: 'Africa',
  slug: 'south-africa',

  positioning: 'Jeffreys Bay’s point, Cape Town’s cold-water coast, KwaZulu-Natal’s shark-rich reefs, with food, wine and safari built in.',
  hero_headline: 'South Africa: Point Breaks, Kelp Forests and Safari',
  hero_subheadline: 'Long right-hand points on the Eastern Cape, Cape Town’s dramatic coastline, warm-water diving on the KwaZulu-Natal reefs and some of the world’s best food, wine and wildlife.',
  overview:
    'South Africa’s coastline runs from the cold Atlantic around Cape Town to the warm Indian Ocean reefs of KwaZulu-Natal, and the variety is extraordinary. Jeffreys Bay is one of the world’s most celebrated right-hand point breaks; Cape Town offers surf from beginner beaches to big-wave reefs; and the KwaZulu-Natal coast holds Aliwal Shoal and Sodwana Bay, known for sharks and coral respectively. Around the water sit the Cape Winelands, the Garden Route and the possibility of a safari: making this one of the most complete ocean-and-land trips available.',
  why_visit: [
    'Long, high-quality point waves, especially in the southern winter.',
    'Distinctive diving: kelp forests in the Cape, sharks at Aliwal Shoal, coral at Sodwana Bay.',
    'Food, wine, design hotels and safari give the trip a land component few ocean destinations can match.',
  ],

  surf: {
    score: 9,
    spots: ['Supertubes, Jeffreys Bay (advanced)', 'Muizenberg, Cape Town (beginner)', 'Long Beach, Kommetjie', 'Llandudno', 'Durban beaches', 'Garden Route breaks'],
    best_for: ['Beginners in Cape Town', 'Intermediate surfers', 'Advanced point-break surfers'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'The most consistent swells typically arrive in the southern winter (roughly April to September).',
    notes:
      'Water around Cape Town is cold year-round and requires a good wetsuit; KwaZulu-Natal is warmer. Jeffreys Bay is best for experienced surfers when the swell is running. Follow local advice and shark-safety programmes where they operate.',
  },

  diving: {
    score: 8,
    sites: ['Aliwal Shoal (KwaZulu-Natal)', 'Sodwana Bay (iSimangaliso Wetland Park)', 'False Bay kelp forests (Cape Town)', 'Sardine Run (Wild Coast, seasonal, advanced)'],
    marine_life: ['Ragged-tooth (sand tiger) sharks (seasonal)', 'Coral reef fish (Sodwana)', 'Cape fur seals', 'Kelp-forest life', 'Dolphins and whales (seasonal)'],
    season: 'Aliwal Shoal’s ragged-tooth sharks are typically associated with roughly June to November; the Sardine Run typically occurs roughly June to July. Sodwana diving is possible year-round.',
    notes:
      'The diving is varied and often demanding: cold water and surge in the Cape, ocean launches through the surf in KwaZulu-Natal. Choose experienced operators and dive within your training.',
  },

  freediving: {
    score: 6,
    locations: ['False Bay kelp forests (calm days)', 'Sodwana Bay reefs'],
    notes:
      'Kelp-forest snorkelling and freediving can be beautiful, but cold water, surge and visibility vary. Use qualified local guides and a buddy.',
  },

  marine_life_notes:
    'From Cape fur seals and kelp-forest life to sharks and humpbacks, marine life is a major draw. Choose operators that follow responsible-encounter practices.',

  luxury: {
    score: 8,
    angle: 'Boutique hotels and safari combinations.',
    stay_types: ['Boutique hotels in Cape Town', 'Winelands estates', 'Garden Route lodges', 'Private game reserves'],
    experiences: ['Private surf guiding', 'Winelands tastings and dining', 'Coastal drives along the Garden Route', 'Safari in a private reserve', 'Whale watching from land in season'],
  },

  scenery: {
    score: 9,
    landscape: 'Table Mountain, fynbos-covered peninsulas, long Eastern Cape points and subtropical KwaZulu-Natal coast.',
    water: 'Cold, clear Atlantic in the Cape; warm Indian Ocean water in KwaZulu-Natal.',
  },

  core_zones: ['Cape Town', 'Garden Route', 'Jeffreys Bay', 'KwaZulu-Natal'],
  best_months: ['april', 'may', 'june', 'july', 'august', 'september', 'november', 'december'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Cape Town has a winter-rainfall climate; KwaZulu-Natal is warm and humid in summer. Conditions vary greatly by region.' },
    { label: 'Surf', detail: 'Most consistent swell in the southern winter (roughly April to September).' },
    { label: 'Diving', detail: 'Seasonal highlights such as ragged-tooth sharks and the Sardine Run in winter.' },
    { label: 'European calendar', detail: 'Surf trips in the European summer; Cape Town’s summer suits the European winter.' },
  ],
  european_seasonal_angle:
    'South Africa offers a useful counter-season: serious surf during the European summer, and a sunny Cape summer during the European winter, with minimal time-zone change for most of Europe.',
  season_types: ['summer', 'winter-sun', 'year-round'],
  recommended_duration: '10-14 nights including a safari or Winelands stay.',

  traveller_profiles: ['serious-surfer', 'active-luxury', 'couples', 'family', 'diver'],
  best_audience: 'Surf + food + safari + adventure.',
  audience_notes: [
    { profile: 'Surfers', detail: 'Long right-hand points such as Jeffreys Bay and a strong surf culture.' },
    { profile: 'Active luxury couples', detail: 'Surf, wine, food and safari in one trip.' },
    { profile: 'Not ideal for', detail: 'Travellers wanting warm, clear tropical water throughout.' },
  ],

  itinerary: [
    { days: 'Days 1-3', title: 'Cape Town', detail: 'Surf Muizenberg or Long Beach with a guide, explore the peninsula and dine in the city.' },
    { days: 'Days 4-5', title: 'Winelands', detail: 'Estate stays and tastings.' },
    { days: 'Days 6-8', title: 'Jeffreys Bay', detail: 'For experienced surfers when the swell runs; otherwise Garden Route coast walks.' },
    { days: 'Days 9-12', title: 'Safari', detail: 'A private reserve in the Eastern Cape or further north.' },
  ],

  planning_notes: [
    'Water in the Cape is cold year-round: pack or rent a suitable wetsuit.',
    'Follow local shark-safety programmes and beach advice.',
    'Distances are large; combine internal flights with scenic drives.',
    'Check current travel advice for the areas you visit.',
  ],

  faqs: [
    { question: 'When is the best time to surf in South Africa?', answer: 'The southern winter (roughly April to September) typically brings the most consistent swell, including at Jeffreys Bay.' },
    { question: 'Is South Africa good for diving?', answer: 'Yes, with variety: kelp forests in the Cape, ragged-tooth sharks at Aliwal Shoal and coral at Sodwana Bay. Many dives involve cold water or surf launches.' },
  ],

  seo: {
    title: 'South Africa Luxury Surf Holidays | J-Bay, Cape Town & Safari',
    meta: 'Plan a luxury South Africa surf and dive holiday: Jeffreys Bay, Cape Town, KwaZulu-Natal reefs, Winelands and safari, with seasons for European travellers.',
    primary_keywords: ['South Africa surf holiday', 'Jeffreys Bay surf'],
    secondary_keywords: ['Cape Town surf', 'Aliwal Shoal diving', 'surf and safari'],
  },

  related_destinations: ['mozambique', 'mauritius', 'portugal', 'azores'],
  related_articles: ['best-summer-surf-holidays-europeans', 'best-luxury-surf-destinations-advanced-surfers', 'how-to-plan-long-haul-luxury-ocean-trip'],

  images: destinationImages('south-africa', {
    hero: 'Long right-hand point with lines wrapping, Eastern Cape.',
    surf: 'Surfer on a long wall at Jeffreys Bay.',
    dive: 'Diver among kelp in False Bay with light filtering down.',
    freedive: 'Freediver in a kelp forest, buddy visible.',
    'marine-life': 'Cape fur seals underwater, natural behaviour.',
    landscape: 'Table Mountain and Atlantic coastline from Chapman’s Peak.',
    'human-experience': 'Surfers walking the point at dawn.',
    culture: 'Winelands lunch table, or a Cape Malay dish.',
    'luxury-stay': 'Cape Town hotel terrace facing the Atlantic.',
    signature: 'Whale breaching in a Cape bay seen from the cliffs.',
  }),
};

import type { Destination } from '../types';
import { destinationImages } from './_images';

export const seychelles: Destination = {
  name: 'Seychelles',
  displayName: 'the Seychelles',
  country: 'Seychelles',
  region: 'Indian Ocean',
  slug: 'seychelles',

  positioning: 'Granite islands, private-island luxury and calm-season diving — the Indian Ocean at its most sculptural.',
  hero_headline: 'The Seychelles: Granite Islands and Private-Island Calm',
  hero_subheadline: 'Sculpted granite boulders, reef dives around Mahé and Praslin, a handful of surf spots in the right season and private islands where nature leads.',
  overview:
    'The Seychelles combine some of the most distinctive island landscapes in the world — granite boulders, palm forests, powder-white beaches — with a conservation-led approach to luxury. Diving and snorkelling are the main ocean activities, with granite reefs, wrecks and seasonal pelagic life around Mahé and Praslin. Surf exists but is a minor attraction, with a handful of reef and beach breaks on Mahé that work in specific seasons. The transitional months between the monsoons often bring the calmest seas and clearest water. Private islands and low-density resorts make this one of the most refined ocean destinations in the Indian Ocean.',
  why_visit: [
    'Scenery unlike anywhere else: granite boulder beaches and lush peaks rising from turquoise water.',
    'Diving and snorkelling in calm transitional months can be excellent, with turtles, rays and seasonal whale sharks.',
    'Private-island stays with strong conservation programmes give the luxury a sense of purpose.',
  ],

  surf: {
    score: 7,
    spots: ['Anse Intendance (Mahé)', 'Grand Anse (Mahé)', 'Anse Takamaka (Mahé)', 'Reef passes on outer islands (seasonal, limited access)'],
    best_for: ['Intermediate surfers as a secondary activity'],
    levels: ['intermediate', 'advanced'],
    season: 'South-facing Mahé beaches typically receive swell during the south-east trade-wind season (roughly May to October); conditions are variable.',
    notes:
      'Surf is a bonus rather than a reason to visit. Shorebreak can be powerful and currents strong; swim and surf with caution and local advice.',
  },

  diving: {
    score: 9,
    sites: ['Shark Bank (Mahé)', 'Ennerdale wreck (Mahé)', 'Brissare Rocks (Mahé)', 'St Pierre and Ile Cocos (Praslin/La Digue area)', 'Outer islands (via liveaboard or specialist stays)'],
    marine_life: ['Hawksbill and green turtles', 'Eagle rays', 'Whale sharks (seasonal)', 'Reef sharks', 'Napoleon wrasse'],
    season: 'The transitional months (roughly April to May and October to November) often bring calm seas and good visibility. Whale shark sightings are most often associated with the latter period around Mahé — never guaranteed.',
    notes:
      'Granite reef structures — boulders, swim-throughs and overhangs — make Seychelles diving distinctive. Outer islands such as Aldabra are highly protected and access is limited.',
  },

  freediving: {
    score: 8,
    locations: ['Sheltered bays on Praslin and La Digue', 'Ile Cocos (marine park, snorkel)', 'Mahé’s west coast on calm days'],
    notes:
      'Calm transitional months offer clear water for snorkelling and recreational freediving. Marine parks have rules and fees; always freedive with a buddy and qualified support.',
  },

  marine_life_notes:
    'Turtles are a highlight, including nesting beaches on some islands. Follow guidance around nesting turtles, never touch wildlife and respect marine-park rules.',

  luxury: {
    score: 10,
    angle: 'Private islands and nature experiences.',
    stay_types: ['Private-island resorts', 'Villas on Mahé and Praslin', 'Small boutique lodges on La Digue', 'Conservation-led island stays'],
    experiences: ['Island-hopping by private boat', 'Guided walks in the Vallée de Mai (Praslin)', 'Cycling La Digue', 'Turtle and conservation programmes', 'Creole dining'],
  },

  scenery: {
    score: 10,
    landscape: 'Granite boulders, palm forests, mountain ridges and white-sand bays.',
    water: 'Warm, clear Indian Ocean water, calmest in the transitional months.',
  },

  core_zones: ['Mahé', 'Praslin', 'La Digue', 'Outer islands'],
  best_months: ['april', 'may', 'october', 'november', 'december', 'february'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Warm year-round. The south-east trades (roughly May to October) bring breezier, drier weather; the north-west monsoon (roughly December to March) brings warmer, more humid conditions.' },
    { label: 'Surf', detail: 'Limited; south-facing Mahé spots typically during the south-east trades.' },
    { label: 'Diving', detail: 'Transitional months (roughly April–May, October–November) often calmest and clearest.' },
    { label: 'European calendar', detail: 'Strong for Easter, autumn breaks and the festive season.' },
  ],
  european_seasonal_angle:
    'The calm transitional months align with Easter and the late-autumn break, and the islands are a classic festive-season escape for Europeans seeking warmth and privacy.',
  season_types: ['winter-sun', 'shoulder'],
  recommended_duration: '8–12 nights across two islands.',

  traveller_profiles: ['couples', 'honeymoon', 'diver', 'freediver', 'family'],
  best_audience: 'Luxury islands, diving, nature and couples.',
  audience_notes: [
    { profile: 'Honeymooners', detail: 'Private-island seclusion and extraordinary scenery.' },
    { profile: 'Divers and snorkellers', detail: 'Granite reefs and turtles in calm seasons.' },
    { profile: 'Not ideal for', detail: 'Surf-focused travellers.' },
  ],

  itinerary: [
    { days: 'Days 1–3', title: 'Mahé', detail: 'Arrive, recover, dive Shark Bank or the Ennerdale wreck with a good operator.' },
    { days: 'Days 4–7', title: 'Praslin and La Digue', detail: 'Ferry or short flight; Vallée de Mai, Ile Cocos snorkel, cycling on La Digue.' },
    { days: 'Days 8–10', title: 'Private island', detail: 'Finish on a private island for conservation programmes, turtles and quiet.' },
  ],

  planning_notes: [
    'Marine parks charge entry fees and have rules — follow them.',
    'Inter-island ferries depend on sea state; allow buffer.',
    'Some beaches have strong currents in certain seasons; heed local advice.',
    'Check current entry requirements, including any travel authorisation.',
  ],

  faqs: [
    { question: 'Is the Seychelles good for surfing?', answer: 'Surf is limited and secondary. A few Mahé beaches can work during the south-east trade-wind season, but the islands are better suited to diving and snorkelling.' },
    { question: 'When is the best time to dive in the Seychelles?', answer: 'The transitional months — roughly April to May and October to November — often bring the calmest seas and best visibility.' },
  ],

  seo: {
    title: 'Seychelles Luxury Dive & Island Holidays | Surf and Dive',
    meta: 'Plan a luxury Seychelles ocean holiday: granite islands, reef diving, turtles, private-island stays and the calmest months to travel from Europe.',
    primary_keywords: ['Seychelles luxury holiday', 'Seychelles diving'],
    secondary_keywords: ['Seychelles private island', 'Praslin snorkelling', 'Seychelles best time to visit'],
  },

  related_destinations: ['maldives', 'mauritius', 'mozambique', 'french-polynesia'],
  related_articles: ['best-luxury-diving-holidays-world', 'best-ocean-destinations-for-couples', 'luxury-ocean-escapes-christmas-new-year'],

  images: destinationImages('seychelles', {
    hero: 'Granite boulders and turquoise water at a La Digue bay.',
    surf: 'Surfer on a south-coast Mahé beach break, granite headland behind.',
    dive: 'Diver among granite boulders with schooling fish.',
    freedive: 'Freediver over a sandy channel off Ile Cocos.',
    'marine-life': 'Hawksbill turtle over reef, no contact.',
    landscape: 'Praslin ridge and palm forest above the coast.',
    'human-experience': 'Cyclists on a La Digue path toward the beach.',
    culture: 'Creole fish curry or a market in Victoria.',
    'luxury-stay': 'Private-island villa opening onto a granite cove.',
    signature: 'Sunset through granite boulders with calm water.',
  }),
};

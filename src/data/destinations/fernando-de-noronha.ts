import type { Destination } from '../types';
import { destinationImages } from './_images';

export const fernandoDeNoronha: Destination = {
  name: 'Fernando de Noronha',
  displayName: 'Fernando de Noronha',
  country: 'Brazil',
  region: 'South America',
  slug: 'fernando-de-noronha',

  positioning: 'A protected Atlantic archipelago with clear water, spinner dolphins and reef-break surf — a remote island escape with strict limits that keep it special.',
  hero_headline: 'Fernando de Noronha: Brazil’s Protected Ocean Sanctuary',
  hero_subheadline: 'Clear South Atlantic water, a marine national park, northern-hemisphere-winter surf and boutique pousadas on an island where visitor numbers are deliberately managed.',
  overview:
    'Fernando de Noronha is a volcanic archipelago off north-east Brazil, much of it protected as a marine national park and recognised alongside Atol das Rocas as a UNESCO World Heritage site. Visitor numbers and environmental fees are managed to protect the islands, which keeps the atmosphere quiet and the water exceptional. It is best known for diving and snorkelling in clear water, spinner dolphins in a protected bay and beaches that regularly appear on lists of Brazil’s most beautiful. Less known is the surf: reef and beach breaks on the northern coast come alive in the southern summer. Luxury here is boutique — small pousadas, guided experiences and a sense of privilege at being somewhere so carefully protected.',
  why_visit: [
    'Water clarity and marine life are the headline, with diving and snorkelling inside a protected marine park.',
    'Managed visitor numbers mean the islands feel genuinely low-density.',
    'A rare combination of surf, wildlife and dramatic scenery on a small, walkable island.',
  ],

  surf: {
    score: 9,
    spots: ['Cacimba do Padre', 'Boldró', 'Praia do Bode', 'Conceição', 'Praia do Meio'],
    best_for: ['Intermediate surfers', 'Advanced surfers', 'Surf-and-nature trips'],
    levels: ['intermediate', 'advanced'],
    season: 'Northern swells typically reach the island roughly December to March.',
    notes:
      'Cacimba do Padre is the best-known break, producing powerful waves over sand and reef in season. Waves are best suited to intermediate and advanced surfers. Outside the season, surf is limited.',
  },

  diving: {
    score: 10,
    sites: ['Corveta Ipiranga wreck (V17)', 'Pedras Secas', 'Cagarras', 'Sapata Cave', 'Ressurreta'],
    marine_life: ['Spinner dolphins (viewed from the protected bay lookout)', 'Sea turtles', 'Lemon and reef sharks', 'Rays', 'Reef fish'],
    season: 'Diving is possible year-round. Many divers favour the drier months for calmer seas and clarity; check with operators for current conditions.',
    notes:
      'Diving is strictly regulated and conducted with authorised operators. The combination of warm, clear water and protected status gives the archipelago a reputation as one of Brazil’s finest dive regions. Spinner dolphins in their resting bay are watched from land, not approached in the water.',
  },

  freediving: {
    score: 9,
    locations: ['Designated snorkelling areas such as Baía do Sancho and Praia do Sueste (subject to park rules)', 'Guided boat snorkels'],
    notes:
      'Clear water makes Noronha outstanding for snorkelling and recreational freediving within park rules. Some areas require guides, time slots or bookings. Never freedive alone and follow park restrictions.',
  },

  marine_life_notes:
    'Turtles, sharks, rays and spinner dolphins are among the animals associated with Noronha. Park rules restrict access in many areas to protect wildlife; follow them exactly.',

  luxury: {
    score: 8,
    angle: 'Boutique pousadas and guided experiences.',
    stay_types: ['Boutique pousadas', 'Small design-led guesthouses', 'Private villas'],
    experiences: ['Guided marine-park dives', 'Sunset at Baía do Sancho viewpoints', 'Private boat trips around the archipelago', 'Guided trails within the national park'],
  },

  scenery: {
    score: 10,
    landscape: 'Volcanic pinnacles, green hills and cliff-backed beaches.',
    water: 'Warm and frequently exceptionally clear South Atlantic water.',
  },

  core_zones: ['Main island beaches and reefs', 'Baía do Sancho', 'Baía dos Golfinhos', 'Cacimba do Padre'],
  best_months: ['december', 'january', 'february', 'march', 'september', 'october', 'november'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Warm year-round; a rainier period typically falls roughly March to July.' },
    { label: 'Surf', detail: 'Northern swells typically roughly December to March.' },
    { label: 'Diving', detail: 'Year-round; calmer, clearer seas often in the drier months.' },
    { label: 'European calendar', detail: 'Works for winter sun (surf season) and autumn (often calm, clear water).' },
  ],
  european_seasonal_angle:
    'Noronha’s surf season aligns with the European winter, while autumn can bring calm, clear water for diving — a remote alternative to Indian Ocean winter-sun trips.',
  season_types: ['winter-sun', 'shoulder'],
  recommended_duration: '6–9 nights on the island, as part of a longer Brazil trip.',

  traveller_profiles: ['diver', 'freediver', 'couples', 'active-luxury'],
  best_audience: 'Wildlife, diving and remote island escapes.',
  audience_notes: [
    { profile: 'Divers and snorkellers', detail: 'Clear water and protected marine life.' },
    { profile: 'Nature-led couples', detail: 'Quiet beaches, trails and boutique stays.' },
    { profile: 'Intermediate-plus surfers', detail: 'Powerful seasonal waves without big crowds.' },
    { profile: 'Not ideal for', detail: 'Travellers wanting nightlife, large resorts or spontaneous access to every beach.' },
  ],

  itinerary: [
    { days: 'Day 1', title: 'Arrive', detail: 'Fly via Recife or Natal, settle into a pousada and watch the sunset from a viewpoint.' },
    { days: 'Days 2–3', title: 'Dive the park', detail: 'Guided boat dives at Pedras Secas or the Ipiranga wreck; snorkel in designated bays.' },
    { days: 'Days 4–5', title: 'Surf season', detail: 'In season, morning sessions at Cacimba do Padre; afternoons on park trails.' },
    { days: 'Days 6–7', title: 'Dolphins and coast', detail: 'Early morning at the Baía dos Golfinhos lookout and a private boat around the archipelago.' },
  ],

  planning_notes: [
    'An environmental preservation fee and a national park fee apply; check current amounts and rules before travel.',
    'Visitor numbers and access to some beaches and trails are managed; book activities in advance.',
    'Domestic flights connect via mainland Brazil — check schedules and baggage rules.',
    'Never approach spinner dolphins in the water; viewing is from land.',
    'Respect all park restrictions on access times and areas.',
  ],

  faqs: [
    { question: 'Is Fernando de Noronha good for diving?', answer: 'Yes. It is widely regarded as one of Brazil’s finest dive regions, with clear water and protected marine life. Diving is conducted with authorised operators within park rules.' },
    { question: 'When is surf season in Fernando de Noronha?', answer: 'Northern swells typically reach the island roughly December to March.' },
    { question: 'Are there fees to visit Fernando de Noronha?', answer: 'Yes. An environmental preservation fee and a national park fee apply. Check current rules and amounts before travel.' },
  ],

  seo: {
    title: 'Fernando de Noronha Surf & Dive Holidays | Brazil’s Island Sanctuary',
    meta: 'Plan a Fernando de Noronha surf and dive holiday: clear water, a protected marine park, seasonal surf, boutique pousadas and essential visitor rules.',
    primary_keywords: ['Fernando de Noronha diving', 'Fernando de Noronha surf'],
    secondary_keywords: ['Noronha pousada', 'Brazil luxury island', 'Noronha marine park'],
  },

  related_destinations: ['azores', 'costa-rica', 'seychelles', 'french-polynesia'],
  related_articles: ['best-luxury-diving-destinations-marine-life', 'best-freediving-destinations-clear-water', 'luxury-ocean-travel-reef-conservation'],

  images: destinationImages('fernando-de-noronha', {
    hero: 'Morro Dois Irmãos rising above a turquoise bay.',
    surf: 'Surfer at Cacimba do Padre with the twin peaks behind.',
    dive: 'Diver over the Ipiranga wreck in clear water.',
    freedive: 'Snorkeller above reef in Baía do Sancho, permitted area.',
    'marine-life': 'Turtle swimming over reef, no contact.',
    landscape: 'Cliff-backed beach from a park trail.',
    'human-experience': 'Visitors at the Baía dos Golfinhos lookout at dawn.',
    culture: 'Seafood moqueca at a pousada table.',
    'luxury-stay': 'Boutique pousada deck facing the ocean.',
    signature: 'Spinner dolphins in the protected bay seen from above.',
  }),
};

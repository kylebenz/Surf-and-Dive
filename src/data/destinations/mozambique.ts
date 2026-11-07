import type { Destination } from '../types';
import { destinationImages } from './_images';

export const mozambique: Destination = {
  name: 'Mozambique',
  displayName: 'Mozambique',
  country: 'Mozambique',
  region: 'Africa',
  slug: 'mozambique',

  positioning: 'Manta rays and whale sharks off Tofo, the protected Bazaruto Archipelago and private-island lodges — Africa’s great marine-life coast.',
  hero_headline: 'Mozambique: Megafauna, Islands and Indian Ocean Solitude',
  hero_subheadline: 'Dive with manta rays off Tofo, sail the dunes and seagrass of the Bazaruto Archipelago and stay on private islands where the ocean is the only neighbour.',
  overview:
    'Mozambique’s long Indian Ocean coastline is one of Africa’s most rewarding marine environments. Tofo, in Inhambane province, is widely associated with manta rays and whale sharks; the Bazaruto Archipelago, a national park, protects seagrass beds, dunes and reefs and is one of the region’s best-known homes for dugongs, though sightings are rare. Humpback whales migrate along the coast in the southern winter. Surf is a secondary but real attraction, with right-hand points such as Tofinho and Ponta do Ouro. The luxury model is private-island lodges and small beach retreats where privacy and space are the defining features.',
  why_visit: [
    'Marine megafauna is the reason most travellers come — manta rays, whale sharks and humpbacks in season.',
    'Private-island lodges in the Bazaruto Archipelago offer exceptional privacy.',
    'It pairs naturally with a safari elsewhere in southern Africa for a once-in-a-decade trip.',
  ],

  surf: {
    score: 8,
    spots: ['Tofinho point (Tofo)', 'Tofo beach', 'Ponta do Ouro', 'Ponta Mamoli area'],
    best_for: ['Intermediate surfers', 'Surf as a secondary activity'],
    levels: ['intermediate', 'advanced'],
    season: 'Southern swells typically arrive roughly April to September.',
    notes:
      'Surf is uncrowded and pleasant but secondary to diving. Points can be fun on the right swell; facilities are limited, so bring your own equipment or confirm rentals.',
  },

  diving: {
    score: 10,
    sites: ['Manta Reef (Tofo)', 'Giant’s Castle (Tofo)', 'Bazaruto Archipelago reefs', 'Ponta do Ouro Partial Marine Reserve', 'Quirimbas Archipelago (north)'],
    marine_life: ['Manta rays', 'Whale sharks', 'Humpback whales (seasonal)', 'Dolphins (Ponta do Ouro)', 'Turtles', 'Dugongs (Bazaruto, rare)'],
    season: 'Diving is possible year-round. Humpback whales typically pass roughly July to October. Megafauna presence varies year to year and is never guaranteed.',
    notes:
      'Tofo’s offshore reefs involve ocean launches through the surf and can be demanding. Research suggests megafauna populations here have changed over time, so set expectations accordingly and choose operators that support local research and responsible encounter guidelines.',
  },

  freediving: {
    score: 7,
    locations: ['Ocean safaris off Tofo (snorkel-based)', 'Bazaruto reefs'],
    notes:
      'Snorkel ocean safaris can offer whale shark encounters on good days. Follow encounter codes — no touching, no blocking the animal’s path, limited swimmers in the water.',
  },

  marine_life_notes:
    'Manta rays, whale sharks and humpbacks define the destination. Choose operators that follow responsible encounter codes and contribute to local marine research.',

  luxury: {
    score: 9,
    angle: 'Private-island lodges and marine experiences.',
    stay_types: ['Private-island lodges in Bazaruto', 'Beach villas', 'Small eco-lodges near Tofo'],
    experiences: ['Dhow sailing among the islands', 'Dune walks on Bazaruto', 'Ocean safaris', 'Seafood dinners on the beach', 'Combination with a South African or regional safari'],
  },

  scenery: {
    score: 10,
    landscape: 'Giant dunes, seagrass flats, palm-lined beaches and sandbanks.',
    water: 'Warm Indian Ocean water, turquoise in the archipelago and deep blue offshore.',
  },

  core_zones: ['Bazaruto Archipelago', 'Tofo and Inhambane', 'Ponta do Ouro', 'Quirimbas Archipelago'],
  best_months: ['may', 'june', 'july', 'august', 'september', 'october', 'november'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Drier, cooler months roughly May to November; hot, humid and wetter roughly December to April, with cyclone risk.' },
    { label: 'Surf', detail: 'Southern swells typically roughly April to September.' },
    { label: 'Diving', detail: 'Year-round; humpbacks typically roughly July to October.' },
    { label: 'European calendar', detail: 'Strong for summer and autumn; pairs well with a safari in the southern-hemisphere dry season.' },
  ],
  european_seasonal_angle:
    'The dry season overlaps the European summer and autumn, aligning with humpback season and classic safari months — ideal for a combined bush-and-beach trip.',
  season_types: ['summer', 'shoulder'],
  recommended_duration: '7–10 nights at the coast, longer with a safari.',

  traveller_profiles: ['diver', 'couples', 'honeymoon', 'active-luxury'],
  best_audience: 'Diving, reef life and private-island luxury.',
  audience_notes: [
    { profile: 'Marine-life divers', detail: 'Megafauna-focused diving on Africa’s Indian Ocean coast.' },
    { profile: 'Honeymooners', detail: 'Private islands paired with safari.' },
    { profile: 'Not ideal for', detail: 'Surf-first trips or travellers wanting easy, frequent flight connections.' },
  ],

  itinerary: [
    { days: 'Days 1–3', title: 'Tofo', detail: 'Ocean safaris and dives at offshore reefs with a responsible operator; surf Tofinho if the swell is running.' },
    { days: 'Days 4–7', title: 'Bazaruto Archipelago', detail: 'A private-island lodge: dhow sailing, reef snorkelling, dune walks and complete quiet.' },
    { days: 'Days 8–10', title: 'Safari extension', detail: 'Connect to a safari in a neighbouring country or region.' },
  ],

  planning_notes: [
    'Flight connections are typically via Johannesburg or Maputo; allow buffer time.',
    'Seek current health advice, including on malaria prevention.',
    'Ocean launches through the surf at Tofo can be bumpy — not ideal for those with back issues.',
    'Check current travel advisories for the region you plan to visit.',
    'Follow marine-encounter codes for whale sharks and mantas.',
  ],

  faqs: [
    { question: 'Is Mozambique good for diving?', answer: 'Yes, particularly for marine megafauna. Tofo is widely associated with manta rays and whale sharks, and the Bazaruto Archipelago protects reefs and seagrass habitats. Sightings vary and are never guaranteed.' },
    { question: 'When is humpback whale season in Mozambique?', answer: 'Humpbacks typically pass the coast roughly July to October.' },
  ],

  seo: {
    title: 'Mozambique Luxury Dive Holidays | Tofo & Bazaruto Islands',
    meta: 'Plan a luxury Mozambique ocean holiday: manta rays and whale sharks off Tofo, private-island lodges in Bazaruto, seasonal surf and safari combinations.',
    primary_keywords: ['Mozambique diving holiday', 'Bazaruto luxury lodge'],
    secondary_keywords: ['Tofo manta rays', 'Mozambique whale sharks', 'Mozambique beach and safari'],
  },

  related_destinations: ['south-africa', 'seychelles', 'mauritius', 'maldives'],
  related_articles: ['best-luxury-diving-destinations-marine-life', 'best-luxury-diving-holidays-world', 'luxury-ocean-travel-reef-conservation'],

  images: destinationImages('mozambique', {
    hero: 'Bazaruto dunes meeting turquoise channels from the air.',
    surf: 'Surfer on a right-hand point at Tofinho.',
    dive: 'Diver with a manta ray at a cleaning station, respectful distance.',
    freedive: 'Snorkeller alongside a whale shark at the recommended distance.',
    'marine-life': 'Humpback whale breaching offshore.',
    landscape: 'Sandbank and seagrass flats at low tide.',
    'human-experience': 'Dhow under sail between islands at sunset.',
    culture: 'Prawns grilled on the beach or a local market in Inhambane.',
    'luxury-stay': 'Private-island villa opening onto empty sand.',
    signature: 'Dhow silhouette against dunes at last light.',
  }),
};

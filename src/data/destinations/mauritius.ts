import type { Destination } from '../types';
import { destinationImages } from './_images';

export const mauritius: Destination = {
  name: 'Mauritius',
  displayName: 'Mauritius',
  country: 'Mauritius',
  region: 'Indian Ocean',
  slug: 'mauritius',

  positioning: 'Five-star resort culture, lagoons for every water sport and the famous reef wave beneath Le Morne.',
  hero_headline: 'Mauritius: Lagoons, Le Morne and Polished Resort Luxury',
  hero_subheadline: 'A reef-ringed island with sheltered lagoons, a celebrated left beneath Le Morne mountain, kite and wing foiling, diving off the north and west, and some of the Indian Ocean’s most accomplished resorts.',
  overview:
    'Mauritius is a resort-led island where the lagoon is the playground. A barrier reef encloses much of the coast, creating calm water for swimming, snorkelling and learning water sports, while passes in the reef produce surf — most famously the powerful left-hander beneath Le Morne on the south-west tip. The island is also a major kitesurfing destination. Diving around the north islets and the west coast adds variety. Luxury is polished and service-driven, with an exceptional depth of five-star resorts, spas and dining.',
  why_visit: [
    'Resort quality and service are among the strongest in the Indian Ocean.',
    'Calm lagoons suit mixed groups, families and couples, with real surf and kite options for the experienced.',
    'Multicultural food and a mountainous interior make non-water days rewarding.',
  ],

  surf: {
    score: 7,
    spots: ['One Eye, Le Morne (advanced, reef)', 'Tamarin Bay', 'Reef passes on the south coast'],
    best_for: ['Advanced surfers', 'Kitesurfers and wing foilers'],
    levels: ['intermediate', 'advanced'],
    season: 'South swells typically arrive roughly May to September during the southern winter.',
    notes:
      'One Eye is a powerful, shallow reef wave that is shared with kitesurfers on windy days and is suited to experienced surfers only. Most other surf requires boat access to reef passes. Beginners are better suited to lagoon-based activities.',
  },

  diving: {
    score: 8,
    sites: ['Coin de Mire (north)', 'Cathedral (Flic en Flac)', 'Blue Bay Marine Park (snorkel)', 'Wrecks off the north and west coasts'],
    marine_life: ['Turtles', 'Moray eels', 'Reef fish', 'Dolphins offshore', 'Humpback whales (seasonal)'],
    season: 'Diving is possible year-round; the warmer months (roughly October to April) often bring the clearest water, outside of cyclone events.',
    notes:
      'Mauritian diving offers caverns, drop-offs and wrecks rather than pristine coral everywhere. Blue Bay Marine Park is popular for snorkelling. Dolphin trips off the west coast are common; choose operators that follow distance rules and avoid crowding animals.',
  },

  freediving: {
    score: 7,
    locations: ['Lagoon edges and reef drop-offs on the west coast', 'Blue Bay Marine Park (snorkel)'],
    notes:
      'Calm lagoon days make for good snorkelling and freediving practice with qualified instructors. Watch for boat traffic in lagoons.',
  },

  marine_life_notes:
    'Turtles, reef fish and offshore dolphins are commonly seen; humpbacks pass seasonally. Responsible operators avoid swimming with dolphin pods that are resting.',

  luxury: {
    score: 9,
    angle: 'Five-star resorts and kite/surf experiences.',
    stay_types: ['Five-star beach resorts', 'Private villas', 'Golf and spa resorts', 'Boutique hotels on the south coast'],
    experiences: ['Private catamaran days', 'Kite and wing foil coaching in the lagoon', 'Le Morne mountain hike', 'Spa and wellness programmes', 'Creole, Indian and Chinese-influenced dining'],
  },

  scenery: {
    score: 9,
    landscape: 'Volcanic peaks, sugar-cane fields and the dramatic Le Morne Brabant (a UNESCO World Heritage site).',
    water: 'Calm turquoise lagoons inside the reef; deep blue beyond.',
  },

  core_zones: ['Le Morne', 'West coast (Tamarin, Flic en Flac)', 'South coast', 'North (Grand Baie, Coin de Mire)', 'Blue Bay'],
  best_months: ['april', 'may', 'june', 'september', 'october', 'november', 'december'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Warm, humid summer roughly November to April with cyclone risk; cooler, drier winter roughly May to October.' },
    { label: 'Surf', detail: 'South swells typically roughly May to September.' },
    { label: 'Diving', detail: 'Year-round; often clearest in the warmer months.' },
    { label: 'European calendar', detail: 'Excellent for winter sun, Christmas and autumn breaks.' },
  ],
  european_seasonal_angle:
    'Mauritius suits the European winter and festive season, with the shoulder months often a sweet spot for weather and value. Surfers and kiters favour the southern-winter months.',
  season_types: ['winter-sun', 'year-round'],
  recommended_duration: '8–12 nights.',

  traveller_profiles: ['couples', 'honeymoon', 'family', 'winter-sun', 'active-luxury'],
  best_audience: 'Resort luxury, couples and mixed water activities.',
  audience_notes: [
    { profile: 'Families', detail: 'Calm lagoons and excellent resort facilities.' },
    { profile: 'Kiters and experienced surfers', detail: 'Le Morne’s lagoon and reef.' },
    { profile: 'Not ideal for', detail: 'Beginner surfers or travellers wanting a dive-first destination.' },
  ],

  itinerary: [
    { days: 'Days 1–3', title: 'West coast', detail: 'Resort base near Le Morne or Tamarin; lagoon swims and a kite lesson.' },
    { days: 'Days 4–6', title: 'Water days', detail: 'Dive Cathedral or the north islets; experienced surfers check One Eye with local guidance.' },
    { days: 'Days 7–9', title: 'Land and lagoon', detail: 'Hike Le Morne, catamaran day, Creole food and spa.' },
  ],

  planning_notes: [
    'Cyclone season typically runs roughly November to April — check insurance and forecasts.',
    'One Eye is a heavy reef wave shared with kiters; for experienced surfers only.',
    'Choose dolphin operators that keep distance and limit swimmers.',
    'Check current entry requirements before travel.',
  ],

  faqs: [
    { question: 'Is Mauritius good for surfing?', answer: 'For experienced surfers, yes — particularly One Eye at Le Morne in the southern winter. Beginners will find lagoon activities more suitable.' },
    { question: 'When is the best time to visit Mauritius?', answer: 'Many travellers favour the shoulder months (roughly April to June and September to December). The southern winter (roughly May to October) suits surfers and kiters.' },
  ],

  seo: {
    title: 'Mauritius Luxury Ocean Holidays | Le Morne, Lagoons & Diving',
    meta: 'Plan a luxury Mauritius ocean holiday: five-star resorts, calm lagoons, Le Morne surf and kite, diving and the best season for European travellers.',
    primary_keywords: ['Mauritius luxury holiday', 'Mauritius surf'],
    secondary_keywords: ['Le Morne kite', 'One Eye surf Mauritius', 'Mauritius diving', 'Mauritius winter sun'],
  },

  related_destinations: ['seychelles', 'maldives', 'mozambique', 'south-africa'],
  related_articles: ['best-ocean-destinations-for-couples', 'luxury-ocean-escapes-christmas-new-year', 'luxury-ocean-travel-worth-paying-for'],

  images: destinationImages('mauritius', {
    hero: 'Le Morne Brabant above the lagoon with the reef line breaking.',
    surf: 'Surfer at One Eye with the mountain behind.',
    dive: 'Diver in a cavern at Cathedral, light shafts.',
    freedive: 'Freediver along a lagoon drop-off.',
    'marine-life': 'Turtle grazing on reef.',
    landscape: 'Underwater sand-flow optical illusion off Le Morne from the air.',
    'human-experience': 'Kitesurfer crossing the lagoon at Le Morne.',
    culture: 'Dholl puri at a roadside stand or Port Louis market.',
    'luxury-stay': 'Beach-front villa with lagoon access.',
    signature: 'Catamaran sunset off the west coast.',
  }),
};

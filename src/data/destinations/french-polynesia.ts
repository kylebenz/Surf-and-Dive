import type { Destination } from '../types';
import { destinationImages } from './_images';

export const frenchPolynesia: Destination = {
  name: 'French Polynesia',
  displayName: 'French Polynesia',
  country: 'France (overseas collectivity)',
  region: 'South Pacific',
  slug: 'french-polynesia',

  positioning: 'Lagoons, mountain islands and atoll passes alive with sharks and rays — the most cinematic ocean holiday in the Pacific.',
  hero_headline: 'French Polynesia: Lagoons, Passes and Teahupo’o',
  hero_subheadline: 'Dive the atoll passes of the Tuamotus, snorkel Moorea’s lagoons beneath jagged peaks and watch Teahupo’o from a boat — then return to an overwater villa above the reef.',
  overview:
    'French Polynesia is exceptional for lagoons, dramatic scenery and underwater experiences. Tahiti Tourisme describes Moorea’s clear lagoon environments and coral ecosystems, with marine life including stingrays, turtles, blacktip and lemon sharks. Farther out, the Tuamotu atolls are known for passes where tidal currents concentrate reef sharks and pelagic life. Surf is serious and specialised — Teahupo’o on Tahiti Iti is one of the most famous and dangerous waves in the world — while the overwater-villa tradition makes this one of the most refined ocean destinations anywhere. For European travellers it is about as far as travel goes, and it deserves a long stay.',
  why_visit: [
    'The combination of mountain islands and lagoon is unlike anywhere else: diving beside peaks that rise straight from the water gives every day a sense of place.',
    'Atoll passes such as those at Rangiroa and Fakarava are among the most celebrated drift dives in the Pacific, frequently associated with large numbers of reef sharks.',
    'Overwater villas, lagoon-facing spas and very low-density islands make it ideal for couples who want romance and ocean immersion in equal measure.',
  ],

  surf: {
    score: 9,
    spots: ['Teahupo’o, Tahiti Iti (expert only)', 'Papara (Tahiti)', 'Taapuna (Tahiti)', 'Haapiti (Moorea)', 'Fare passes (Huahine)'],
    best_for: ['Advanced surfers', 'Expert big-wave and barrel surfers', 'Surf spectating by boat'],
    levels: ['intermediate', 'advanced'],
    season: 'South-facing reefs such as Teahupo’o typically receive the strongest swells in the southern-hemisphere winter (roughly May to September). North-facing coasts tend to work in the austral summer (roughly November to March).',
    notes:
      'Most surf breaks over shallow reef in passes and is suited to experienced surfers. Teahupo’o is for experts only, but watching it from a boat in the channel on a solid day is a remarkable experience in itself. Papara offers a beach-break alternative on Tahiti. A local guide is strongly recommended for any reef session.',
  },

  diving: {
    score: 10,
    sites: ['Tiputa Pass, Rangiroa', 'South Pass (Tumakohua), Fakarava', 'Moorea lagoon and outer reef', 'Bora Bora lagoon (manta areas)', 'Tikehau'],
    marine_life: ['Grey reef sharks', 'Blacktip and lemon sharks', 'Manta rays', 'Stingrays', 'Turtles', 'Dolphins (Rangiroa, often seen)', 'Humpback whales (seasonal, regulated viewing)'],
    season: 'Diving is possible year-round. Many divers favour the drier months (roughly May to October). Humpback whale season is typically associated with roughly July to November, with strict viewing rules.',
    notes:
      'Pass dives on incoming tides are the signature experience: fast, exhilarating and best suited to divers comfortable with current. Lagoon and outer-reef dives around Moorea and Bora Bora are gentler. Fakarava is part of a UNESCO biosphere reserve — follow all local regulations.',
  },

  freediving: {
    score: 9,
    locations: ['Moorea lagoons', 'Tuamotu lagoon edges and pass mouths on slack tide (guided)', 'Tahiti outer reefs with qualified support'],
    notes:
      'Clear lagoons and outstanding marine life make French Polynesia particularly appealing for freediving and snorkelling. Pass currents can be very strong — only enter with qualified local guides who understand tides, and always freedive with a trained buddy.',
  },

  marine_life_notes:
    'Sharks, rays and turtles are frequently encountered, and humpback whales visit seasonally. Encounters are never guaranteed. Avoid operators that feed or crowd wildlife, keep your distance and follow whale-watching regulations, which are strictly applied.',

  luxury: {
    score: 10,
    angle: 'Overwater villas and lagoon experiences.',
    stay_types: ['Overwater villas and bungalows', 'Lagoon-facing resorts', 'Small family-run pensions on outer atolls', 'Yacht and dive liveaboards'],
    experiences: ['Private lagoon boat days', 'Guided pass drift dives', 'Boat trip to watch Teahupo’o in season', 'Polynesian dance and cultural evenings', 'Lagoon-side spa treatments'],
  },

  scenery: {
    score: 10,
    landscape: 'Volcanic peaks on Tahiti, Moorea and Bora Bora; low, remote coral rings across the Tuamotus.',
    water: 'Exceptionally clear lagoon water in gradients of turquoise, with deep ocean blue outside the reef.',
  },

  core_zones: ['Tahiti and Tahiti Iti', 'Moorea', 'Bora Bora', 'Tuamotu archipelago (Rangiroa, Fakarava, Tikehau)', 'Huahine'],
  best_months: ['may', 'june', 'july', 'august', 'september', 'october', 'december'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Cooler, drier season roughly May to October; warmer, wetter and more humid roughly November to April.' },
    { label: 'Surf', detail: 'South-facing reefs typically strongest roughly May to September; north-facing coasts in the austral summer.' },
    { label: 'Diving', detail: 'Year-round, with many divers favouring the drier months. Whale season typically roughly July to November.' },
    { label: 'European calendar', detail: 'A strong honeymoon and long-summer destination; also works for festive travel accepting wetter weather.' },
  ],
  european_seasonal_angle:
    'The drier season coincides with the European summer and early autumn. Given the distance — typically involving long connections — it is best treated as a two-week trip or a honeymoon rather than a short break.',
  season_types: ['summer', 'shoulder'],
  recommended_duration: '12–16 nights, ideally combining a high island (Moorea or Tahiti) with a Tuamotu atoll.',

  traveller_profiles: ['couples', 'honeymoon', 'diver', 'freediver', 'serious-surfer'],
  best_audience: 'Couples, advanced surfers and lagoon lovers.',
  audience_notes: [
    { profile: 'Honeymooners and couples', detail: 'Overwater villas, lagoon dining and some of the most romantic scenery in ocean travel.' },
    { profile: 'Divers', detail: 'Atoll pass drift dives associated with large numbers of reef sharks — best with good current experience.' },
    { profile: 'Freedivers and snorkellers', detail: 'Clear, sheltered lagoons with abundant marine life.' },
    { profile: 'Not ideal for', detail: 'Short trips, travellers on a tight schedule or beginner surfers expecting easy waves.' },
  ],

  itinerary: [
    { days: 'Days 1–2', title: 'Tahiti arrival', detail: 'Arrive in Papeete, rest and, in season, take a boat to watch Teahupo’o from the channel.' },
    { days: 'Days 3–5', title: 'Moorea', detail: 'A short ferry or flight to Moorea for lagoon snorkelling with a guide, outer-reef dives and mountain viewpoints.' },
    { days: 'Days 6–9', title: 'Tuamotu atoll', detail: 'Fly to Rangiroa or Fakarava for pass drift dives timed with the tides, lagoon freediving with an instructor and slow island days.' },
    { days: 'Days 10–12', title: 'Lagoon finale', detail: 'An overwater villa on Bora Bora or Moorea for a final stretch of quiet — no diving within the pre-flight interval.' },
  ],

  planning_notes: [
    'Inter-island flights are limited and baggage allowances can be strict — check before packing dive or surf equipment.',
    'Pass dives are tide-dependent; let local operators plan timing and only dive within your training.',
    'Whale-watching and in-water encounters are tightly regulated; use licensed operators.',
    'Prices on outer islands can be high and services limited; plan cash and logistics in advance.',
    'Verify current entry requirements for this French overseas collectivity — they differ from mainland France.',
    'Respect lagoon protection zones and never stand on coral.',
  ],

  faqs: [
    { question: 'Can I surf Teahupo’o?', answer: 'Teahupo’o is one of the heaviest waves in the world and is suited only to expert surfers with substantial reef-barrel experience. Most travellers enjoy it by boat from the channel with a local operator.' },
    { question: 'What is the best island for diving in French Polynesia?', answer: 'Rangiroa and Fakarava in the Tuamotus are best known for pass drift dives. Moorea offers gentler lagoon and outer-reef diving. The best choice depends on your experience with current.' },
    { question: 'Is French Polynesia good for freediving?', answer: 'Clear lagoons and rich marine life make it appealing, but pass currents can be dangerous. Always freedive with qualified local guides and a trained buddy.' },
    { question: 'How long should I stay in French Polynesia?', answer: 'Given the distance from Europe, twelve to sixteen nights works best, ideally combining a high island with an atoll.' },
  ],

  seo: {
    title: 'French Polynesia Luxury Surf & Dive Holidays | Tahiti & Islands',
    meta: 'Explore luxury French Polynesia surf and dive holidays with dramatic reefs, lagoons, Tahiti, Teahupo’o and premium island stays.',
    primary_keywords: ['French Polynesia luxury holiday', 'French Polynesia diving'],
    secondary_keywords: ['Tahiti surf', 'Teahupoo', 'Rangiroa diving', 'Fakarava diving', 'Moorea snorkelling'],
  },

  related_destinations: ['fiji', 'maldives', 'hawaii', 'seychelles'],
  related_articles: ['fiji-vs-french-polynesia-luxury-ocean', 'best-luxury-diving-destinations-marine-life', 'best-freediving-destinations-clear-water', 'luxury-ocean-escapes-christmas-new-year', 'best-ocean-destinations-for-couples'],
  comparisons: ['fiji-vs-french-polynesia'],

  images: destinationImages('french-polynesia', {
    hero: 'Moorea’s peaks above a turquoise lagoon, reef edge visible offshore.',
    surf: 'Teahupo’o from the channel with a surfer for scale — a real session, not a composite.',
    dive: 'Divers holding position in a Tuamotu pass with grey reef sharks in blue water.',
    freedive: 'Freediver over a sand lagoon floor with a stingray at natural distance.',
    'marine-life': 'Blacktip reef sharks in shallow lagoon water.',
    landscape: 'Atoll ring from the air, motu and pass clearly visible.',
    'human-experience': 'Outrigger canoe paddler crossing a calm lagoon at sunrise.',
    culture: 'Polynesian dance or a pension breakfast with tropical fruit.',
    'luxury-stay': 'Overwater villa with glass floor panel and lagoon below.',
    signature: 'Humpback whale fluke at a regulated distance, mountains behind.',
  }),
};

import type { Destination } from '../types';
import { destinationImages } from './_images';

export const siargao: Destination = {
  name: 'Siargao',
  displayName: 'Siargao',
  country: 'Philippines',
  region: 'Southeast Asia',
  slug: 'siargao',

  positioning: 'Cloud 9’s reef, island-hopping lagoons and a relaxed boutique scene: tropical surf lifestyle with room to grow.',
  hero_headline: 'Siargao: Cloud 9, Lagoons and the Tropical Surf Lifestyle',
  hero_subheadline: 'A teardrop-shaped Philippine island built around one famous reef break, with mangrove lagoons, island-hopping days and a boutique stay scene that favours character over scale.',
  overview:
    'Siargao has grown from a remote surf outpost into one of Southeast Asia’s most talked-about island escapes, yet it retains a relaxed, palm-shaded character. Cloud 9, the island’s famous right-hand reef break near General Luna, gives the island its identity, but there are softer waves for learners and a wider ocean world beyond: mangrove lagoons, sandbar islands and clear water for snorkelling and freediving. Luxury here is boutique (design-led villas, small resorts, good coffee and private boat days) rather than polished mega-resort service.',
  why_visit: [
    'It combines a serious surf reputation with genuinely beginner-friendly waves nearby, making it work for mixed-ability groups.',
    'Island-hopping trips to sandbars, lagoons and mangroves give the non-surf days real substance.',
    'The atmosphere (relaxed, young and creative) suits couples and friends who want a tropical surf lifestyle more than a formal resort.',
  ],

  surf: {
    score: 9,
    spots: ['Cloud 9 (advanced)', 'Jacking Horse (beginner to intermediate)', 'Quiksilver (intermediate)', 'Stimpy’s (advanced)', 'Rock Island', 'Pacifico (north-east coast)'],
    best_for: ['Beginners at selected spots', 'Intermediate surfers', 'Advanced surfers at Cloud 9 and outer reefs'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'The strongest swells typically arrive roughly August to November, overlapping with the regional typhoon season. Smaller, cleaner days occur outside that window.',
    notes:
      'Cloud 9 breaks over shallow reef and can be crowded and powerful on bigger days. Jacking Horse and similar inside spots are commonly used for lessons. Boat access is required for several outer reefs. Typhoon season can bring both good swell and serious disruption: monitor forecasts closely.',
  },

  diving: {
    score: 8,
    sites: ['Reefs around General Luna', 'Sohoton Cove and Bucas Grande (nearby, snorkel and lagoons)', 'Island-hopping reefs near Daku and Guyam'],
    marine_life: ['Reef fish', 'Turtles', 'Stingless jellyfish (Sohoton, seasonal)', 'Hard and soft corals'],
    season: 'Diving and snorkelling are best on calm days outside major swell events; the drier months (roughly March to July) often bring calmer seas.',
    notes:
      'Diving is a secondary activity here compared with other Philippine regions such as Palawan or Cebu, but there are reef sites and memorable lagoon experiences within reach. Combine with a dive-focused region elsewhere in the Philippines for a stronger underwater component.',
  },

  freediving: {
    score: 8,
    locations: ['Sugba Lagoon', 'Calm reefs around General Luna', 'Sohoton Cove (lagoon snorkelling)'],
    notes:
      'Sheltered lagoons and clear water on calm days make Siargao pleasant for recreational freediving. Use qualified local instructors, never dive alone and follow lagoon regulations and boat-traffic guidance.',
  },

  marine_life_notes:
    'Turtles and reef fish are common snorkelling encounters, while lagoon ecosystems add a different texture. Follow local conservation rules in protected lagoons and never touch marine life.',

  luxury: {
    score: 7,
    angle: 'Boutique resorts, island trips and wellness.',
    stay_types: ['Boutique resorts', 'Design-led private villas', 'Small surf lodges'],
    experiences: ['Private island-hopping boat days', 'Surf coaching at beginner-friendly spots', 'Yoga and wellness studios', 'Lagoon and mangrove tours', 'Island-to-table dining'],
  },

  scenery: {
    score: 9,
    landscape: 'Palm forests, mangroves, limestone islets and sandbar islands.',
    water: 'Warm tropical water ranging from glassy lagoons to open Pacific swell.',
  },

  core_zones: ['General Luna and Cloud 9', 'Pacifico', 'Sugba Lagoon (Del Carmen)', 'Naked, Daku and Guyam islands', 'Bucas Grande'],
  best_months: ['march', 'april', 'august', 'september', 'october', 'november'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Tropical and humid year-round. Typhoon risk in the region is typically highest roughly between July and November.' },
    { label: 'Surf', detail: 'Strongest swell typically roughly August to November; smaller and cleaner at other times.' },
    { label: 'Diving & lagoons', detail: 'Calmer seas often in the drier months (roughly March to July).' },
    { label: 'European calendar', detail: 'Autumn suits surfers; Easter and spring suit couples and lagoon-focused trips.' },
  ],
  european_seasonal_angle:
    'Siargao’s best surf aligns with the European autumn, making it an interesting alternative to Atlantic autumn trips, with the caveat that typhoon season requires flexibility and good insurance.',
  season_types: ['shoulder'],
  recommended_duration: '8-12 nights; combine with Palawan or Cebu for a broader Philippines trip.',

  traveller_profiles: ['couples', 'solo', 'serious-surfer', 'freediver', 'active-luxury'],
  best_audience: 'Tropical surf lifestyle seekers, couples and younger luxury travellers.',
  audience_notes: [
    { profile: 'Couples and friends', detail: 'Surf, island-hopping and a relaxed social scene with boutique stays.' },
    { profile: 'Progressing surfers', detail: 'Beginner-friendly inside spots and a famous reef to aim for.' },
    { profile: 'Not ideal for', detail: 'Travellers seeking traditional five-star resort service or guaranteed calm weather in autumn.' },
  ],

  itinerary: [
    { days: 'Days 1-2', title: 'Arrive in General Luna', detail: 'Domestic connection to Siargao, check into a boutique stay and take an easy first session or a beach walk.' },
    { days: 'Days 3-5', title: 'Surf mornings', detail: 'Lessons or guided sessions matched to your level; afternoons for yoga, cafés and recovery.' },
    { days: 'Day 6', title: 'Island-hopping', detail: 'Private boat to Naked, Daku and Guyam islands for snorkelling and lunch.' },
    { days: 'Days 7-8', title: 'Lagoons', detail: 'Sugba Lagoon or Sohoton Cove for paddling, freediving with an instructor and quiet water.' },
    { days: 'Days 9-10', title: 'Final sessions', detail: 'Last surfs, sunset at the boardwalk and onward travel.' },
  ],

  planning_notes: [
    'Domestic flights connect via Manila or Cebu: allow buffer for weather delays.',
    'Typhoon season (roughly July to November) requires flexible bookings and good insurance.',
    'Cloud 9 can be crowded; a local guide helps with timing and etiquette.',
    'Protected lagoons may have entry fees and rules. Follow them.',
    'Cash may be needed in some areas; check current banking options.',
  ],

  faqs: [
    { question: 'Is Siargao good for beginner surfers?', answer: 'Yes, at the right spots. Inside breaks such as Jacking Horse are commonly used for lessons, while Cloud 9 itself suits experienced surfers.' },
    { question: 'When is the surf season in Siargao?', answer: 'Swells are typically strongest roughly August to November, which overlaps with typhoon season. Plan flexibly.' },
    { question: 'Siargao or Bali?', answer: 'Bali offers more variety, diving and luxury infrastructure. Siargao is smaller, quieter and more boutique, with a strong island-hopping component.' },
  ],

  seo: {
    title: 'Siargao Luxury Surf Holidays | Cloud 9 & Island Escapes',
    meta: 'Plan a boutique Siargao surf holiday: Cloud 9, beginner-friendly waves, lagoons, island-hopping and the best time to visit from Europe.',
    primary_keywords: ['Siargao surf holiday', 'Siargao luxury resort'],
    secondary_keywords: ['Cloud 9 surf', 'Siargao surf season', 'Siargao island hopping'],
  },

  related_destinations: ['philippines', 'bali-nusa-penida', 'mentawai-islands', 'sri-lanka'],
  related_articles: ['best-luxury-surf-destinations-beginners', 'best-autumn-ocean-holidays-europe', 'best-freediving-destinations-clear-water'],

  images: destinationImages('siargao', {
    hero: 'Cloud 9 boardwalk and reef from above, surfers in the line-up.',
    surf: 'Surfer on a clean right at Cloud 9.',
    dive: 'Snorkeller over coral near Guyam Island.',
    freedive: 'Freediver in Sugba Lagoon’s clear water with mangroves at the edge.',
    'marine-life': 'Turtle grazing on a reef flat, natural distance.',
    landscape: 'Palm forest stretching to the coast from the air.',
    'human-experience': 'Bangka boat heading to the islands with boards aboard.',
    culture: 'Fresh kinilaw or street-side market in General Luna.',
    'luxury-stay': 'Boutique villa veranda opening toward palms and ocean.',
    signature: 'Naked Island sandbar at low tide with turquoise water.',
  }),
};

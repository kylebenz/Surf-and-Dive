import type { Destination } from '../types';
import { destinationImages } from './_images';

export const mexicoPacific: Destination = {
  name: 'Mexico Pacific',
  displayName: 'Mexico’s Pacific coast',
  country: 'Mexico',
  region: 'Central America',
  slug: 'mexico-pacific',

  positioning: 'Warm-water Pacific surf from gentle points to the Mexican Pipeline, with some of the Americas’ most polished beach resorts.',
  hero_headline: 'Mexico’s Pacific Coast: Easy Luxury, Serious Surf',
  hero_subheadline: 'Point breaks around Punta Mita, the heavy beach break at Puerto Escondido, Baja’s desert coast and protected islands — paired with resorts that make the luxury effortless.',
  overview:
    'Mexico’s Pacific coast stretches from the desert shores of Baja California to the jungle-backed beaches of Oaxaca, and it offers some of the most varied warm-water surf in the Americas. Around Punta Mita and the Riviera Nayarit, gentle points and reefs sit beside high-end resorts; Sayulita is a lively learning hub; Puerto Escondido’s Zicatela is one of the heaviest beach breaks in the world. Baja Sur adds desert-meets-ocean scenery and access to protected areas such as Cabo Pulmo on the Sea of Cortez side. For European travellers, it combines surf, food culture and easy luxury in a single, well-connected trip.',
  why_visit: [
    'Warm water and consistent south swells in the European summer and early autumn.',
    'High-end resorts, villas and outstanding food make the land side effortless.',
    'Range: beginner points and serious barrels within the same country.',
  ],

  surf: {
    score: 9,
    spots: ['Punta Mita points (Nayarit)', 'La Lancha (Nayarit)', 'Sayulita (beginner to intermediate)', 'Puerto Escondido – Zicatela (expert)', 'Puerto Escondido – La Punta (intermediate)', 'Barra de la Cruz (Oaxaca)', 'Todos Santos area (Baja Sur)'],
    best_for: ['Beginners around Sayulita and Punta Mita', 'Intermediate surfers', 'Advanced and expert surfers in Oaxaca'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'South swells typically run roughly April to October, with the most powerful conditions in the middle of that window. Winter brings smaller, cleaner waves in many areas, plus north swells for some Baja and Nayarit spots.',
    notes:
      'Zicatela is one of the heaviest beach breaks anywhere and suited to experts only; La Punta, at the other end of the bay, is far friendlier. Nayarit’s points and reefs are well suited to learning and longboarding. Riptides and shorebreak can be strong — surf with local guidance.',
  },

  diving: {
    score: 7,
    sites: ['Islas Marietas National Park (Nayarit, regulated)', 'Cabo Pulmo National Park (Baja Sur, Sea of Cortez)', 'Revillagigedo Archipelago (liveaboard only)'],
    marine_life: ['Humpback whales (winter, regulated)', 'Manta rays', 'Sea lions (Baja)', 'Schooling fish (Cabo Pulmo)', 'Giant oceanic mantas and sharks (Revillagigedo)'],
    season: 'Diving varies by region. Whale season along the Pacific coast typically runs in winter (roughly December to March). Revillagigedo liveaboards typically operate roughly November to May.',
    notes:
      'Coastal diving is good rather than world-class, but protected areas such as Cabo Pulmo — a widely cited marine recovery story — and the remote Revillagigedo islands, a UNESCO World Heritage site reached by liveaboard, are exceptional for experienced divers.',
  },

  freediving: {
    score: 6,
    locations: ['Calm coves in Nayarit', 'Sea of Cortez (Baja Sur) on calm days'],
    notes:
      'Visibility on the open Pacific coast is variable. The Sea of Cortez side of Baja can offer calmer, clearer conditions for guided freediving and snorkelling.',
  },

  marine_life_notes:
    'Humpback whales visit in winter, and protected areas host rays, sea lions and dense fish life. Whale watching and access to protected islands are regulated — use licensed operators.',

  luxury: {
    score: 9,
    angle: 'Luxury resorts and surf guides.',
    stay_types: ['High-end beach resorts in Punta Mita', 'Private villas in Nayarit', 'Boutique hotels in Todos Santos and Puerto Escondido', 'Desert-meets-ocean retreats in Baja'],
    experiences: ['Private surf guiding to Nayarit points', 'Licensed whale-watching in winter', 'Mezcal and Oaxacan food experiences', 'Spa and wellness programmes', 'Boat trips to protected islands'],
  },

  scenery: {
    score: 9,
    landscape: 'Jungle-backed bays in Nayarit and Oaxaca; cactus desert meeting the ocean in Baja.',
    water: 'Warm Pacific water; clearer in sheltered coves and the Sea of Cortez.',
  },

  core_zones: ['Punta Mita and Riviera Nayarit', 'Sayulita', 'Baja California Sur (Pacific and East Cape)', 'Oaxaca (Puerto Escondido)'],
  best_months: ['april', 'may', 'june', 'september', 'october', 'november', 'december'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Dry season roughly November to May; rainy season roughly June to October with hurricane risk, particularly later in the season.' },
    { label: 'Surf', detail: 'South swells typically roughly April to October; smaller, cleaner winter conditions in many areas.' },
    { label: 'Diving', detail: 'Region-dependent; whale season in winter.' },
    { label: 'European calendar', detail: 'Works for spring breaks, late summer and the festive season.' },
  ],
  european_seasonal_angle:
    'Mexico’s Pacific coast can serve both a late-summer surf trip and a winter escape focused on resort luxury and whale season. Hurricane season (roughly June to November, peaking later) requires flexibility.',
  season_types: ['winter-sun', 'summer', 'shoulder'],
  recommended_duration: '8–12 nights.',

  traveller_profiles: ['couples', 'family', 'active-luxury', 'serious-surfer', 'winter-sun'],
  best_audience: 'Surf plus high-end resorts and easy luxury.',
  audience_notes: [
    { profile: 'Couples and families', detail: 'Resort comfort with gentle surf nearby.' },
    { profile: 'Experienced surfers', detail: 'Oaxaca’s powerful beach breaks in the south-swell season.' },
    { profile: 'Not ideal for', detail: 'Coral-reef divers seeking clear water close to shore.' },
  ],

  itinerary: [
    { days: 'Days 1–2', title: 'Punta Mita', detail: 'Arrive via Puerto Vallarta, settle into a resort or villa, first session on a gentle point.' },
    { days: 'Days 3–5', title: 'Nayarit surf and coast', detail: 'Guided sessions at points and reefs; Sayulita for a lively afternoon; a regulated boat trip to the Marietas.' },
    { days: 'Days 6–9', title: 'Oaxaca (optional)', detail: 'Experienced surfers can fly to Puerto Escondido for the south-swell season; others extend resort time.' },
    { days: 'Day 10', title: 'Depart', detail: 'Return via Mexico City or Puerto Vallarta.' },
  ],

  planning_notes: [
    'Zicatela is for experts only — check conditions and surf with local guidance.',
    'Hurricane season requires flexible bookings and good insurance.',
    'Access to Islas Marietas is regulated with limited daily visitors.',
    'Check current travel advice for the specific regions you plan to visit.',
    'Rip currents are common; respect lifeguard flags where present.',
  ],

  faqs: [
    { question: 'Is Mexico’s Pacific coast good for beginners?', answer: 'Yes, in the right areas. Sayulita and parts of the Punta Mita coastline suit learning, while Puerto Escondido’s Zicatela is for experts only.' },
    { question: 'When is surf season on Mexico’s Pacific coast?', answer: 'South swells typically run roughly April to October; winter is often smaller and cleaner in many areas.' },
  ],

  seo: {
    title: 'Mexico Pacific Luxury Surf Holidays | Punta Mita, Baja & Oaxaca',
    meta: 'Plan a luxury Mexico Pacific surf holiday: Punta Mita points, Sayulita, Puerto Escondido, Baja and refined resorts, with seasons explained for European travellers.',
    primary_keywords: ['Mexico luxury surf holiday', 'Punta Mita surf'],
    secondary_keywords: ['Puerto Escondido surf', 'Sayulita surf', 'Baja surf', 'Mexico surf season'],
  },

  related_destinations: ['costa-rica', 'hawaii', 'fiji', 'south-africa'],
  related_articles: ['best-luxury-surf-destinations-beginners', 'best-luxury-surf-destinations-advanced-surfers', 'luxury-surf-resorts-vs-surf-charters'],

  images: destinationImages('mexico-pacific', {
    hero: 'Nayarit point break with jungle headland and warm evening light.',
    surf: 'Surfer in a heavy Zicatela barrel, Puerto Escondido.',
    dive: 'Diver with schooling fish at Cabo Pulmo.',
    freedive: 'Snorkeller in calm Sea of Cortez water above sand.',
    'marine-life': 'Humpback whale breach from a licensed boat in winter.',
    landscape: 'Baja desert cacti meeting the Pacific.',
    'human-experience': 'Longboarder walking the nose on a gentle Punta Mita wave.',
    culture: 'Oaxacan market or tacos de pescado at a beach stand.',
    'luxury-stay': 'Resort villa terrace opening to a surf point.',
    signature: 'Sunset over Sayulita with surfers silhouetted.',
  }),
};

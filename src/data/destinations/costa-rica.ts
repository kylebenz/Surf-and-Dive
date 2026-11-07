import type { Destination } from '../types';
import { destinationImages } from './_images';

export const costaRica: Destination = {
  name: 'Costa Rica',
  displayName: 'Costa Rica',
  country: 'Costa Rica',
  region: 'Central America',
  slug: 'costa-rica',

  positioning: 'Pacific surf framed by rainforest, wildlife and wellness — the destination where the land is as rich as the waves.',
  hero_headline: 'Costa Rica: Pacific Surf, Rainforest and Wellness',
  hero_subheadline: 'Consistent Pacific beach and point breaks, howler monkeys at dawn, eco-luxury lodges and a wellness culture built around the rhythm of the tides.',
  overview:
    'Costa Rica works differently from island destinations: surf is the anchor, while rainforest, wildlife and wellness fill the rest of the itinerary. The Pacific coast from Guanacaste through the Nicoya Peninsula to the southern beaches offers surf for every level, from forgiving beach breaks at Tamarindo and Nosara to long, demanding point waves such as Pavones. Luxury here leans toward eco-resorts, design-led jungle villas and yoga retreats rather than overwater villas. Diving is a secondary attraction on the mainland coast, though offshore islands offer some of the most remarkable pelagic encounters in the eastern Pacific.',
  why_visit: [
    'Surf and nature are inseparable here. Few destinations let you surf in the morning and walk through rainforest with a naturalist guide in the afternoon.',
    'There is suitable surf for every level, with plenty of established schools around beginner-friendly beaches.',
    'Wellness culture — yoga, spa, nutrition — is deeply woven into the surf towns, especially around Nosara and Santa Teresa.',
  ],

  surf: {
    score: 9,
    spots: ['Witch’s Rock (Santa Rosa National Park, boat access)', 'Ollie’s Point', 'Tamarindo (beginner)', 'Playa Grande', 'Nosara / Playa Guiones', 'Santa Teresa and Mal País', 'Pavones (long left point)', 'Dominical'],
    best_for: ['Beginners', 'Intermediate surfers', 'Advanced point-break surfers', 'Surf and wellness retreats'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'The Pacific coast typically receives larger south swells in the green season (roughly May to October). The dry season (roughly December to April) often brings cleaner, smaller conditions with offshore winds in Guanacaste — friendly for learning and improving.',
    notes:
      'Beach breaks dominate much of the coast, making Costa Rica one of the more forgiving long-haul surf destinations. Point breaks such as Pavones and boat-access waves like Witch’s Rock suit experienced surfers. River mouths and estuaries carry crocodile warnings in some areas — follow local advice.',
  },

  diving: {
    score: 6,
    sites: ['Catalina Islands (Guanacaste)', 'Bat Islands (Islas Murciélago, seasonal)', 'Caño Island Biological Reserve', 'Cocos Island (liveaboard only)'],
    marine_life: ['Manta and devil rays (seasonal)', 'Bull sharks (Bat Islands, seasonal)', 'Whitetip reef sharks', 'Humpback whales (seasonal)', 'Hammerhead sharks (Cocos Island)'],
    season: 'Guanacaste diving often varies with seasonal upwellings that cool the water and bring nutrient-rich conditions. Cocos Island is reached only by liveaboard over a long open-ocean crossing.',
    notes:
      'Mainland diving is rewarding but secondary to surf. Cocos Island is a world-renowned but remote pelagic destination suited to experienced divers prepared for a multi-day liveaboard. Treat it as a separate trip rather than a day excursion.',
  },

  freediving: {
    score: 6,
    locations: ['Calm bays around the Papagayo Peninsula', 'Caño Island (guided snorkel)'],
    notes:
      'Visibility on the Pacific coast is variable, so freediving is not a primary reason to visit. Snorkelling around Caño Island with guides can be excellent on good days.',
  },

  marine_life_notes:
    'Humpback whales visit the Pacific coast seasonally, and offshore islands host rays and sharks. On land, sloths, monkeys and birds add a wildlife dimension few ocean destinations can match. Follow responsible-viewing guidance for whales and turtles, including nesting beaches.',

  luxury: {
    score: 9,
    angle: 'Luxury eco-resorts, wellness and surf guides.',
    stay_types: ['Eco-luxury lodges', 'Jungle villas above the beach', 'Wellness and yoga retreats', 'Resorts on the Papagayo Peninsula'],
    experiences: ['Private surf coaching and video analysis', 'Rainforest walks with naturalist guides', 'Boat trips to Witch’s Rock and Ollie’s Point', 'Yoga, spa and nutrition programmes', 'Sunset horse rides on the beach'],
  },

  scenery: {
    score: 10,
    landscape: 'Rainforest meeting long Pacific beaches, rocky headlands and dry tropical forest in the north.',
    water: 'Warm Pacific water; clarity varies with season and upwelling.',
  },

  core_zones: ['Guanacaste', 'Nicoya Peninsula (Nosara, Santa Teresa)', 'Papagayo Peninsula', 'Southern Pacific (Dominical, Pavones, Osa)'],
  best_months: ['december', 'january', 'february', 'march', 'april', 'september'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Dry season roughly December to April; green season roughly May to November with afternoon rains, often heaviest around September and October in many areas.' },
    { label: 'Surf', detail: 'Bigger south swells typically in the green season; cleaner, smaller dry-season conditions suit learning.' },
    { label: 'Diving', detail: 'Variable; seasonal upwellings in Guanacaste affect temperature and visibility.' },
    { label: 'European calendar', detail: 'A strong winter-sun choice (December to April), including Christmas and February half-term.' },
  ],
  european_seasonal_angle:
    'Costa Rica’s dry season aligns well with the European winter, making it one of the stronger long-haul winter-sun options for surfers who also want rainforest and wellness.',
  season_types: ['winter-sun', 'year-round'],
  recommended_duration: '10–14 nights, combining one surf town with a rainforest stay.',

  traveller_profiles: ['couples', 'family', 'active-luxury', 'winter-sun', 'solo'],
  best_audience: 'Surf + rainforest + wildlife + wellness.',
  audience_notes: [
    { profile: 'Active luxury travellers', detail: 'Surf, hike, spot wildlife and recover with yoga and spa.' },
    { profile: 'Families', detail: 'Beginner-friendly beaches and wildlife experiences that appeal across generations.' },
    { profile: 'Learning and improving surfers', detail: 'Plenty of forgiving beach breaks and professional schools.' },
    { profile: 'Not ideal for', detail: 'Divers prioritising reef quality and clear water close to shore.' },
  ],

  itinerary: [
    { days: 'Days 1–2', title: 'Arrive in Guanacaste', detail: 'Fly into Liberia, transfer to a Papagayo or Tamarindo base and take an easy first session.' },
    { days: 'Days 3–5', title: 'Surf and coaching', detail: 'Daily coached sessions; one boat day to Witch’s Rock if your level and the conditions allow.' },
    { days: 'Days 6–8', title: 'Nicoya wellness', detail: 'Move to Nosara or Santa Teresa for beach breaks, yoga and slow afternoons.' },
    { days: 'Days 9–11', title: 'Rainforest', detail: 'A rainforest or volcano lodge with naturalist-guided walks, hot springs and wildlife.' },
    { days: 'Day 12', title: 'Depart', detail: 'Return via Liberia or San José.' },
  ],

  planning_notes: [
    'Roads can be slow and unpaved in places; minimise moves and consider domestic flights.',
    'Rip currents are common on Pacific beach breaks — surf at lifeguarded or guided spots when learning.',
    'Heed crocodile warnings near river mouths in some areas.',
    'Follow responsible viewing rules for nesting turtles and whales.',
    'Check current entry and health requirements before travel.',
  ],

  faqs: [
    { question: 'Is Costa Rica good for beginner surfers?', answer: 'Yes. Much of the Pacific coast consists of beach breaks, and areas such as Tamarindo and Nosara have established surf schools.' },
    { question: 'When is the best time to surf in Costa Rica?', answer: 'The green season (roughly May to October) typically brings bigger south swells; the dry season (roughly December to April) often offers cleaner, smaller waves and better weather for a winter escape.' },
    { question: 'Is Costa Rica good for diving?', answer: 'Mainland diving is rewarding but secondary to surf. Cocos Island is world-renowned for pelagic life but is reached only by multi-day liveaboard.' },
  ],

  seo: {
    title: 'Costa Rica Luxury Surf Holidays | Pacific Beach Escapes',
    meta: 'Plan a luxury Costa Rica surf holiday with Pacific waves, rainforest, wildlife, wellness and premium beach experiences.',
    primary_keywords: ['Costa Rica luxury surf holiday', 'Costa Rica surf retreat'],
    secondary_keywords: ['Nosara surf', 'Guanacaste surf', 'Costa Rica eco luxury', 'Costa Rica winter sun'],
  },

  related_destinations: ['mexico-pacific', 'hawaii', 'sri-lanka', 'fernando-de-noronha'],
  related_articles: ['best-winter-sun-surf-holidays-europe', 'best-luxury-surf-destinations-beginners', 'best-luxury-surf-holidays-europeans', 'choose-surf-destination-non-surfer-partner'],

  images: destinationImages('costa-rica', {
    hero: 'Rainforest-backed Pacific beach with lines of swell and a lone surfer.',
    surf: 'Surfer on a long left point wave at Pavones.',
    dive: 'Diver with rays near the Catalina Islands, natural light.',
    freedive: 'Snorkeller over rocks off Caño Island on a clear day.',
    'marine-life': 'Humpback whale breach at regulated distance off the southern Pacific.',
    landscape: 'Headland and jungle canopy above Nosara.',
    'human-experience': 'Surf coach and student on the sand reviewing a session.',
    culture: 'Casado lunch or a local market, candid.',
    'luxury-stay': 'Jungle villa deck overlooking the Pacific.',
    signature: 'Sunset surf session with silhouetted palms.',
  }),
};

import type { Destination } from '../types';
import { destinationImages } from './_images';

export const sriLanka: Destination = {
  name: 'Sri Lanka',
  displayName: 'Sri Lanka',
  country: 'Sri Lanka',
  region: 'Indian Ocean',
  slug: 'sri-lanka',

  positioning: 'Two surf coasts with opposite seasons, boutique heritage hotels and wildlife safaris — luxury that feels considered rather than excessive.',
  hero_headline: 'Sri Lanka: Two Coasts, Two Seasons, One Island',
  hero_subheadline: 'Point breaks and reef waves on the south coast in the European winter, Arugam Bay in the summer — with boutique villas, tea country and safaris in between.',
  overview:
    'Sri Lanka is one of the most useful ocean destinations for European travellers because its two coasts run on different seasons. Sri Lanka Tourism lists extensive coastal water-sport areas and identifies Hikkaduwa as a surfing and diving location with a November to March surf season, while the east coast around Arugam Bay comes into its own during the European summer. The south coast — Weligama, Mirissa, Ahangama, Midigama — offers waves for every level, with some of the most appealing boutique villas and heritage hotels in Asia nearby. Add tea country, cultural sites and national-park safaris, and you have a trip with remarkable depth for its size.',
  why_visit: [
    'Opposite coastal seasons mean Sri Lanka can work for both winter-sun and summer trips — provided you choose the right coast.',
    'Surf variety along the south coast suits beginners, improvers and experienced surfers within short distances.',
    'Boutique luxury is a real strength: colonial-era villas, design hotels around Galle and Tangalle, and excellent value relative to many long-haul destinations.',
  ],

  surf: {
    score: 9,
    spots: ['Weligama Bay (beginner)', 'Hikkaduwa', 'Midigama', 'Ahangama', 'Mirissa', 'Arugam Bay Main Point (east)', 'Whiskey Point (east)', 'Peanut Farm (east)'],
    best_for: ['Beginners', 'Intermediate surfers', 'Point and reef break surfers', 'Surf and culture trips'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'South and west coasts: roughly November to April, with Sri Lanka Tourism highlighting November to March for Hikkaduwa. East coast (Arugam Bay): roughly May to October.',
    notes:
      'Weligama’s sandy bay is among the most popular places in Asia to learn. The reef and point breaks around Midigama and Ahangama suit improvers and experienced surfers. Arugam Bay’s right-hand points are the east coast’s main draw in the summer months. Crowds at popular breaks can be significant in peak season.',
  },

  diving: {
    score: 7,
    sites: ['Hikkaduwa reefs', 'Wrecks off Galle and Unawatuna', 'Pigeon Island National Park, Trincomalee (east, seasonal)', 'Kalpitiya (north-west)'],
    marine_life: ['Turtles', 'Reef fish', 'Blacktip reef sharks (Pigeon Island)', 'Blue whales offshore (seasonal, whale-watching)', 'Dolphins'],
    season: 'South-coast diving typically suits roughly November to April; east-coast diving around Trincomalee typically suits roughly May to October.',
    notes:
      'Diving is good rather than world-class, with wrecks and reefs that add variety to a surf-and-culture trip. Whale watching off Mirissa is popular in season; choose operators that keep appropriate distances and do not crowd animals.',
  },

  freediving: {
    score: 6,
    locations: ['Calm-day reefs around Unawatuna and Hikkaduwa', 'Pigeon Island (guided snorkelling)'],
    notes:
      'Freediving is possible on calm days but visibility varies with season and swell. Treat it as an occasional activity with qualified local guidance.',
  },

  marine_life_notes:
    'Turtles are frequently seen along the south coast, and the deep water offshore is known for seasonal whale and dolphin sightings. Avoid operators that feed turtles or chase whales, and never touch wildlife.',

  luxury: {
    score: 8,
    angle: 'Boutique hotels, villas and safari add-ons.',
    stay_types: ['Boutique heritage hotels', 'Private villas with staff', 'Design hotels around Galle and Tangalle', 'Tea-estate bungalows', 'Safari lodges'],
    experiences: ['Private surf coaching on the south coast', 'Galle Fort walks and dining', 'Leopard and elephant safaris', 'Tea-country train journeys', 'Ayurvedic spa treatments'],
  },

  scenery: {
    score: 9,
    landscape: 'Palm-lined bays, rocky headlands, colonial forts, misty tea hills and dry-zone national parks.',
    water: 'Warm Indian Ocean water; clarity varies with monsoon and swell.',
  },

  core_zones: ['South coast (Weligama, Mirissa, Ahangama, Midigama)', 'Hikkaduwa', 'Galle', 'Arugam Bay', 'Trincomalee'],
  best_months: ['january', 'february', 'march', 'november', 'december', 'june', 'july', 'august'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'South and west typically drier roughly December to April; east coast typically drier roughly May to September.' },
    { label: 'Surf', detail: 'South/west roughly November to April; east roughly May to October.' },
    { label: 'Diving', detail: 'Follows the same coastal split as surf and weather.' },
    { label: 'European calendar', detail: 'Excellent for winter sun (south) and for European summer (east coast).' },
  ],
  european_seasonal_angle:
    'Sri Lanka is one of the few long-haul destinations that serves both European winter (south coast) and summer (east coast) — choose the coast first and the hotel second.',
  season_types: ['winter-sun', 'summer', 'year-round'],
  recommended_duration: '10–14 nights, combining a surf base with Galle, tea country or a safari.',

  traveller_profiles: ['couples', 'family', 'active-luxury', 'winter-sun', 'solo'],
  best_audience: 'Value-conscious luxury travellers wanting surf, culture and wildlife.',
  audience_notes: [
    { profile: 'Surfers who want more than surf', detail: 'Culture, food, wildlife and heritage within a few hours of the waves.' },
    { profile: 'Learning surfers', detail: 'Weligama and nearby bays provide gentle, sandy-bottom waves in season.' },
    { profile: 'Couples', detail: 'Boutique villas and a strong romantic heritage-hotel scene.' },
    { profile: 'Not ideal for', detail: 'Divers seeking world-class reefs or travellers who dislike road journeys.' },
  ],

  itinerary: [
    { days: 'Days 1–2', title: 'Galle', detail: 'Arrive in Colombo, transfer south to a heritage hotel near Galle Fort and recover.' },
    { days: 'Days 3–6', title: 'South-coast surf', detail: 'Base in Ahangama or Weligama: coached sessions, reef breaks for experienced surfers, long lunches by the sea.' },
    { days: 'Days 7–8', title: 'Ocean and wildlife', detail: 'A responsible whale-watching trip from Mirissa in season, or a dive day off Unawatuna.' },
    { days: 'Days 9–11', title: 'Safari or tea country', detail: 'A safari lodge near Yala or Udawalawe, or the hill country for tea estates and cool air.' },
    { days: 'Day 12', title: 'Depart', detail: 'Return to Colombo for the flight home.' },
  ],

  planning_notes: [
    'Choose the coast by season: south/west for European winter, east for European summer.',
    'Road journeys take longer than distances suggest — plan fewer, longer stays.',
    'Dress respectfully at temples and cultural sites.',
    'Check current entry requirements, including electronic travel authorisation.',
    'Choose whale-watching operators that follow responsible-distance practices.',
  ],

  faqs: [
    { question: 'When is surf season in Sri Lanka?', answer: 'The south and west coasts typically work from roughly November to April (Sri Lanka Tourism highlights November to March for Hikkaduwa). The east coast around Arugam Bay typically works from roughly May to October.' },
    { question: 'Is Sri Lanka good for beginner surfers?', answer: 'Yes. Weligama Bay and other sandy-bottom spots on the south coast are among the most popular places in Asia to learn, in season.' },
    { question: 'Can I combine surf and safari in Sri Lanka?', answer: 'Yes — it is one of the island’s strengths. South-coast surf bases are within reach of national parks such as Yala and Udawalawe.' },
  ],

  seo: {
    title: 'Sri Lanka Luxury Surf & Dive Holidays | Waves & Boutique Stays',
    meta: 'Plan a luxury Sri Lanka surf and dive holiday with tropical beaches, seasonal waves, boutique resorts, wildlife and private experiences.',
    primary_keywords: ['Sri Lanka luxury surf holiday', 'Sri Lanka surf season'],
    secondary_keywords: ['Weligama surf', 'Arugam Bay surf', 'Sri Lanka boutique hotel', 'Sri Lanka winter sun'],
  },

  related_destinations: ['maldives', 'bali-nusa-penida', 'costa-rica', 'siargao'],
  related_articles: ['best-winter-sun-surf-holidays-europe', 'where-to-surf-january-luxury-ocean-escapes', 'best-autumn-ocean-holidays-europe', 'best-luxury-surf-destinations-beginners'],

  images: destinationImages('sri-lanka', {
    hero: 'Palm-fringed south-coast bay with a point break and fishing boats.',
    surf: 'Surfer on a right-hand point at Arugam Bay.',
    dive: 'Diver over a wreck off Galle with schooling fish.',
    freedive: 'Snorkeller over a calm reef near Unawatuna.',
    'marine-life': 'Green turtle on a reef, photographed without contact.',
    landscape: 'Galle Fort ramparts and lighthouse above the ocean.',
    'human-experience': 'Surf lesson in Weligama Bay at sunrise.',
    culture: 'Rice and curry spread or stilt fishermen at work (with consent).',
    'luxury-stay': 'Heritage villa veranda facing the Indian Ocean.',
    signature: 'Whale fluke off Mirissa at a respectful distance.',
  }),
};

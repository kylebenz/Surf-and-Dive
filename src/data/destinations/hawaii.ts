import type { Destination } from '../types';
import { destinationImages } from './_images';

export const hawaii: Destination = {
  name: 'Hawaii',
  displayName: 'Hawaii',
  country: 'United States',
  region: 'North Pacific',
  slug: 'hawaii',

  positioning: 'The cultural home of surfing, with legendary winter swells, volcanic diving and high-end resorts across four very different islands.',
  hero_headline: 'Hawaii: Where Surf Culture Began',
  hero_subheadline: 'North Shore winter swells, Waikiki’s gentle rollers, manta rays off the Kona coast and island-hopping between volcanic landscapes and refined resorts.',
  overview:
    'Hawaii is where modern surfing’s story is most deeply rooted, and the islands still hold some of the most respected waves on earth. Oahu’s North Shore comes alive with winter swells; Waikiki remains one of the most famous places in the world to learn; Maui and Kauai add dramatic coastlines and their own surf culture. Below the surface, volcanic reefs, lava tubes and the Kona coast’s night manta experience give divers reasons to come too. For European travellers it is a long journey, but the combination of surf heritage, accessible luxury and island variety is unique.',
  why_visit: [
    'Surf history and culture are part of the landscape. Watching the North Shore on a winter swell is an experience in itself, even if you never paddle out at the heavy breaks.',
    'Each island offers a different trip: Oahu for surf culture and energy, Maui for range and resorts, Kauai for wild scenery, the Big Island for volcanic diving.',
    'High-end resorts, fine dining and well-organised operators make it one of the easiest long-haul ocean destinations to plan.',
  ],

  surf: {
    score: 10,
    spots: ['Pipeline (Oahu, expert only)', 'Waimea Bay (Oahu, big-wave)', 'Sunset Beach (Oahu)', 'Waikiki (Oahu, beginner)', 'Honolua Bay (Maui)', 'Pe’ahi / Jaws (Maui, big-wave, spectating)', 'Hanalei Bay (Kauai)'],
    best_for: ['Experienced surfers', 'Beginners at Waikiki', 'Surf culture and spectating', 'Active luxury travellers'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'North-facing shores typically receive powerful swells in winter (roughly October to April). South-facing shores, including Waikiki, are generally at their best in summer (roughly May to September).',
    notes:
      'The North Shore’s famous winter breaks are for experts, with strong currents, shallow reef and serious consequences. Spectating is safe and rewarding from the beach. Beginners are well served at Waikiki and other gentle south-shore spots, especially in summer. Always respect local surf etiquette — it carries real weight in Hawaii.',
  },

  diving: {
    score: 9,
    sites: ['Kona coast manta night dive (Big Island)', 'Molokini Crater (Maui)', 'Lanai Cathedrals', 'Oahu wrecks and ledges', 'Kauai’s south shore reefs'],
    marine_life: ['Manta rays', 'Green sea turtles (honu)', 'Humpback whales (winter, regulated)', 'Hawaiian monk seals (protected)', 'Endemic reef fish', 'Spinner dolphins (strictly regulated distance)'],
    season: 'Diving is possible year-round. Calmer conditions often occur on leeward coasts. Humpback whale season is typically associated with winter (roughly December to April).',
    notes:
      'Hawaiian diving is defined by volcanic structure: lava arches, tubes and ledges, with a high proportion of endemic fish species. The Kona manta night experience is well known. Hawaiian spinner dolphins, monk seals and turtles are protected by specific regulations — keep the required distance and use licensed operators.',
  },

  freediving: {
    score: 8,
    locations: ['Kona coast (calm leeward water)', 'Molokini Crater (guided)', 'Sheltered bays on Maui and Oahu'],
    notes:
      'Deep water close to shore on the leeward Big Island makes Kona a known freediving area. Use qualified instructors, a trained buddy and surface support, and follow regulations around protected species. Never approach spinner dolphins in the water.',
  },

  marine_life_notes:
    'Green sea turtles and endemic reef fish are commonly seen; manta rays and humpback whales are seasonal or site-specific highlights. Hawaii enforces wildlife-distance regulations for several protected species — check current guidance before entering the water.',

  luxury: {
    score: 9,
    angle: 'High-end resorts and island-hopping.',
    stay_types: ['Oceanfront resorts', 'Private villa rentals', 'Boutique North Shore stays', 'Plantation-era inns'],
    experiences: ['Private surf coaching at Waikiki', 'Inter-island flights between distinct landscapes', 'Night manta experiences off Kona', 'Volcano and rainforest excursions', 'Farm-to-table dining'],
  },

  scenery: {
    score: 10,
    landscape: 'Volcanic mountains, sea cliffs, rainforest valleys and black, white and green sand beaches.',
    water: 'Deep Pacific blue close to shore; clear leeward water and powerful open-ocean swell on exposed coasts.',
  },

  core_zones: ['Oahu', 'Maui', 'Kauai', 'Big Island (Hawaii Island)'],
  best_months: ['june', 'july', 'august', 'november', 'december', 'january', 'february'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Warm year-round. Winter typically brings more rain on windward coasts; summer is generally drier.' },
    { label: 'Surf', detail: 'North shores typically roughly October to April (powerful, expert-level); south shores roughly May to September (often friendlier).' },
    { label: 'Diving', detail: 'Year-round; leeward coasts typically calmer.' },
    { label: 'European calendar', detail: 'Works for the European summer (south-shore surf) and the festive season (North Shore spectacle and whale season).' },
  ],
  european_seasonal_angle:
    'Hawaii can work in two very different ways for Europeans: a summer trip built around friendlier south-shore surf, or a winter and festive trip to watch the North Shore and the humpback season. The long journey suits stays of ten nights or more.',
  season_types: ['summer', 'winter-sun', 'year-round'],
  recommended_duration: '10–14 nights, ideally across two islands.',

  traveller_profiles: ['serious-surfer', 'active-luxury', 'family', 'couples', 'diver'],
  best_audience: 'Surf culture lovers, experienced surfers and active luxury travellers.',
  audience_notes: [
    { profile: 'Experienced surfers', detail: 'Some of the most storied waves in the world — approached with humility and local respect.' },
    { profile: 'Learners and families', detail: 'Gentle south-shore waves, excellent surf schools and easy logistics.' },
    { profile: 'Active luxury travellers', detail: 'Resorts with outstanding service, plus hiking, volcanoes and diving on the same trip.' },
    { profile: 'Not ideal for', detail: 'Travellers seeking remote, low-density islands or a short trip from Europe.' },
  ],

  itinerary: [
    { days: 'Days 1–2', title: 'Oahu arrival', detail: 'Arrive in Honolulu, recover with an easy Waikiki session or a beach walk.' },
    { days: 'Days 3–5', title: 'Oahu surf and culture', detail: 'North Shore in winter (to watch or surf within your level) or south-shore sessions in summer; local food and surf history.' },
    { days: 'Days 6–9', title: 'Second island', detail: 'Fly to the Big Island for the Kona coast and manta night experience, or to Maui for Molokini, Honolua Bay and resort time.' },
    { days: 'Days 10–12', title: 'Slow finish', detail: 'Hike, snorkel or spa — leave the pre-flight interval after diving before the flight home.' },
  ],

  planning_notes: [
    'Respect local surf etiquette and avoid heavy breaks beyond your ability.',
    'Wildlife regulations apply to spinner dolphins, monk seals, turtles and whales — keep required distances.',
    'Check entry requirements for the United States, including electronic travel authorisation where applicable.',
    'Winter swells can close beaches and create dangerous shorebreak — follow lifeguard advice.',
    'Some popular natural sites require reservations; check before you travel.',
    'Use reef-safe sunscreen; Hawaii restricts certain sunscreen ingredients.',
  ],

  faqs: [
    { question: 'Is Hawaii good for beginner surfers?', answer: 'Yes, particularly at Waikiki and other gentle south-shore spots, which are typically at their best in summer. The famous North Shore winter breaks are for experts only.' },
    { question: 'When is the best time to surf in Hawaii?', answer: 'North shores typically receive powerful swell in winter (roughly October to April), while south shores are usually better in summer. Choose based on your ability.' },
    { question: 'Can I swim with dolphins in Hawaii?', answer: 'Hawaiian spinner dolphins are protected by regulations that prohibit approaching them within a set distance, including in the water. Choose licensed operators that follow current rules.' },
    { question: 'Which Hawaiian island is best for diving?', answer: 'The Big Island’s Kona coast is well known for calm leeward diving and the night manta experience; Maui offers Molokini Crater and nearby Lanai.' },
  ],

  seo: {
    title: 'Hawaii Luxury Surf & Dive Holidays | Oahu, Maui & Kona',
    meta: 'Plan a luxury Hawaii surf and dive holiday: North Shore winter swells, Waikiki lessons, Kona manta rays, volcanic scenery and refined island resorts.',
    primary_keywords: ['Hawaii luxury surf holiday', 'Hawaii diving holiday'],
    secondary_keywords: ['North Shore surf season', 'Waikiki surf lessons', 'Kona manta dive', 'Maui luxury resort'],
  },

  related_destinations: ['fiji', 'french-polynesia', 'mexico-pacific', 'costa-rica'],
  related_articles: ['best-luxury-surf-destinations-advanced-surfers', 'best-summer-surf-holidays-europeans', 'ocean-safety-luxury-surf-travellers', 'luxury-ocean-escapes-christmas-new-year'],

  images: destinationImages('hawaii', {
    hero: 'North Shore winter swell lines from a headland, with surfers for scale.',
    surf: 'Longboarder on a gentle Waikiki wave with Diamond Head behind.',
    dive: 'Diver beneath a lava arch with shafts of light.',
    freedive: 'Freediver over deep blue water off the Kona coast, buddy at surface.',
    'marine-life': 'Green sea turtle resting on reef, photographed from a respectful distance.',
    landscape: 'Kauai sea cliffs and valleys meeting the ocean.',
    'human-experience': 'Spectators on the beach watching a big North Shore set.',
    culture: 'Local poke or plate lunch by the beach.',
    'luxury-stay': 'Oceanfront resort lanai facing a reef at sunset.',
    signature: 'Manta ray silhouetted against lights on a Kona night experience.',
  }),
};

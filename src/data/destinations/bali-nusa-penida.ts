import type { Destination } from '../types';
import { destinationImages } from './_images';

export const baliNusaPenida: Destination = {
  name: 'Bali + Nusa Penida',
  displayName: 'Bali and Nusa Penida',
  country: 'Indonesia',
  region: 'Southeast Asia',
  slug: 'bali-nusa-penida',

  positioning: 'The most versatile surf-and-dive island in the world: Bukit reef breaks, Amed and Tulamben diving, Nusa Penida’s marine life and villas worth coming back to.',
  hero_headline: 'Bali and Nusa Penida: Reef Breaks, Volcanic Reefs and Villa Life',
  hero_subheadline: 'Surf Uluwatu, dive the north-east coast, cross to Nusa Penida for manta rays, and return each evening to a private villa, exceptional food and a culture that gives the trip its depth.',
  overview:
    'Bali gives you variety in a way few ocean destinations can. In a single trip you can surf the limestone reefs of the Bukit Peninsula, learn on the softer waves of Kuta or Sanur, dive the volcanic reefs and wreck off Tulamben and Amed, and cross the strait to Nusa Penida, where currents bring nutrient-rich water and a very different marine environment. Indonesia’s official tourism information lists beginner areas such as Kuta and Sanur alongside advanced breaks including Uluwatu. Around the water sits one of Asia’s most developed luxury scenes: private pool villas, cliff-top hotels, wellness retreats and restaurants that make non-ocean days genuinely rewarding.',
  why_visit: [
    'It is the strongest all-round choice for a mixed surf-and-dive trip. Surf and dive zones sit on different coasts and nearby islands, so you can plan each day around the conditions.',
    'The land matters as much as the sea. Temples, rice terraces, Ubud’s wellness culture and an outstanding food scene give couples and families more than one reason to be here.',
    'It works at every surf level, from first lessons on sandy-bottom beaches to heavy reef breaks that reward experience.',
  ],

  surf: {
    score: 10,
    spots: ['Uluwatu', 'Padang Padang', 'Bingin', 'Impossibles', 'Canggu breaks', 'Keramas', 'Kuta and Legian (beginner)', 'Sanur reef (east side)'],
    best_for: ['Beginners (selected beaches)', 'Intermediate surfers', 'Advanced reef surfers', 'Surf-and-dive trips', 'Couples with mixed interests'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'The west-coast and Bukit breaks are typically at their best in the dry season (roughly April to October). East-coast breaks such as Sanur and Keramas tend to suit the wet season (roughly November to March), when winds shift.',
    notes:
      'The Bukit Peninsula’s reef breaks (Uluwatu, Padang Padang, Bingin and Impossibles) are for experienced surfers; the reef is shallow and some breaks are heavy. Canggu offers a mix of reef and beach breaks for intermediate surfers. Kuta, Legian, Seminyak and Sanur are among the areas identified as beginner-oriented by Indonesia’s official tourism site, but always check conditions on the day. Crowds at the best-known breaks are real; a local guide adds both safety and better timing.',
  },

  diving: {
    score: 9,
    sites: ['USAT Liberty wreck, Tulamben', 'Amed reefs and slopes', 'Manta Point, Nusa Penida', 'Crystal Bay, Nusa Penida', 'Menjangan Island (West Bali National Park)', 'Padang Bai'],
    marine_life: ['Manta rays', 'Oceanic sunfish (mola mola, seasonal)', 'Turtles', 'Macro life including nudibranchs', 'Reef sharks', 'Schooling fish on the Liberty wreck'],
    season: 'Diving runs year-round. The dry season (roughly April to October) usually brings better visibility. Oceanic sunfish sightings around Nusa Penida are most often associated with roughly July to October, when cold upwellings occur, never guaranteed.',
    notes:
      'Bali’s diving splits into very different experiences. Tulamben and Amed offer easy shore and boat dives over black volcanic sand, including the well-known USAT Liberty wreck. Nusa Penida is more demanding: strong currents and sudden temperature drops mean experienced guides are essential and some sites suit advanced divers only. Menjangan, in the west, offers calmer wall diving inside a national park.',
  },

  freediving: {
    score: 9,
    locations: ['Amed (established freediving schools)', 'Tulamben', 'Calm-day sessions around Nusa Penida with guides'],
    notes:
      'Amed has developed a reputation as a freediving training base thanks to calm mornings, depth close to shore and established schools. Train with qualified instructors, never freedive alone and treat Nusa Penida’s currents with real caution.',
  },

  marine_life_notes:
    'Manta rays at Nusa Penida and macro life along the north-east coast are the headline encounters, with oceanic sunfish a seasonal possibility. Operators vary considerably in how they manage crowds at Manta Point; choose small groups and follow guidance about distance and behaviour.',

  luxury: {
    score: 9,
    angle: 'Private villas, cliff-top resorts, wellness and boat days.',
    stay_types: ['Private pool villas', 'Cliff-top resorts on the Bukit', 'Wellness retreats around Ubud', 'Boutique dive resorts in Amed', 'Small island stays on the Nusas'],
    experiences: ['Private surf guiding on the Bukit', 'Boat days to Nusa Penida and Nusa Lembongan', 'Balinese spa rituals', 'Chef-led dinners and food tours', 'Temple and rice-terrace visits with a guide'],
  },

  scenery: {
    score: 9,
    landscape: 'Limestone cliffs on the Bukit, volcanoes and rice terraces inland, black-sand beaches in the east and Nusa Penida’s dramatic headlands.',
    water: 'Warm tropical water; cooler and more changeable around Nusa Penida where upwellings occur.',
  },

  core_zones: ['Uluwatu and the Bukit Peninsula', 'Canggu', 'Sanur', 'Amed and Tulamben', 'Nusa Penida and Nusa Lembongan', 'Ubud'],
  best_months: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Dry season roughly April to October; wet season roughly November to March, often with heavy afternoon showers rather than all-day rain.' },
    { label: 'Surf', detail: 'West coast and Bukit typically favoured in the dry season; east-coast breaks in the wet season.' },
    { label: 'Diving', detail: 'Year-round, with generally better visibility in the dry season. Sunfish season around Nusa Penida is often linked to roughly July to October.' },
    { label: 'European calendar', detail: 'Works for Easter, the long European summer and autumn breaks. Peak summer is busy; May, June and September often feel calmer.' },
  ],
  european_seasonal_angle:
    'Bali is one of the best long-haul answers to the European summer: the dry season aligns with July and August, and the shoulder months either side are often quieter. It is less obviously a winter-sun destination because the wet season runs through Europe’s winter.',
  season_types: ['summer', 'shoulder'],
  recommended_duration: '10-14 nights. The island rewards time, and splitting stays between the Bukit, the east coast and a Nusa island reduces daily transfers.',

  traveller_profiles: ['couples', 'honeymoon', 'family', 'active-luxury', 'serious-surfer', 'diver', 'freediver'],
  best_audience: 'Mixed surf/dive trips, couples and a first luxury trip to Indonesia.',
  audience_notes: [
    { profile: 'Mixed-interest couples', detail: 'Arguably the easiest destination for a surfer travelling with a non-surfer: food, wellness, culture and villas fill every non-surf hour.' },
    { profile: 'Surfers of every level', detail: 'From beginner lessons to advanced reef breaks, provided you match the coast to the season.' },
    { profile: 'Divers and freedivers', detail: 'Easy wreck and reef diving in the east, demanding current diving off Nusa Penida and an established freediving scene in Amed.' },
    { profile: 'Not ideal for', detail: 'Travellers seeking solitude at famous breaks, or anyone who dislikes traffic on the roads between regions.' },
  ],

  itinerary: [
    { days: 'Days 1-2', title: 'Arrive on the Bukit', detail: 'Check into a cliff-top or villa stay near Uluwatu, recover from the flight and watch the breaks from above before paddling out.' },
    { days: 'Days 3-5', title: 'Surf the reefs', detail: 'Early sessions with a local guide matched to your level; long lunches, a spa afternoon and sunset dinners above the ocean.' },
    { days: 'Days 6-7', title: 'Nusa Penida by boat', detail: 'A guided boat day for manta rays or diving with an experienced operator, conditions permitting. Optionally stay a night on Lembongan.' },
    { days: 'Days 8-10', title: 'East coast diving and freediving', detail: 'Move to Amed or Tulamben for the Liberty wreck, reef dives and a freediving session with a qualified instructor.' },
    { days: 'Days 11-12', title: 'Ubud and departure', detail: 'Finish inland with rice terraces, temples and wellness before the flight home, respecting the no-fly interval after diving.' },
  ],

  planning_notes: [
    'Match the coast to the season: west and Bukit breaks in the dry season, east coast in the wet season.',
    'Road transfers can be slow; base yourself in two or three areas rather than moving daily.',
    'Nusa Penida diving involves strong currents and cold upwellings. Choose experienced operators and dive within your training.',
    'Respect temple etiquette and local ceremonies, which can affect roads and access on certain days.',
    'Check current entry requirements, including any tourist levy, before travel.',
    'Reef cuts are common on the Bukit: pack a basic first-aid kit and consider reef boots.',
  ],

  faqs: [
    { question: 'Is Bali good for beginner surfers?', answer: 'Yes, in the right places. Indonesia’s official tourism information identifies Kuta, Legian, Seminyak and Sanur among beginner-oriented areas. The famous Bukit reef breaks such as Uluwatu are for experienced surfers.' },
    { question: 'When is the best time for a surf and dive trip to Bali?', answer: 'The dry season, roughly April to October, typically suits west-coast surf and offers better diving visibility. The shoulder months of May, June and September are often a good balance of conditions and crowds.' },
    { question: 'Is diving at Nusa Penida suitable for beginners?', answer: 'Some sites can be, on calm days with a good guide, but many are current-driven with sudden temperature changes. Newer divers usually find Tulamben and Amed more comfortable.' },
    { question: 'Can I see manta rays in Bali?', answer: 'Manta rays are frequently associated with Manta Point off Nusa Penida, but sightings are never guaranteed. Choose operators who limit group sizes and follow responsible-encounter guidance.' },
    { question: 'How many days do I need in Bali?', answer: 'Ten to fourteen nights is ideal if you want surf, diving and some time inland. Seven nights is possible if you focus on one or two areas.' },
  ],

  seo: {
    title: 'Bali Luxury Surf & Dive Holidays | Uluwatu, Amed & Nusa Penida',
    meta: 'Plan a luxury Bali surf and dive holiday with Uluwatu waves, Amed diving, Nusa Penida marine life, private villas and tropical beaches.',
    primary_keywords: ['Bali luxury surf holiday', 'Bali diving holiday'],
    secondary_keywords: ['Uluwatu surf', 'Nusa Penida diving', 'Amed freediving', 'Bali luxury villa'],
  },

  related_destinations: ['mentawai-islands', 'maldives', 'philippines', 'siargao'],
  related_articles: ['maldives-vs-bali-luxury-surf-dive', 'portugal-vs-indonesia-luxury-surf', 'combine-surfing-diving-one-holiday', 'choose-surf-destination-non-surfer-partner', 'best-luxury-surf-destinations-beginners'],
  comparisons: ['maldives-vs-bali', 'portugal-vs-indonesia'],

  images: destinationImages('bali-nusa-penida', {
    hero: 'Bukit limestone cliffs above a reef break at golden hour, surfers visible for scale.',
    surf: 'Surfer on a long left at Uluwatu, reef visible below the face.',
    dive: 'Diver alongside the USAT Liberty wreck in Tulamben, natural light.',
    freedive: 'Freediver descending a line in Amed with an instructor at the buoy.',
    'marine-life': 'Manta ray off Nusa Penida at a respectful distance.',
    landscape: 'Nusa Penida headlands and blue water from a clifftop viewpoint.',
    'human-experience': 'Surfer walking down cliff steps to the reef at low light.',
    culture: 'Temple offering or Balinese dinner spread, candid and unposed.',
    'luxury-stay': 'Private villa pool opening toward the ocean horizon.',
    signature: 'Jukung outrigger boats on the black sand in Amed at sunrise, Mount Agung behind.',
  }),
};

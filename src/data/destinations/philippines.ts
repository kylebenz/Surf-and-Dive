import type { Destination } from '../types';
import { destinationImages } from './_images';

export const philippines: Destination = {
  name: 'Philippines',
  displayName: 'the Philippines',
  country: 'Philippines',
  region: 'Southeast Asia',
  slug: 'philippines',

  positioning: 'More than 7,000 islands and some of the world’s richest reefs — island-hopping, wreck diving, freediving schools and surf on the Pacific edge.',
  hero_headline: 'The Philippines: Reefs, Wrecks and Endless Islands',
  hero_subheadline: 'Palawan’s limestone lagoons, Coron’s wrecks, Tubbataha’s protected atolls, Moalboal’s sardine shoals and the surf of Siargao — an archipelago built for ocean exploration.',
  overview:
    'The Philippines sits in the heart of the Coral Triangle, and its diving and snorkelling are among the most diverse anywhere. Palawan offers limestone lagoons around El Nido and Second World War wrecks in Coron Bay; Tubbataha Reefs Natural Park, a UNESCO World Heritage site, is reached only by liveaboard in a short seasonal window; Cebu and Bohol are known for sardine shoals, turtles and established freediving schools; and Anilao is a macro-photography favourite. Siargao, covered in its own guide, adds surf. Luxury is boutique and island-based — small resorts and private islands rather than mega-resorts.',
  why_visit: [
    'Marine biodiversity and variety: reefs, wrecks, walls, macro and pelagics across one country.',
    'Freediving has a strong scene, with schools around Panglao and Moalboal.',
    'Island-hopping is the classic Philippine experience, ideally by private boat.',
  ],

  surf: {
    score: 8,
    spots: ['Siargao (Cloud 9 and surrounds)', 'Baler (Aurora)', 'La Union (San Juan, beginner-friendly)', 'Eastern Samar'],
    best_for: ['Beginners in La Union', 'Intermediate and advanced surfers in Siargao'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'Pacific-facing coasts typically receive swell roughly August to November; La Union and the west typically roughly October to March.',
    notes:
      'Surf is a secondary attraction nationally, but Siargao is a genuine surf destination. Typhoon season can bring swell and disruption.',
  },

  diving: {
    score: 10,
    sites: ['Tubbataha Reefs Natural Park (liveaboard, seasonal)', 'Coron Bay wrecks (Palawan)', 'El Nido reefs (Palawan)', 'Moalboal and Pescador Island (Cebu)', 'Malapascua (Cebu)', 'Balicasag (Bohol)', 'Anilao (Batangas)', 'Apo Reef'],
    marine_life: ['Sardine shoals (Moalboal)', 'Thresher sharks (Malapascua)', 'Turtles', 'Macro life', 'Reef sharks and mantas (Tubbataha)', 'WWII wrecks'],
    season: 'Diving is possible year-round in many areas. The drier months (roughly November/December to May) are often calmer. Tubbataha’s liveaboard season typically runs roughly mid-March to mid-June.',
    notes:
      'Few countries offer this range of diving in one trip. Coron’s wrecks suit divers with appropriate training; Tubbataha is remote and highly protected; Moalboal’s sardine shoals are accessible from shore. Choose operators carefully and avoid whale shark tours that rely on feeding.',
  },

  freediving: {
    score: 9,
    locations: ['Panglao, Bohol (established schools)', 'Moalboal, Cebu', 'Coron lakes and lagoons (regulated)'],
    notes:
      'The Philippines is one of Asia’s major freediving training hubs, with calm, deep water close to shore. Train only with qualified instructors and never freedive alone.',
  },

  marine_life_notes:
    'From sardines and turtles to thresher sharks, the variety is remarkable. Avoid whale shark interactions involving feeding, and never touch coral or wildlife.',

  luxury: {
    score: 7,
    angle: 'Boutique resorts and island experiences.',
    stay_types: ['Private-island resorts in Palawan', 'Boutique dive resorts', 'Small eco-resorts', 'Liveaboards'],
    experiences: ['Private island-hopping boats', 'Lagoon kayaking in El Nido', 'Wreck diving in Coron', 'Freediving courses', 'Filipino food experiences'],
  },

  scenery: {
    score: 10,
    landscape: 'Limestone karst islands, hidden lagoons, palm-lined beaches and volcanic interiors.',
    water: 'Warm, clear tropical water with exceptional reef diversity.',
  },

  core_zones: ['Palawan (El Nido, Coron)', 'Siargao', 'Bohol', 'Cebu (Moalboal, Malapascua)', 'Anilao', 'Tubbataha'],
  best_months: ['january', 'february', 'march', 'april', 'may', 'december'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Drier roughly November/December to May; wetter roughly June to October with typhoon risk varying by region.' },
    { label: 'Surf', detail: 'Pacific coasts typically roughly August to November; west coast typically roughly October to March.' },
    { label: 'Diving', detail: 'Year-round in many areas; calmer in the drier months. Tubbataha typically roughly mid-March to mid-June.' },
    { label: 'European calendar', detail: 'Strong for winter sun, February half-term and Easter.' },
  ],
  european_seasonal_angle:
    'The drier months align with the European winter and spring, making the Philippines a strong winter-sun dive destination — with Tubbataha’s short season a special draw around Easter.',
  season_types: ['winter-sun', 'shoulder'],
  recommended_duration: '12–16 nights across two or three island regions.',

  traveller_profiles: ['diver', 'freediver', 'couples', 'active-luxury', 'solo'],
  best_audience: 'Island-hopping, diving and tropical exploration.',
  audience_notes: [
    { profile: 'Divers', detail: 'Unrivalled variety — wrecks, macro, pelagics, reefs.' },
    { profile: 'Freedivers', detail: 'Established schools and calm deep water.' },
    { profile: 'Not ideal for', detail: 'Travellers wanting polished five-star service everywhere or minimal domestic flights.' },
  ],

  itinerary: [
    { days: 'Days 1–4', title: 'Palawan', detail: 'El Nido lagoons by private boat and reef dives.' },
    { days: 'Days 5–7', title: 'Coron', detail: 'Wreck diving for appropriately trained divers; lakes and lagoons.' },
    { days: 'Days 8–11', title: 'Cebu or Bohol', detail: 'Moalboal sardine shoals, freediving with a school in Panglao, turtles at Balicasag.' },
    { days: 'Days 12–13', title: 'Unwind', detail: 'A final quiet island, respecting the no-fly interval.' },
  ],

  planning_notes: [
    'Domestic flights are essential — allow buffer for weather.',
    'Typhoon season typically runs roughly June to November; check forecasts.',
    'Avoid whale shark tours involving feeding.',
    'Marine sanctuary fees are common — carry cash.',
    'Wreck penetration requires appropriate training.',
  ],

  faqs: [
    { question: 'Is the Philippines good for diving?', answer: 'Yes — it is one of the most diverse dive countries in the world, with wrecks, reefs, macro and pelagic encounters across many regions.' },
    { question: 'Is the Philippines good for freediving?', answer: 'Yes. Panglao and Moalboal have established freediving schools and calm, deep water close to shore.' },
  ],

  seo: {
    title: 'Philippines Luxury Dive Holidays | Palawan, Coron & Freediving',
    meta: 'Plan a luxury Philippines ocean holiday: Palawan lagoons, Coron wrecks, Tubbataha, Moalboal freediving and boutique island resorts, with seasons explained.',
    primary_keywords: ['Philippines diving holiday', 'Philippines freediving'],
    secondary_keywords: ['Coron wreck diving', 'El Nido luxury', 'Tubbataha liveaboard', 'Moalboal sardine run'],
  },

  related_destinations: ['siargao', 'bali-nusa-penida', 'maldives', 'french-polynesia'],
  related_articles: ['best-luxury-diving-holidays-world', 'best-freediving-destinations-clear-water', 'how-to-plan-luxury-freediving-holiday', 'ocean-safety-freediving-buddy-systems'],

  images: destinationImages('philippines', {
    hero: 'El Nido limestone karsts rising from a turquoise lagoon.',
    surf: 'Surfer on a clean reef wave off Siargao.',
    dive: 'Diver beside a WWII wreck in Coron Bay.',
    freedive: 'Freediver descending a line off Panglao with an instructor.',
    'marine-life': 'Sardine shoal at Moalboal with a diver for scale.',
    landscape: 'Island chain from the air at golden hour.',
    'human-experience': 'Bangka boat moored in a hidden lagoon.',
    culture: 'Kinilaw and grilled fish at a beach table.',
    'luxury-stay': 'Private-island villa above clear water in Palawan.',
    signature: 'Kayak in a limestone lagoon at dawn.',
  }),
};

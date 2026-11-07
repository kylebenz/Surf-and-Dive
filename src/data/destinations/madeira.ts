import type { Destination } from '../types';
import { destinationImages } from './_images';

export const madeira: Destination = {
  name: 'Madeira',
  displayName: 'Madeira',
  country: 'Portugal',
  region: 'Atlantic Europe',
  slug: 'madeira',

  positioning: 'A dramatic volcanic island with powerful Atlantic surf, year-round diving and a refined hotel scene: Europe’s most polished island ocean escape.',
  hero_headline: 'Madeira: Atlantic Surf Beneath Volcanic Cliffs',
  hero_subheadline: 'Boulder-point waves at Jardim do Mar and Paul do Mar, a marine reserve at Garajau, levada walks above the clouds and historic hotels in Funchal.',
  overview:
    'Madeira feels dramatic and mountainous, with established tourism infrastructure and a strong luxury-hotel scene. Visit Madeira highlights surf locations including Jardim do Mar, Paul do Mar, Porto da Cruz and Ribeira da Janela, with suitability ranging from improving surfers to experienced riders on powerful north and south-west coast breaks. The island’s tourism board also describes diving as possible year-round, highlighting sites including Caniçal, Santa Cruz, Garajau, Madalena do Mar and Porto Santo. Add mild winters, outstanding hiking and a compact geography, and Madeira becomes one of the most complete short-haul ocean destinations for Europeans.',
  why_visit: [
    'Year-round potential: surf season is strongest in the European autumn and winter, while diving is possible throughout the year.',
    'It is ideal for a mixed-interest couple. Surf, hiking, food, viewpoints and comfortable hotels all fit together.',
    'Short-haul access from much of Europe makes a five- to seven-night trip genuinely worthwhile.',
  ],

  surf: {
    score: 8,
    spots: ['Jardim do Mar (advanced)', 'Paul do Mar (advanced)', 'Ponta Pequena', 'Porto da Cruz (improving surfers)', 'Ribeira da Janela', 'Seixal'],
    best_for: ['Improving surfers at Porto da Cruz', 'Advanced surfers', 'Big-wave enthusiasts in winter'],
    levels: ['intermediate', 'advanced'],
    season: 'Visit Madeira describes year-round surf potential; the most powerful swells typically arrive roughly from October to March.',
    notes:
      'Madeira’s best-known waves break over boulders and reef beneath steep cliffs, and many are suited to experienced surfers: Jardim do Mar and Paul do Mar can be powerful and heavy in winter. Visit Madeira highlights Porto da Cruz as more suitable for improving surfers. Beginners should look for lessons in smaller conditions with local schools.',
  },

  diving: {
    score: 9,
    sites: ['Garajau Partial Nature Reserve', 'Caniçal', 'Santa Cruz', 'Madalena do Mar', 'Porto Santo (including an artificial-reef wreck)'],
    marine_life: ['Dusky groupers (Garajau)', 'Moray eels', 'Barracuda', 'Atlantic reef fish', 'Rays', 'Monk seals (rare, Desertas Islands area)'],
    season: 'Visit Madeira describes diving as possible year-round. Water is typically warmest in late summer and early autumn.',
    notes:
      'Madeira’s diving is volcanic and Atlantic: rocky reefs, walls, arches and sand patches rather than coral. The Garajau reserve is the best-known site, with groupers that are accustomed to divers. Visibility is often good. Porto Santo, a short hop away, adds wreck diving and a long sandy beach.',
  },

  freediving: {
    score: 7,
    locations: ['Garajau reserve on calm days', 'Sheltered south-coast bays', 'Porto Santo'],
    notes:
      'Clear water and calm south-coast days can make Madeira a pleasant freediving location, particularly in late summer. Use qualified local support and a buddy at all times, and respect reserve rules.',
  },

  marine_life_notes:
    'Groupers, rays and Atlantic reef fish are frequently seen, and dolphins and whales are often spotted offshore. Mediterranean monk seals are protected around the Desertas Islands and sightings are rare. Respect reserve regulations and keep your distance.',

  luxury: {
    score: 8,
    angle: 'Premium hotels and ocean excursions.',
    stay_types: ['Historic grand hotels in Funchal', 'Cliff-top design hotels', 'Quintas set in gardens', 'Boutique hotels on the south-west coast'],
    experiences: ['Private boat trips along the south coast', 'Guided levada and ridge hikes', 'Madeira wine tastings', 'Spa days with ocean views', 'Dolphin and whale watching with licensed operators'],
  },

  scenery: {
    score: 10,
    landscape: 'Sheer volcanic cliffs, laurel forest, terraced hillsides and mountain ridges above the clouds.',
    water: 'Deep, clear Atlantic blue close to shore; temperate year-round.',
  },

  core_zones: ['Jardim do Mar', 'Paul do Mar', 'Porto da Cruz', 'Garajau', 'Funchal', 'Porto Santo'],
  best_months: ['january', 'february', 'march', 'april', 'august', 'september', 'october', 'november'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Mild year-round. Winters are typically temperate on the south coast; the north is wetter and greener.' },
    { label: 'Surf', detail: 'Year-round potential; strongest swells typically roughly October to March.' },
    { label: 'Diving', detail: 'Year-round; warmest water typically late summer to early autumn.' },
    { label: 'European calendar', detail: 'Excellent for winter sun, long weekends, Easter and autumn breaks.' },
  ],
  european_seasonal_angle:
    'Madeira is one of Europe’s strongest winter-sun ocean escapes: mild air, powerful winter surf for experienced riders and year-round diving, all without a long-haul flight. A four- or five-night escape can feel worthwhile.',
  season_types: ['winter-sun', 'year-round', 'shoulder'],
  recommended_duration: '5-8 nights.',

  traveller_profiles: ['couples', 'active-luxury', 'winter-sun', 'diver', 'family'],
  best_audience: 'European luxury + surf + diving + hiking.',
  audience_notes: [
    { profile: 'Active couples', detail: 'One surfs or dives while the other hikes, swims or explores, then dinner in Funchal.' },
    { profile: 'Experienced surfers', detail: 'Powerful boulder and reef waves in winter.' },
    { profile: 'Winter-sun travellers', detail: 'Short flights, mild weather and a refined hotel scene.' },
    { profile: 'Not ideal for', detail: 'Beginners wanting long sandy beaches (consider Porto Santo or the Canaries), or anyone seeking tropical water.' },
  ],

  itinerary: [
    { days: 'Day 1', title: 'Funchal', detail: 'Arrive, check into a Funchal or south-coast hotel, dinner in the old town.' },
    { days: 'Days 2-3', title: 'South-west surf', detail: 'Jardim do Mar or Paul do Mar for experienced surfers; Porto da Cruz for improvers. Afternoon viewpoints and a wine tasting.' },
    { days: 'Day 4', title: 'Dive Garajau', detail: 'Two dives in the reserve and a long seafood lunch.' },
    { days: 'Day 5', title: 'Mountains', detail: 'A guided ridge or levada hike above the clouds.' },
    { days: 'Days 6-7', title: 'Porto Santo or slow coast', detail: 'A day trip to Porto Santo’s beach and wreck, or a final surf and spa day.' },
  ],

  planning_notes: [
    'Winter surf at Madeira’s famous breaks can be heavy: match spots to your ability.',
    'Mountain weather changes fast; hike with guides or check conditions carefully.',
    'Wind can affect flights in and out of Madeira: allow some buffer.',
    'Respect Garajau reserve regulations; no fishing or feeding.',
    'A car or private driver is useful; roads are steep and winding.',
  ],

  faqs: [
    { question: 'Is Madeira good for surfing?', answer: 'Yes, particularly for experienced surfers. Visit Madeira highlights Jardim do Mar, Paul do Mar, Porto da Cruz and Ribeira da Janela, with Porto da Cruz better suited to improving surfers.' },
    { question: 'Can you dive in Madeira all year?', answer: 'Visit Madeira describes diving as possible year-round, with sites including Garajau, Caniçal, Santa Cruz, Madalena do Mar and Porto Santo.' },
    { question: 'Madeira or the Canary Islands for winter sun?', answer: 'Choose Madeira for scenery, compact logistics and a lush, mountainous feel; choose the Canaries when surf choice and island variety are the priority.' },
  ],

  seo: {
    title: 'Madeira Luxury Surf & Dive Holidays | Portugal’s Atlantic Island',
    meta: 'Discover luxury Madeira surf and dive holidays with volcanic scenery, Atlantic waves, marine life, boutique stays and ocean adventures.',
    primary_keywords: ['Madeira surf holiday', 'Madeira diving'],
    secondary_keywords: ['Jardim do Mar surf', 'Garajau diving', 'Madeira winter sun', 'Madeira luxury hotel'],
  },

  related_destinations: ['azores', 'canary-islands', 'portugal', 'mauritius'],
  related_articles: ['azores-vs-madeira-surf-dive', 'canary-islands-vs-madeira-winter-sun', 'best-winter-sun-surf-holidays-europe', 'choose-surf-destination-non-surfer-partner', 'best-autumn-ocean-holidays-europe'],
  comparisons: ['azores-vs-madeira', 'canary-islands-vs-madeira'],

  images: destinationImages('madeira', {
    hero: 'Volcanic cliffs above the south-west coast with a wave wrapping the point.',
    surf: 'Surfer on a boulder-point wave at Jardim do Mar below the village.',
    dive: 'Diver with dusky groupers in the Garajau reserve.',
    freedive: 'Freediver over volcanic rock in clear late-summer water.',
    'marine-life': 'Grouper portrait in natural light, no contact.',
    landscape: 'Ridge path above a sea of clouds.',
    'human-experience': 'Hikers on a levada with ocean views below.',
    culture: 'Espetada and bolo do caco on a terrace, or Funchal market.',
    'luxury-stay': 'Cliff-top hotel infinity edge meeting the Atlantic horizon.',
    signature: 'Late light on Paul do Mar harbour as a set breaks offshore.',
  }),
};

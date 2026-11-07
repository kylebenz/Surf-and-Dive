import type { Destination } from '../types';
import { destinationImages } from './_images';

export const azores: Destination = {
  name: 'Azores',
  displayName: 'the Azores',
  country: 'Portugal',
  region: 'Atlantic Europe',
  slug: 'azores',

  positioning: 'Volcanic mid-Atlantic islands with wild surf, blue-water diving and whale encounters: Europe’s most nature-led ocean escape.',
  hero_headline: 'The Azores: Wild Atlantic Islands in the Middle of the Ocean',
  hero_subheadline: 'Volcanic beaches, offshore seamounts where mobula rays gather in summer, resident sperm whales and boutique quintas, all within a European flight.',
  overview:
    'The Azores feel more remote and volcanic than any other European ocean destination. Nine islands sit in the mid-Atlantic, surrounded by deep water that brings oceanic life close to shore: sperm whales are frequently seen year-round, migrating baleen whales pass in spring, and in summer offshore seamounts attract mobula rays and blue sharks. Surf is raw and Atlantic, with black-sand beach breaks on São Miguel and the remote reef at Fajã da Caldeira de Santo Cristo on São Jorge. The appeal is less about a single iconic wave and more about the entire Atlantic environment: crater lakes, hot springs, hiking and very good seafood included.',
  why_visit: [
    'Blue-water diving is the standout: offshore banks and seamounts can offer pelagic encounters that are very unusual for Europe.',
    'The islands combine ocean adventure with hiking, crater lakes, thermal pools and a slow, green landscape.',
    'It is a genuine European wilderness escape without a long-haul flight.',
  ],

  surf: {
    score: 8,
    spots: ['Santa Bárbara, São Miguel', 'Monte Verde, São Miguel', 'Rabo de Peixe, São Miguel', 'Fajã da Caldeira de Santo Cristo, São Jorge', 'Breaks on Santa Maria and Terceira'],
    best_for: ['Intermediate surfers', 'Advanced surfers', 'Adventure surf trips'],
    levels: ['beginner', 'intermediate', 'advanced'],
    season: 'Atlantic swells typically peak roughly from autumn to spring. Autumn often offers a good balance of swell, milder weather and warmer water; summer is smaller and suits learners on the right days.',
    notes:
      'São Miguel’s north-coast beach breaks are the most accessible, with surf schools for beginners in smaller conditions. Reefs and points around the islands suit experienced surfers. Weather changes quickly in the mid-Atlantic, so local knowledge matters.',
  },

  diving: {
    score: 9,
    sites: ['Princess Alice Bank (offshore, seasonal)', 'Baixa do Ambrósio, Santa Maria', 'Dollabarat, Santa Maria', 'Blue-shark dives off Pico and Faial (seasonal)', 'Volcanic reefs and caves around São Miguel and Terceira'],
    marine_life: ['Mobula rays (seasonal)', 'Blue sharks (seasonal)', 'Sperm whales (frequently seen year-round)', 'Dolphins', 'Groupers and Atlantic reef fish', 'Turtles (occasional)'],
    season: 'Offshore pelagic diving is typically concentrated roughly July to September, when the water is warmest and seas calmest. Coastal diving is possible for a longer season depending on conditions.',
    notes:
      'Azorean diving is about blue water and volcanic topography rather than coral reefs. Offshore banks involve long boat rides and open-ocean conditions; they suit experienced divers. In-water whale encounters are regulated and licence-dependent. Use authorised operators only.',
  },

  freediving: {
    score: 7,
    locations: ['Calm bays on São Miguel and Santa Maria', 'Offshore banks with operator support (summer)'],
    notes:
      'Clear Atlantic water in summer can be excellent, but conditions are open-ocean and changeable. Use qualified operators, always dive with a buddy and respect regulated wildlife zones.',
  },

  marine_life_notes:
    'The Azores are one of Europe’s most important whale and dolphin regions. Watching is regulated, with licensed operators and approach rules. Mobula rays and blue sharks are seasonal and never guaranteed.',

  luxury: {
    score: 7,
    angle: 'Boutique hotels and nature experiences.',
    stay_types: ['Boutique hotels', 'Restored quintas and manor houses', 'Design-led eco-retreats', 'Small coastal guesthouses'],
    experiences: ['Licensed whale-watching trips', 'Thermal pools and hot springs', 'Crater lake and coastal hikes', 'Tea plantation visits', 'Seafood and volcanic-cooked cozido'],
  },

  scenery: {
    score: 10,
    landscape: 'Volcanic craters, lakes, green pasture, black-sand beaches and sheer coastal cliffs.',
    water: 'Deep Atlantic blue, temperate and clear in summer; powerful and changeable in winter.',
  },

  core_zones: ['São Miguel', 'Santa Maria', 'Terceira', 'São Jorge', 'Pico and Faial'],
  best_months: ['june', 'july', 'august', 'september', 'october'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Mild year-round but famously changeable. Summer is typically the most settled; winter is wetter and windier.' },
    { label: 'Surf', detail: 'Bigger, more consistent swell typically from autumn to spring; smaller summer waves.' },
    { label: 'Diving', detail: 'Offshore pelagic season typically roughly July to September.' },
    { label: 'European calendar', detail: 'Ideal for summer and early-autumn trips; a contrast to busy Mediterranean coasts.' },
  ],
  european_seasonal_angle:
    'The Azores suit the European summer and early autumn, when the water is warmest and diving peaks, and when the islands offer a cool, green alternative to crowded southern beaches.',
  season_types: ['summer', 'shoulder'],
  recommended_duration: '7-10 nights, ideally across two islands.',

  traveller_profiles: ['active-luxury', 'diver', 'couples', 'family', 'solo'],
  best_audience: 'European ocean adventure, nature and diving.',
  audience_notes: [
    { profile: 'Divers seeking pelagic life', detail: 'Summer offshore diving can be unlike anything else in Europe.' },
    { profile: 'Nature-led couples', detail: 'Hiking, hot springs, whale watching and boutique stays.' },
    { profile: 'Adventurous surfers', detail: 'Uncrowded Atlantic surf with a wild atmosphere.' },
    { profile: 'Not ideal for', detail: 'Guaranteed sunshine, tropical water temperatures or a polished resort scene.' },
  ],

  itinerary: [
    { days: 'Days 1-3', title: 'São Miguel', detail: 'Fly into Ponta Delgada; surf the north coast, hike crater lakes and soak in thermal pools.' },
    { days: 'Day 4', title: 'Whales', detail: 'A licensed whale-watching trip, conditions permitting.' },
    { days: 'Days 5-7', title: 'Santa Maria or Pico', detail: 'Hop to Santa Maria for summer offshore diving, or Pico for blue-water experiences and vineyard landscapes.' },
    { days: 'Days 8-9', title: 'Slow finish', detail: 'Coastal walks and seafood. Keep a buffer for weather-related flight changes.' },
  ],

  planning_notes: [
    'Inter-island flights and ferries depend on weather; build flexibility into the itinerary.',
    'Offshore dives require experience and good sea conditions. They are frequently weather-dependent.',
    'Whale and dolphin encounters are regulated; use licensed operators.',
    'Pack layers and rain gear even in summer.',
    'Check the current rules for vehicle access to protected areas such as Fajã da Caldeira de Santo Cristo.',
  ],

  faqs: [
    { question: 'Is the Azores good for diving?', answer: 'Yes, especially for blue-water and pelagic diving in summer. Offshore banks such as Princess Alice can offer encounters with mobula rays, typically roughly July to September, though nothing is guaranteed.' },
    { question: 'When is the best time to surf the Azores?', answer: 'Swell is typically bigger and more consistent from autumn to spring. Autumn often offers a good balance of swell and milder weather.' },
    { question: 'Azores or Madeira?', answer: 'Choose Madeira for polished luxury and convenience; choose the Azores for wilderness, exploration and a stronger sense of being far out in the Atlantic.' },
  ],

  seo: {
    title: 'Azores Luxury Surf & Dive Holidays | Portugal’s Atlantic Islands',
    meta: 'Explore luxury Azores surf and dive holidays with volcanic scenery, Atlantic waves, marine life and boutique island stays.',
    primary_keywords: ['Azores surf holiday', 'Azores diving'],
    secondary_keywords: ['Azores whale watching', 'Princess Alice Bank', 'São Miguel surf', 'Azores boutique hotel'],
  },

  related_destinations: ['madeira', 'portugal', 'canary-islands', 'south-africa'],
  related_articles: ['azores-vs-madeira-surf-dive', 'best-summer-surf-holidays-europeans', 'best-autumn-ocean-holidays-europe', 'best-luxury-diving-destinations-marine-life'],
  comparisons: ['azores-vs-madeira'],

  images: destinationImages('azores', {
    hero: 'Volcanic coastline of São Miguel with green cliffs dropping into deep blue Atlantic.',
    surf: 'Surfer on a black-sand beach break with green hills behind.',
    dive: 'Divers in blue water at an offshore bank with mobula rays at distance.',
    freedive: 'Freediver in clear summer Atlantic water near a volcanic reef.',
    'marine-life': 'Sperm whale at the surface photographed from a licensed boat.',
    landscape: 'Crater lake from a ridge viewpoint.',
    'human-experience': 'Small RIB heading out across calm Atlantic water.',
    culture: 'Cozido cooked in volcanic ground at Furnas, or a harbour fish market.',
    'luxury-stay': 'Restored quinta with Atlantic view.',
    signature: 'Fajã da Caldeira de Santo Cristo lagoon and surf from the cliff path.',
  }),
};

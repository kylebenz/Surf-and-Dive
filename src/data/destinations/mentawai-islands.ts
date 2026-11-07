import type { Destination } from '../types';
import { destinationImages } from './_images';

export const mentawaiIslands: Destination = {
  name: 'Mentawai Islands',
  displayName: 'the Mentawai Islands',
  country: 'Indonesia',
  region: 'Southeast Asia',
  slug: 'mentawai-islands',

  positioning: 'A remote archipelago of tropical reef passes — the benchmark for serious surf travel, by resort or by boat.',
  hero_headline: 'The Mentawai Islands: Remote Reef Passes for Serious Surfers',
  hero_subheadline: 'Consistent Indian Ocean swell, uncrowded tropical reef breaks and a choice between a surf resort with a fixed base or a charter that chases the forecast.',
  overview:
    'For many experienced surfers, the Mentawai Islands are the reference point: a chain of islands off the west coast of Sumatra, exposed to Indian Ocean swell and fringed with reef passes that produce long, high-quality waves. This is not a destination for casual beach time or a mixed itinerary in the way Bali is. It is a place to surf — usually twice a day — and recover in between. Luxury here means small-group surf resorts, well-run charter boats, good food, a comfortable bed and a guide who knows which reef will be best on the tide.',
  why_visit: [
    'Wave quality and consistency are the reason to come. The region holds a high density of reef breaks within boat range.',
    'Small-group resorts and charters keep numbers manageable compared with mainland surf hubs.',
    'The remoteness is part of the appeal: jungle-covered islands, warm water and very little else competing for attention.',
  ],

  surf: {
    score: 10,
    spots: ['Macaronis', 'Lance’s Right (HTs)', 'Lance’s Left', 'Rifles', 'Telescopes', 'Bank Vaults', 'Playgrounds area breaks'],
    best_for: ['Intermediate-plus surfers', 'Advanced surfers', 'Surf charters', 'Dedicated surf trips'],
    levels: ['intermediate', 'advanced'],
    season: 'The main season typically runs roughly April to October, when Indian Ocean swells are most consistent. Shoulder months can bring smaller, cleaner and quieter conditions.',
    notes:
      'Most Mentawai waves break over shallow reef and are best for confident intermediate to advanced surfers. A few breaks, such as Macaronis on smaller days, are known as more playful, but nothing here is a beginner environment. Resorts and charters typically limit guest numbers; choose an operator with experienced guides and good medical protocols given the remoteness.',
  },

  diving: {
    score: 7,
    sites: ['Reefs near resort islands', 'Snorkelling on calm days in sheltered bays'],
    marine_life: ['Reef fish', 'Turtles', 'Hard corals'],
    season: 'Diving infrastructure is limited and conditions depend heavily on swell. Snorkelling is often more practical between surf sessions.',
    notes:
      'The Mentawais are not a dive destination in the way Bali or the Philippines are. Some resorts offer snorkelling and occasional diving on calm days; check what is available before you travel and do not plan the trip around it.',
  },

  freediving: {
    score: 7,
    locations: ['Sheltered bays and lagoon areas on calm days'],
    notes:
      'Recreational breath-hold snorkelling is possible on calm days, but there is limited formal freediving support. Never freedive alone, and avoid areas exposed to swell or channel currents.',
  },

  marine_life_notes:
    'Reef fish and turtles are the most likely encounters while snorkelling. The marine environment is best appreciated gently between surf sessions, without touching coral.',

  luxury: {
    score: 8,
    angle: 'Surf resorts and boat trips.',
    stay_types: ['Small-group surf resorts', 'Surf charter yachts', 'Eco-lodges on outer islands'],
    experiences: ['Guided boat access to multiple breaks daily', 'Photographer sessions in the water', 'Massage and recovery between sessions', 'Fishing and snorkelling on flat days'],
  },

  scenery: {
    score: 10,
    landscape: 'Jungle-covered islands, palm-lined beaches and small uninhabited islets.',
    water: 'Warm, clear tropical water over reef, often glassy in the early morning.',
  },

  core_zones: ['Mentawai reef breaks (Playgrounds, Macaronis and southern areas)', 'Siberut', 'Sipura', 'Pagai islands'],
  best_months: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Tropical and humid year-round, with rain possible in any month.' },
    { label: 'Surf', detail: 'Main season typically roughly April to October; shoulder months often quieter.' },
    { label: 'Diving', detail: 'Limited and swell-dependent; snorkelling on calm days.' },
    { label: 'European calendar', detail: 'Aligns with the European summer — a classic long-haul summer surf trip.' },
  ],
  european_seasonal_angle:
    'The prime Mentawai season overlaps the European summer, which is why it remains one of the most coveted summer surf trips for experienced European surfers. Shoulder months (April, May, September, October) can offer quieter line-ups.',
  season_types: ['summer', 'shoulder'],
  recommended_duration: '10–14 nights. The journey is long and multi-stage, and you need enough days to catch more than one swell.',

  traveller_profiles: ['serious-surfer', 'solo', 'active-luxury'],
  best_audience: 'Serious surfers, surf charters and remote escapes.',
  audience_notes: [
    { profile: 'Serious surfers', detail: 'The core audience: a trip that revolves around waves, guides and tides.' },
    { profile: 'Surf groups and friends', detail: 'Charters work particularly well for a group that wants to chase swell together.' },
    { profile: 'Not ideal for', detail: 'Beginners, non-surfing partners seeking variety, or travellers who want restaurants and culture.' },
  ],

  itinerary: [
    { days: 'Days 1–2', title: 'Getting there', detail: 'International flight to Indonesia, onward to Padang, then a boat transfer to the islands. Treat this as part of the trip.' },
    { days: 'Days 3–9', title: 'Surf, eat, sleep', detail: 'Two sessions a day where conditions allow, chosen by your guide around tide and wind. Rest, massage and snorkel in between.' },
    { days: 'Days 10–11', title: 'Recovery', detail: 'Plan at least one easier day — reef cuts and fatigue add up.' },
    { days: 'Days 12–13', title: 'Return', detail: 'Boat and flights back, allowing buffer for weather-related delays.' },
  ],

  planning_notes: [
    'Access is remote and multi-stage — build in buffer days for weather and transfer delays.',
    'Medical facilities are limited; choose operators with clear first-aid and evacuation protocols, and check travel insurance cover.',
    'Seek current health advice for the region before travel, including recommendations on mosquito-borne illness.',
    'Reef boots, a well-stocked first-aid kit and spare fins and leashes are worth packing.',
    'A surf levy or local fee may apply — confirm current rules with your operator.',
    'Respect local communities and ask before photographing people or villages.',
  ],

  faqs: [
    { question: 'Are the Mentawai Islands suitable for beginners?', answer: 'No. Most waves break over shallow reef and the region is best for confident intermediate to advanced surfers.' },
    { question: 'Resort or charter in the Mentawais?', answer: 'A resort offers a fixed, comfortable base and suits couples or travellers who want land-based recovery. A charter offers mobility to chase swell and suits dedicated surf groups.' },
    { question: 'When is the best time to surf the Mentawai Islands?', answer: 'The main season typically runs roughly April to October. Shoulder months can be quieter with smaller swells.' },
  ],

  seo: {
    title: 'Mentawai Islands Luxury Surf Holidays | Resorts & Charters',
    meta: 'Plan a luxury Mentawai Islands surf trip: remote tropical reef breaks, surf resorts or charters, the best season and how to prepare for serious surf travel.',
    primary_keywords: ['Mentawai luxury surf', 'Mentawai surf resort'],
    secondary_keywords: ['Mentawai surf charter', 'Mentawai surf season', 'Indonesia advanced surf'],
  },

  related_destinations: ['bali-nusa-penida', 'fiji', 'siargao', 'maldives'],
  related_articles: ['luxury-surf-resorts-vs-surf-charters', 'best-luxury-surf-destinations-advanced-surfers', 'portugal-vs-indonesia-luxury-surf', 'ocean-safety-luxury-surf-travellers'],
  comparisons: ['portugal-vs-indonesia'],

  images: destinationImages('mentawai-islands', {
    hero: 'Aerial of a jungle island with a reef pass and lined-up swell.',
    surf: 'Surfer in a tropical reef barrel, reef visible below.',
    dive: 'Snorkeller over hard coral in a sheltered bay on a flat day.',
    freedive: 'Calm breath-hold snorkel over a sandy channel with a buddy nearby.',
    'marine-life': 'Turtle at a natural distance over hard coral.',
    landscape: 'Palm-lined uninhabited islet at low tide.',
    'human-experience': 'Surf guide briefing guests on the boat before a session.',
    culture: 'Simple local meal on the resort deck, or traditional Mentawai craft (with consent).',
    'luxury-stay': 'Charter yacht deck at anchor in a calm bay.',
    signature: 'Glassy dawn line-up from the channel, single surfer paddling.',
  }),
};

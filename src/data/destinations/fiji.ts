import type { Destination } from '../types';
import { destinationImages } from './_images';

export const fiji: Destination = {
  name: 'Fiji',
  displayName: 'Fiji',
  country: 'Fiji',
  region: 'South Pacific',
  slug: 'fiji',

  positioning: 'Serious Pacific surf, soft-coral diving and private-island stays, for travellers who want the wave to be the centrepiece.',
  hero_headline: 'Fiji: Cloudbreak, Soft Coral and Private-Island Calm',
  hero_subheadline: 'Powerful, high-quality reef passes in the Mamanuca Islands, some of the Pacific’s most colourful reefs and small-island resorts where the boat to the break leaves from the beach.',
  overview:
    'Fiji is a surf destination first for many travellers, and for good reason. Tourism Fiji identifies Cloudbreak as a challenging reef break and the Mamanuca Islands as a major surf area with options from beginner-friendly waves to advanced reef passes. But the country is far more than one wave. Fijian reefs are known for soft corals and dense fish life, the islands have a warmth of welcome that shapes every stay, and the private-island resort model means the ocean is always close. For Europeans it is a significant journey, which is exactly why it rewards a longer, slower trip.',
  why_visit: [
    'Surf quality is the headline. Cloudbreak, Restaurants and the passes around Tavarua and Namotu are among the best-known reef waves in the Pacific, and the region also holds more forgiving options when conditions allow.',
    'Diving is just as strong, with colourful soft-coral reefs, walls and channels across several regions.',
    'Small private-island resorts make it easy for a surfer and a non-surfer to share a holiday: one heads to the reef by boat, the other has the lagoon, the spa and the island to themselves.',
  ],

  surf: {
    score: 10,
    spots: ['Cloudbreak', 'Restaurants', 'Tavarua Rights', 'Namotu Left', 'Swimming Pools', 'Wilkes Pass', 'Frigates Passage (Beqa area)'],
    best_for: ['Advanced surfers', 'Intermediate surfers on suitable days', 'Surf resort stays', 'Boat-based surf trips'],
    levels: ['intermediate', 'advanced'],
    season: 'Tourism Fiji notes April to October as the strong surf period for Cloudbreak, when southern-hemisphere swells are most consistent. Smaller, cleaner days can occur outside that window.',
    notes:
      'Cloudbreak is a powerful left-hand reef pass reached by boat and described by Tourism Fiji as intermediate to advanced; on bigger days it is firmly for experts. Tourism Fiji lists Swimming Pools and Tavarua Rights among options that can suit a wider range of abilities under certain conditions. Almost all surf here breaks over live reef, so a guide, boat support and honest self-assessment are essential.',
  },

  diving: {
    score: 10,
    sites: ['Rainbow Reef and the Somosomo Strait (Taveuni)', 'Beqa Lagoon', 'Bligh Water', 'Mamanuca reefs', 'Namena Marine Reserve', 'Kadavu and the Great Astrolabe Reef'],
    marine_life: ['Soft corals', 'Reef sharks', 'Manta rays (seasonal, selected areas)', 'Turtles', 'Schooling reef fish', 'Macro life'],
    season: 'Diving is possible year-round. The cooler, drier months (roughly May to October) often bring better visibility; warmer months can bring plankton and occasional cyclone risk. Check with operators for your chosen region.',
    notes:
      'Fiji’s reputation rests on colour, soft-coral gardens in current-swept passages such as the Somosomo Strait, and on variety across very different regions. Some channel dives demand experience with current. Resort-based diving is well developed, and liveaboards reach more remote reefs.',
  },

  freediving: {
    score: 8,
    locations: ['Sheltered lagoons around the Mamanuca and Yasawa islands', 'Outer reef walls with guide support'],
    notes:
      'Calm lagoon days and clear water can make Fiji appealing for recreational freediving and snorkelling. Use qualified local support, never freedive alone and treat passes and channels with respect: currents can be strong.',
  },

  marine_life_notes:
    'Fiji’s reefs are associated with dense fish life and soft corals, with reef sharks, turtles and, in certain areas and seasons, manta rays. Some shark dives in Fiji involve feeding; research operator practices and choose experiences that align with your values. Never touch coral or wildlife.',

  luxury: {
    score: 9,
    angle: 'Private-island resorts, surf charters and reef days.',
    stay_types: ['Private-island resorts', 'Dedicated surf resorts on small islands', 'Beachfront bures', 'Liveaboard and surf charter boats'],
    experiences: ['Boat surf sessions at Mamanuca reef passes', 'Island-hopping by private boat', 'Village visits arranged with local communities', 'Reef snorkelling with marine guides', 'Sunset on a sandbank'],
  },

  scenery: {
    score: 10,
    landscape: 'Green volcanic high islands, small coral cays and white-sand beaches across a wide archipelago.',
    water: 'Warm, clear South Pacific water with vivid lagoon colour and deep blue outside the reef.',
  },

  core_zones: ['Mamanuca Islands', 'Coral Coast', 'Outer reefs', 'Taveuni', 'Beqa', 'Yasawa Islands'],
  best_months: ['april', 'may', 'june', 'july', 'august', 'september', 'october'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'Cooler, drier conditions typically run roughly May to October; the warmer, wetter season runs roughly November to April and carries cyclone risk.' },
    { label: 'Surf', detail: 'April to October is the strong surf period highlighted by Tourism Fiji, driven by southern-hemisphere swells.' },
    { label: 'Diving', detail: 'Year-round, often with better visibility in the drier months.' },
    { label: 'European calendar', detail: 'Aligns with Easter, the European summer and early autumn. December can work for festive escapes, accepting wet-season weather.' },
  ],
  european_seasonal_angle:
    'Fiji’s prime surf season runs through the European summer, which makes it one of the strongest long-haul alternatives to an Atlantic summer trip. Long journey times mean it is best saved for a trip of ten nights or more.',
  season_types: ['summer', 'shoulder'],
  recommended_duration: '10-14 nights. The journey from Europe is long; give yourself time to recover and to see more than one swell.',

  traveller_profiles: ['serious-surfer', 'diver', 'couples', 'honeymoon', 'active-luxury', 'family'],
  best_audience: 'Serious surfers, divers and private-island travellers.',
  audience_notes: [
    { profile: 'Serious surfers', detail: 'Boat access to the Mamanuca reef passes, ideally from a surf resort or charter with experienced guides.' },
    { profile: 'Divers', detail: 'Soft-coral reefs, walls and current dives across multiple regions.' },
    { profile: 'Couples with one surfer', detail: 'Small-island resorts make it easy for one partner to surf while the other enjoys the lagoon and spa.' },
    { profile: 'Not ideal for', detail: 'Short trips, or complete beginners who want a surf-only holiday on sand-bottom waves.' },
  ],

  itinerary: [
    { days: 'Days 1-2', title: 'Arrive and reset', detail: 'Arrive in Nadi, transfer by boat to a Mamanuca island and spend the first day in the lagoon rather than at the reef.' },
    { days: 'Days 3-6', title: 'Surf the passes', detail: 'Morning boat sessions matched to the swell and your level; afternoons for rest, snorkelling and the island.' },
    { days: 'Days 7-8', title: 'Dive days', detail: 'Two-tank dives on the outer reefs, or a transfer to a dedicated dive region such as Taveuni for soft coral.' },
    { days: 'Days 9-10', title: 'Island time', detail: 'A private boat to a sandbank, a village visit arranged respectfully through your hosts and a slow final evening.' },
    { days: 'Days 11-12', title: 'Optional extension', detail: 'Add a second island for contrast, or stay put if the swell is still running.' },
  ],

  planning_notes: [
    'Most surf breaks are reached by boat; confirm how your resort or charter manages access.',
    'Cyclone season typically runs roughly November to April. Check forecasts and travel insurance cover.',
    'Village visits should be arranged through hosts; follow local customs, including dress codes.',
    'Respect the no-fly interval after diving before domestic seaplane or international flights.',
    'Bring reef-safe sun protection and reef boots; live coral cuts heal slowly in the tropics.',
    'Verify current entry and health requirements before travel.',
  ],

  faqs: [
    { question: 'Is Fiji good for beginner surfers?', answer: 'Fiji is best known for advanced reef waves such as Cloudbreak. Tourism Fiji does list options such as Swimming Pools and Tavarua Rights that can suit a wider range of abilities under certain conditions, but complete beginners should choose carefully and surf only with qualified guidance.' },
    { question: 'When is surf season in Fiji?', answer: 'Tourism Fiji highlights April to October as the strong surf period for Cloudbreak, when southern-hemisphere swells are most consistent.' },
    { question: 'Is Fiji good for diving?', answer: 'Yes. Fiji is known for soft-coral reefs, walls and channel dives across regions such as Taveuni, Beqa and Bligh Water. Some sites involve current and suit experienced divers.' },
    { question: 'Fiji or French Polynesia?', answer: 'Choose Fiji when the wave is the reason for the trip; choose French Polynesia when the lagoon, the scenery and the overall island experience are the priority.' },
  ],

  seo: {
    title: 'Fiji Luxury Surf & Dive Holidays | Cloudbreak & Private Islands',
    meta: 'Discover luxury Fiji surf and dive holidays with Cloudbreak, tropical reefs, private islands and South Pacific scenery.',
    primary_keywords: ['Fiji luxury surf holiday', 'Fiji diving holiday'],
    secondary_keywords: ['Cloudbreak surf', 'Mamanuca Islands surf', 'Fiji private island resort', 'Fiji soft coral diving'],
  },

  related_destinations: ['french-polynesia', 'hawaii', 'mentawai-islands', 'maldives'],
  related_articles: ['fiji-vs-french-polynesia-luxury-ocean', 'best-luxury-surf-destinations-advanced-surfers', 'best-summer-surf-holidays-europeans', 'luxury-surf-resorts-vs-surf-charters', 'luxury-ocean-escapes-christmas-new-year'],
  comparisons: ['fiji-vs-french-polynesia'],

  images: destinationImages('fiji', {
    hero: 'Aerial of a Mamanuca island ringed by reef with a wave peeling along the pass.',
    surf: 'Surfer on a Cloudbreak-scale left with a boat in the channel for scale.',
    dive: 'Diver beside soft-coral bommies in a current-swept passage.',
    freedive: 'Freediver gliding over a shallow reef in clear lagoon water.',
    'marine-life': 'Soft corals and anthias in natural light, with the reef itself as the subject.',
    landscape: 'Green volcanic island rising above a turquoise lagoon.',
    'human-experience': 'Surf boat heading out across the lagoon at dawn, boards stacked.',
    culture: 'Fijian welcome or shared lovo meal, photographed with consent.',
    'luxury-stay': 'Beachfront bure opening onto the lagoon at low tide.',
    signature: 'Late light on the reef pass with the swell lines visible from the channel.',
  }),
};

import type { Destination } from '../types';
import { destinationImages } from './_images';

export const maldives: Destination = {
  name: 'Maldives',
  displayName: 'the Maldives',
  country: 'Maldives',
  region: 'Indian Ocean',
  slug: 'maldives',

  positioning: 'Reef surf, pelagic diving and the one-island, one-resort model: the clearest expression of an ocean-first luxury holiday.',
  hero_headline: 'The Maldives: Reef Passes, Warm Lagoons and Island Luxury',
  hero_subheadline: 'Atoll reef breaks, house reefs a few steps from the villa and some of the Indian Ocean’s most rewarding diving, with the privacy of a resort that occupies its own island.',
  overview:
    'The Maldives is one of the easiest places to understand what a luxury ocean holiday actually is. The country is a chain of coral atolls, and almost every decision (where you stay, how you arrive, what you do each morning) is shaped by the reef. Official Maldives tourism information highlights the one-island-one-resort model, reef surfing across several atolls and diving that ranges from easy house reefs to pelagic sites such as Fuvahmulah. For European travellers it is a long-haul trip, but one with very little friction once you land: a seaplane or speedboat, a villa over or beside the lagoon, and the water immediately outside.',
  why_visit: [
    'The geography does the work. Atolls are ringed by reef passes, which create surf on the outer edges and channels full of marine life on the inside. You do not have to drive anywhere to reach the ocean; you are already in it.',
    'It suits mixed-interest travel unusually well. One person can take a boat to a reef break at dawn while the other snorkels the house reef, books a spa treatment or does nothing at all, and both meet again for lunch.',
    'Luxury here is structural rather than decorative. Because each resort sits on its own island, privacy, quiet and direct water access are part of the format, not an upgrade.',
  ],

  surf: {
    score: 8,
    spots: ['Sultans (North Malé)', 'Honky’s (North Malé)', 'Jailbreaks (North Malé)', 'Chickens (North Malé)', 'Cokes (North Malé)', 'Lohis (North Malé)', 'Central and southern atolls by boat'],
    best_for: ['Intermediate surfers', 'Advanced surfers', 'Surf charters', 'Mixed surf-and-resort trips'],
    levels: ['intermediate', 'advanced'],
    season: 'Visit Maldives describes a long surf season across much of the year, with stronger periods typically in parts of spring and autumn. Exact windows vary by atoll and swell.',
    notes:
      'Maldivian surf breaks over shallow coral reef, usually reached by boat. Waves are generally well-shaped and less intimidating than heavier Indonesian or Pacific reefs, but this is not a beginner destination: reef, currents and boat logistics demand some experience. North Malé is the most accessible zone; selected resorts hold access to nearby breaks, and surf charters can move between atolls with the swell. Check how surf access is managed at your chosen resort before booking.',
  },

  diving: {
    score: 10,
    sites: ['Fuvahmulah (pelagic diving)', 'Ari Atoll channels and thilas', 'South Ari Atoll (whale shark area)', 'Baa Atoll and Hanifaru Bay (regulated, snorkel-only)', 'North and South Malé channels', 'Resort house reefs'],
    marine_life: ['Manta rays', 'Whale sharks', 'Grey reef and whitetip reef sharks', 'Tiger sharks (Fuvahmulah)', 'Green and hawksbill turtles', 'Napoleon wrasse', 'Schooling reef fish'],
    season: 'Diving is possible year-round. Conditions shift with the two monsoons: the drier north-east monsoon (roughly December to April) is often associated with calmer seas, while manta activity on the western side of some atolls is typically linked to the south-west monsoon months. Verify with your dive centre for the specific atoll.',
    notes:
      'Diving is central to the Maldives’ identity. Channel dives can be current-driven and suit experienced divers; house reefs and lagoons suit newer divers and snorkellers. Fuvahmulah is promoted by Visit Maldives for pelagic diving and several shark species. The strongest luxury dive trips pair a well-run dive centre with good boat logistics and sensible guide ratios. The most expensive resort is not automatically the best dive base.',
  },

  freediving: {
    score: 8,
    locations: ['Resort house reefs and drop-offs', 'Sheltered lagoons for training', 'Selected atoll channels with guide support'],
    notes:
      'Warm water, sheltered lagoons and reef walls make the Maldives appealing for freediving practice. Train only with qualified instructors, use a buddy system at all times and be cautious near channels where current can build quickly. Boat traffic around resorts is a real consideration. Always use a surface buoy and follow local guidance.',
  },

  marine_life_notes:
    'Manta rays, whale sharks, reef sharks and turtles are among the animals most associated with the Maldives, but none is guaranteed on a given day. Encounters depend on season, atoll and conditions. Keep a respectful distance, never touch or chase animals and follow the regulations in protected areas such as Hanifaru Bay, where access is controlled.',

  luxury: {
    score: 10,
    angle: 'Luxury one-island-one-resort model; reef access and dining built into the stay.',
    stay_types: ['Overwater villas', 'Beach villas with lagoon access', 'Private-island resorts', 'Surf and dive charter yachts'],
    experiences: ['Seaplane transfers between Malé and outer atolls', 'Private boat surf or dive sessions', 'Sandbank lunches and sunset cruises', 'Overwater spa treatments', 'Marine biologist-led reef snorkels'],
  },

  scenery: {
    score: 10,
    landscape: 'Low coral islands, white sand and palm cover set within wide atoll lagoons. The drama is in the colour and scale of the water rather than the land.',
    water: 'Clear, warm tropical water that shifts from pale lagoon turquoise to deep blue at the reef edge.',
  },

  core_zones: ['North Malé Atoll', 'South Malé Atoll', 'Ari Atoll', 'Baa Atoll', 'Central atolls', 'Fuvahmulah'],
  best_months: ['january', 'february', 'march', 'april', 'may', 'october', 'november', 'december'],
  seasonal_conditions: [
    { label: 'Weather', detail: 'The north-east monsoon (roughly December to April) is typically drier and sunnier. The south-west monsoon (roughly May to November) brings more changeable weather and rain, though many days remain bright.' },
    { label: 'Surf', detail: 'A long season through much of the year; spring and autumn are often highlighted as strong periods. Swell, wind and the specific atoll all matter.' },
    { label: 'Diving', detail: 'Year-round. Visibility and marine-life patterns shift with the monsoon and the side of the atoll you dive.' },
    { label: 'European calendar', detail: 'Strong for winter sun (November to March), February half-term, Easter and autumn breaks. Christmas and New Year are peak periods.' },
  ],
  european_seasonal_angle:
    'The Maldives is a natural winter-sun choice for Europeans: warm water and settled weather typically coincide with the coldest months at home. Autumn and spring offer an interesting balance for surfers who want stronger swell windows.',
  season_types: ['winter-sun', 'year-round'],
  recommended_duration: '7-10 nights. Allow a recovery day on arrival; long-haul flights plus a seaplane or speedboat transfer make very short stays poor value.',

  traveller_profiles: ['couples', 'honeymoon', 'diver', 'freediver', 'serious-surfer', 'winter-sun'],
  best_audience: 'Couples, honeymooners, luxury divers and intermediate to advanced surfers.',
  audience_notes: [
    { profile: 'Couples and honeymooners', detail: 'Privacy, lagoon villas and the ability to divide the day: one surfing or diving, the other on the reef or in the spa.' },
    { profile: 'Luxury divers', detail: 'A strong dive centre and access to channels, thilas and pelagic sites without long road transfers.' },
    { profile: 'Intermediate to advanced surfers', detail: 'Well-shaped reef waves reached by boat, ideally from a resort or charter with managed surf access.' },
    { profile: 'Not ideal for', detail: 'Complete beginner surfers, travellers who want to explore towns and culture day to day, or anyone who needs a short trip.' },
  ],

  itinerary: [
    { days: 'Day 1', title: 'Arrive and slow down', detail: 'International arrival into Malé, seaplane or speedboat transfer, then an easy afternoon on the house reef with a snorkel and an early night.' },
    { days: 'Days 2-4', title: 'Reef days', detail: 'Morning boat dives or surf sessions while the wind is lightest; afternoon recovery, spa and a guided snorkel. Keep one afternoon completely free.' },
    { days: 'Day 5', title: 'A signature day', detail: 'A full-day boat trip for pelagic diving, a remote break or a sandbank lunch, depending on conditions.' },
    { days: 'Days 6-8', title: 'Follow the conditions', detail: 'Let the swell and visibility decide: surf if the reef is working, dive if the channels are clear, freedive training in the lagoon with an instructor.' },
    { days: 'Days 9-10', title: 'Unwind and depart', detail: 'No diving within the recommended pre-flight interval. Finish with a slow lagoon day before the transfer back to Malé.' },
  ],

  planning_notes: [
    'Check how each resort handles surf access before booking. Some breaks are associated with specific resorts or charters.',
    'Seaplane transfers typically operate in daylight only, which affects arrival and departure timing. Confirm with your resort.',
    'Respect the pre-flight no-dive interval recommended by your training agency before flying home.',
    'Local customs are more conservative on inhabited islands than in resorts; dress and behave accordingly when visiting.',
    'Bring reef-safe sun protection and avoid standing on or touching coral, including in shallow lagoons.',
    'Verify current entry rules, health advice and any resort-specific requirements before travel.',
  ],

  faqs: [
    { question: 'Is the Maldives good for beginner surfers?', answer: 'Generally not. Most Maldivian surf breaks over shallow coral reef and are reached by boat, which suits intermediate and advanced surfers. Complete beginners are usually better served by sandy-bottom beach breaks in places such as Portugal or parts of Bali.' },
    { question: 'When is the best time to dive in the Maldives?', answer: 'Diving is possible year-round. The drier north-east monsoon (roughly December to April) is often associated with calmer conditions, while some manta activity is typically linked to the south-west monsoon months on certain atolls. The best month depends on what you want to see and where.' },
    { question: 'Can I surf and dive on the same Maldives holiday?', answer: 'Yes, and it is one of the destination’s strengths. Many travellers surf in the morning and dive or snorkel later, or alternate days. Build the itinerary around whichever activity matters most and leave rest days.' },
    { question: 'Are whale sharks and manta rays guaranteed?', answer: 'No. Encounters depend on season, location and conditions. Choose operators who follow local regulations and keep a respectful distance, and treat any sighting as a privilege rather than a promise.' },
    { question: 'How long should a Maldives trip be?', answer: 'Seven to ten nights works well for most European travellers. The long-haul flight and onward transfer make anything shorter feel rushed.' },
  ],

  seo: {
    title: 'Maldives Luxury Surf & Dive Holidays | Surf and Dive',
    meta: 'Discover luxury Maldives surf and dive holidays with tropical reefs, premium island resorts, exceptional ocean scenery and refined experiences.',
    primary_keywords: ['Maldives luxury surf holiday', 'Maldives diving holiday'],
    secondary_keywords: ['Maldives surf season', 'Maldives freediving', 'Maldives luxury resort', 'Fuvahmulah diving'],
  },

  related_destinations: ['seychelles', 'mauritius', 'french-polynesia', 'sri-lanka'],
  related_articles: ['maldives-vs-bali-luxury-surf-dive', 'best-luxury-diving-holidays-world', 'where-to-dive-february-warm-water-luxury', 'best-ocean-destinations-for-couples', 'luxury-ocean-escapes-christmas-new-year'],
  comparisons: ['maldives-vs-bali'],

  images: destinationImages('maldives', {
    hero: 'Aerial view of an atoll reef edge where lagoon turquoise meets deep blue, with a small island for scale.',
    surf: 'Surfer on a clean reef wave with a palm-covered island behind, the reef visible through the face.',
    dive: 'Diver drifting along a channel wall with schooling fish, natural light, no touching.',
    freedive: 'Freediver suspended over a sandy lagoon floor with a buddy visible at the surface.',
    'marine-life': 'Manta ray at a natural distance over a cleaning station.',
    landscape: 'Low island, white sand and reef pass from a seaplane window.',
    'human-experience': 'Two travellers on a dhoni heading out at first light, boards and dive kit aboard.',
    culture: 'Maldivian fish curry and roshi, or a local island harbour scene.',
    'luxury-stay': 'Overwater villa deck with direct steps into the lagoon, with the water as the subject.',
    signature: 'Sandbank at sunset with the reef line breaking in the distance.',
  }),
};

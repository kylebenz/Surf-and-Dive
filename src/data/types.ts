/**
 * Surf and Dive: content model.
 *
 * Every page is rendered from these structured types. Edit the data files in
 * /src/data (destinations, comparisons, seasonal, countries) and the Markdown
 * guides in /src/content/guides, not the components.
 */

export type Month =
  | 'january' | 'february' | 'march' | 'april' | 'may' | 'june'
  | 'july' | 'august' | 'september' | 'october' | 'november' | 'december';

export type Activity = 'surf' | 'dive' | 'freedive' | 'luxury' | 'scenery';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type TravellerProfile =
  | 'couples' | 'honeymoon' | 'family' | 'solo' | 'active-luxury'
  | 'serious-surfer' | 'diver' | 'freediver' | 'winter-sun';

export type SeasonType = 'winter-sun' | 'summer' | 'shoulder' | 'year-round';

export type Region =
  | 'Indian Ocean' | 'Southeast Asia' | 'South Pacific' | 'North Pacific'
  | 'Central America' | 'Atlantic Europe' | 'South America' | 'Africa';

export type FAQ = { question: string; answer: string };

export type ImageSlotType =
  | 'hero'
  | 'surf'
  | 'dive'
  | 'freedive'
  | 'marine-life'
  | 'landscape'
  | 'human-experience'
  | 'culture'
  | 'luxury-stay'
  | 'signature';

export type DestinationImage = {
  id: string;
  slot: number;
  type: ImageSlotType;
  /** Optional media key overriding the slot convention, e.g. "destinations/maldives/hero-alt". */
  src: string;
  /** Must describe the actual photograph once supplied. Empty while the slot is empty. */
  alt: string;
  caption?: string;
  credit?: string;
  /** Art direction for the photo editor. Never rendered publicly. */
  brief?: string;
};

export type ItineraryDay = { days: string; title: string; detail: string };

export type Destination = {
  name: string;
  /** Name used in running copy, e.g. "the Maldives". */
  displayName: string;
  country: string;
  region: Region;
  slug: string;

  positioning: string;
  hero_headline: string;
  hero_subheadline: string;
  overview: string;
  why_visit: string[];

  surf: {
    score: number;
    spots: string[];
    best_for: string[];
    levels: SkillLevel[];
    season: string;
    notes: string;
  };

  diving: {
    score: number;
    sites: string[];
    marine_life: string[];
    season: string;
    notes: string;
  };

  freediving: {
    score: number;
    locations: string[];
    notes: string;
  };

  marine_life_notes: string;

  luxury: {
    score: number;
    angle: string;
    stay_types: string[];
    experiences: string[];
  };

  scenery: {
    score: number;
    landscape: string;
    water: string;
  };

  core_zones: string[];
  best_months: Month[];
  seasonal_conditions: { label: string; detail: string }[];
  european_seasonal_angle: string;
  season_types: SeasonType[];
  recommended_duration: string;

  traveller_profiles: TravellerProfile[];
  best_audience: string;
  audience_notes: { profile: string; detail: string }[];

  itinerary: ItineraryDay[];
  planning_notes: string[];

  faqs: FAQ[];

  seo: {
    title: string;
    meta: string;
    primary_keywords: string[];
    secondary_keywords: string[];
  };

  related_destinations: string[];
  related_articles: string[];
  comparisons?: string[];

  images: DestinationImage[];
};

export type ComparisonCriterion =
  | 'Surf' | 'Diving' | 'Freediving' | 'Luxury' | 'Water' | 'Weather'
  | 'Accessibility' | 'Privacy' | 'Couples' | 'Families' | 'Value' | 'Overall fit';

export type Comparison = {
  slug: string;
  /** Destination slug for side A. */
  a: string;
  /** Destination slug for side B. */
  b: string;
  /** Optional display labels when a side represents a wider region (e.g. "Indonesia"). */
  a_label?: string;
  b_label?: string;
  /** Extra destination slugs a side covers (e.g. Indonesia → Bali and the Mentawais). */
  b_also?: string[];
  title: string;
  h1: string;
  intro: string;
  short_answer: string;
  criteria: { criterion: ComparisonCriterion; a: string; b: string; edge: 'a' | 'b' | 'even' | 'depends' }[];
  choose_a: string[];
  choose_b: string[];
  consider_both: string;
  guide: string;
  faqs: FAQ[];
  seo: { title: string; meta: string };
};

export type SeasonPick = { slug: string; note: string; activities: Activity[] };

export type Season = {
  month: Month;
  name: string;
  campaign: string;
  headline: string;
  angle: string;
  intro: string;
  climate_note: string;
  european_angle: string;
  picks: SeasonPick[];
  also_note?: string;
  guides: string[];
  seo: { title: string; meta: string };
};

export type Market = {
  slug: string;
  country: string;
  demonym: string;
  language: string;
  hreflang: string;
  landing_concept: string;
  editorial_angle: string;
  intro: string;
  seasonal_intent: { label: string; detail: string }[];
  destinations: { slug: string; why: string }[];
  months: Month[];
  guides: string[];
  search_terms: string[];
  seo: { title: string; meta: string };
};

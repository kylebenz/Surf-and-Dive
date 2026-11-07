import type { DestinationImage, ImageSlotType } from '../types';

/** The ten-slot image taxonomy shared by every destination. */
export const IMAGE_SLOTS: { slot: number; type: ImageSlotType; file: string; label: string }[] = [
  { slot: 1, type: 'hero', file: 'hero', label: 'Hero / Ocean Landscape' },
  { slot: 2, type: 'surf', file: 'surf', label: 'Surf Experience' },
  { slot: 3, type: 'dive', file: 'dive', label: 'Dive Experience' },
  { slot: 4, type: 'freedive', file: 'freedive', label: 'Freediving / Underwater Exploration' },
  { slot: 5, type: 'marine-life', file: 'marine-life', label: 'Marine Life' },
  { slot: 6, type: 'landscape', file: 'landscape', label: 'Coastline / Landscape' },
  { slot: 7, type: 'human-experience', file: 'experience', label: 'Human Ocean Experience' },
  { slot: 8, type: 'culture', file: 'culture', label: 'Local Culture / Food' },
  { slot: 9, type: 'luxury-stay', file: 'luxury', label: 'Luxury Stay' },
  { slot: 10, type: 'signature', file: 'signature', label: 'Signature Ocean Moment' },
];

export const slotLabel = (type: ImageSlotType) =>
  IMAGE_SLOTS.find((s) => s.type === type)?.label ?? type;

export const slotFile = (type: ImageSlotType) =>
  IMAGE_SLOTS.find((s) => s.type === type)?.file ?? type;

/**
 * Builds the ten empty image slots for a destination.
 *
 * `src` and `alt` start empty on purpose. To publish photography either:
 *  1. drop a file named after the slot (hero.webp, surf.webp, …) into
 *     media/destinations/<slug>/ (any size; it is optimised automatically), or
 *  2. set `src` to another media key (path inside /media without the extension).
 * Alt text, title, caption and credit go in the sidecar media/.../<file>.json (created
 * automatically by `npm run media`), or here, which takes precedence. Run
 * `npm run images:report` to audit.
 */
export function destinationImages(
  slug: string,
  briefs: Record<ImageSlotType, string>,
  overrides: Partial<Record<ImageSlotType, Partial<DestinationImage>>> = {},
): DestinationImage[] {
  return IMAGE_SLOTS.map(({ slot, type }) => ({
    id: `${slug}-${type}`,
    slot,
    type,
    src: '',
    alt: '',
    brief: briefs[type],
    ...overrides[type],
  }));
}

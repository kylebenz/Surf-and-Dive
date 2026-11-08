/**
 * Advertising and affiliate banner slots.
 *
 * Each placement is a reserved space in a page template. A placement left as `null` renders
 * nothing at all, so the site looks exactly as it does without ads. Put a creative in a slot and
 * it appears there, in a box whose size is reserved in advance (no layout shift), labelled
 * "Advertisement".
 *
 * Two kinds of creative:
 *
 *   Affiliate banner (an image you upload to media/ads/, linked with rel="sponsored"):
 *     { type: 'banner', image: 'ads/booking-summer', href: 'https://partner.example/?aid=123',
 *       partner: 'Booking.com', alt: 'Summer villa deals on Booking.com' }
 *
 *   Ad network or partner code (AdSense, a booking widget...). It is not loaded with the page:
 *   it is inserted only when the slot scrolls near the screen, so it never slows the first view.
 *     { type: 'html', html: '<ins class="adsbygoogle" ...></ins><script async src="..."></script>' }
 *
 * Sizes per placement (standard IAB units):
 *   home-mid, destination-*      billboard: 300×250 on phones, 728×90 on tablets, 970×250 on desktop
 *   article-inline                rectangle: 300×250
 *   article-rail                  half page: 300×600, sticky, wide screens (1280px+) only
 *
 * To preview every slot as a labelled empty frame, build with PUBLIC_ADS_PREVIEW=1.
 */
export type AdCreative =
  | { type: 'banner'; image: string; href: string; partner: string; alt: string }
  | { type: 'html'; html: string };

export type Placement =
  | 'home-mid'
  | 'article-rail'
  | 'article-inline'
  | 'destination-top'
  | 'destination-mid'
  | 'destination-end';

export const ADS: { preview: boolean; slots: Record<Placement, AdCreative | null> } = {
  preview: import.meta.env.PUBLIC_ADS_PREVIEW === '1',
  slots: {
    'home-mid': null, //         homepage, after "Choose Your Ocean Experience"
    'article-rail': null, //     blog posts, right-hand side rail (wide screens)
    'article-inline': null, //   blog posts, after the article text
    'destination-top': null, //  destination pages, after the overview
    'destination-mid': null, //  destination pages, after the luxury section
    'destination-end': null, //  destination pages, before the FAQ
  },
};

/** True when a placement will render (has a creative, or preview mode is on). */
export const adShown = (p: Placement) => Boolean(ADS.slots[p]) || ADS.preview;

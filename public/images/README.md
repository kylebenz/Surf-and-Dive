# Surf and Dive: photography

Every destination has exactly ten image slots (20 × 10 = 200). All start empty and
render as labelled placeholders until real, licensed photography is supplied.

## Destinations: `/public/images/destinations/<slug>/`

| Slot | File | Purpose |
| --- | --- | --- |
| 1 | `hero.webp` | Hero / ocean landscape |
| 2 | `surf.webp` | Surf experience |
| 3 | `dive.webp` | Dive experience |
| 4 | `freedive.webp` | Freediving / underwater exploration |
| 5 | `marine-life.webp` | Marine life |
| 6 | `landscape.webp` | Coastline / landscape |
| 7 | `experience.webp` | Human ocean experience |
| 8 | `culture.webp` | Local culture / food |
| 9 | `luxury.webp` | Luxury stay |
| 10 | `signature.webp` | Signature ocean moment |

Drop a file with the exact name (`.webp`, `.avif`, `.jpg` or `.png`) into the folder and it
is picked up at build time. Then add an `alt` (describing the actual photograph) and
optional `caption` / `credit` for that slot in `src/data/destinations/<slug>.ts`, e.g.

```ts
images: destinationImages('maldives', { ...briefs }, {
  hero: { alt: 'Aerial view of a reef pass beside a small island in North Malé Atoll', credit: '© Photographer / Agency' },
}),
```

## Guides: `/public/images/blog/<guide-slug>/image-<n>.webp`

`image-1` is the guide hero; `image-2` … follow the image guide in the article's front
matter (`src/content/guides/<slug>.md`). Add `alt`, `caption` and `credit` there.

## Homepage: `/public/images/home/hero.webp`

## Tooling

- `npm run images:report`: lists every slot, whether it is filled and whether alt text is missing, plus the art-direction brief.
- `npm run images:optimize`: creates responsive `-640/-1280/-1920.webp` variants; they are added to `srcset` automatically.

Rules: authentic, licensed photography only. The ocean is the protagonist. Never use
AI-generated images to depict real resorts, waves, reefs or wildlife encounters.

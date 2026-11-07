# Surf and Dive: photos and video

Upload full-size originals here. You never resize, compress or convert anything yourself:
every build turns each photo into AVIF, WebP and JPEG (or PNG) at 480, 768, 1200, 1600
and 2000 px wide, strips camera/GPS metadata, records its dimensions and serves the right
size to each screen. Files in this folder are never published as they are.

Rules: authentic, licensed photography only. The ocean is the protagonist. Never use
AI-generated images to depict real resorts, waves, reefs or wildlife encounters.

## Adding a photo (3 steps)

1. **Upload** the original (JPEG, PNG, WebP, AVIF or TIFF; any size, ideally the camera
   or agency original up to ~25 MB) to the folder for where it should appear:

   | Placement | File |
   | --- | --- |
   | Homepage hero | `home/hero.jpg` |
   | Destination slot | `destinations/<slug>/<slot>.jpg` (slots below) |
   | Blog post image | `blog/<post-slug>/image-<n>.jpg` (`image-1` is the hero) |
   | Gallery | `gallery/<name>/<any-name>.jpg` (shown in file-name order) |

   Destination slots: `hero`, `surf`, `dive`, `freedive`, `marine-life`, `landscape`,
   `experience`, `culture`, `luxury`, `signature`.
   Extra destination photos go in `destinations/<slug>/more/`. Every destination with four
   or more photos gets a "View all photos" button that opens them all full screen.

2. **Title and alt text.** Next to each photo, a `<name>.json` file holds its text:

   ```json
   {
     "title": "Cloudbreak at dawn",
     "alt": "A clean left-hand wave breaking over the reef at Cloudbreak at sunrise",
     "caption": "Cloudbreak, Mamanuca Islands",
     "credit": "© Photographer / Agency",
     "focus": "50% 30%"
   }
   ```

   Running `npm run dev` or `npm run media` creates this file automatically with a
   suggested title and alt text. Replace the alt with a description of what the photo
   actually shows. `focus` (optional) keeps the important part in view when the photo is
   cropped, as horizontal % and vertical %. The title also becomes part of the file name
   (good for image search).

   **Credit for a whole country:** a `_defaults.json` in a folder applies to every photo in it
   (and its subfolders), e.g. `destinations/maldives/_defaults.json`:

   ```json
   { "credit": "Photo courtesy of Visit Maldives" }
   ```

   The credit shows under each photo, in the corner of the hero and destination cards, in the
   full-screen viewer and in the page's structured data. A photo's own `credit` overrides it.

3. **Commit.** The next build optimises it. Check status with `npm run images:report`,
   which lists every slot, its sizes and any alt text still to write.

HEIC (iPhone) and RAW files cannot be shown on the web: export them as JPEG first. You
will get a warning naming the file if one is uploaded.

## Adding a video

1. Upload the video (MP4 or MOV, ideally ≤ 1080p and ≤ 100 MB, GitHub's limit) to
   `videos/<name>.mp4`. Optionally add `videos/<name>.json` with
   `{ "title": "Drifting over the reef", "posterTime": 3.5 }` to choose the poster frame.
2. The **Media: videos** GitHub workflow converts it automatically and commits the result:
   480p, 720p and 1080p in MP4 (H.264, plays everywhere) and WebM (VP9, smaller), at
   ≤ 30 fps, plus a poster frame. To do it locally instead: `npm run media:video` (needs ffmpeg).
3. Place it on a page:

   ```astro
   <Video name="reef-drift" label="Drifting over a coral reef" />           <!-- click to play -->
   <Video name="swell-loop" mode="background" label="Swell lines" />        <!-- muted ambient loop -->
   ```

For long or 4K films, upload to YouTube or Vimeo and use the facade instead, which loads
nothing from YouTube until the visitor presses play:

```astro
<VideoEmbed provider="youtube" id="VIDEO_ID" title="Surfing Cloudbreak" poster="videos/cloudbreak-poster" />
```

## Components

| Need | Component | Loads |
| --- | --- | --- |
| Any photo | `Picture` (via the slot components, `Hero`, cards) | Hero: immediately, high priority. Everything else: lazily, right-sized |
| Gallery | `<Gallery title="…" folder="gallery/fiji" />` | Thumbnails lazily; a large image only when opened |
| Self-hosted video | `<Video name="…" />` | Poster only; video on play (or when scrolled into view for background) |
| YouTube / Vimeo | `<VideoEmbed … />` | Poster only; player on click |
| Map, booking or social widget | `<LazyEmbed title="…" src="…" />` | Nothing until clicked (or near the viewport with `load="visible"`) |
| Affiliate link | `<AffiliateLink href="…" partner="…">` | Plain link, no scripts |
| Affiliate recommendation | `<AffiliateCTA … />` | HTML and CSS only, fixed size, disclosure included |

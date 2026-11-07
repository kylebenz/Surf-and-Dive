// npm run media
// Optimises every image in /media (the build does this too) and creates a <name>.json
// sidecar for each new image, pre-filled with a title and suggested alt text to edit.
import { processImages } from './images.mjs';

const { warnings, stats } = await processImages({ writeSidecars: true });
for (const w of warnings) console.warn(`warning: ${w}`);
console.log(`${stats.images} image(s) ready: ${stats.encoded} optimised, ${stats.reused} reused from cache.`);

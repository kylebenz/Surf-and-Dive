// Astro integration: runs the media pipeline automatically.
//
// - Before every build and when the dev server starts, every original in /media is
//   optimised (cached by content hash, so only new or changed photos are encoded).
// - In dev, adding or editing a file in /media re-runs the pipeline and reloads the page,
//   and sidecar stubs (<name>.json with title and alt text) are created for new images.
// - After every build, the performance budget runs over /dist (scripts/perf-budget.mjs), and the
//   IndexNow page fingerprints are written (scripts/indexnow.mjs) so only changed pages get submitted.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { processImages, paths } from '../../scripts/media/images.mjs';
import { runBudget } from '../../scripts/perf-budget.mjs';
import { writeManifest } from '../../scripts/indexnow.mjs';
import { addImagesToSitemap } from '../../scripts/image-sitemap.mjs';

export default function media() {
  let root = process.cwd();
  const run = async (writeSidecars, logger) => {
    const t = Date.now();
    const { warnings, stats } = await processImages({ root, writeSidecars, log: (m) => logger.info(m.replace(/^\[media\] /, '')) });
    for (const w of warnings) logger.warn(w);
    logger.info(`${stats.images} image(s) ready (${stats.encoded} optimised, ${stats.reused} from cache) in ${((Date.now() - t) / 1000).toFixed(1)}s`);
  };

  return {
    name: 'surf-and-dive-media',
    hooks: {
      'astro:config:setup': async ({ config, command, logger }) => {
        root = fileURLToPath(config.root);
        if (command === 'preview') return;
        await run(command === 'dev', logger);
      },
      'astro:server:setup': ({ server, logger }) => {
        const dir = paths(root).media;
        server.watcher.add(dir);
        let timer;
        const onChange = (file) => {
          // Photos and sidecars (title/alt edits) both re-run; unchanged photos come from cache.
          if (!file.startsWith(dir + path.sep)) return;
          clearTimeout(timer);
          timer = setTimeout(async () => {
            await run(true, logger);
            server.ws.send({ type: 'full-reload' });
          }, 300);
        };
        server.watcher.on('add', onChange);
        server.watcher.on('change', onChange);
        server.watcher.on('unlink', onChange);
      },
      'astro:build:done': async ({ dir, logger }) => {
        const images = addImagesToSitemap(fileURLToPath(dir));
        logger.info(`Sitemap: listed ${images} photos for Google Images`);
        const indexed = writeManifest(fileURLToPath(dir));
        logger.info(`IndexNow: fingerprinted ${indexed} indexable pages`);
        const ok = runBudget({ dist: fileURLToPath(dir), log: (m) => logger.info(m), warn: (m) => logger.warn(m) });
        if (!ok && process.env.PERF_BUDGET_STRICT === '1') {
          throw new Error('Performance budget exceeded (PERF_BUDGET_STRICT=1). See the warnings above.');
        }
      },
    },
  };
}

import fs from 'node:fs';
import path from 'node:path';
import { getImage, type ResolvedImage } from './images';

/** A rendition produced by scripts/media/videos.mjs. */
export type Rendition = { p: number; width: number; height: number; type: string; src: string; bytes: number };
export type ResolvedVideo = {
  name: string;
  title: string;
  width: number;
  height: number;
  duration: number;
  hasAudio: boolean;
  poster: ResolvedImage | null;
  /** Grouped by resolution, smallest first; within a group the smaller file comes first. */
  renditions: { p: number; width: number; height: number; sources: { src: string; type: string }[] }[];
};

/** Reads media/videos/<name>.video.json (written by `npm run media:video`). */
export function getVideo(name: string): ResolvedVideo | null {
  const file = path.join(process.cwd(), 'media', 'videos', `${name}.video.json`);
  if (!fs.existsSync(file)) return null;
  const meta = JSON.parse(fs.readFileSync(file, 'utf8')) as {
    title: string; width: number; height: number; duration: number; hasAudio: boolean; poster: string; renditions: Rendition[];
  };
  const byP = new Map<number, Rendition[]>();
  for (const r of meta.renditions) byP.set(r.p, [...(byP.get(r.p) ?? []), r]);
  return {
    name,
    title: meta.title,
    width: meta.width,
    height: meta.height,
    duration: meta.duration,
    hasAudio: meta.hasAudio,
    poster: getImage(meta.poster),
    renditions: [...byP.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([p, list]) => ({
        p,
        width: list[0].width,
        height: list[0].height,
        // Browsers play the first source they support, so lead with the lighter file.
        sources: list.sort((a, b) => a.bytes - b.bytes).map((r) => ({ src: r.src, type: r.type })),
      })),
  };
}

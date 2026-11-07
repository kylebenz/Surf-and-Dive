import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const EXTENSIONS = ['.avif', '.webp', '.jpg', '.jpeg', '.png'];
const WIDTHS = [640, 1280, 1920];

export type ResolvedImage = {
  src: string;
  srcset?: string;
  alt: string;
  caption?: string;
  credit?: string;
};

const exists = (publicPath: string) => {
  try {
    return fs.existsSync(path.join(PUBLIC_DIR, publicPath));
  } catch {
    return false;
  }
};

/**
 * Resolves an image slot to a real file at build time.
 *
 * - If `src` is set and the file exists, it is used.
 * - Otherwise, if a file named `<base>.(avif|webp|jpg|png)` exists in `dir`, it is used.
 * - Responsive variants created by `npm run images:optimize` (`<name>-640.webp`,
 *   `-1280.webp`, `-1920.webp`) are added to `srcset` automatically.
 * - Returns null when the slot is empty, so callers render an intentional placeholder
 *   rather than a broken image.
 */
export function resolveImage(opts: {
  src?: string;
  dir: string;
  base: string;
  alt?: string;
  caption?: string;
  credit?: string;
}): ResolvedImage | null {
  let src = '';
  if (opts.src) {
    if (/^https?:\/\//.test(opts.src) || exists(opts.src)) src = opts.src;
  }
  if (!src) {
    for (const ext of EXTENSIONS) {
      const candidate = `${opts.dir}/${opts.base}${ext}`;
      if (exists(candidate)) { src = candidate; break; }
    }
  }
  if (!src) return null;

  const ext = path.extname(src);
  const stem = src.slice(0, -ext.length);
  const variants = WIDTHS
    .map((w) => ({ w, p: `${stem}-${w}.webp` }))
    .filter((v) => exists(v.p));

  return {
    src,
    srcset: variants.length ? variants.map((v) => `${v.p} ${v.w}w`).join(', ') : undefined,
    alt: opts.alt ?? '',
    caption: opts.caption,
    credit: opts.credit,
  };
}

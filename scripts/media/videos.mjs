// npm run media:video
//
// Turns every original in media/videos/ (MP4, MOV, M4V, WebM, MKV) into web-ready video:
//   - H.264 MP4 (plays everywhere, incl. iPhone Safari) and VP9 WebM (smaller where supported)
//   - 480p / 720p / 1080p renditions, never above the original; 4K is never delivered
//   - MP4s are "fast start" so playback begins before the whole file has downloaded
//   - a poster frame saved as media/videos/<name>-poster.jpg, which the image pipeline
//     then optimises like any photo (AVIF/WebP, responsive)
//   - media/videos/<name>.video.json describing the renditions (read by the Video component)
//
// Encoding is slow, so it runs once per video (locally, or by the "Media: videos" GitHub
// workflow when a video is uploaded) and the small outputs in public/videos/ are committed.
// Requires ffmpeg and ffprobe on the PATH.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readSidecar } from './images.mjs';

const VIDEO_VERSION = 1;
const HEIGHTS = [480, 720, 1080];
const root = process.cwd();
const src = path.join(root, 'media', 'videos');
const outRoot = path.join(root, 'public', 'videos');
const EXT = ['.mp4', '.mov', '.m4v', '.webm', '.mkv'];

const run = (cmd, args) => execFileSync(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 }).toString();
try {
  run('ffmpeg', ['-version']);
} catch {
  console.error('ffmpeg is not installed. Install it (macOS: brew install ffmpeg) or let the "Media: videos" GitHub workflow process uploaded videos.');
  process.exit(1);
}

const files = fs.existsSync(src) ? fs.readdirSync(src).filter((f) => EXT.includes(path.extname(f).toLowerCase())) : [];
if (!files.length) console.log('No videos in media/videos/.');

for (const f of files) {
  const file = path.join(src, f);
  const name = f.replace(/\.[^.]+$/, '');
  const metaFile = path.join(src, `${name}.video.json`);
  const side = readSidecar(file);
  const hash = crypto.createHash('sha1').update(fs.readFileSync(file)).update(`v${VIDEO_VERSION}:${side.posterTime ?? ''}`).digest('hex').slice(0, 8);
  if (fs.existsSync(metaFile) && JSON.parse(fs.readFileSync(metaFile, 'utf8')).hash === hash) {
    console.log(`${f}: up to date`);
    continue;
  }

  const probe = JSON.parse(run('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', file]));
  const v = probe.streams.find((s) => s.codec_type === 'video');
  const hasAudio = probe.streams.some((s) => s.codec_type === 'audio');
  const rotation = Math.abs(parseInt(v.tags?.rotate ?? v.side_data_list?.find((d) => d.rotation !== undefined)?.rotation ?? 0, 10));
  const [w0, h0] = rotation === 90 || rotation === 270 ? [v.height, v.width] : [v.width, v.height];
  const duration = parseFloat(probe.format.duration);
  const short = Math.min(w0, h0); // rendition "p" refers to the short side, so portrait video works too
  const targets = HEIGHTS.filter((h) => h <= short);
  if (!targets.length) targets.push(short - (short % 2));

  const dirName = `${name}-${hash}`;
  const out = path.join(outRoot, dirName);
  for (const old of fs.existsSync(outRoot) ? fs.readdirSync(outRoot).filter((d) => d.startsWith(`${name}-`) && d !== dirName) : []) {
    fs.rmSync(path.join(outRoot, old), { recursive: true, force: true });
  }
  fs.mkdirSync(out, { recursive: true });
  console.log(`${f}: ${w0}×${h0}, ${duration.toFixed(1)}s, ${hasAudio ? 'with' : 'no'} audio → ${targets.map((t) => t + 'p').join(', ')}`);

  const renditions = [];
  for (const t of targets) {
    const landscape = w0 >= h0;
    const scale = landscape ? `scale=-2:${t}` : `scale=${t}:-2`;
    const fps = 'fps=fps=30:round=down'; // 60fps doubles the bytes with little benefit for travel footage
    const vf = `${scale}:flags=lanczos,${fps}`;
    const mp4 = path.join(out, `${t}.mp4`);
    run('ffmpeg', ['-y', '-v', 'error', '-i', file, '-vf', vf, '-c:v', 'libx264', '-preset', 'slow', '-crf', t >= 1080 ? '23' : '24',
      '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
      ...(hasAudio ? ['-c:a', 'aac', '-b:a', '128k'] : ['-an']), mp4]);
    const webm = path.join(out, `${t}.webm`);
    run('ffmpeg', ['-y', '-v', 'error', '-i', file, '-vf', vf, '-c:v', 'libvpx-vp9', '-crf', t >= 1080 ? '32' : '34', '-b:v', '0',
      '-row-mt', '1', '-deadline', 'good', '-cpu-used', '2', '-pix_fmt', 'yuv420p',
      ...(hasAudio ? ['-c:a', 'libopus', '-b:a', '96k'] : ['-an']), webm]);
    const dims = JSON.parse(run('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'json', mp4])).streams[0];
    for (const [file2, type] of [[webm, 'video/webm; codecs="vp9' + (hasAudio ? ', opus' : '') + '"'], [mp4, 'video/mp4; codecs="avc1.640028' + (hasAudio ? ', mp4a.40.2' : '') + '"']]) {
      renditions.push({ p: t, width: dims.width, height: dims.height, type, src: `/videos/${dirName}/${path.basename(file2)}`, bytes: fs.statSync(file2).size });
    }
    console.log(`  ${t}p: MP4 ${(fs.statSync(mp4).size / 1048576).toFixed(1)} MB, WebM ${(fs.statSync(webm).size / 1048576).toFixed(1)} MB`);
  }

  // Poster: a representative frame, optimised by the image pipeline like any other photo.
  const at = Math.min(Math.max(0, side.posterTime ?? duration * 0.1), Math.max(0, duration - 0.1));
  run('ffmpeg', ['-y', '-v', 'error', '-ss', String(at), '-i', file, '-frames:v', '1', '-q:v', '2', path.join(src, `${name}-poster.jpg`)]);

  const meta = { hash, title: side.title || name, width: w0, height: h0, duration: +duration.toFixed(2), hasAudio, poster: `videos/${name}-poster`, renditions };
  fs.writeFileSync(metaFile, JSON.stringify(meta, null, 2) + '\n');
  console.log(`  wrote media/videos/${name}.video.json and ${name}-poster.jpg`);
}

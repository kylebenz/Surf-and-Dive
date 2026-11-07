/**
 * Deterministic "swell line" artwork, a quiet, bathymetric-style pattern used
 * where photography has not yet been supplied (cards, heroes). It is abstract
 * graphic design, never a depiction of a real place.
 */
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return ((s >>> 0) % 10000) / 10000;
  };
}

export function swellPaths(seedKey: string, opts: { lines?: number; width?: number; height?: number } = {}) {
  const lines = opts.lines ?? 18;
  const W = opts.width ?? 800;
  const H = opts.height ?? 1000;
  const r = rng(hash(seedKey));
  const amp = 14 + r() * 26;
  const freq = 1.1 + r() * 1.6;
  const phase = r() * Math.PI * 2;
  const tilt = (r() - 0.5) * 0.25;
  const paths: string[] = [];
  for (let i = 0; i < lines; i++) {
    const y0 = (H / (lines + 1)) * (i + 1);
    const localAmp = amp * (0.55 + 0.9 * Math.sin((i / lines) * Math.PI));
    const localPhase = phase + i * (0.18 + r() * 0.05);
    let d = '';
    const steps = 40;
    for (let s = 0; s <= steps; s++) {
      const x = (W / steps) * s;
      const t = (s / steps) * Math.PI * 2 * freq;
      const y = y0 + Math.sin(t + localPhase) * localAmp + Math.sin(t * 2.3 + localPhase) * localAmp * 0.18 + (x - W / 2) * tilt;
      d += `${s === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    paths.push(d.trim());
  }
  return { paths, width: W, height: H };
}

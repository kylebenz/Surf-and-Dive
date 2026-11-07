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

/**
 * Smooth curve through the points (Catmull-Rom as cubic Béziers), written compactly:
 * integer coordinates, relative commands and the `s` shorthand, which is exact here
 * because Catmull-Rom tangents are continuous. About a third of the size of a dense polyline,
 * which matters because this art is inlined in the HTML of every card.
 */
function smoothPath(p: [number, number][]): string {
  const R = Math.round;
  const at = (i: number) => p[Math.max(0, Math.min(p.length - 1, i))];
  let [cx, cy] = [R(p[0][0]), R(p[0][1])];
  let d = `M${cx} ${cy}`;
  for (let i = 0; i < p.length - 1; i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    const c2 = [R(p2[0] - (p3[0] - p1[0]) / 6), R(p2[1] - (p3[1] - p1[1]) / 6)];
    const end = [R(p2[0]), R(p2[1])];
    if (i === 0) {
      const c1 = [R(p1[0] + (p2[0] - p0[0]) / 6), R(p1[1] + (p2[1] - p0[1]) / 6)];
      d += `c${c1[0] - cx} ${c1[1] - cy} ${c2[0] - cx} ${c2[1] - cy} ${end[0] - cx} ${end[1] - cy}`;
    } else {
      d += `s${c2[0] - cx} ${c2[1] - cy} ${end[0] - cx} ${end[1] - cy}`;
    }
    [cx, cy] = end;
  }
  return d.replace(/ -/g, '-');
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
    const steps = 16;
    const pts: [number, number][] = [];
    for (let s = 0; s <= steps; s++) {
      const x = (W / steps) * s;
      const t = (s / steps) * Math.PI * 2 * freq;
      const y = y0 + Math.sin(t + localPhase) * localAmp + Math.sin(t * 2.3 + localPhase) * localAmp * 0.18 + (x - W / 2) * tilt;
      pts.push([x, y]);
    }
    paths.push(smoothPath(pts));
  }
  return { paths, width: W, height: H };
}

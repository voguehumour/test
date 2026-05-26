// Compact 2D simplex noise (Gustavson) + curl, used on the CPU to drift the
// network's nodes along a divergence-free field. Only ~12 nodes sample this
// per frame, so a JS implementation is comfortably within budget.

const grad3 = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
];

const perm = new Uint8Array(512);
(() => {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  let seed = 1337;
  for (let i = 255; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    const j = seed % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
})();

const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;

export function simplex2(xin: number, yin: number): number {
  const s = (xin + yin) * F2;
  const i = Math.floor(xin + s);
  const j = Math.floor(yin + s);
  const t = (i + j) * G2;
  const x0 = xin - (i - t);
  const y0 = yin - (j - t);
  const i1 = x0 > y0 ? 1 : 0;
  const j1 = x0 > y0 ? 0 : 1;
  const x1 = x0 - i1 + G2;
  const y1 = y0 - j1 + G2;
  const x2 = x0 - 1 + 2 * G2;
  const y2 = y0 - 1 + 2 * G2;
  const ii = i & 255;
  const jj = j & 255;

  const corner = (cx: number, cy: number, gi: number) => {
    let tt = 0.5 - cx * cx - cy * cy;
    if (tt < 0) return 0;
    const g = grad3[gi % 8];
    tt *= tt;
    return tt * tt * (g[0] * cx + g[1] * cy);
  };

  const n0 = corner(x0, y0, perm[ii + perm[jj]]);
  const n1 = corner(x1, y1, perm[ii + i1 + perm[jj + j1]]);
  const n2 = corner(x2, y2, perm[ii + 1 + perm[jj + 1]]);
  return 70 * (n0 + n1 + n2);
}

// Curl of a scalar noise field → a smooth, divergence-free flow.
export function curl2(x: number, y: number, t: number): [number, number] {
  const e = 0.08;
  const n1 = simplex2(x, y + e + t);
  const n2 = simplex2(x, y - e + t);
  const n3 = simplex2(x + e, y + t);
  const n4 = simplex2(x - e, y + t);
  const dx = (n1 - n2) / (2 * e);
  const dy = (n3 - n4) / (2 * e);
  return [dy, -dx];
}

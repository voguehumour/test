export type NetConfig = {
  nodeCount: number;
  spread: number; // half-extent of the node cloud in world units
  ribbonSegments: number;
  ribbonWidth: number;
  dpr: [number, number];
};

export const DESKTOP: NetConfig = {
  nodeCount: 10,
  spread: 1.7,
  ribbonSegments: 26,
  ribbonWidth: 0.018,
  dpr: [1, 1.6],
};

// Mobile: fewer nodes, a touch lighter shader load, identical feel.
export const MOBILE: NetConfig = {
  nodeCount: 6,
  spread: 1.4,
  ribbonSegments: 20,
  ribbonWidth: 0.02,
  dpr: [1, 1.4],
};

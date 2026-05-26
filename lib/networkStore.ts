// A tiny mutable store the WebGL frame loop reads directly (no React re-renders
// on the hot path) and that UI can subscribe to for the few things that need it.

import { useSyncExternalStore } from "react";

export type SectionMood = {
  id: string;
  temp: number; // 0 cool .. 1 warm — shifts the network's color temperature
  pulseMin: number; // seconds between pulses (min)
  pulseMax: number; // seconds between pulses (max)
};

export const MOODS: Record<string, SectionMood> = {
  hero: { id: "hero", temp: 0.45, pulseMin: 4, pulseMax: 7 },
  positioning: { id: "positioning", temp: 0.5, pulseMin: 5, pulseMax: 8 },
  work: { id: "work", temp: 0.85, pulseMin: 2.5, pulseMax: 4.5 },
  process: { id: "process", temp: 0.4, pulseMin: 5, pulseMax: 8 },
  about: { id: "about", temp: 0.25, pulseMin: 6, pulseMax: 10 },
  contact: { id: "contact", temp: 0.35, pulseMin: 5, pulseMax: 9 },
};

type State = {
  // pointer in normalized device-ish coords for the network plane (-1..1)
  px: number;
  py: number;
  pointerActive: boolean;
  active: boolean; // mousedown
  // hero → corner compression, 0 = full hero, 1 = corner module
  compress: number;
  mood: SectionMood;
  reduced: boolean;
};

export const net: State = {
  px: 0,
  py: 0,
  pointerActive: false,
  active: false,
  compress: 0,
  mood: MOODS.hero,
  reduced: false,
};

// --- React-facing slice: current section id (drives subtle UI + aria) ---
let sectionId = "hero";
const listeners = new Set<() => void>();

export function setSection(id: string) {
  if (!MOODS[id] || id === sectionId) return;
  sectionId = id;
  net.mood = MOODS[id];
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useSection() {
  return useSyncExternalStore(
    subscribe,
    () => sectionId,
    () => "hero",
  );
}

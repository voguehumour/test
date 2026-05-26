// Shared motion constants. Pacing is the credibility signal — keep it here so
// every transition speaks with the same accent.

import type { Transition, Variants } from "motion/react";

export const EASE_HOUSE = [0.22, 1, 0.36, 1] as const;
export const EASE_EXIT = [0.4, 0, 1, 1] as const;

// Custom spring for spatial motion (weighted, never floaty).
export const SPRING: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 28,
  mass: 1.1,
};

// Content arrives with a small upward translate + fade. Never scale-from-0.9.
export const rise: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_HOUSE },
  },
};

// Stagger container for lists of three or more (50–70ms between children).
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

// Reduced-motion variant: opacity-only, 240ms.
export const riseReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.24, ease: EASE_HOUSE } },
};

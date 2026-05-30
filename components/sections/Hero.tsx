"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import { cn } from "@/lib/utils";

// IntroAnimation drives an internal "virtual scroll" up to ~3000 and
// preventDefaults wheel/touch on its own container while hovered. To let the
// page continue past the hero once the morph has played out, we mirror the
// scroll delta here (without touching the component) and, past a threshold,
// drop pointer-events on the inner wrapper so events fall through to the page.
const RELEASE_THRESHOLD = 1200;

export default function Hero() {
  const accRef = useRef(0);
  const [released, setReleased] = useState(false);

  useEffect(() => {
    let touchY = 0;

    const apply = (delta: number) => {
      accRef.current = Math.min(Math.max(accRef.current + delta, 0), 4000);

      if (!released && accRef.current >= RELEASE_THRESHOLD) {
        setReleased(true);
      }
      // Re-capture the hero when the user scrolls back up to the very top.
      if (released && delta < 0 && window.scrollY <= 1) {
        accRef.current = 0;
        setReleased(false);
      }
    };

    const onWheel = (e: WheelEvent) => apply(e.deltaY);
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      apply(touchY - y);
      touchY = y;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [released]);

  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden bg-bg"
    >
      {/* The provided IntroAnimation, used verbatim as the hero. */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          released && "pointer-events-none"
        )}
      >
        <IntroAnimation />
      </div>

      {/* Cinematic gradient to blend the light intro canvas into the dark page. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-bg" />

      {/* Scroll-down affordance, fades out once the hero releases. */}
      <AnimatePresence>
        {!released && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-10 w-6 items-start justify-center rounded-full border border-gray-400/60 p-1.5"
            >
              <span className="block h-2 w-1 rounded-full bg-gray-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

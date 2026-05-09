"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <main className="relative z-10 min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={`veil-${pathname}`}
          aria-hidden
          initial={{ scaleY: 1, transformOrigin: "top" }}
          animate={{ scaleY: 0, transformOrigin: "top" }}
          exit={{ scaleY: 1, transformOrigin: "bottom" }}
          transition={{ duration: 1.0, ease: [0.65, 0, 0.05, 1] }}
          className="pointer-events-none fixed inset-0 z-[80] bg-canvas-warm"
        />
      </AnimatePresence>
    </main>
  );
}

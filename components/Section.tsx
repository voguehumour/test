"use client";

import { useEffect, useRef } from "react";
import { setSection } from "@/lib/networkStore";

// Wraps a page section and, when it occupies the middle of the viewport,
// updates the network's per-section mood (pulse rhythm + color temperature).
// IntersectionObserver with rootMargin — never scroll-position math that
// breaks on iOS Safari's collapsing URL bar.
export default function Section({
  mood,
  id,
  className,
  children,
}: {
  mood: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setSection(mood);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mood]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}

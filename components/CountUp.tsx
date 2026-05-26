"use client";

import { useEffect, useRef, useState } from "react";

// Numbers count up on enter via IntersectionObserver. Non-numeric values
// (e.g. "4.2×") are parsed and the suffix preserved.
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  useEffect(() => {
    const m = value.match(/^([\d.]+)(.*)$/);
    if (!m) return;
    const target = parseFloat(m[1]);
    const decimals = (m[1].split(".")[1] || "").length;
    const suffix = m[2];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    setDisplay(`0${decimals ? "." + "0".repeat(decimals) : ""}${suffix}`);

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done.current) return;
        done.current = true;
        const t0 = performance.now();
        const dur = 900;
        const ease = (t: number) => 1 - Math.pow(1 - t, 3);
        const step = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const v = (target * ease(p)).toFixed(decimals);
          setDisplay(`${v}${suffix}`);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

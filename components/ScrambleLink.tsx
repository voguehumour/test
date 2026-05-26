"use client";

import { useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@._-";

// Scramble-decode reveal on hover, mono, ~280ms total. Reduced motion shows
// the final text immediately.
export default function ScrambleLink({
  href,
  text,
  label = "email",
  className,
}: {
  href: string;
  text: string;
  label?: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const raf = useRef(0);

  const run = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t0 = performance.now();
    const dur = 280;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const revealed = Math.floor(p * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === " ") out += text[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(out);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
  };

  return (
    <a
      href={href}
      data-cursor="link"
      data-cursor-label={label}
      onPointerEnter={run}
      onFocus={run}
      className={className}
    >
      {display}
    </a>
  );
}

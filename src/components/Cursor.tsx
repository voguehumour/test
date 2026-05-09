"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setHidden(false);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("a,button,[data-cursor]");
      if (interactive) {
        setHover(true);
        const l = interactive.getAttribute("data-cursor-label");
        setLabel(l);
      } else {
        setHover(false);
        setLabel(null);
      }
    };

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1 w-1 rounded-full bg-ink mix-blend-multiply"
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-ink/50 mix-blend-multiply transition-[width,height,background-color] duration-500 ease-cinematic ${
          hover ? "h-16 w-16 bg-ivory-100/40" : "h-9 w-9 bg-transparent"
        }`}
      >
        {label && (
          <span className="font-sans text-[9px] tracking-widest uppercase text-ink/80">
            {label}
          </span>
        )}
      </div>
    </>
  );
}

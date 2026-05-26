"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "text" | "link" | "network" | "active";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);
  const state = useRef<CursorState>("default");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.hasAttribute("data-reduced");
    if (!fine || reduced) return; // system cursor on touch / reduced motion
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dot = { x: target.x, y: target.y };
    const trail = { x: target.x, y: target.y };
    let down = false;
    let raf = 0;

    const apply = (s: CursorState, label = "") => {
      state.current = s;
      const el = dotRef.current;
      if (!el) return;
      el.dataset.state = s;
      if (labelRef.current) labelRef.current.textContent = label;
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const onOver = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]") as
        | HTMLElement
        | null;
      if (down) return;
      if (!el) return apply("default");
      const kind = el.dataset.cursor as CursorState;
      apply(kind, el.dataset.cursorLabel ?? "");
    };
    const onDown = () => {
      down = true;
      apply("active");
    };
    const onUp = (e: PointerEvent) => {
      down = false;
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]") as
        | HTMLElement
        | null;
      apply((el?.dataset.cursor as CursorState) ?? "default", el?.dataset.cursorLabel ?? "");
    };

    const loop = () => {
      dot.x += (target.x - dot.x) * 0.18;
      dot.y += (target.y - dot.y) * 0.18;
      trail.x += (dot.x - trail.x) * 0.12;
      trail.y += (dot.y - trail.y) * 0.12;
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
      if (trailRef.current)
        trailRef.current.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, true);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver, true);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={trailRef} className="cursor-trail" aria-hidden />
      <div ref={dotRef} className="cursor-dot" data-state="default" aria-hidden>
        <span ref={labelRef} className="cursor-label font-mono" />
      </div>
    </>
  );
}

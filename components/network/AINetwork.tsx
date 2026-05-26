"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { net } from "@/lib/networkStore";

// The WebGL stack (three + r3f) loads as its own chunk, after first paint,
// so it stays out of the critical path and the home LCP is text.
const NetworkCanvas = dynamic(() => import("./NetworkCanvas"), { ssr: false });

export default function AINetwork() {
  const [mounted, setMounted] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setReduced = () => {
      net.reduced =
        reducedMq.matches ||
        document.documentElement.hasAttribute("data-reduced");
    };
    setReduced();
    reducedMq.addEventListener("change", setReduced);
    // The /reduced-motion-preview route toggles data-reduced at runtime.
    const mo = new MutationObserver(setReduced);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-reduced"],
    });

    setMobile(window.innerWidth < 768);

    // Mount the canvas on the next idle frame — keeps it off the LCP path.
    const id = requestAnimationFrame(() => setMounted(true));

    const onMove = (e: PointerEvent) => {
      net.px = (e.clientX / window.innerWidth) * 2 - 1;
      net.py = -((e.clientY / window.innerHeight) * 2 - 1);
      net.pointerActive = e.pointerType !== "touch";
    };
    const onLeave = () => {
      net.pointerActive = false;
    };
    const onDown = () => {
      net.active = true;
    };
    const onUp = () => {
      net.active = false;
    };
    // Hero → corner compression, derived from scroll past the hero.
    const onScroll = () => {
      const h = window.innerHeight * 0.82;
      net.compress = Math.max(0, Math.min(1, window.scrollY / h));
    };
    onScroll();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(id);
      mo.disconnect();
      reducedMq.removeEventListener("change", setReduced);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="false"
      role="img"
      aria-label="A living network of nodes and connections — a small visualization of an AI model, drifting and occasionally firing a pulse of thought along its links. It reacts to the cursor."
      style={{
        position: "fixed",
        inset: 0,
        zIndex: "var(--z-corner-net)" as unknown as number,
        pointerEvents: "none",
      }}
    >
      {mounted && <NetworkCanvas mobile={mobile} />}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

// {/* TODO: voice */} — real words come from Animesh.
const SENTENCE =
  "For founders and product teams who need someone who can think clearly about AI — and then ship the thing.";

// The positioning sentence finishes itself across two viewports as the reader
// scrolls. This is the section that converts a CTO. One of two pinned GSAP
// sequences on the home page.
export default function Positioning() {
  const root = useRef<HTMLDivElement>(null);
  const words = SENTENCE.split(" ");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = root.current;
    if (!el) return;

    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    if (reduced) {
      spans.forEach((s) => (s.style.opacity = "1"));
      return;
    }

    let cleanup = () => {};
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.set(spans, { opacity: 0.12 });
        gsap.to(spans, {
          opacity: 1,
          stagger: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=120%",
            pin: el.querySelector("[data-pin]"),
            scrub: 0.6,
          },
        });
      }, el);
      cleanup = () => ctx.revert();
    })();

    return () => cleanup();
  }, []);

  return (
    <div ref={root} className="relative h-[200svh]">
      <div
        data-pin
        className="flex min-h-[100svh] items-center px-[var(--gutter)]"
      >
        <p
          className="max-w-[18ch] font-serif text-step-4 leading-[1.05] tracking-tight ml-[8.33%]"
          aria-label={SENTENCE}
        >
          {words.map((w, i) => (
            <span key={i} data-w aria-hidden className="inline">
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

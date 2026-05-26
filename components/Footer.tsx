"use client";

const year = new Date().getFullYear();

export default function Footer() {
  const toTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return window.scrollTo(0, 0);
    const start = window.scrollY;
    const dur = Math.min(1600, start * 0.6);
    const t0 = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / (dur || 1));
      window.scrollTo(0, start * (1 - ease(p)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <footer className="flex items-center justify-between px-[var(--gutter)] py-6 border-t border-hairline">
      <span className="font-mono text-step--1 text-fg-dim">
        © {year} Animesh Jaiswal
      </span>
      <button
        onClick={toTop}
        data-cursor="link"
        data-cursor-label="top"
        aria-label="Back to top"
        className="font-mono text-step--1 text-fg-dim transition-colors duration-200 hover:text-accent"
      >
        ↑
      </button>
    </footer>
  );
}

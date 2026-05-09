import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">
        404 · Not in this exhibition
      </p>
      <h1 className="mt-8 font-display text-7xl md:text-9xl italic leading-[0.9] text-ink">
        The room is empty.
      </h1>
      <p className="mt-8 max-w-md font-serif text-lg text-ink-muted leading-relaxed">
        The painting you were looking for has either been moved, sold, or is
        still drying on the easel.
      </p>
      <Link
        href="/"
        data-cursor-label="Return"
        className="mt-12 group inline-flex items-center gap-3 font-sans text-[12px] uppercase tracking-widest text-ink"
      >
        <span className="block h-px w-10 bg-ink transition-all duration-700 group-hover:w-16" />
        Return to the gallery
      </Link>
    </section>
  );
}

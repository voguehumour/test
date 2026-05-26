import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80svh] flex flex-col justify-center px-[var(--gutter)]">
      <p className="font-mono text-step--1 text-accent">404</p>
      <h1 className="mt-4 font-serif text-step-4 tracking-tight max-w-[16ch]">
        Nothing lives here.
      </h1>
      <Link
        href="/"
        data-cursor="link"
        data-cursor-label="home"
        className="mt-8 font-mono text-step--1 text-fg-dim hover:text-accent transition-colors"
      >
        ← back home
      </Link>
    </div>
  );
}

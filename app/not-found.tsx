import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col justify-center px-6 sm:px-8">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 max-w-[16ch] font-display text-5xl font-semibold tracking-tight text-fg md:text-7xl">
        Nothing lives here.
      </h1>
      <Link
        href="/"
        className="mt-8 font-mono text-sm text-fg-dim transition-colors hover:text-accent"
      >
        ← back home
      </Link>
    </div>
  );
}

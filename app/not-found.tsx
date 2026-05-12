import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-narrow py-24 md:py-32 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-text-secondary)]">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-[color:var(--color-text-secondary)]">
        The page you requested could not be found.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn-outline">
          Return home
        </Link>
      </div>
    </div>
  );
}

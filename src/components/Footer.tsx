import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-32 border-t border-ink/10 bg-canvas-warm/60">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-4xl md:text-5xl italic leading-[0.95] text-ink">
              The studio remains
              <br />
              <span className="not-italic">open to enquiry.</span>
            </p>
            <p className="mt-6 max-w-md font-serif text-base leading-relaxed text-ink-muted">
              Acquisitions, commissions, gallery representation, and museum
              loans are handled privately. A reply usually arrives within five
              working days.
            </p>
            <Link
              href="/contact"
              data-cursor-label="Enter"
              className="mt-10 inline-flex items-center gap-3 font-sans text-[12px] uppercase tracking-widest text-ink hover:text-bronze transition-colors duration-700"
            >
              <span className="block h-px w-10 bg-ink/60" />
              Enter the studio
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
              Studio
            </p>
            <p className="mt-4 font-serif text-base text-ink leading-relaxed">
              4 Rue de la Lanterne
              <br />
              Antwerp, Belgium
              <br />
              By appointment
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
              Index
            </p>
            <ul className="mt-4 space-y-2 font-serif text-base text-ink">
              <li><Link href="/gallery" className="hover:text-bronze transition-colors">Gallery</Link></li>
              <li><Link href="/collections" className="hover:text-bronze transition-colors">Collections</Link></li>
              <li><Link href="/exhibitions" className="hover:text-bronze transition-colors">Exhibitions</Link></li>
              <li><Link href="/about" className="hover:text-bronze transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
              Channels
            </p>
            <ul className="mt-4 space-y-2 font-serif text-base text-ink">
              <li><a className="hover:text-bronze transition-colors" href="mailto:studio@zachshev.com">studio@zachshev.com</a></li>
              <li><a className="hover:text-bronze transition-colors" href="#">Instagram</a></li>
              <li><a className="hover:text-bronze transition-colors" href="#">Artsy</a></li>
              <li><a className="hover:text-bronze transition-colors" href="#">Press kit</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 editorial-rule" />

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <p className="font-display text-3xl italic text-ink">
            Zach <span className="not-italic">Shev</span>
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 font-sans text-[11px] tracking-wide uppercase text-ink-muted">
            <span>© {year} — All works reproduced with permission</span>
            <span>Composed in Antwerp · Painted in oils</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

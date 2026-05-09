import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { artworks, collections, getArtworkBySlug } from "@/lib/artworks";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Painterly } from "@/components/Painterly";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const a = getArtworkBySlug(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    openGraph: { images: [a.image] },
  };
}

export default function ArtworkPage({ params }: Props) {
  const art = getArtworkBySlug(params.slug);
  if (!art) notFound();

  const collection = collections[art.collection];
  const idx = artworks.findIndex((a) => a.slug === art.slug);
  const prev = artworks[(idx - 1 + artworks.length) % artworks.length];
  const next = artworks[(idx + 1) % artworks.length];

  return (
    <article>
      {/* Cover */}
      <section className="relative pt-32">
        <div className="mx-auto max-w-[1700px] px-6 md:px-12">
          <Reveal>
            <div className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
              <Link href="/gallery" className="hover:text-ink transition-colors">
                ← Gallery
              </Link>
              <span className="block h-px w-8 bg-ink/30" />
              <Link
                href={`/collections/${art.collection}`}
                className="hover:text-ink transition-colors"
              >
                {collection.title}
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-8">
              <Reveal>
                <h1 className="font-display text-6xl md:text-[8rem] leading-[0.9] tracking-[-0.02em] text-ink">
                  <RevealText>{art.title.split(",")[0]}</RevealText>
                  {art.title.includes(",") && (
                    <em className="italic block">
                      <RevealText delay={0.12}>
                        ,{art.title.split(",").slice(1).join(",")}
                      </RevealText>
                    </em>
                  )}
                </h1>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 self-end">
              <Reveal delay={0.2}>
                <div className="space-y-4 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                  <div className="flex justify-between border-b border-ink/15 pb-3">
                    <span>Year</span>
                    <span className="numeral text-ink">{art.year}</span>
                  </div>
                  <div className="flex justify-between border-b border-ink/15 pb-3">
                    <span>Medium</span>
                    <span className="text-ink">{art.medium}</span>
                  </div>
                  <div className="flex justify-between border-b border-ink/15 pb-3">
                    <span>Dimensions</span>
                    <span className="numeral text-ink">{art.dimensions}</span>
                  </div>
                  <div className="flex justify-between border-b border-ink/15 pb-3">
                    <span>Status</span>
                    <span className="text-ink">
                      {art.status === "available"
                        ? "Available"
                        : art.status === "on-loan"
                        ? "On loan"
                        : "Private collection"}
                    </span>
                  </div>
                  {art.exhibition && (
                    <div className="flex justify-between gap-6">
                      <span>Exhibition</span>
                      <span className="text-right normal-case tracking-normal font-serif text-sm text-ink-soft">
                        {art.exhibition}
                      </span>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The painting */}
      <section className="relative mt-12 md:mt-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <Reveal>
            <div className="relative w-full bg-canvas-deep frame-shadow">
              <div
                className={
                  art.orientation === "landscape"
                    ? "relative aspect-[4/3]"
                    : art.orientation === "portrait"
                    ? "relative aspect-[3/4] mx-auto md:max-w-[860px]"
                    : "relative aspect-square mx-auto md:max-w-[1100px]"
                }
              >
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw, 80vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.16  0 0 0 0 0.14  0 0 0 0 0.12  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                  }}
                />
              </div>
            </div>
          </Reveal>
          <p className="mt-4 text-center font-sans text-[11px] uppercase tracking-widest text-ink-muted">
            {art.title}, {art.year} · {art.medium}, {art.dimensions}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="relative py-32 md:py-44">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel numeral="On the painting" label="" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <Reveal>
                <p className="font-display text-3xl md:text-4xl leading-[1.25] text-ink first-letter:text-7xl first-letter:font-display first-letter:italic first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:text-bronze">
                  {art.description}
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mt-12">
                <div className="grid grid-cols-2 gap-6 max-w-md">
                  <Link
                    href="/contact?regarding=acquisition"
                    data-cursor-label="Enquire"
                    className="group block border-t border-ink/30 pt-4"
                  >
                    <span className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                      Enquiry
                    </span>
                    <span className="mt-1 block font-display italic text-2xl text-ink group-hover:text-bronze transition-colors duration-700">
                      Acquire
                    </span>
                  </Link>
                  <Link
                    href="/commissions"
                    data-cursor-label="Commission"
                    className="group block border-t border-ink/30 pt-4"
                  >
                    <span className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                      Related
                    </span>
                    <span className="mt-1 block font-display italic text-2xl text-ink group-hover:text-bronze transition-colors duration-700">
                      Commission
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="editorial-rule mb-12" />
          <div className="grid grid-cols-2 gap-6">
            <Link
              href={`/gallery/${prev.slug}`}
              data-cursor-label="Previous"
              className="group block"
            >
              <span className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                ← Previous painting
              </span>
              <h4 className="mt-2 font-display italic text-3xl md:text-4xl text-ink group-hover:translate-x-[-6px] transition-transform duration-700 ease-cinematic">
                {prev.title}
              </h4>
            </Link>
            <Link
              href={`/gallery/${next.slug}`}
              data-cursor-label="Next"
              className="group block text-right"
            >
              <span className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                Next painting →
              </span>
              <h4 className="mt-2 font-display italic text-3xl md:text-4xl text-ink group-hover:translate-x-[6px] transition-transform duration-700 ease-cinematic">
                {next.title}
              </h4>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

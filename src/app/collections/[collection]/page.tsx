import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { collections, getArtworksByCollection, type Collection } from "@/lib/artworks";
import { Painterly } from "@/components/Painterly";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

interface Props {
  params: { collection: string };
}

export function generateStaticParams() {
  return Object.keys(collections).map((collection) => ({ collection }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = collections[params.collection as Collection];
  if (!c) return {};
  return { title: c.title, description: c.statement };
}

export default function CollectionPage({ params }: Props) {
  const key = params.collection as Collection;
  const c = collections[key];
  if (!c) notFound();
  const works = getArtworksByCollection(key);

  return (
    <article>
      {/* Cover */}
      <section className="relative pt-44 pb-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <Link
            href="/collections"
            className="font-sans text-[11px] uppercase tracking-widest text-ink-muted hover:text-ink transition-colors"
          >
            ← All collections
          </Link>
          <Reveal className="mt-10">
            <span
              className="font-sans text-[11px] uppercase tracking-widest"
              style={{ color: c.accent }}
            >
              {c.subtitle}
            </span>
          </Reveal>
          <Reveal delay={0.1} className="mt-4">
            <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.86] tracking-[-0.02em] italic text-ink">
              <RevealText>{c.title}</RevealText>
            </h1>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 grid grid-cols-12">
            <p className="col-span-12 md:col-span-7 md:col-start-6 font-serif text-xl md:text-2xl leading-[1.55] text-ink-soft">
              {c.statement}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Works */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-x-6 gap-y-24">
            {works.map((art, i) => {
              const span =
                i % 3 === 0
                  ? "col-span-12 md:col-span-7"
                  : i % 3 === 1
                  ? "col-span-12 md:col-span-5 md:mt-32"
                  : "col-span-12 md:col-span-9 md:col-start-3";
              const aspect =
                art.orientation === "landscape"
                  ? "aspect-[4/3]"
                  : art.orientation === "portrait"
                  ? "aspect-[3/4]"
                  : "aspect-square";
              return (
                <Reveal key={art.slug} delay={(i % 3) * 0.06} className={span}>
                  <Link
                    href={`/gallery/${art.slug}`}
                    data-cursor-label="View"
                    className="group block"
                  >
                    <Painterly
                      src={art.image}
                      alt={art.title}
                      parallax={50}
                      className={`${aspect} w-full lift`}
                      sizes="(max-width:768px) 100vw, 60vw"
                    />
                    <div className="mt-5 flex items-baseline justify-between gap-6">
                      <h3 className="font-display italic text-2xl md:text-3xl text-ink">
                        {art.title}
                      </h3>
                      <span className="numeral font-sans text-[11px] tracking-widest text-ink-muted">
                        {art.year}
                      </span>
                    </div>
                    <p className="mt-1 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                      {art.medium} · {art.dimensions}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other rooms */}
      <section className="relative py-32 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="→" label="Continue through" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {Object.entries(collections)
              .filter(([k]) => k !== key)
              .map(([k, other]) => (
                <Link
                  key={k}
                  href={`/collections/${k}`}
                  data-cursor-label="Enter"
                  className="group block py-6 border-t border-ink/15"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <span className="font-display italic text-3xl md:text-4xl text-ink transition-transform duration-700 ease-cinematic group-hover:translate-x-2">
                      {other.title}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-widest text-ink-muted whitespace-nowrap">
                      {other.subtitle.split("—")[0]}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </article>
  );
}

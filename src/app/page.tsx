import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Painterly } from "@/components/Painterly";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Marquee } from "@/components/Marquee";
import { artworks, collections } from "@/lib/artworks";

export default function HomePage() {
  const featured = artworks.slice(0, 5);

  return (
    <div>
      <Hero />

      {/* II. Editorial statement */}
      <section className="relative py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-y-16">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel numeral="II" label="Statement" />
            </div>
            <div className="col-span-12 md:col-span-8">
              <Reveal>
                <p className="font-display text-3xl md:text-5xl leading-[1.18] text-ink">
                  Painting, for me, is the discipline of staying.
                  Of refusing the next image. Of returning to a single
                  face, a single window, until something{" "}
                  <em className="italic text-bronze">true and small</em>{" "}
                  is allowed to surface — and then waiting longer,
                  to be sure.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="mt-10">
                <div className="flex items-center gap-4">
                  <span className="block h-px w-10 bg-ink/40" />
                  <span className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                    Zach Shev — Studio note, autumn
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-rule mx-auto max-w-[1400px]" />

      {/* III. Selected works */}
      <section className="relative py-32 md:py-44">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <SectionLabel numeral="III" label="Selected works" />
              <Reveal className="mt-6">
                <h2 className="font-display text-6xl md:text-8xl leading-[0.92] text-ink">
                  A small <em className="italic">record</em>
                  <br />
                  of the year.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="md:max-w-sm">
              <p className="font-serif text-base text-ink-muted leading-relaxed">
                Twelve paintings — out of forty-seven made between January
                and October. The full archive is available to qualified
                collectors and curators on request.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-20">
            {featured.map((art, i) => {
              const span =
                i === 0
                  ? "col-span-12 md:col-span-7"
                  : i === 1
                  ? "col-span-12 md:col-span-5 md:mt-32"
                  : i === 2
                  ? "col-span-12 md:col-span-5 md:col-start-2"
                  : i === 3
                  ? "col-span-12 md:col-span-6 md:col-start-7 md:mt-24"
                  : "col-span-12 md:col-span-9 md:col-start-3";
              const aspect =
                art.orientation === "landscape"
                  ? "aspect-[4/3]"
                  : art.orientation === "portrait"
                  ? "aspect-[3/4]"
                  : "aspect-square";
              return (
                <Reveal key={art.slug} delay={0.05 * i} className={span}>
                  <Link
                    href={`/gallery/${art.slug}`}
                    data-cursor-label="View"
                    className="group block"
                  >
                    <Painterly
                      src={art.image}
                      alt={art.title}
                      parallax={50 + i * 10}
                      className={`${aspect} w-full`}
                      sizes="(max-width:768px) 100vw, 60vw"
                    />
                    <div className="mt-5 flex items-baseline justify-between gap-6">
                      <div>
                        <h3 className="font-display italic text-2xl md:text-3xl text-ink">
                          {art.title}
                        </h3>
                        <p className="mt-1 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                          {art.medium} · {art.dimensions}
                        </p>
                      </div>
                      <span className="numeral font-sans text-[11px] tracking-widest text-ink-muted">
                        {String(i + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-32 flex justify-center">
            <Link
              href="/gallery"
              data-cursor-label="Open"
              className="group inline-flex items-center gap-4 font-sans text-[12px] uppercase tracking-widest text-ink"
            >
              <span className="block h-px w-12 bg-ink transition-all duration-700 group-hover:w-20" />
              View the entire gallery
              <span className="block h-px w-12 bg-ink transition-all duration-700 group-hover:w-20" />
            </Link>
          </div>
        </div>
      </section>

      {/* IV. Collections */}
      <section className="relative py-32 md:py-44 bg-canvas-warm/40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 md:col-span-7">
              <SectionLabel numeral="IV" label="Collections" />
              <Reveal className="mt-6">
                <h2 className="font-display text-6xl md:text-8xl leading-[0.92] text-ink">
                  Five rooms,
                  <br />
                  one <em className="italic">long sentence.</em>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Reveal delay={0.2}>
                <p className="font-serif text-base text-ink-muted leading-relaxed">
                  The work organises itself, slowly, into thematic rooms —
                  drift through them in any order. They are different parts of
                  the same conversation.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {Object.entries(collections).map(([key, c], i) => (
              <Reveal key={key} delay={0.06 * i}>
                <Link
                  href={`/collections/${key}`}
                  data-cursor-label="Enter"
                  className="group block"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <span className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                      {c.subtitle}
                    </span>
                    <span className="block h-px flex-1 bg-ink/15 group-hover:bg-ink/50 transition-colors duration-700" />
                  </div>
                  <h3 className="mt-4 font-display italic text-5xl md:text-6xl text-ink leading-tight transition-transform duration-700 ease-cinematic group-hover:translate-x-2">
                    {c.title}
                  </h3>
                  <p className="mt-4 font-serif text-base text-ink-muted leading-relaxed max-w-xl">
                    {c.statement}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* V. Press marquee */}
      <section className="relative py-20">
        <Marquee
          items={[
            "Royal Society of Portrait Painters",
            "Christie's, London",
            "FT Weekend Magazine",
            "The Burlington Magazine",
            "Apollo",
            "Sotheby's Institute",
            "Galerie Roussel, Paris",
            "Art Antwerp 2024",
          ]}
        />
      </section>

      {/* VI. Closing CTA */}
      <section className="relative py-32 md:py-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-7">
              <SectionLabel numeral="VI" label="Enquiries" />
              <Reveal className="mt-8">
                <h2 className="font-display text-7xl md:text-[9rem] leading-[0.88] text-ink">
                  <RevealText>Acquire</RevealText>
                  <br />
                  <em className="italic">
                    <RevealText delay={0.1}>a painting.</RevealText>
                  </em>
                </h2>
              </Reveal>
              <Reveal className="mt-8" delay={0.3}>
                <p className="font-serif text-lg text-ink-muted leading-relaxed max-w-xl">
                  A small number of works are released each season. The studio
                  also accepts a limited slate of private commissions —
                  portraits, interiors, and landscape studies — by referral
                  and direct enquiry.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-2 md:pt-32">
              {[
                { href: "/gallery", label: "Available works", note: "Currently 7 paintings" },
                { href: "/commissions", label: "Commission a portrait", note: "By private enquiry" },
                { href: "/exhibitions", label: "Exhibitions & press", note: "2018 — present" },
                { href: "/contact", label: "Write to the studio", note: "studio@zachshev.com" },
              ].map((row, i) => (
                <Reveal key={row.href} delay={i * 0.08}>
                  <Link
                    href={row.href}
                    data-cursor-label="Enter"
                    className="group block py-6 border-t border-ink/15"
                  >
                    <div className="flex items-baseline justify-between gap-6">
                      <span className="font-display text-3xl md:text-4xl italic text-ink transition-transform duration-700 ease-cinematic group-hover:translate-x-2">
                        {row.label}
                      </span>
                      <span className="font-sans text-[11px] uppercase tracking-widest text-ink-muted whitespace-nowrap">
                        {row.note}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

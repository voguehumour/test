import Link from "next/link";
import { Metadata } from "next";
import { artworks, collections } from "@/lib/artworks";
import { Painterly } from "@/components/Painterly";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The complete current gallery — recent paintings, available works, and a record of the year.",
};

const layoutPlan = [
  "col-span-12 md:col-span-7",
  "col-span-12 md:col-span-5 md:mt-32",
  "col-span-12 md:col-span-4 md:col-start-2",
  "col-span-12 md:col-span-6 md:col-start-7 md:mt-24",
  "col-span-12 md:col-span-8 md:col-start-3",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-span-6 md:col-start-7 md:mt-32",
  "col-span-12 md:col-span-5 md:col-start-2 md:mt-12",
  "col-span-12 md:col-span-7 md:col-start-6",
  "col-span-12 md:col-span-9 md:col-start-2",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-span-6 md:col-start-7 md:mt-24",
];

export default function GalleryPage() {
  return (
    <div>
      {/* Cover */}
      <section className="relative pt-44 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <SectionLabel numeral="—" label="The gallery" />
          <Reveal className="mt-8">
            <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.86] tracking-[-0.02em] text-ink">
              <RevealText>The gallery,</RevealText>
              <br />
              <em className="italic">
                <RevealText delay={0.1}>quietly hung.</RevealText>
              </em>
            </h1>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-6">
            <Reveal delay={0.3} className="col-span-12 md:col-span-6 md:col-start-7">
              <p className="font-serif text-lg leading-[1.7] text-ink-muted">
                A current selection of {artworks.length} paintings — drawn from
                this year's studio practice and a small number of available
                earlier works. Click a painting to enter its room.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                <span>{artworks.filter((a) => a.status === "available").length} available</span>
                <span className="block h-px w-6 bg-ink/30" />
                <span>{artworks.filter((a) => a.status === "private-collection").length} in private collection</span>
                <span className="block h-px w-6 bg-ink/30" />
                <span>{artworks.filter((a) => a.status === "on-loan").length} on loan</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial gallery composition */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1700px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-24 md:gap-y-40">
            {artworks.map((art, i) => {
              const aspect =
                art.orientation === "landscape"
                  ? "aspect-[4/3]"
                  : art.orientation === "portrait"
                  ? "aspect-[3/4]"
                  : "aspect-square";
              const span = layoutPlan[i % layoutPlan.length];
              return (
                <Reveal key={art.slug} delay={(i % 4) * 0.05} className={span}>
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
                      <div>
                        <h3 className="font-display italic text-2xl md:text-3xl text-ink leading-tight">
                          {art.title}
                        </h3>
                        <p className="mt-1 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                          {collections[art.collection].title} · {art.year}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                          {art.medium}
                        </p>
                        <p className="numeral mt-1 font-sans text-[11px] tracking-widest text-ink-muted">
                          {art.dimensions}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Zach Shevlin — classical portrait artist trained at Watts Atelier of the Arts, based in San Diego, California.",
};

export default function AboutPage() {
  return (
    <div className="container-content pt-10 md:pt-14 pb-20">
      <header className="mb-10 md:mb-14">
        <h1 className="font-display text-4xl md:text-5xl">About the Artist</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <figure className="md:col-span-5">
          <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
            <Image
              src="/brand/headshot.svg"
              alt="Black-and-white portrait photograph of Zach Shevlin"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover"
              priority
            />
          </div>
        </figure>

        <div className="md:col-span-7 text-[17px] leading-[1.7] text-[color:var(--color-text-primary)] space-y-6">
          <p>
            Growing up in New York, Zach Shevlin developed an early fascination
            with the tradition of classical portraiture and the ability of
            painting to preserve both likeness and presence. After relocating
            to San Diego to study at the Watts Atelier of the Arts, he
            dedicated himself to the rigorous study of drawing and oil
            painting, with an emphasis on craftsmanship, structure, and
            timeless realism. Alongside his own studio practice, Zach teaches
            at Watts Atelier, where he continues to deepen his understanding of
            the human form and the traditions of representational art.
          </p>
          <p>
            Zach approaches portrait painting as more than simply creating an
            image. His work aims not only to capture a strong likeness, but
            also the character, atmosphere, and emotional presence that make
            each person unique. Influenced by the great portrait painters of
            the past while grounded in a contemporary sensibility, he strives
            to create paintings that feel personal, enduring, and deeply human.
            Above all, he hopes to create work that can be lived with,
            cherished, and passed down through generations as meaningful family
            heirlooms.
          </p>
          <p>
            Zach currently lives and works in San Diego, California, where he
            accepts a limited number of portrait commissions for individuals,
            families, and collectors.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-outline"
            >
              Instagram
            </a>
            <a
              href={SITE.wattsAtelier}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-outline"
            >
              Watts Atelier
            </a>
          </div>
        </div>
      </div>

      <Script
        id="ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Person", "VisualArtist"],
            name: SITE.name,
            url: `${SITE.url}/about`,
            email: `mailto:${SITE.email}`,
            jobTitle: "Classical Portrait Artist",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Diego",
              addressRegion: "CA",
              addressCountry: "US",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Watts Atelier of the Arts",
              url: SITE.wattsAtelier,
            },
            worksFor: {
              "@type": "EducationalOrganization",
              name: "Watts Atelier of the Arts",
              url: SITE.wattsAtelier,
            },
            sameAs: [SITE.instagram, SITE.wattsAtelier],
          }),
        }}
      />
    </div>
  );
}

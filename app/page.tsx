import Image from "next/image";
import { CategoryTile } from "@/components/CategoryTile";
import { CATEGORIES } from "@/lib/artwork-data";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="container-content pt-10 md:pt-16 pb-20">
      <section className="text-center max-w-[820px] mx-auto">
        <Image
          src="/brand/signature-dark.svg"
          alt="Zach Shevlin"
          width={600}
          height={140}
          priority
          className="mx-auto w-full max-w-[420px] md:max-w-[600px] h-auto"
        />
        <p className="mt-5 md:mt-7 font-display italic text-xl md:text-2xl text-[color:var(--color-text-primary)] tracking-[0.04em]">
          {SITE.tagline}
        </p>
      </section>

      <section
        aria-label="Artwork categories"
        className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 xl:grid-cols-4"
      >
        {CATEGORIES.map((c, i) => (
          <CategoryTile
            key={c.slug}
            category={c.slug}
            title={c.title}
            priority={i < 2}
          />
        ))}
      </section>
    </div>
  );
}

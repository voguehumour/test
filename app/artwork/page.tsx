import type { Metadata } from "next";
import { CategoryTile } from "@/components/CategoryTile";
import { CATEGORIES } from "@/lib/artwork-data";

export const metadata: Metadata = {
  title: "Artwork",
  description:
    "Browse Zach Shevlin's artwork by category — Portrait Painting, Oil Sketches, Pastel Drawings, and Pet Portraiture.",
};

export default function ArtworkHubPage() {
  return (
    <div className="container-content pt-10 md:pt-14 pb-20">
      <header className="mb-10 md:mb-14">
        <h1 className="font-display text-4xl md:text-5xl">Artwork</h1>
      </header>

      <section
        aria-label="Artwork categories"
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7"
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

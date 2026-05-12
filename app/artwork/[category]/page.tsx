import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, Category, getByCategory } from "@/lib/artwork-data";
import { GalleryGrid } from "@/components/GalleryGrid";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORIES.find((c) => c.slug === category);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const meta = CATEGORIES.find((c) => c.slug === category);
  if (!meta) notFound();

  const items = getByCategory(category as Category);

  return (
    <div className="container-content pt-10 md:pt-14 pb-20">
      <header className="mb-10 md:mb-14">
        <Link
          href="/artwork"
          className="inline-block text-sm text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors mb-4"
        >
          ← All artwork
        </Link>
        <h1 className="font-display text-4xl md:text-5xl">{meta.title}</h1>
        <p className="mt-3 text-[color:var(--color-text-secondary)] max-w-xl">
          {meta.description}
        </p>
      </header>

      {items.length ? (
        <GalleryGrid items={items} />
      ) : (
        <p className="italic text-[color:var(--color-text-secondary)]">
          Work in this category will appear here soon. In the meantime, please
          inquire directly via the Contact page.
        </p>
      )}
    </div>
  );
}

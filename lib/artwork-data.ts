// Artwork inventory. Zach edits this file directly to add, remove, or update pieces.
// To add a new piece: drop the image into /public/artwork/, then add an entry below.
// To mark a piece as available for sale: set forSale: true and add a price.

export type Category =
  | "portrait-painting"
  | "oil-sketches"
  | "pastel-drawings"
  | "pet-portraiture";

export type Artwork = {
  id: string;
  category: Category;
  title: string;
  year: number;
  medium: string;
  dimensions: string; // e.g., '24" × 36"'
  image: string; // path under /public/
  alt: string;
  // Natural aspect ratio of the image, used for layout reservation.
  // Format "width:height" (e.g., "3:4"). Optional — falls back to 4:5.
  aspect?: string;
  forSale?: boolean;
  price?: number; // only meaningful when forSale is true
};

export const CATEGORIES: { slug: Category; title: string; description: string }[] = [
  {
    slug: "portrait-painting",
    title: "Portrait Painting",
    description: "Oil portraits — heads, half-figures, and full-length commissions.",
  },
  {
    slug: "oil-sketches",
    title: "Oil Sketches",
    description: "Direct studies in oil, painted in a single session or two.",
  },
  {
    slug: "pastel-drawings",
    title: "Pastel Drawings",
    description: "Soft pastel portrait drawings on toned paper.",
  },
  {
    slug: "pet-portraiture",
    title: "Pet Portraiture",
    description: "Oil and pastel portraits of companion animals.",
  },
];

export const artworks: Artwork[] = [
  // ──────────────────────── Portrait Painting ────────────────────────
  {
    id: "portrait-01",
    category: "portrait-painting",
    title: "Portrait Study I",
    year: 2024,
    medium: "Oil on linen",
    dimensions: '20" × 24"',
    image: "/artwork/portrait-01.svg",
    aspect: "3:4",
    alt: "Oil portrait placeholder — Portrait Study I, awaiting final artwork.",
  },
  {
    id: "portrait-02",
    category: "portrait-painting",
    title: "Portrait Study II",
    year: 2024,
    medium: "Oil on linen",
    dimensions: '16" × 20"',
    image: "/artwork/portrait-02.svg",
    aspect: "4:5",
    alt: "Oil portrait placeholder — Portrait Study II, awaiting final artwork.",
  },
  {
    id: "portrait-03",
    category: "portrait-painting",
    title: "Half-Length Study",
    year: 2023,
    medium: "Oil on linen",
    dimensions: '24" × 36"',
    image: "/artwork/portrait-03.svg",
    aspect: "3:4",
    alt: "Oil portrait placeholder — Half-Length Study, awaiting final artwork.",
  },
  {
    id: "portrait-04",
    category: "portrait-painting",
    title: "Head Study",
    year: 2023,
    medium: "Oil on linen",
    dimensions: '12" × 12"',
    image: "/artwork/portrait-04.svg",
    aspect: "1:1",
    alt: "Oil portrait placeholder — Head Study, awaiting final artwork.",
  },
  {
    id: "portrait-05",
    category: "portrait-painting",
    title: "Seated Portrait",
    year: 2022,
    medium: "Oil on linen",
    dimensions: '24" × 30"',
    image: "/artwork/portrait-05.svg",
    aspect: "4:5",
    alt: "Oil portrait placeholder — Seated Portrait, awaiting final artwork.",
    forSale: true,
    price: 4800,
  },
  {
    id: "portrait-06",
    category: "portrait-painting",
    title: "Portrait of a Young Woman",
    year: 2022,
    medium: "Oil on linen",
    dimensions: '16" × 20"',
    image: "/artwork/portrait-06.svg",
    aspect: "3:4",
    alt: "Oil portrait placeholder — Portrait of a Young Woman, awaiting final artwork.",
    forSale: true,
    price: 2400,
  },

  // ──────────────────────── Oil Sketches ────────────────────────
  {
    id: "oil-sketch-01",
    category: "oil-sketches",
    title: "Oil Sketch I",
    year: 2024,
    medium: "Oil on panel",
    dimensions: '11" × 14"',
    image: "/artwork/oil-sketch-01.svg",
    aspect: "4:5",
    alt: "Oil sketch placeholder — Oil Sketch I, awaiting final artwork.",
  },
  {
    id: "oil-sketch-02",
    category: "oil-sketches",
    title: "Oil Sketch II",
    year: 2024,
    medium: "Oil on panel",
    dimensions: '8" × 10"',
    image: "/artwork/oil-sketch-02.svg",
    aspect: "3:4",
    alt: "Oil sketch placeholder — Oil Sketch II, awaiting final artwork.",
  },
  {
    id: "oil-sketch-03",
    category: "oil-sketches",
    title: "Studio Sketch",
    year: 2023,
    medium: "Oil on panel",
    dimensions: '16" × 20"',
    image: "/artwork/oil-sketch-03.svg",
    aspect: "4:5",
    alt: "Oil sketch placeholder — Studio Sketch, awaiting final artwork.",
  },
  {
    id: "oil-sketch-04",
    category: "oil-sketches",
    title: "Direct Study",
    year: 2023,
    medium: "Oil on panel",
    dimensions: '10" × 10"',
    image: "/artwork/oil-sketch-04.svg",
    aspect: "1:1",
    alt: "Oil sketch placeholder — Direct Study, awaiting final artwork.",
    forSale: true,
    price: 600,
  },
  {
    id: "oil-sketch-05",
    category: "oil-sketches",
    title: "Sketch from Life",
    year: 2023,
    medium: "Oil on panel",
    dimensions: '18" × 24"',
    image: "/artwork/oil-sketch-05.svg",
    aspect: "4:5",
    alt: "Oil sketch placeholder — Sketch from Life, awaiting final artwork.",
  },
  {
    id: "oil-sketch-06",
    category: "oil-sketches",
    title: "Alla Prima Study",
    year: 2022,
    medium: "Oil on panel",
    dimensions: '11" × 14"',
    image: "/artwork/oil-sketch-06.svg",
    aspect: "3:4",
    alt: "Oil sketch placeholder — Alla Prima Study, awaiting final artwork.",
  },

  // ──────────────────────── Pastel Drawings ────────────────────────
  {
    id: "pastel-01",
    category: "pastel-drawings",
    title: "Pastel Portrait I",
    year: 2024,
    medium: "Soft pastel on toned paper",
    dimensions: '11" × 14"',
    image: "/artwork/pastel-01.svg",
    aspect: "3:4",
    alt: "Pastel drawing placeholder — Pastel Portrait I, awaiting final artwork.",
  },
  {
    id: "pastel-02",
    category: "pastel-drawings",
    title: "Pastel Portrait II",
    year: 2024,
    medium: "Soft pastel on toned paper",
    dimensions: '16" × 20"',
    image: "/artwork/pastel-02.svg",
    aspect: "4:5",
    alt: "Pastel drawing placeholder — Pastel Portrait II, awaiting final artwork.",
  },
  {
    id: "pastel-03",
    category: "pastel-drawings",
    title: "Pastel Head Study",
    year: 2023,
    medium: "Soft pastel on toned paper",
    dimensions: '9" × 12"',
    image: "/artwork/pastel-03.svg",
    aspect: "3:4",
    alt: "Pastel drawing placeholder — Pastel Head Study, awaiting final artwork.",
    forSale: true,
    price: 400,
  },
  {
    id: "pastel-04",
    category: "pastel-drawings",
    title: "Half-Length Pastel",
    year: 2023,
    medium: "Soft pastel on toned paper",
    dimensions: '18" × 24"',
    image: "/artwork/pastel-04.svg",
    aspect: "3:4",
    alt: "Pastel drawing placeholder — Half-Length Pastel, awaiting final artwork.",
  },
  {
    id: "pastel-05",
    category: "pastel-drawings",
    title: "Pastel Study",
    year: 2022,
    medium: "Soft pastel on toned paper",
    dimensions: '16" × 20"',
    image: "/artwork/pastel-05.svg",
    aspect: "4:5",
    alt: "Pastel drawing placeholder — Pastel Study, awaiting final artwork.",
  },
  {
    id: "pastel-06",
    category: "pastel-drawings",
    title: "Portrait Drawing",
    year: 2022,
    medium: "Soft pastel on toned paper",
    dimensions: '12" × 12"',
    image: "/artwork/pastel-06.svg",
    aspect: "1:1",
    alt: "Pastel drawing placeholder — Portrait Drawing, awaiting final artwork.",
  },

  // ──────────────────────── Pet Portraiture ────────────────────────
  {
    id: "pet-01",
    category: "pet-portraiture",
    title: "Pet Portrait I",
    year: 2024,
    medium: "Oil on panel",
    dimensions: '11" × 14"',
    image: "/artwork/pet-01.svg",
    aspect: "1:1",
    alt: "Pet portrait placeholder — Pet Portrait I, awaiting final artwork.",
  },
  {
    id: "pet-02",
    category: "pet-portraiture",
    title: "Pet Portrait II",
    year: 2024,
    medium: "Oil on panel",
    dimensions: '8" × 10"',
    image: "/artwork/pet-02.svg",
    aspect: "4:5",
    alt: "Pet portrait placeholder — Pet Portrait II, awaiting final artwork.",
    forSale: true,
    price: 450,
  },
  {
    id: "pet-03",
    category: "pet-portraiture",
    title: "Pastel Pet Study",
    year: 2023,
    medium: "Soft pastel on toned paper",
    dimensions: '11" × 14"',
    image: "/artwork/pet-03.svg",
    aspect: "3:4",
    alt: "Pet portrait placeholder — Pastel Pet Study, awaiting final artwork.",
  },
  {
    id: "pet-04",
    category: "pet-portraiture",
    title: "Pet Head Study",
    year: 2023,
    medium: "Oil on panel",
    dimensions: '10" × 10"',
    image: "/artwork/pet-04.svg",
    aspect: "1:1",
    alt: "Pet portrait placeholder — Pet Head Study, awaiting final artwork.",
  },
  {
    id: "pet-05",
    category: "pet-portraiture",
    title: "Companion",
    year: 2022,
    medium: "Oil on panel",
    dimensions: '16" × 20"',
    image: "/artwork/pet-05.svg",
    aspect: "4:5",
    alt: "Pet portrait placeholder — Companion, awaiting final artwork.",
  },
  {
    id: "pet-06",
    category: "pet-portraiture",
    title: "Pet Portrait Study",
    year: 2022,
    medium: "Oil on panel",
    dimensions: '11" × 14"',
    image: "/artwork/pet-06.svg",
    aspect: "3:4",
    alt: "Pet portrait placeholder — Pet Portrait Study, awaiting final artwork.",
  },
];

export function getByCategory(category: Category) {
  return artworks.filter((a) => a.category === category);
}

export function getForSale() {
  return artworks.filter((a) => a.forSale);
}

export function getRepresentative(category: Category) {
  return artworks.find((a) => a.category === category);
}

export function aspectStyle(aspect?: string): React.CSSProperties {
  const fallback = "4 / 5";
  if (!aspect) return { aspectRatio: fallback };
  const [a, b] = aspect.split(":").map(Number);
  if (!a || !b) return { aspectRatio: fallback };
  return { aspectRatio: `${a} / ${b}` };
}

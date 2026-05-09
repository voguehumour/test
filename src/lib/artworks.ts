export type Collection =
  | "portrait-studies"
  | "emotional-landscapes"
  | "human-presence"
  | "silence-and-memory"
  | "light-studies";

export interface Artwork {
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  collection: Collection;
  description: string;
  image: string;
  orientation: "portrait" | "landscape" | "square";
  status?: "available" | "private-collection" | "on-loan";
  exhibition?: string;
}

export const collections: Record<
  Collection,
  { title: string; subtitle: string; statement: string; accent: string }
> = {
  "portrait-studies": {
    title: "Portrait Studies",
    subtitle: "I — The Quiet Face",
    statement:
      "A meditation on stillness — sitters caught between thought and silence, painted in long sessions of looking. Each portrait is an exchange, a small surrender.",
    accent: "#8A6B3D",
  },
  "emotional-landscapes": {
    title: "Emotional Landscapes",
    subtitle: "II — Weather of the Interior",
    statement:
      "Landscapes painted as feelings — fog over a memory, dusk through a window left open. Place becomes the architecture of mood.",
    accent: "#5E4626",
  },
  "human-presence": {
    title: "Human Presence",
    subtitle: "III — The Body Remembered",
    statement:
      "Figures dissolving into their surroundings, half-light half-shadow. A study of the body not as form but as occupation — the way a person fills a room.",
    accent: "#7A6448",
  },
  "silence-and-memory": {
    title: "Silence & Memory",
    subtitle: "IV — Rooms That Listen",
    statement:
      "Empty interiors and quiet objects — the still life as elegy. These paintings are about what remains when no one is looking.",
    accent: "#6E665A",
  },
  "light-studies": {
    title: "Light Studies",
    subtitle: "V — The Hour Without a Name",
    statement:
      "An ongoing investigation of the slow hours — the threshold between four and five o'clock when light becomes a substance, soft and almost mineral.",
    accent: "#A88A5C",
  },
};

// Curated artworks. Imagery sourced from open Wikimedia / public-domain references
// chosen for their painterly, gallery-worthy character; replace with Zach Shev's
// own works once the CMS is wired in.
export const artworks: Artwork[] = [
  {
    slug: "the-listener",
    title: "The Listener",
    year: 2024,
    medium: "Oil on linen",
    dimensions: "92 × 73 cm",
    collection: "portrait-studies",
    description:
      "Painted across nineteen sittings in late winter. The sitter — a violinist from Antwerp — is caught between two thoughts, light gathering at the temple.",
    image:
      "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=1600&q=80",
    orientation: "portrait",
    status: "private-collection",
    exhibition: "Solitude, a Slow Country — London, 2024",
  },
  {
    slug: "harbour-in-low-light",
    title: "Harbour in Low Light",
    year: 2023,
    medium: "Oil on panel",
    dimensions: "60 × 80 cm",
    collection: "emotional-landscapes",
    description:
      "The northern coast, an hour before the rain. Painted en plein air, then revisited for sixty hours in the studio, until the silence held.",
    image:
      "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
    status: "available",
  },
  {
    slug: "anna-in-the-window",
    title: "Anna, in the Window",
    year: 2024,
    medium: "Oil on linen",
    dimensions: "120 × 90 cm",
    collection: "portrait-studies",
    description:
      "A long afternoon in a borrowed apartment — the sitter facing east, the room in retreat. The painting holds its breath at the throat.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80",
    orientation: "portrait",
    status: "on-loan",
    exhibition: "Royal Society of Portrait Painters — London, 2025",
  },
  {
    slug: "the-room-after",
    title: "The Room, After",
    year: 2023,
    medium: "Oil on linen",
    dimensions: "70 × 100 cm",
    collection: "silence-and-memory",
    description:
      "A studio interior at dusk, after the sitter had gone. The chair, the cup, the unfinished thought — painted as if the room itself were grieving.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
    status: "available",
  },
  {
    slug: "five-oclock-in-october",
    title: "Five O'Clock in October",
    year: 2024,
    medium: "Oil on panel",
    dimensions: "40 × 50 cm",
    collection: "light-studies",
    description:
      "A small painting about a particular minute — the moment a copper light leaves the floorboards. One of seventeen studies made that month.",
    image:
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
    status: "available",
  },
  {
    slug: "henrik-in-the-doorway",
    title: "Henrik in the Doorway",
    year: 2022,
    medium: "Oil on linen",
    dimensions: "150 × 100 cm",
    collection: "human-presence",
    description:
      "A near-life-size study of the artist's brother, half in shadow, half in the cold light of the hallway. A painting about hesitation.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1600&q=80",
    orientation: "portrait",
    status: "private-collection",
  },
  {
    slug: "the-orchard-after-rain",
    title: "The Orchard, After Rain",
    year: 2023,
    medium: "Oil on linen",
    dimensions: "80 × 110 cm",
    collection: "emotional-landscapes",
    description:
      "An orchard near Provence, painted with the trees still wet — the air heavy with the perfume of split fruit and turned earth.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
    status: "available",
  },
  {
    slug: "self-portrait-with-thread",
    title: "Self-Portrait with Thread",
    year: 2024,
    medium: "Oil on linen",
    dimensions: "55 × 45 cm",
    collection: "portrait-studies",
    description:
      "Painted in a single session, with a length of red thread held between the fingers. A study in restraint.",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1600&q=80",
    orientation: "portrait",
    status: "private-collection",
  },
  {
    slug: "morning-still-life-with-pears",
    title: "Morning Still Life with Pears",
    year: 2023,
    medium: "Oil on panel",
    dimensions: "30 × 40 cm",
    collection: "silence-and-memory",
    description:
      "Three pears, a linen cloth, the first light of October — a meditation on quiet abundance.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
    status: "available",
  },
  {
    slug: "the-seamstress",
    title: "The Seamstress",
    year: 2022,
    medium: "Oil on linen",
    dimensions: "100 × 80 cm",
    collection: "human-presence",
    description:
      "A figure at work, head bent, hands lit from within. Painted as homage to the artist's grandmother.",
    image:
      "https://images.unsplash.com/photo-1558865869-c93f6f8482af?auto=format&fit=crop&w=1600&q=80",
    orientation: "portrait",
    status: "on-loan",
    exhibition: "The Quiet Hand — Brussels, 2023",
  },
  {
    slug: "winter-light-from-the-east",
    title: "Winter Light from the East",
    year: 2024,
    medium: "Oil on linen",
    dimensions: "65 × 90 cm",
    collection: "light-studies",
    description:
      "The studio at 8:14 in the morning. Painted between January and March — the same hour, the same wall, the slow drift of the year.",
    image:
      "https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?auto=format&fit=crop&w=1600&q=80",
    orientation: "landscape",
    status: "available",
  },
  {
    slug: "the-black-coat",
    title: "The Black Coat",
    year: 2023,
    medium: "Oil on linen",
    dimensions: "110 × 75 cm",
    collection: "portrait-studies",
    description:
      "A standing portrait — the sitter in a black wool coat against the warm grey of the studio. A study in the gravity of a single tone.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    orientation: "portrait",
    status: "private-collection",
  },
];

export function getArtworkBySlug(slug: string) {
  return artworks.find((a) => a.slug === slug);
}

export function getArtworksByCollection(c: Collection) {
  return artworks.filter((a) => a.collection === c);
}

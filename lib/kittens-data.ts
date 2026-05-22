export interface Kitten {
  id: string;
  name: string;
  color: string;
  sex: "Male" | "Female";
  status: "Available" | "Reserved" | "Sold";
  birthdate?: string;
  price?: number;
  description: string;
}

export const KITTENS: Kitten[] = [
  {
    id: "luna",
    name: "Luna",
    color: "Silver Classic Tabby",
    sex: "Female",
    status: "Available",
    birthdate: "2025-03-15",
    price: 1800,
    description:
      "A stunning silver tabby with a gentle, affectionate personality. Luna loves to play and cuddles freely. She is confident around people and other animals.",
  },
  {
    id: "atlas",
    name: "Atlas",
    color: "Brown Classic Tabby",
    sex: "Male",
    status: "Reserved",
    birthdate: "2025-03-15",
    price: 1800,
    description:
      "Big-boned and majestic, Atlas carries the hallmark lion-like ruff of a true Maine Coon. He is bold, curious, and endlessly entertaining.",
  },
  {
    id: "nova",
    name: "Nova",
    color: "Black Smoke",
    sex: "Female",
    status: "Available",
    birthdate: "2025-04-02",
    price: 1800,
    description:
      "Nova has a breathtaking black smoke coat that shimmers in the light. She is playful, curious, and forms strong bonds with her people.",
  },
];

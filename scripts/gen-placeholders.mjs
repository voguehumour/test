import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "artwork");
mkdirSync(out, { recursive: true });

const sets = [
  { slug: "portrait", label: "Portrait Painting", count: 6, ratios: ["3:4", "4:5", "3:4", "1:1", "4:5", "3:4"] },
  { slug: "oil-sketch", label: "Oil Sketch", count: 6, ratios: ["4:5", "3:4", "4:5", "1:1", "4:5", "3:4"] },
  { slug: "pastel", label: "Pastel Drawing", count: 6, ratios: ["3:4", "4:5", "3:4", "3:4", "4:5", "1:1"] },
  { slug: "pet", label: "Pet Portrait", count: 6, ratios: ["1:1", "4:5", "3:4", "1:1", "4:5", "3:4"] },
];

function dimensions(ratio) {
  const [a, b] = ratio.split(":").map(Number);
  const w = 1200;
  const h = Math.round((w * b) / a);
  return { w, h };
}

const bg = "#EFEDE5";
const ink = "#2E3B4A";
const muted = "#5C5C5A";

for (const set of sets) {
  for (let i = 1; i <= set.count; i++) {
    const ratio = set.ratios[i - 1] ?? "4:5";
    const { w, h } = dimensions(ratio);
    const num = String(i).padStart(2, "0");
    const filename = `${set.slug}-${num}.svg`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="t-${set.slug}-${i}" preserveAspectRatio="xMidYMid slice">
  <title id="t-${set.slug}-${i}">${set.label} ${num} — placeholder</title>
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect x="60" y="60" width="${w - 120}" height="${h - 120}" fill="none" stroke="${ink}" stroke-opacity="0.18" stroke-width="2"/>
  <g font-family="Cormorant Garamond, Georgia, serif" fill="${ink}">
    <text x="50%" y="46%" text-anchor="middle" font-size="${Math.round(w / 14)}" font-style="italic" font-weight="500">${set.label}</text>
    <text x="50%" y="56%" text-anchor="middle" font-size="${Math.round(w / 28)}" fill="${muted}" font-weight="400">No. ${num}</text>
  </g>
  <text x="50%" y="${h - 60}" text-anchor="middle"
        font-family="Inter, system-ui, sans-serif"
        font-size="${Math.round(w / 60)}" letter-spacing="0.32em"
        fill="${muted}">PLACEHOLDER · REPLACE WITH FINAL ARTWORK</text>
</svg>
`;
    writeFileSync(join(out, filename), svg);
  }
}

console.log("Generated artwork placeholder SVGs in /public/artwork/");

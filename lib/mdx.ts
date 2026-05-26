import fs from "node:fs";
import path from "node:path";

const WORK_DIR = path.join(process.cwd(), "content/work");

export function getWorkSlugs(): string[] {
  if (!fs.existsSync(WORK_DIR)) return [];
  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getWorkSource(slug: string): string | null {
  const file = path.join(WORK_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8");
}

// ============================================================
// COZMIC — Article meta map for the edge HTML rewrite Worker
// Writes workers/article-meta.json from data.ts at build time
// Run: node scripts/generate-article-meta.mjs
// ============================================================
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { readArticlesFromDataTs } from "./parse-articles.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const articles = readArticlesFromDataTs(ROOT);
const bySlug = {};
for (const article of articles) {
  bySlug[article.slug] = {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    imageUrl: article.imageUrl,
    publishedAt: article.publishedAt,
    category: article.category,
  };
}

const outPath = resolve(ROOT, "workers/article-meta.json");
writeFileSync(outPath, `${JSON.stringify(bySlug, null, 2)}\n`);
console.log(`✓ Article meta map generated with ${articles.length} slugs → workers/article-meta.json`);

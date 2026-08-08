// ============================================================
// COZMIC — Dynamic Sitemap Generator
// Generates sitemap.xml from data.ts articles at build time
// Run: node scripts/generate-sitemap.mjs
// ============================================================
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Parse articles from data.ts (extract slug and publishedAt)
const dataContent = readFileSync(resolve(ROOT, "client/src/lib/data.ts"), "utf-8");

// Extract article objects using regex
const slugMatches = [...dataContent.matchAll(/slug:\s*"([^"]+)"/g)];
const dateMatches = [...dataContent.matchAll(/publishedAt:\s*"([^"]+)"/g)];

const articles = slugMatches.map((match, i) => ({
  slug: match[1],
  date: dateMatches[i]?.[1] || new Date().toISOString().split("T")[0],
}));

const BASE_URL = "https://cozmic.cloud";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { loc: "/", changefreq: "daily", priority: "1.0", lastmod: today },
  { loc: "/vertical/tech", changefreq: "daily", priority: "0.8", lastmod: today },
  { loc: "/vertical/gaming", changefreq: "daily", priority: "0.8", lastmod: today },
  { loc: "/vertical/culture", changefreq: "daily", priority: "0.8", lastmod: today },
  { loc: "/vertical/lifestyle", changefreq: "daily", priority: "0.8", lastmod: today },
  { loc: "/vertical/music", changefreq: "daily", priority: "0.8", lastmod: today },
  { loc: "/vertical/science", changefreq: "daily", priority: "0.8", lastmod: today },
  { loc: "/about", changefreq: "monthly", priority: "0.5", lastmod: today },
  { loc: "/contact", changefreq: "monthly", priority: "0.5", lastmod: today },
  { loc: "/privacy", changefreq: "monthly", priority: "0.3", lastmod: today },
  { loc: "/terms", changefreq: "monthly", priority: "0.3", lastmod: today },
  { loc: "/editorial-policy", changefreq: "monthly", priority: "0.4", lastmod: today },
  { loc: "/author/cozmic-editorial", changefreq: "monthly", priority: "0.4", lastmod: today },
];

const articlePages = articles.map((a) => ({
  loc: `/article/${a.slug}`,
  changefreq: "weekly",
  priority: "0.9",
  lastmod: a.date,
}));

const allPages = [...staticPages, ...articlePages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${BASE_URL}${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(ROOT, "client/public/sitemap.xml"), sitemap);
console.log(`✓ Sitemap generated with ${allPages.length} URLs (${articles.length} articles + ${staticPages.length} static pages)`);

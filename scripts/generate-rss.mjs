// ============================================================
// COZMIC — Dynamic RSS Feed Generator
// Generates rss.xml from data.ts articles at build time
// Run: node scripts/generate-rss.mjs
// ============================================================
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Parse articles from data.ts
const dataContent = readFileSync(resolve(ROOT, "client/src/lib/data.ts"), "utf-8");

const slugMatches = [...dataContent.matchAll(/slug:\s*"([^"]+)"/g)];
const titleMatches = [...dataContent.matchAll(/title:\s*"([^"]+)"/g)];
const excerptMatches = [...dataContent.matchAll(/excerpt:\s*"([^"]+)"/g)];
const dateMatches = [...dataContent.matchAll(/publishedAt:\s*"([^"]+)"/g)];
const categoryMatches = [...dataContent.matchAll(/category:\s*"([^"]+)"/g)];
const authorMatches = [...dataContent.matchAll(/author:\s*"([^"]+)"/g)];

// Skip the interface field definitions (first match of each is the type definition)
const articles = slugMatches.map((match, i) => ({
  slug: match[1],
  title: titleMatches[i]?.[1] || "Untitled",
  excerpt: excerptMatches[i]?.[1] || "",
  date: dateMatches[i]?.[1] || new Date().toISOString().split("T")[0],
  category: categoryMatches[i]?.[1] || "science",
  author: authorMatches[i]?.[1] || "Cozmic Editorial",
}));

const BASE_URL = "https://cozmic.cloud";
const buildDate = new Date().toUTCString();

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Cozmic - The Future of News</title>
    <link>${BASE_URL}</link>
    <description>Next-generation news platform delivering tech, gaming, culture, lifestyle, music, and science stories for the connected generation. Curated by AI, verified by humans.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>Cozmic RSS Generator</generator>
    <managingEditor>hello@cozmic.cloud (Cozmic Editorial)</managingEditor>
    <webMaster>hello@cozmic.cloud (Cozmic Editorial)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Cozmic Company. All rights reserved.</copyright>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE_URL}/favicon.ico</url>
      <title>Cozmic - The Future of News</title>
      <link>${BASE_URL}</link>
    </image>
${articles
  .map(
    (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${BASE_URL}/article/${a.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/article/${a.slug}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <category>${a.category.charAt(0).toUpperCase() + a.category.slice(1)}</category>
      <dc:creator>${escapeXml(a.author)}</dc:creator>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>
`;

writeFileSync(resolve(ROOT, "client/public/rss.xml"), rss);
console.log(`✓ RSS feed generated with ${articles.length} articles`);

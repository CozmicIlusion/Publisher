// Shared data.ts article-field parser for sitemap, RSS, and article-meta JSON.
// Reads the first quoted field in each article block so nested sources[].title
// does not desync slug/title/date arrays.
import { readFileSync } from "fs";
import { resolve } from "path";

function extractQuotedField(block, field) {
  const key = `${field}:`;
  let searchFrom = 0;
  while (searchFrom < block.length) {
    const idx = block.indexOf(key, searchFrom);
    if (idx === -1) return "";
    const prev = idx === 0 ? "\n" : block[idx - 1];
    if (prev !== " " && prev !== "\n" && prev !== "\t" && prev !== "{" && prev !== ",") {
      searchFrom = idx + key.length;
      continue;
    }
    let i = idx + key.length;
    while (i < block.length && /\s/.test(block[i])) i++;
    if (block[i] !== '"') {
      searchFrom = idx + key.length;
      continue;
    }
    i++;
    let out = "";
    while (i < block.length) {
      const c = block[i];
      if (c === "\\") {
        const next = block[i + 1];
        if (next === "n") out += "\n";
        else if (next === '"') out += '"';
        else if (next === "\\") out += "\\";
        else if (next) out += next;
        i += 2;
        continue;
      }
      if (c === '"') return out;
      out += c;
      i++;
    }
    return out;
  }
  return "";
}

export function parseArticleRecords(dataContent) {
  const slugMatches = [...dataContent.matchAll(/slug:\s*"([^"]+)"/g)];
  const heroIdx = dataContent.indexOf("export const HERO_IMAGE");
  return slugMatches.map((m, i) => {
    const start = m.index;
    const end = slugMatches[i + 1]?.index ?? (heroIdx > start ? heroIdx : dataContent.length);
    const block = dataContent.slice(start, end);
    return {
      slug: m[1],
      title: extractQuotedField(block, "title"),
      excerpt: extractQuotedField(block, "excerpt"),
      imageUrl: extractQuotedField(block, "imageUrl"),
      publishedAt: extractQuotedField(block, "publishedAt"),
      category: extractQuotedField(block, "category"),
      author: extractQuotedField(block, "author"),
    };
  });
}

export function readArticlesFromDataTs(root) {
  const dataContent = readFileSync(resolve(root, "client/src/lib/data.ts"), "utf-8");
  return parseArticleRecords(dataContent);
}

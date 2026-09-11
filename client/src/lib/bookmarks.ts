const BOOKMARK_KEY = "cozmic_bookmarks";

function readSlugs(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARK_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeSlugs(slugs: string[]) {
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(slugs));
}

export function isArticleBookmarked(slug: string): boolean {
  return readSlugs().includes(slug);
}

export function toggleArticleBookmark(slug: string): boolean {
  const current = readSlugs();
  const exists = current.includes(slug);
  const next = exists ? current.filter((item) => item !== slug) : [...current, slug];
  writeSlugs(next);
  return !exists;
}

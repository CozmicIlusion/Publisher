// ============================================================
// COZMIC — Search overlay
// Filters in-memory articles; Esc and backdrop close it.
// ============================================================
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { Search, X } from "lucide-react";
import { articles, categoryMeta } from "@/lib/data";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return articles.slice(0, 8);
    return articles
      .filter((article) => {
        const haystack = [article.title, article.excerpt, article.slug, ...article.tags].join(" ").toLowerCase();
        return haystack.includes(needle);
      })
      .slice(0, 12);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-labelledby="cozmic-search-title">
      <button
        type="button"
        className="absolute inset-0"
        style={{ background: "oklch(0.06 0.03 270 / 72%)" }}
        aria-label="Close search"
        onClick={onClose}
      />
      <div
        className="relative mx-auto mt-24 w-[min(42rem,calc(100%-2rem))] rounded-2xl p-4 sm:p-5"
        style={{
          background: "oklch(0.12 0.04 275 / 96%)",
          border: "1px solid oklch(0.85 0.18 192 / 16%)",
          boxShadow: "0 24px 80px oklch(0.05 0.03 270 / 55%)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="cozmic-search-title" className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            Search Cozmic
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "oklch(0.2 0.04 275 / 50%)", color: "oklch(0.7 0.02 270)" }}
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <label htmlFor="cozmic-search-input" className="sr-only">
          Search articles
        </label>
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl mb-4"
          style={{ border: "1px solid oklch(0.85 0.18 192 / 22%)", background: "oklch(0.08 0.03 270 / 70%)" }}
        >
          <Search className="w-4 h-4 shrink-0" style={{ color: "oklch(0.85 0.18 192)" }} />
          <input
            id="cozmic-search-input"
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Titles, excerpts, tags"
            className="flex-1 bg-transparent text-sm outline-none focus-visible:ring-0"
            style={{ color: "oklch(0.93 0.01 270)", fontFamily: "var(--font-body)" }}
          />
        </div>
        <ul className="max-h-[50vh] overflow-y-auto space-y-1">
          {results.length === 0 ? (
            <li className="px-3 py-6 text-sm text-center" style={{ color: "oklch(0.55 0.02 270)" }}>
              No matching stories.
            </li>
          ) : (
            results.map((article) => (
              <li key={article.id}>
                <Link
                  href={`/article/${article.slug}`}
                  onClick={onClose}
                  className="block rounded-xl px-3 py-3 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2"
                  style={{ ["--tw-ring-color" as string]: "oklch(0.85 0.18 192)" }}
                >
                  <span className="text-sm font-semibold leading-snug block" style={{ fontFamily: "var(--font-display)" }}>
                    {article.title}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: "oklch(0.65 0.02 270)" }}>
                    {categoryMeta[article.category].label}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

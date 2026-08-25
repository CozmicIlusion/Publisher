// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// GiscusComments: GitHub Discussions-powered comment system
// Requires: public GitHub repo with Discussions enabled + Giscus app installed
// ============================================================

import Giscus from "@giscus/react";

interface GiscusCommentsProps {
  articleSlug: string;
}

const giscusConfig = {
  repo: import.meta.env.VITE_GISCUS_REPO || "",
  repoId: import.meta.env.VITE_GISCUS_REPO_ID || "",
  category: import.meta.env.VITE_GISCUS_CATEGORY || "",
  categoryId: import.meta.env.VITE_GISCUS_CATEGORY_ID || "",
};

export default function GiscusComments({ articleSlug }: GiscusCommentsProps) {
  const isConfigured = Object.values(giscusConfig).every(Boolean);

  return (
    <div className="mt-8 mb-12">
      <h3
        className="text-xl font-bold mb-6 flex items-center gap-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span
          className="w-1.5 h-6 rounded-full inline-block"
          style={{ background: "oklch(0.85 0.18 192)" }}
        />
        Discussion
      </h3>
      <div
        className="rounded-xl p-4 overflow-hidden"
        style={{
          background: "oklch(0.12 0.04 275 / 40%)",
          border: "1px solid oklch(0.85 0.18 192 / 8%)",
        }}
      >
        {isConfigured ? (
          <Giscus
            id="cozmic-comments"
            repo={giscusConfig.repo as `${string}/${string}`}
            repoId={giscusConfig.repoId}
            category={giscusConfig.category}
            categoryId={giscusConfig.categoryId}
            mapping="specific"
            term={articleSlug}
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="transparent_dark"
            lang="en"
            loading="lazy"
          />
        ) : (
          <p className="py-5 text-center text-sm" style={{ color: "oklch(0.6 0.02 270)" }}>
            Community discussions are being configured. Check back soon.
          </p>
        )}
        <noscript>
          <p style={{ color: "oklch(0.6 0.02 270)", textAlign: "center", padding: "2rem" }}>
            Enable JavaScript to view comments powered by GitHub Discussions.
          </p>
        </noscript>
      </div>
    </div>
  );
}

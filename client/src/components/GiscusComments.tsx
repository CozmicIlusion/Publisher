// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// GiscusComments: GitHub Discussions-powered comment system
// Requires: public GitHub repo with Discussions enabled + Giscus app installed
// ============================================================

import Giscus from "@giscus/react";

interface GiscusCommentsProps {
  articleSlug: string;
}

export default function GiscusComments({ articleSlug }: GiscusCommentsProps) {
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
        <Giscus
          id="cozmic-comments"
          repo="cozmic-news/discussions"
          repoId=""
          category="Article Comments"
          categoryId=""
          mapping="specific"
          term={articleSlug}
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="transparent_dark"
          lang="en"
          loading="lazy"
        />
        {/* 
          SETUP INSTRUCTIONS:
          1. Create a public GitHub repo (e.g., cozmic-news/discussions)
          2. Enable GitHub Discussions on the repo
          3. Install the Giscus app: https://github.com/apps/giscus
          4. Go to https://giscus.app to get your repo ID and category ID
          5. Replace the empty repoId and categoryId above
          
          Until configured, a placeholder message will show.
        */}
        <noscript>
          <p style={{ color: "oklch(0.6 0.02 270)", textAlign: "center", padding: "2rem" }}>
            Enable JavaScript to view comments powered by GitHub Discussions.
          </p>
        </noscript>
      </div>
    </div>
  );
}

// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// TrendingTicker: Real-time trending articles section with
// dynamic view counts and animated ranking
// ============================================================

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Flame, Eye, ArrowUpRight } from "lucide-react";
import { getTrendingArticles, categoryMeta, type Article } from "@/lib/data";

function formatViews(views: number): string {
  if (views >= 1000) return `${(views / 1000).toFixed(1)}k`;
  return views.toString();
}

export default function TrendingTicker() {
  const [trendingArticles, setTrendingArticles] = useState<Article[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTrendingArticles(getTrendingArticles(5));
  }, []);

  // Simulate real-time view count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTrendingArticles((prev) =>
        prev.map((article) => ({
          ...article,
          views: article.views + Math.floor(Math.random() * 15) + 1,
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-cycle the highlighted article
  useEffect(() => {
    if (trendingArticles.length === 0) return;
    const cycle = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % trendingArticles.length);
    }, 5000);
    return () => clearInterval(cycle);
  }, [trendingArticles.length]);

  if (trendingArticles.length === 0) return null;

  return (
    <section className="container relative z-10 mb-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, oklch(0.85 0.2 30 / 20%), oklch(0.85 0.18 192 / 20%))",
            border: "1px solid oklch(0.85 0.2 30 / 30%)",
          }}
        >
          <Flame className="w-4 h-4" style={{ color: "oklch(0.85 0.2 30)" }} />
        </div>
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Trending Now
        </h2>
        <span
          className="ml-auto flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.85 0.2 30 / 10%)",
            color: "oklch(0.85 0.2 30)",
            fontFamily: "var(--font-display)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.85 0.2 30)" }} />
          Live
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Featured trending article (left) */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {trendingArticles[activeIndex] && (
              <motion.div
                key={trendingArticles[activeIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={`/article/${trendingArticles[activeIndex].slug}`} className="block group">
                  <div className="glass-card overflow-hidden h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={trendingArticles[activeIndex].imageUrl}
                        alt={trendingArticles[activeIndex].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, oklch(0.08 0.03 270 / 95%) 0%, transparent 60%)",
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span
                          className="text-xs font-bold uppercase tracking-wider mb-2 block"
                          style={{
                            color: "oklch(0.85 0.2 30)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          #{activeIndex + 1} Trending
                        </span>
                        <h3
                          className="text-lg font-bold leading-snug line-clamp-2"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {trendingArticles[activeIndex].title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="flex items-center gap-1 text-xs" style={{ color: "oklch(0.6 0.02 270)" }}>
                            <Eye className="w-3 h-3" />
                            {formatViews(trendingArticles[activeIndex].views)}
                          </span>
                          <span
                            className={`${categoryMeta[trendingArticles[activeIndex].category].badgeClass} px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider`}
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {categoryMeta[trendingArticles[activeIndex].category].label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trending list (right) */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          {trendingArticles.map((article, i) => {
            const meta = categoryMeta[article.category];
            const isActive = i === activeIndex;
            return (
              <Link key={article.id} href={`/article/${article.slug}`} className="block group">
                <motion.div
                  className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300"
                  style={{
                    background: isActive
                      ? "oklch(0.15 0.04 275 / 60%)"
                      : "oklch(0.12 0.03 275 / 30%)",
                    border: isActive
                      ? "1px solid oklch(0.85 0.2 30 / 20%)"
                      : "1px solid oklch(0.2 0.03 275 / 20%)",
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  whileHover={{ x: 4 }}
                >
                  {/* Rank */}
                  <span
                    className="text-2xl font-black shrink-0 w-8 text-center"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: isActive ? "oklch(0.85 0.2 30)" : "oklch(0.35 0.02 270)",
                    }}
                  >
                    {i + 1}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-sm font-semibold leading-snug line-clamp-1 transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: isActive ? "oklch(0.95 0.01 270)" : "oklch(0.75 0.02 270)",
                      }}
                    >
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`${meta.badgeClass} px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {meta.label}
                      </span>
                      <span className="text-[11px] flex items-center gap-1" style={{ color: "oklch(0.5 0.02 270)" }}>
                        <Eye className="w-3 h-3" />
                        <motion.span
                          key={article.views}
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {formatViews(article.views)}
                        </motion.span>
                      </span>
                      {article.trending && (
                        <TrendingUp className="w-3 h-3" style={{ color: "oklch(0.7 0.2 150)" }} />
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: "oklch(0.85 0.18 192)" }}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

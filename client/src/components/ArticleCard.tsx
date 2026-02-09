// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// ArticleCard: Frosted glass card with aurora border glow
// ============================================================

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { type Article, categoryMeta } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
  index?: number;
}

export default function ArticleCard({ article, variant = "default", index = 0 }: ArticleCardProps) {
  const meta = categoryMeta[article.category];

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Link href={`/article/${article.slug}`} className="block group">
          <div className="glass-card overflow-hidden">
            <div className="relative aspect-[21/9] overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, oklch(0.08 0.03 270 / 95%) 0%, oklch(0.08 0.03 270 / 40%) 50%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`${meta.badgeClass} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {meta.label}
                  </span>
                  <span className="text-xs flex items-center gap-1" style={{ color: "oklch(0.6 0.02 270)" }}>
                    <Clock className="w-3 h-3" />
                    {article.readTime} min read
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "oklch(0.95 0.01 270)",
                  }}
                >
                  {article.title}
                </h2>
                <p
                  className="text-sm md:text-base max-w-2xl leading-relaxed"
                  style={{ color: "oklch(0.7 0.02 270)" }}
                >
                  {article.excerpt}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <Link href={`/article/${article.slug}`} className="block group">
          <div className="flex gap-4 py-4 border-b" style={{ borderColor: "oklch(0.25 0.04 275 / 30%)" }}>
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1">
              <span
                className={`${meta.badgeClass} inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider mb-1.5`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {meta.label}
              </span>
              <h3
                className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {article.title}
              </h3>
              <span className="text-xs mt-1 block" style={{ color: "oklch(0.5 0.02 270)" }}>
                {article.readTime} min · {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Default card
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/article/${article.slug}`} className="block group">
        <div className="glass-card overflow-hidden h-full">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute top-3 left-3"
            >
              <span
                className={`${meta.badgeClass} px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {meta.label}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3
              className="text-lg font-bold leading-snug mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {article.title}
            </h3>
            <p
              className="text-sm leading-relaxed line-clamp-2 mb-4"
              style={{ color: "oklch(0.6 0.02 270)" }}
            >
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs flex items-center gap-1" style={{ color: "oklch(0.5 0.02 270)" }}>
                <Clock className="w-3 h-3" />
                {article.readTime} min · {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
              <ArrowUpRight
                className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "oklch(0.85 0.18 192)" }}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Footer: Minimal cosmic footer
// ============================================================

import { Link } from "wouter";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t mt-20"
      style={{
        background: "oklch(0.06 0.02 270)",
        borderColor: "oklch(0.85 0.18 192 / 6%)",
      }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, oklch(0.85 0.18 192 / 20%), oklch(0.72 0.25 350 / 20%))",
                  border: "1px solid oklch(0.85 0.18 192 / 30%)",
                }}
              >
                <Zap className="w-4 h-4" style={{ color: "oklch(0.85 0.18 192)" }} />
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, oklch(0.85 0.18 192), oklch(0.72 0.25 350))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                COZMIC
              </span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: "oklch(0.5 0.02 270)" }}>
              The future of news. Delivering tech, gaming, culture, and lifestyle stories for the connected generation. Powered by AI, curated by humans.
            </p>
          </div>

          {/* Verticals */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.85 0.18 192)" }}
            >
              Verticals
            </h4>
            <div className="flex flex-col gap-2">
              {(["tech", "gaming", "culture", "lifestyle"] as const).map((cat) => (
                <Link
                  key={cat}
                  href={`/vertical/${cat}`}
                  className="text-sm transition-colors duration-200 hover:text-primary"
                  style={{ color: "oklch(0.55 0.02 270)" }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.85 0.18 192)" }}
            >
              Platform
            </h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm" style={{ color: "oklch(0.55 0.02 270)" }}>About</span>
              <span className="text-sm" style={{ color: "oklch(0.55 0.02 270)" }}>RSS Feed</span>
              <span className="text-sm" style={{ color: "oklch(0.55 0.02 270)" }}>Newsletter</span>
              <span className="text-sm" style={{ color: "oklch(0.55 0.02 270)" }}>Contact</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "oklch(0.2 0.03 275 / 40%)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.4 0.02 270)" }}>
            &copy; {new Date().getFullYear()} Cozmic. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.35 0.02 270)" }}>
            Built with Astro + Cloudflare · Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}

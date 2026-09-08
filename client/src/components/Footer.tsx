// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Footer: Minimal cosmic footer with legal page links
// ============================================================

import { Link } from "wouter";
import CozmicMark from "@/components/CozmicMark";

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
              <CozmicMark />
              <span className="cozmic-wordmark text-xl">
                CO<span className="cozmic-wordmark__accent">ZM</span>IC
              </span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: "oklch(0.5 0.02 270)" }}>
              Intelligent signals from tech, gaming, culture, lifestyle, music, and science — translated for the connected generation. AI-assisted, human-edited.
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
              {(["tech", "gaming", "culture", "lifestyle", "music", "science"] as const).map((cat) => (
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

          {/* Platform Links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.85 0.18 192)" }}
            >
              Platform
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.55 0.02 270)" }}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.55 0.02 270)" }}
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.55 0.02 270)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.55 0.02 270)" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/editorial-policy"
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.55 0.02 270)" }}
              >
                Editorial Policy
              </Link>
              <a
                href="/rss.xml"
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ color: "oklch(0.55 0.02 270)" }}
              >
                RSS Feed
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "oklch(0.2 0.03 275 / 40%)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.4 0.02 270)" }}>
            &copy; {new Date().getFullYear()} Cozmic Company. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs transition-colors hover:text-primary" style={{ color: "oklch(0.35 0.02 270)" }}>
              Privacy
            </Link>
            <span className="text-xs" style={{ color: "oklch(0.2 0.02 270)" }}>·</span>
            <Link href="/terms" className="text-xs transition-colors hover:text-primary" style={{ color: "oklch(0.35 0.02 270)" }}>
              Terms
            </Link>
            <span className="text-xs" style={{ color: "oklch(0.2 0.02 270)" }}>·</span>
            <Link href="/contact" className="text-xs transition-colors hover:text-primary" style={{ color: "oklch(0.35 0.02 270)" }}>
              Contact
            </Link>
            <span className="text-xs" style={{ color: "oklch(0.2 0.02 270)" }}>·</span>
            <span className="text-xs" style={{ color: "oklch(0.35 0.02 270)" }}>
              Powered by Cloudflare
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

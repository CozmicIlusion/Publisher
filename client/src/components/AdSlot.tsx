// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// AdSlot: Enhanced ad integration with Gen Z-friendly formats
// Supports: banner, sidebar, inline, native, mid-article, sticky-rail
// ============================================================

interface AdSlotProps {
  variant?: "banner" | "sidebar" | "inline" | "native" | "mid-article" | "sticky-rail";
  label?: string;
}

const variantConfig: Record<string, { dimensions: string; size: string; description: string }> = {
  banner: { dimensions: "w-full h-24", size: "728×90", description: "Leaderboard" },
  sidebar: { dimensions: "w-full h-64", size: "300×250", description: "Medium Rectangle" },
  inline: { dimensions: "w-full h-20", size: "468×60", description: "Inline Banner" },
  native: { dimensions: "w-full min-h-[120px]", size: "Responsive", description: "Native Content" },
  "mid-article": { dimensions: "w-full h-28", size: "728×90", description: "Mid-Article" },
  "sticky-rail": { dimensions: "w-full h-[600px]", size: "160×600", description: "Skyscraper" },
};

export default function AdSlot({ variant = "inline", label = "Advertisement" }: AdSlotProps) {
  const config = variantConfig[variant] || variantConfig.inline;

  if (variant === "native") {
    return (
      <div
        className="w-full rounded-xl p-5 relative overflow-hidden group transition-all duration-300 hover:scale-[1.005]"
        style={{
          background: "linear-gradient(135deg, oklch(0.14 0.04 275 / 50%), oklch(0.12 0.05 280 / 40%))",
          border: "1px solid oklch(0.85 0.18 192 / 10%)",
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-20 h-20 rounded-lg flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, oklch(0.2 0.06 275 / 60%), oklch(0.15 0.04 280 / 40%))",
              border: "1px dashed oklch(0.3 0.04 275 / 30%)",
            }}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="text-[9px] uppercase tracking-[0.15em] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(0.85 0.18 192 / 8%)",
                  color: "oklch(0.5 0.08 192)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Sponsored
              </span>
            </div>
            <div
              className="h-3 w-3/4 rounded mb-2"
              style={{ background: "oklch(0.25 0.04 275 / 40%)" }}
            />
            <div
              className="h-2.5 w-1/2 rounded"
              style={{ background: "oklch(0.2 0.04 275 / 30%)" }}
            />
          </div>
        </div>
        <p
          className="text-[8px] mt-3 text-right uppercase tracking-widest"
          style={{ color: "oklch(0.3 0.02 270)" }}
        >
          {label} · {config.description}
        </p>
      </div>
    );
  }

  if (variant === "mid-article") {
    return (
      <div className="my-8 py-6" style={{ borderTop: "1px solid oklch(0.25 0.04 275 / 20%)", borderBottom: "1px solid oklch(0.25 0.04 275 / 20%)" }}>
        <div
          className={`${config.dimensions} rounded-lg flex items-center justify-center relative overflow-hidden`}
          style={{
            background: "linear-gradient(135deg, oklch(0.1 0.04 275 / 30%), oklch(0.12 0.03 280 / 20%))",
            border: "1px dashed oklch(0.3 0.04 275 / 25%)",
          }}
        >
          <div className="text-center">
            <p
              className="text-[10px] uppercase tracking-widest font-medium"
              style={{ color: "oklch(0.4 0.02 270)", fontFamily: "var(--font-display)" }}
            >
              {label}
            </p>
            <p className="text-[9px] mt-0.5" style={{ color: "oklch(0.3 0.02 270)" }}>
              {config.description} · {config.size}
            </p>
          </div>
        </div>
        <p
          className="text-[8px] mt-2 text-center uppercase tracking-widest"
          style={{ color: "oklch(0.25 0.02 270)" }}
        >
          Continue reading below
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${config.dimensions} rounded-lg flex items-center justify-center relative overflow-hidden`}
      style={{
        background: "oklch(0.12 0.03 275 / 40%)",
        border: "1px dashed oklch(0.3 0.04 275 / 40%)",
      }}
    >
      <div className="text-center">
        <p
          className="text-[10px] uppercase tracking-widest font-medium"
          style={{ color: "oklch(0.4 0.02 270)", fontFamily: "var(--font-display)" }}
        >
          {label}
        </p>
        <p className="text-[9px] mt-0.5" style={{ color: "oklch(0.3 0.02 270)" }}>
          {config.description} · {config.size}
        </p>
      </div>
    </div>
  );
}

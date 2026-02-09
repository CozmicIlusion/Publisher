// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// AdSlot: Placeholder for ad integration (AdSense, EthicalAds, etc.)
// ============================================================

interface AdSlotProps {
  variant?: "banner" | "sidebar" | "inline";
  label?: string;
}

export default function AdSlot({ variant = "inline", label = "Advertisement" }: AdSlotProps) {
  const dimensions = {
    banner: "w-full h-24",
    sidebar: "w-full h-64",
    inline: "w-full h-20",
  };

  return (
    <div
      className={`${dimensions[variant]} rounded-lg flex items-center justify-center relative overflow-hidden`}
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
          Ad space · {variant === "banner" ? "728x90" : variant === "sidebar" ? "300x250" : "468x60"}
        </p>
      </div>
    </div>
  );
}

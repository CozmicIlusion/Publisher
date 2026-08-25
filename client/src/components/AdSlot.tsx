// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// AdSlot: Google AdSense integration with Gen Z-friendly styling
// Publisher ID: ca-pub-7811885659406496
// Supports: banner, sidebar, inline, native, mid-article, sticky-rail
// ============================================================

import { useEffect, useRef } from "react";
import { useCookieConsent } from "./CookieConsent";

interface AdSlotProps {
  variant?: "banner" | "sidebar" | "inline" | "native" | "mid-article" | "sticky-rail";
  label?: string;
}

const variantStyles: Record<string, { minHeight: string; format: string; layout?: string }> = {
  banner: { minHeight: "90px", format: "horizontal" },
  sidebar: { minHeight: "250px", format: "rectangle" },
  inline: { minHeight: "60px", format: "horizontal" },
  native: { minHeight: "120px", format: "fluid", layout: "in-article" },
  "mid-article": { minHeight: "90px", format: "fluid", layout: "in-article" },
  "sticky-rail": { minHeight: "600px", format: "vertical" },
};

const adSlotIds: Record<NonNullable<AdSlotProps["variant"]>, string | undefined> = {
  banner: import.meta.env.VITE_ADSENSE_SLOT_BANNER,
  sidebar: import.meta.env.VITE_ADSENSE_SLOT_SIDEBAR,
  inline: import.meta.env.VITE_ADSENSE_SLOT_INLINE,
  native: import.meta.env.VITE_ADSENSE_SLOT_NATIVE,
  "mid-article": import.meta.env.VITE_ADSENSE_SLOT_MID_ARTICLE,
  "sticky-rail": import.meta.env.VITE_ADSENSE_SLOT_STICKY_RAIL,
};

function AdUnit({ variant, label, slotId }: { variant: string; label: string; slotId: string }) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const adsbygoogle = (window as any).adsbygoogle;
      if (adsbygoogle && adRef.current) {
        adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense not loaded yet or ad blocker active
    }
  }, []);

  const style = variantStyles[variant] || variantStyles.inline;

  return (
    <div ref={adRef} className="w-full relative overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          minHeight: style.minHeight,
          width: "100%",
        }}
        data-ad-client="ca-pub-7811885659406496"
        data-ad-slot={slotId}
        data-ad-format={style.format}
        {...(style.layout ? { "data-ad-layout": style.layout } : {})}
        data-full-width-responsive="true"
      />
      <p
        className="text-[8px] mt-1 text-center uppercase tracking-widest"
        style={{ color: "oklch(0.25 0.02 270)" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function AdSlot({ variant = "inline", label = "Advertisement" }: AdSlotProps) {
  const consent = useCookieConsent();
  const slotId = adSlotIds[variant];

  // Do not initialize tracking/advertising before opt-in. The component also stays
  // invisible until an actual AdSense unit ID is configured for the selected format.
  if (consent !== "accepted" || !slotId) return null;

  if (variant === "native" || variant === "mid-article") {
    return (
      <div
        className={`w-full rounded-xl p-4 relative overflow-hidden ${variant === "mid-article" ? "my-8" : ""}`}
        style={{
          background: "linear-gradient(135deg, oklch(0.14 0.04 275 / 30%), oklch(0.12 0.05 280 / 20%))",
          borderTop: variant === "mid-article" ? "1px solid oklch(0.25 0.04 275 / 20%)" : "none",
          borderBottom: variant === "mid-article" ? "1px solid oklch(0.25 0.04 275 / 20%)" : "none",
          border: variant === "native" ? "1px solid oklch(0.85 0.18 192 / 8%)" : undefined,
        }}
      >
        <div className="flex items-center gap-2 mb-2">
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
        <AdUnit variant={variant} label={label} slotId={slotId} />
        {variant === "mid-article" && (
          <p
            className="text-[8px] mt-2 text-center uppercase tracking-widest"
            style={{ color: "oklch(0.25 0.02 270)" }}
          >
            Continue reading below
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className="w-full rounded-lg relative overflow-hidden"
      style={{
        background: "oklch(0.12 0.03 275 / 30%)",
        border: "1px solid oklch(0.25 0.04 275 / 20%)",
      }}
    >
      <AdUnit variant={variant} label={label} slotId={slotId} />
    </div>
  );
}

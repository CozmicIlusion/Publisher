// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// Shared atmospheric layer for every route; keeps inner pages
// recognizably Cozmic without reducing text contrast.
// ============================================================
export default function CosmicAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-32 left-[8%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.16 192 / 13%) 0%, transparent 68%)" }}
      />
      <div
        className="absolute top-[32rem] -right-36 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.2 350 / 11%) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[14%] left-[18%] h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.13 85 / 7%) 0%, transparent 68%)" }}
      />
    </div>
  );
}

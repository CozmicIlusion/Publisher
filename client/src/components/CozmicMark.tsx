// ============================================================
// COZMIC — "Nebula Flow" Cosmic Glassmorphism
// CozmicMark: orbital signal mark used in shared brand surfaces.
// ============================================================
interface CozmicMarkProps {
  size?: number;
}

export default function CozmicMark({ size = 32 }: CozmicMarkProps) {
  return (
    <span
      aria-hidden="true"
      className="cozmic-mark shrink-0"
      style={{ width: size, height: size }}
    >
      <span className="cozmic-mark__orbit" />
      <span className="cozmic-mark__core" />
      <span className="cozmic-mark__comet" />
    </span>
  );
}

/**
 * Page-wide film-grain texture. Fixed, non-interactive and extremely faint —
 * it adds a tactile, analog quality without affecting readability.
 */
export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="noise-overlay pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-multiply"
    />
  );
}

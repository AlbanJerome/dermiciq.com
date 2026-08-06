/**
 * Single source of truth for DermicIQ™ visual brand primitives.
 * CSS semantic tokens in `styles/brand-tokens.css` must stay in sync with these values.
 * Prefer semantic Tailwind classes (`bg-primary`, `text-accent`) in components — not these hexes.
 */

export const brandColors = {
  /** Logo / recognition — Vibrant Turquoise */
  turquoise: "#6AEEE8",
  /** Base background — Minty Off-White */
  mintBg: "#F8FFFE",
  /** Primary / actions — Deep Sea Teal */
  teal: "#005F5B",
  /** Secondary / UI — Soft Mint */
  softMint: "#C8F2EB",
  /** Body text — Deep Charcoal Teal */
  charcoal: "#223331",
  /** Alert / warning — Soft Coral */
  coral: "#FF9E9E",
} as const;

export const brandFonts = {
  family: "Montserrat",
  /** Weights loaded in `client/index.html` (keep in sync). */
  weights: [400, 600, 700] as const,
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap",
} as const;

/** Browser chrome / PWA theme color (matches primary teal). */
export const brandThemeColor = brandColors.teal;

export const brandRadius = "0.5rem";

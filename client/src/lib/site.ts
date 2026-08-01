/** Canonical public origin for SEO / Open Graph (override via Vite env if needed). */
export const siteOrigin =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://DermicIQ.com";

/** Link to a section on the home page (works with GitHub Pages `base`). */
export function homeSectionHref(anchor: string): string {
  const id = anchor.replace(/^#/, "");
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") return `/#${id}`;
  const prefix = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${prefix}/#${id}`;
}

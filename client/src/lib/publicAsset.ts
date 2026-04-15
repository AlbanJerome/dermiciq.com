/**
 * URL for files in `client/public/` (copied to the build output root).
 * Uses Vite `base` so assets work on GitHub Pages project sites.
 */
export function publicAsset(filename: string): string {
  const base = import.meta.env.BASE_URL;
  const name = filename.replace(/^\/+/, "");
  return `${base}${name}`;
}

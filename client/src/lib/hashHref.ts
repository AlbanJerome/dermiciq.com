/**
 * `href` for in-app routes when using hash-based wouter—correct for middle-click
 * and "open in new tab" on static hosts (GitHub Pages).
 */
export function hashHref(route: string): string {
  const r = route.startsWith("/") ? route : `/${route}`;
  return `#${r}`;
}

/**
 * Backend API origin (e.g. `https://app.dermiciq.com`). Leave unset for static
 * previews (GitHub Pages): auth and contact use fallbacks instead of `/api/*`.
 */
const raw = (import.meta.env.VITE_API_ORIGIN as string | undefined)?.trim();

export const API_ORIGIN = raw ? raw.replace(/\/$/, "") : "";

export const hasBackendApi = API_ORIGIN.length > 0;

export function apiUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!hasBackendApi) return p;
  return `${API_ORIGIN}${p}`;
}

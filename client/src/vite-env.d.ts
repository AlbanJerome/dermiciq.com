/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Canonical site URL for SEO (default https://DermicIQ.com). */
  readonly VITE_SITE_URL?: string;
  /** Production base path override for Vite (`/` for apex, `/repo/` for GitHub Pages project sites). */
  readonly VITE_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

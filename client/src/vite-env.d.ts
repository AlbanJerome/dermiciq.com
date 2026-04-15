/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** e.g. https://app.dermiciq.com — omit for static-only builds */
  readonly VITE_API_ORIGIN?: string;
  /** Marketing CTAs target this URL (default https://app.dermiciq.com). */
  readonly VITE_APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { readFileSync, copyFileSync, existsSync } from "fs";

function productionBaseFromHomepage(): string {
  try {
    const pkg = JSON.parse(
      readFileSync(path.resolve(import.meta.dirname, "package.json"), "utf-8"),
    ) as { homepage?: string };
    const m = String(pkg.homepage || "").match(/github\.io\/([^/#]+)/);
    return m ? `/${m[1]}/` : "/";
  } catch {
    return "/";
  }
}

/** Vite `base` for production: `/` for apex custom domain, `/repo/` for GitHub project Pages. */
function productionBase(): string {
  const raw = process.env.VITE_BASE?.trim();
  if (raw) {
    if (raw === "/" || raw === "") return "/";
    const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
    return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
  }
  return productionBaseFromHomepage();
}

export default defineConfig(async ({ command }) => {
  const plugins: PluginOption[] = [react()];

  try {
    const { default: runtimeErrorOverlay } = await import(
      "@replit/vite-plugin-runtime-error-modal"
    );
    plugins.push(runtimeErrorOverlay());
  } catch {
    /* optional Replit dev overlay */
  }

  if (
    process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
  ) {
    try {
      const [{ cartographer }, { devBanner }] = await Promise.all([
        import("@replit/vite-plugin-cartographer"),
        import("@replit/vite-plugin-dev-banner"),
      ]);
      plugins.push(cartographer(), devBanner());
    } catch {
      /* optional Replit dev plugins */
    }
  }

  if (command === "build") {
    plugins.push({
      name: "github-pages-spa-fallback",
      closeBundle() {
        const outDir = path.resolve(import.meta.dirname, "dist/public");
        const indexHtml = path.join(outDir, "index.html");
        if (existsSync(indexHtml)) {
          copyFileSync(indexHtml, path.join(outDir, "404.html"));
        }
      },
    });
  }

  return {
    base: command === "serve" ? "/" : productionBase(),
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});

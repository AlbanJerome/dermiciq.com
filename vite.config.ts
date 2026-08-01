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

export default defineConfig(({ command }) => {
  const plugins: PluginOption[] = [react()];

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
    // App source lives in client/, but keep .env at the repo root.
    envDir: path.resolve(import.meta.dirname),
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
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
        allow: [
          path.resolve(import.meta.dirname, "client"),
          path.resolve(import.meta.dirname, "shared"),
          path.resolve(import.meta.dirname, "attached_assets"),
        ],
        deny: ["**/.*"],
      },
    },
  };
});

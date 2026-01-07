# GitHub Pages Deployment Guide

## Prerequisites
- gh-pages package is installed (already done)
- Repository: AlbanJerome/dermiciq.com

## Configuration Completed
1. **Hash Router**: App uses hash-based routing (`/#/page`) to prevent 404 errors on GitHub Pages
2. **Favicon**: `public/favicon.png` (dIQ Logo)
3. **Relative Paths**: Assets use relative paths for GitHub Pages compatibility

## Manual Steps Required

### 1. Update vite.config.ts
Add the `base` property to ensure assets resolve correctly:

```typescript
export default defineConfig({
  base: './',
  // ... rest of config
});
```

### 2. Update package.json
Add the following to package.json:

```json
{
  "homepage": "https://AlbanJerome.github.io/dermiciq.com",
  "scripts": {
    "build:static": "vite build --config vite.config.ts",
    "predeploy": "npm run build:static",
    "deploy": "gh-pages -d dist/public"
  }
}
```

### 3. Copy Favicon to Build Output
After running build, ensure favicon.png is in the dist/public folder:
```bash
cp public/favicon.png dist/public/
```

### 4. Deploy
```bash
npm run deploy
```

This will:
1. Build the static site to `dist/public`
2. Push the contents to the `gh-pages` branch
3. GitHub Pages will serve from that branch

## Custom Domain (dermiciq.com)
After deploying, configure your custom domain:
1. Go to repo Settings > Pages
2. Add custom domain: `dermiciq.com`
3. Create a CNAME file in the build output or add `public/CNAME` with content: `dermiciq.com`

## URL Structure with HashRouter
All routes use hash format:
- Home: `https://dermiciq.com/#/`
- Science: `https://dermiciq.com/#/science`
- Blog: `https://dermiciq.com/#/blog`
- Blog Article: `https://dermiciq.com/#/blog/article-slug`

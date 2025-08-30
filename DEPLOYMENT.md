# Deployment Guide for LabelSquor

## Current Deployment Status

The site is configured to work with **BOTH**:
1. GitHub Pages subdirectory: `https://nichotin95.github.io/labelsquor/`
2. Custom domain: `https://labelsquor.com` (when configured)

## How It Works

The `vite.config.ts` now uses a dynamic base path that defaults to `/labelsquor/` for GitHub Pages subdirectory deployment.

## Switching Between Deployment Modes

### For GitHub Pages Subdirectory (Current Setup)
```bash
# Base path is already set to '/labelsquor/' by default
npm run build
npm run deploy
```
✅ Works at: https://nichotin95.github.io/labelsquor/

### For Custom Domain (labelsquor.com)
When you add your custom domain in GitHub Pages settings:

1. **Edit `vite.config.ts`** and change:
```javascript
const base = process.env.VITE_BASE_PATH || '/labelsquor/';
```
to:
```javascript
const base = process.env.VITE_BASE_PATH || '/';
```

2. **Deploy:**
```bash
npm run build
npm run deploy
```

3. **Add custom domain in GitHub Pages settings:**
   - Go to Settings → Pages
   - Add `labelsquor.com` in Custom domain field
   - Save

✅ Will work at: https://labelsquor.com

## Quick Commands

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Clean development environment (removes cache)
npm run clean:dev

# Fresh start (clean + dev server)
npm run fresh
```

## Important Notes

- The CNAME file is automatically copied during deployment
- GitHub Pages serves from the `gh-pages` branch
- Changes may take 2-5 minutes to appear live
- Always clear browser cache when testing deployments

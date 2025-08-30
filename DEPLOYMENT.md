# Deployment Guide for LabelSquor

## 🚀 Quick Start

Just run this command for a complete, safe deployment:
```bash
npm run deploy
```

This handles EVERYTHING automatically:
- ✅ Cleans previous builds
- ✅ Builds production bundle  
- ✅ Copies CNAME for custom domain
- ✅ Copies all logo files
- ✅ Deploys to GitHub Pages
- ✅ Maintains proper file structure

## 📋 Available Commands

### Standard Deployment (Recommended)
```bash
npm run deploy
```
Complete deployment with all safety checks and file management.

### Clean Deployment (For Issues)
```bash
npm run deploy:clean
```
Deep clean before deployment - use if you're having caching issues.

### Verify Deployment
```bash
bash scripts/verify-deployment.sh
```
Check if deployment was successful and all files are in place.

### Development Commands
```bash
npm run dev          # Start dev server
npm run fresh        # Clean + start dev server
npm run build        # Build only (no deploy)
npm run preview      # Preview production build locally
```

## 🌐 URL Configuration

The site is configured for **custom domain** (`labelsquor.com`):
- Base path is set to `/` in `vite.config.ts`
- CNAME file is automatically included in deployments

### To Switch to GitHub Pages Subdirectory
If you need to use `https://nichotin95.github.io/labelsquor/` instead:

1. Edit `vite.config.ts`:
```javascript
// Change from:
const base = process.env.VITE_BASE_PATH || '/';
// To:
const base = process.env.VITE_BASE_PATH || '/labelsquor/';
```

2. Deploy:
```bash
npm run deploy
```

## 🔧 How It Works

The deployment system (`scripts/deploy.sh`):
1. **Cleans** all previous build artifacts
2. **Builds** fresh production bundle
3. **Copies** essential files (CNAME, logos)
4. **Adds** `.nojekyll` for proper GitHub Pages processing
5. **Deploys** only the `dist` folder contents to gh-pages branch

## 📝 Important Notes

- **Deployment takes 2-5 minutes** to appear live
- **Clear browser cache** to see updates immediately (Cmd+Shift+R / Ctrl+F5)
- **CNAME file** is automatically managed - don't worry about it
- **Logo files** are automatically copied from `public/` folder
- **GitHub Pages** serves from `gh-pages` branch (configured in repo settings)

## 🆘 Troubleshooting

### Site not updating?
```bash
npm run deploy:clean  # Deep clean and redeploy
```

### Blank page?
1. Check base path in `vite.config.ts` matches your deployment type
2. Clear browser cache
3. Wait 5 minutes for GitHub Pages to update

### Missing logos?
Ensure logo files exist in `public/` folder:
- `logo_ls.png`
- `logo_simple.svg`  
- `logo_with_name.png`

### Verify everything:
```bash
bash scripts/verify-deployment.sh
```

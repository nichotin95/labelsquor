# Deployment Scripts

This directory contains all deployment-related scripts for LabelSquor.

## Available Scripts

### 🚀 `deploy.sh` (Main Deployment)
**Usage:** `npm run deploy`

This is the main deployment script that:
- Cleans previous builds
- Builds the production bundle
- Copies CNAME and logo files
- Adds .nojekyll file for proper GitHub Pages processing
- Deploys to gh-pages branch

### 🧹 `clean-deploy.sh` (Deep Clean + Deploy)
**Usage:** `npm run deploy:clean`

Use this when you want a completely fresh deployment:
- Performs deep cleaning of all build artifacts
- Removes any stray production files
- Verifies npm cache
- Runs standard deployment

### 🔍 `verify-deployment.sh` (Check Deployment Status)
**Usage:** `bash scripts/verify-deployment.sh`

Verifies that deployment was successful:
- Checks gh-pages branch contents
- Verifies essential files are present
- Tests if URLs are responding
- Shows last deployment info

## Quick Commands

```bash
# Standard deployment (recommended)
npm run deploy

# Deep clean deployment (if having issues)
npm run deploy:clean

# Quick deployment (skip all checks - not recommended)
npm run deploy:quick

# Verify deployment status
bash scripts/verify-deployment.sh
```

## Deployment Process

1. **Always use `npm run deploy`** for standard deployments
2. Use `npm run deploy:clean` if you encounter caching issues
3. After deployment, wait 2-5 minutes for changes to propagate
4. Run verification script to ensure everything deployed correctly

## Troubleshooting

If deployment fails:
1. Run `npm run deploy:clean` for a fresh start
2. Check GitHub Pages settings are correct (branch: gh-pages, folder: root)
3. Ensure CNAME file contains `labelsquor.com`
4. Clear browser cache when testing

## Custom Domain Setup

The deployment automatically includes the CNAME file for custom domain support.
Ensure your DNS is configured to point to GitHub Pages:
- A records: 185.199.108-111.153
- CNAME record: nichotin95.github.io

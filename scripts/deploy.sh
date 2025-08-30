#!/bin/bash

# LabelSquor Deployment Script
# This script handles complete deployment to GitHub Pages with all necessary steps

echo "🚀 Starting LabelSquor Deployment..."
echo "=================================="

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Clean previous builds
echo -e "${YELLOW}Step 1: Cleaning previous builds...${NC}"
rm -rf dist
rm -rf node_modules/.vite
rm -rf .vite
echo -e "${GREEN}✓ Cleaned build artifacts${NC}"

# Step 2: Build the project
echo -e "${YELLOW}Step 2: Building production bundle...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Build failed!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build successful${NC}"

# Step 3: Copy essential files to dist
echo -e "${YELLOW}Step 3: Preparing deployment files...${NC}"

# Copy CNAME for custom domain
if [ -f "CNAME" ]; then
    cp CNAME dist/
    echo -e "${GREEN}✓ CNAME file copied${NC}"
fi

# Copy all logo files from public
cp public/logo*.* dist/ 2>/dev/null || true
echo -e "${GREEN}✓ Logo files copied${NC}"

# Copy images folder if it exists
if [ -d "public/images" ]; then
    cp -r public/images dist/
    echo -e "${GREEN}✓ Product images copied${NC}"
fi

# Create a .nojekyll file to prevent GitHub Pages from processing
touch dist/.nojekyll
echo -e "${GREEN}✓ Added .nojekyll file${NC}"

# Step 4: Deploy to GitHub Pages
echo -e "${YELLOW}Step 4: Deploying to GitHub Pages...${NC}"
npx gh-pages -d dist --dotfiles -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Deployment failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Deployment successful!${NC}"
echo "=================================="
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo ""
echo "📝 Your site will be available at:"
echo "   • https://labelsquor.com (custom domain)"
echo "   • https://nichotin95.github.io/labelsquor/ (GitHub Pages URL)"
echo ""
echo "⏱️  Note: Changes may take 2-5 minutes to appear live"
echo "💡 Tip: Clear browser cache or use incognito mode to see updates immediately"

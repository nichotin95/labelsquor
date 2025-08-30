#!/bin/bash

# Verify Deployment Script
# This script checks if the deployment was successful

echo "🔍 Verifying Deployment Status..."
echo "================================="

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check gh-pages branch
echo -e "${YELLOW}Checking gh-pages branch...${NC}"
git fetch origin gh-pages --quiet

# Get last commit info
LAST_COMMIT=$(git log origin/gh-pages --oneline -1 --format="%h %s (%ar)")
echo -e "${BLUE}Last deployment: ${NC}$LAST_COMMIT"

# Check for essential files
echo -e "${YELLOW}Checking essential files...${NC}"
FILES_TO_CHECK=("index.html" "CNAME" "logo_ls.png" "assets")

for file in "${FILES_TO_CHECK[@]}"; do
    if git ls-tree origin/gh-pages --name-only | grep -q "^$file$"; then
        echo -e "${GREEN}✓ $file${NC}"
    else
        echo -e "${RED}✗ $file missing!${NC}"
    fi
done

# Check index.html content
echo -e "${YELLOW}Checking index.html configuration...${NC}"
INDEX_CONTENT=$(git show origin/gh-pages:index.html 2>/dev/null)

if echo "$INDEX_CONTENT" | grep -q 'src="/assets/'; then
    echo -e "${GREEN}✓ Assets paths configured for root deployment${NC}"
elif echo "$INDEX_CONTENT" | grep -q 'src="/labelsquor/assets/'; then
    echo -e "${YELLOW}⚠ Assets paths configured for subdirectory deployment${NC}"
else
    echo -e "${RED}✗ Could not determine assets configuration${NC}"
fi

# Test URLs
echo -e "${YELLOW}Testing URLs (requires internet)...${NC}"
echo "Testing: https://labelsquor.com"
if curl -s -o /dev/null -w "%{http_code}" https://labelsquor.com | grep -q "200\|301\|302"; then
    echo -e "${GREEN}✓ Custom domain responding${NC}"
else
    echo -e "${YELLOW}⚠ Custom domain not responding (may take time to propagate)${NC}"
fi

echo "================================="
echo -e "${GREEN}Verification complete!${NC}"
echo ""
echo "📝 To manually check your site:"
echo "   1. Visit https://labelsquor.com"
echo "   2. Clear browser cache (Cmd+Shift+R / Ctrl+F5)"
echo "   3. Try incognito/private mode"

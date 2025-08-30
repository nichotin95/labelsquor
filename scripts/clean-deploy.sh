#!/bin/bash

# Complete Clean Deployment Script
# This performs a deep clean before deployment

echo "🧹 Starting Complete Clean Deployment..."
echo "========================================"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Deep clean
echo -e "${YELLOW}Step 1: Performing deep clean...${NC}"
rm -rf dist
rm -rf node_modules/.vite
rm -rf .vite
rm -rf assets
# Clear any root level production files
rm -f index.html.old 2>/dev/null
rm -f logo_simple.svg 2>/dev/null
rm -f logo_with_name.png 2>/dev/null
echo -e "${GREEN}✓ Deep clean complete${NC}"

# Step 2: Clear npm cache (optional but thorough)
echo -e "${YELLOW}Step 2: Clearing build cache...${NC}"
npm cache verify
echo -e "${GREEN}✓ Cache verified${NC}"

# Step 3: Run standard deployment
echo -e "${YELLOW}Step 3: Running standard deployment...${NC}"
bash scripts/deploy.sh

echo "========================================"
echo -e "${GREEN}🎉 Clean Deployment Complete!${NC}"

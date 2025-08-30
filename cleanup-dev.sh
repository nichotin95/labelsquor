#!/bin/bash

# Cleanup script for development environment
# This script removes production build artifacts that interfere with local development

echo "🧹 Cleaning up production artifacts..."

# Kill any running Vite processes
pkill -f vite 2>/dev/null || true

# Remove production files from root (keeping only source and config)
rm -rf assets 2>/dev/null
rm -f logo_simple.svg 2>/dev/null
rm -f logo_with_name.png 2>/dev/null

# Clear build and cache directories
rm -rf dist 2>/dev/null
rm -rf node_modules/.vite 2>/dev/null
rm -rf .vite 2>/dev/null

# Clear browser cache hint
echo "✅ Cleanup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Run: npm run dev"
echo "2. Open browser in incognito mode or hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)"
echo ""

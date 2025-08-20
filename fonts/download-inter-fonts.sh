#!/bin/bash

# Download Inter Fonts Script
# This script downloads the Inter font family from Google Fonts and organizes them properly

echo "🚀 Downloading Inter fonts..."

# Create inter directory if it doesn't exist
mkdir -p inter

# Download Inter font files from Google Fonts
# Note: You may need to use a font download service or manually download
# This is a template script - actual implementation would depend on your source

echo "📥 To download Inter fonts, you have several options:"
echo ""
echo "1. 🌐 Google Fonts (easiest):"
echo "   - Visit: https://fonts.google.com/specimen/Inter"
echo "   - Click 'Download family'"
echo "   - Extract and place WOFF2/WOFF files in fonts/inter/"
echo ""
echo "2. 📦 Inter Official Repository:"
echo "   - Visit: https://github.com/rsms/inter/releases"
echo "   - Download latest release"
echo "   - Extract web fonts to fonts/inter/"
echo ""
echo "3. 🔧 Font Converter Services:"
echo "   - Use Font Squirrel: https://www.fontsquirrel.com/tools/webfont-generator"
echo "   - Upload TTF files and generate web fonts"
echo ""
echo "📋 Required files for this project:"
echo "   fonts/inter/Inter-Regular.woff2"
echo "   fonts/inter/Inter-Regular.woff"
echo "   fonts/inter/Inter-Medium.woff2"
echo "   fonts/inter/Inter-Medium.woff"
echo "   fonts/inter/Inter-SemiBold.woff2"
echo "   fonts/inter/Inter-SemiBold.woff"
echo "   fonts/inter/Inter-Bold.woff2"
echo "   fonts/inter/Inter-Bold.woff"
echo ""
echo "✅ Once you have the font files:"
echo "1. Place them in the fonts/inter/ directory"
echo "2. Test the page - custom fonts will load automatically"
echo "3. Check browser dev tools to confirm fonts are loading"
echo ""
echo "🔗 The page will fall back to system fonts until custom fonts are added."

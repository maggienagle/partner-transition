# Custom Web Fonts

This directory contains custom web fonts for the partner transition page.

## 📁 Directory Structure

```
fonts/
├── README.md (this file)
├── inter/
│   ├── Inter-Regular.woff2
│   ├── Inter-Regular.woff
│   ├── Inter-Medium.woff2
│   ├── Inter-Medium.woff
│   ├── Inter-SemiBold.woff2
│   ├── Inter-SemiBold.woff
│   ├── Inter-Bold.woff2
│   └── Inter-Bold.woff
└── (additional font families as needed)
```

## 🎯 Font Requirements

### Required Font Weights
The page uses these specific font weights:
- **Regular (400)** - Body text, secondary messages
- **Medium (500)** - Buttons, subtle emphasis
- **SemiBold (600)** - Headings, instruction titles
- **Bold (700)** - Primary headings

### File Formats (in priority order)
1. **WOFF2** (.woff2) - Best compression, modern browsers
2. **WOFF** (.woff) - Good compression, broad support
3. **TTF** (.ttf) - Fallback for older browsers (optional)

## 📥 How to Add Font Files

### Step 1: Obtain Font Files
- **Licensed fonts**: Purchase from foundries like Google Fonts, Adobe Fonts, or commercial providers
- **Open source**: Download from Google Fonts, Font Squirrel, etc.
- **Custom fonts**: Export from font design software

### Step 2: Convert to Web Formats
If you only have TTF/OTF files, convert them:

**Online Converters:**
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [CloudConvert](https://cloudconvert.com/ttf-to-woff2)

**Command Line (if you have fonttools):**
```bash
# Convert TTF to WOFF2
fonttools ttLib.woff2 compress input.ttf

# Convert TTF to WOFF
sfnt2woff input.ttf
```

### Step 3: Organize Files
Place font files in subdirectories by family name:
```
fonts/
├── inter/
│   └── [Inter font files]
├── helvetica/
│   └── [Helvetica font files]
└── custom-brand-font/
    └── [Your custom font files]
```

### Step 4: Update CSS
The font files are automatically referenced in `styles.css` with @font-face declarations.

## 🚀 Current Font Configuration

### Default: Inter Font Family
If using Inter (matching current Google Fonts setup):

**Download Inter fonts from:**
- [Google Fonts](https://fonts.google.com/specimen/Inter)
- [Inter official GitHub](https://github.com/rsms/inter)

**Required files for Inter:**
```
fonts/inter/
├── Inter-Regular.woff2
├── Inter-Regular.woff
├── Inter-Medium.woff2
├── Inter-Medium.woff
├── Inter-SemiBold.woff2
├── Inter-SemiBold.woff
├── Inter-Bold.woff2
└── Inter-Bold.woff
```

## 🎨 Font Performance Best Practices

### File Size Optimization
- **WOFF2 first**: Always provide WOFF2 format (30% smaller than WOFF)
- **Subset fonts**: Remove unused characters/languages
- **Limit weights**: Only include weights actually used
- **Preload critical fonts**: Add preload hints for above-the-fold text

### Loading Strategy
- **font-display: swap** - Show fallback font immediately, swap when custom font loads
- **Preload important fonts** - Add `<link rel="preload">` for critical fonts
- **Self-host vs CDN** - Self-hosting gives you more control over caching

## 🔧 Testing

### Browser Testing
Test in multiple browsers to ensure compatibility:
- Chrome/Edge (WOFF2, WOFF, TTF)
- Firefox (WOFF2, WOFF, TTF)
- Safari (WOFF2, WOFF, TTF)
- Mobile browsers

### Performance Testing
- Check loading times with dev tools
- Test on slow connections
- Verify fallback fonts display correctly
- Monitor Cumulative Layout Shift (CLS)

## 📱 Fallback Strategy

The CSS includes a comprehensive fallback stack:
```css
font-family: 'InterCustom', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

This ensures text displays even if custom fonts fail to load.

## 🔒 Licensing Considerations

### Commercial Fonts
- Verify web embedding rights
- Check domain restrictions
- Ensure proper licensing for your use case

### Open Source Fonts
- Review license terms (SIL OFL, Apache, etc.)
- Maintain attribution if required
- Check for any usage restrictions

## 🐛 Troubleshooting

### Fonts Not Loading
1. Check file paths in CSS
2. Verify MIME types on server
3. Check browser console for 404 errors
4. Ensure proper font formats

### Performance Issues
1. Optimize file sizes (subset fonts)
2. Use font-display: swap
3. Preload critical fonts
4. Enable GZIP compression on server

### Display Issues
1. Verify font-weight values match available files
2. Check fallback font stack
3. Test across different devices/browsers
4. Validate @font-face syntax

---

**Note**: After adding font files, clear browser cache to see changes. The page will automatically use custom fonts once files are added to the fonts directory.

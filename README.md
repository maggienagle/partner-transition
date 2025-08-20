# Yelp to Zocdoc Transition Page

An interstitial web page that provides a smooth transition experience for users moving from Yelp to Zocdoc to complete provider bookings.

## 🎯 Purpose

This page serves as a bridge between Yelp's provider discovery and Zocdoc's booking platform, providing users with:
- Clear messaging about the transition
- Loading animation and countdown timer
- Automatic redirection to Zocdoc
- Manual redirect option as fallback
- Professional design matching Zocdoc's brand

## 📁 Project Structure

```
partner-transition/
├── yelp-demo.html      # Demo Yelp page (starting point)
├── yelp-demo.css       # Demo page styling
├── index.html          # Main interstitial page
├── styles.css          # Interstitial page styling (Zocdoc-themed)
├── script.js           # JavaScript functionality
├── assets/             # Brand assets directory
│   ├── README.md       # Logo requirements and guidelines
│   ├── yelp-logo.svg   # Yelp logo placeholder
│   └── zocdoc-logo.svg # Zocdoc logo placeholder
└── README.md           # This file
```

## 🔄 User Flow Demo

This project includes a complete user journey demonstration:

1. **Yelp Demo Page** (`yelp-demo.html`) - Simulates a provider profile on Yelp with a "Book appointment" button
2. **Interstitial Page** (`index.html`) - Transition page with logos, messaging, and animation
3. **Zocdoc Booking** - Redirects to actual Zocdoc booking URL

**To see the full flow:** Start at `yelp-demo.html` → Click "Book appointment" → Experience the transition → Redirects to Zocdoc

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Replace placeholder logos** in the `assets/` directory with actual brand logos
3. **Open `yelp-demo.html`** in a web browser to test the full user flow
4. **Or open `index.html`** directly to test just the interstitial page
5. **Deploy** to your web server

### Local Testing
```bash
# Simple local server with Python 3
python -m http.server 8000

# Or with Node.js
npx serve .

# Then visit:
# - http://localhost:8000/yelp-demo.html (full user flow demo)
# - http://localhost:8000/index.html (interstitial page only)
```

## ⚙️ Configuration

### URL Parameters
The page accepts these query parameters to customize the Zocdoc redirect:

- `provider_id` - Specific Zocdoc provider ID
- `specialty` - Medical specialty for search
- `location` - Location for provider search

#### Example URLs:
```
# Redirect to specific provider
https://yoursite.com/?provider_id=12345

# Search by specialty and location
https://yoursite.com/?specialty=dermatology&location=New+York+NY

# Basic redirect to Zocdoc homepage
https://yoursite.com/
```

### Customizing Redirect Timing
Edit the countdown time in `script.js`:
```javascript
this.countdownTime = 5; // Change to desired seconds
```

## 🎨 Brand Assets

### Required Logo Files
Place these files in the `assets/` directory:

1. **`yelp-logo.png`** - Yelp brand logo (200x80px recommended)
2. **`zocdoc-logo.png`** - Zocdoc brand logo (200x80px recommended)

### Logo Guidelines
- Use official brand logos only
- PNG format with transparent background preferred
- Maximum 100KB file size per logo
- High-resolution (2x) versions recommended for retina displays
- Ensure brand compliance and licensing requirements

## 🎨 Styling & Customization

The CSS is designed to match Zocdoc's brand guidelines:

### Color Palette
```css
--zocdoc-primary: #1e40af    /* Primary blue */
--zocdoc-secondary: #3b82f6  /* Secondary blue */
--zocdoc-success: #059669    /* Success green */
--zocdoc-gray-900: #1e293b   /* Dark text */
```

### Key Features
- Responsive design (mobile-first)
- Loading animations
- Smooth transitions
- Professional medical aesthetic
- Accessibility considerations

## 📱 Responsive Design

The page is optimized for:
- **Desktop**: Full layout with side-by-side logos
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Stacked logo layout, rotated transition arrow

## ⚡ JavaScript Features

### Core Functionality
- **Auto-redirect**: Configurable countdown timer
- **Manual redirect**: Fallback button for user control
- **Error handling**: Graceful fallbacks for failed redirects
- **URL building**: Dynamic Zocdoc URL construction
- **Analytics ready**: Placeholder for tracking integration

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile browser optimization

## 🔧 Deployment

### Static Hosting Options
- **Netlify**: Simple drag-and-drop deployment
- **Vercel**: Git-based deployment
- **AWS S3**: Static website hosting
- **GitHub Pages**: Free hosting for public repos
- **Traditional web hosting**: Upload via FTP/SFTP

### CDN Recommendations
Consider using a CDN for faster global loading:
- Cloudflare
- AWS CloudFront
- Google Cloud CDN

## 📊 Analytics & Tracking

The page includes placeholder code for analytics tracking. To implement:

1. **Google Analytics**: Add your GA4 measurement ID
2. **Custom tracking**: Modify the `trackPageView()` function
3. **UTM parameters**: Already included in redirect URLs

## 🛠️ Customization

### Changing Messages
Edit the text content in `index.html`:
- Primary message: `<h1 class="primary-message">`
- Secondary message: `<p class="secondary-message">`
- Instructions: `<div class="instruction-content">`

### Styling Modifications
Key CSS classes to customize:
- `.container` - Main layout
- `.loading-animation` - Spinner styles
- `.brand-logos` - Logo arrangement
- `.instruction-card` - Information card styling

### JavaScript Behavior
Customize in `script.js`:
- Redirect timing
- URL construction
- Error handling
- Analytics integration

## 🔒 Security Considerations

- **HTTPS required**: Always serve over HTTPS in production
- **URL validation**: Consider validating redirect parameters
- **CSP headers**: Implement Content Security Policy
- **Brand compliance**: Ensure proper logo usage rights

## 🧪 Testing

### Manual Testing Checklist
- [ ] Page loads correctly in all target browsers
- [ ] Logos display properly
- [ ] Countdown timer functions
- [ ] Auto-redirect works
- [ ] Manual redirect button works
- [ ] Mobile responsive design
- [ ] Error handling (try with disabled JavaScript)

### Automated Testing
Consider adding:
- Unit tests for JavaScript functions
- Visual regression tests
- Performance testing
- Accessibility testing

## 📝 License & Legal

- Ensure proper licensing for all brand assets
- Respect trademark usage guidelines
- Consider terms of service for redirect functionality
- Review partner agreement requirements

## 🤝 Support

For issues or questions:
1. Check browser console for JavaScript errors
2. Verify all asset files are properly uploaded
3. Test with different URL parameters
4. Confirm server MIME types for assets

## 🔄 Updates & Maintenance

Regular maintenance tasks:
- Update brand assets if logos change
- Monitor redirect success rates
- Update browser compatibility
- Review and update styling to match brand changes
- Test functionality after server updates

---

**Note**: This is a template implementation. Customize based on your specific requirements and brand guidelines.

# PIMIT Website

Paperless fieldwork management for tradies. This is a static HTML/CSS/JS marketing website.

## Project Structure

```
pimit-website/
├── index.html           # Main website page (all 7 sections)
├── css/
│   └── style.css        # All styling (mobile-first responsive)
├── js/
│   └── script.js        # Minimal JavaScript (smooth scroll, analytics prep)
├── assets/
│   ├── images/          # Add your images here (hero, feature icons, etc.)
│   └── icons/           # Add custom icons here (if replacing emojis)
├── privacy.html         # Privacy policy (create this)
├── terms.html           # Terms of service (create this)
└── README.md            # This file
```

## Getting Started

### Option 1: Local Development (VS Code)

1. Open the folder in VS Code
2. Install "Live Server" extension (by Ritwick Dey)
3. Right-click `index.html` → "Open with Live Server"
4. Site opens on `http://localhost:5500`
5. Changes auto-refresh

### Option 2: Python SimpleHTTPServer (No extension needed)

```bash
cd pimit-website
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

### Option 3: Just open the file

Double-click `index.html` in your file explorer. Works, but no live reload.

## What's Included

### HTML (`index.html`)
- 7 semantic sections: Hero, Problem, Solution, Features, Pricing, CTA, Footer
- Mobile-first responsive layout
- Clean meta tags for SEO
- Links to CSS and JavaScript

### CSS (`css/style.css`)
- Mobile-first design (scales up for tablet/desktop)
- CSS variables for easy colour/spacing changes
- Responsive grid layouts
- Smooth transitions and hover effects
- No CSS framework needed (pure vanilla CSS)
- ~400 lines, easy to read and modify

### JavaScript (`js/script.js`)
- Smooth scrolling for anchor links
- Fade-in animation on scroll for cards
- CTA click tracking (ready for Google Analytics)
- Prepared templates for future features (mobile menu, forms, etc.)
- ~150 lines, minimal and non-intrusive

## Customisation

### Change Colours
Edit `:root` variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Change this to your brand colour */
    --primary-dark: #1e40af;
    --text-dark: #1f2937;
    --bg-light: #f9fafb;
    /* ... more colours */
}
```

### Change Copy
All copy is in `index.html`. Edit directly in the HTML.

### Add Images
1. Drop images in `assets/images/`
2. Replace emoji icons with `<img>` tags:

```html
<!-- Old (emoji) -->
<div class="hero-icon">📱</div>

<!-- New (image) -->
<img src="assets/images/mobile-icon.svg" alt="Mobile first" class="hero-icon">
```

### Add Google Analytics
Add this before closing `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

## Deployment Options

### 1. Vercel (Recommended - same as your app)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site is live in ~1 minute.

**Custom domain setup:**
- In Vercel dashboard → Project → Settings → Domains
- Add `pimit.co.uk`
- Update your DNS records (Vercel will show instructions)

### 2. Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir .
```

### 3. GitHub Pages

1. Create repo `pimit-website`
2. Push files to GitHub
3. Settings → Pages → Deploy from `main` branch
4. Site goes live at `https://yourusername.github.io/pimit-website`
5. Use custom domain via DNS settings

### 4. Traditional Hosting

Upload all files to your hosting provider via FTP/SFTP. Done.

## Performance Checklist

- [x] No external fonts (uses system fonts for speed)
- [x] No JavaScript frameworks (tiny file size)
- [x] No image bloat (using emojis for icons)
- [x] CSS minification ready (optional, use an online tool if needed)
- [x] Mobile-first design
- [x] Semantic HTML for SEO

**Page load time:** Should be under 1 second on decent internet.

## Important Notes

### Signup Flow
The CTA buttons currently link to `#signup`. You need to:

1. **Option A:** Link them to your actual sign-up page
   ```html
   <a href="https://app.pimit.co.uk/signup" class="btn btn-primary btn-large">
   ```

2. **Option B:** Add a signup form to this page
   - Create a form section
   - Handle form submission in `js/script.js`
   - Send data to your backend/auth service

### Legal Pages
Create `privacy.html` and `terms.html` with your legal text. Templates:
- Use same HTML structure (navbar, footer)
- Footer already links to these pages
- Keep same CSS styling

### Email Address
Currently set to `enquiries@pimit.co.uk`. Make sure this email works before launch.

### Meta Tags
Update the `<title>` and `<meta name="description">` in `index.html` if you change the copy significantly.

## Customisation Ideas for Later

- [ ] Add customer testimonials section
- [ ] Add FAQ section (accordion)
- [ ] Add blog/resources section
- [ ] Add video walkthrough
- [ ] Add newsletter signup
- [ ] Add chat widget (Intercom, etc.)
- [ ] Dark mode toggle
- [ ] Mobile hamburger menu

All of these are easy to add—just let me know.

## Troubleshooting

**Styles not loading?**
- Check that `css/style.css` path is correct in `index.html`
- Refresh browser cache (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac)

**Smooth scroll not working?**
- Some browsers don't support `scroll-behavior: smooth`. Fallback is instant scroll (still fine).

**Links not working?**
- Make sure anchor IDs match href values (e.g., `id="features"` matches `href="#features"`)

**Want to change fonts?**
- Replace `-apple-system, BlinkMacSystemFont, 'Segoe UI'...` in `css/style.css` with your font
- Or add a Google Font (remember: adds to load time)

## Questions?

Need help with anything? Just shout.

---

Built with ❤️ for tradies who just want to run their business.

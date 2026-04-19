# Civil At Hand — Premium Website v2.0

## Project Structure

```
/
├── index.html          ← Homepage (hero, services, why us, process, portfolio, testimonials, FAQ, CTA)
├── services.html       ← Full service details (5 services with illustrations)
├── portfolio.html      ← Project gallery with filter buttons
├── tools.html          ← 8 free engineering calculators
├── contact.html        ← Contact form + contact methods
├── blog.html           ← Blog/knowledge hub
├── freelancer.html     ← Freelancer application page
├── student-guidance.html ← Student resources with expandable guides
├── 404.html            ← Custom 404 error page
├── style.css           ← Master stylesheet (all pages use this)
├── script.js           ← Master JavaScript (all pages use this)
├── sitemap.xml         ← SEO sitemap
├── robots.txt          ← Search engine directives
└── README.md           ← This file
```

## Quick Edits

### Phone Number
Search and replace `918708524647` across all HTML files with your actual number.

### Email
Search and replace `civilathand.work@gmail.com`.

### Logo
The SVG logo in each page's `<div class="logo-emblem">` can be replaced with an `<img>` tag pointing to your logo file:
```html
<img src="logo.png" alt="Civil At Hand" width="28" height="28">
```

### Colors
Edit `style.css` in the `:root` block:
- `--gold` — primary accent color
- `--ink` — background color

### Favicon
Replace the `href` in each page's `<link rel="icon">` with your favicon file path:
```html
<link rel="icon" href="favicon.ico">
```

## Deployment (GitHub Pages)

1. Push all files to your GitHub repository
2. Go to Settings → Pages → Source: main branch / root
3. Your site will be live at `https://[username].github.io/[repo]/`

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Animated hero canvas (city skyline)
- ✅ Page loader with animated building logo
- ✅ Scroll reveal animations on all elements
- ✅ 8 free engineering calculators (live, no submit needed)
- ✅ Portfolio filter buttons
- ✅ FAQ accordion
- ✅ Expandable "Read More" sections (student guidance)
- ✅ WhatsApp floating button with pulse animation
- ✅ SEO optimized (meta tags, schema.org, sitemap)
- ✅ Custom 404 page
- ✅ Blueprint-style SVG illustrations
- ✅ Cormorant Garamond display font + DM Sans body font


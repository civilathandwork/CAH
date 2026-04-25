# Civil At Hand — Design & Consultancy
## Premium Civil Engineering Website · v9.0 Final

> **World-class business website** for Civil At Hand, a professional civil engineering consultancy operating across India since 2016. Built with pure HTML, CSS, and Vanilla JavaScript — zero frameworks, zero dependencies, production ready.

---

## 🚀 Live Preview

**Website:** [www.civilathand.com](https://www.civilathand.com)  
**WhatsApp:** [+91 870-852-4647](https://wa.me/918708524647)  
**Email:** civilathand.work@gmail.com  
**Social:** @civilathand on all platforms

---

## 📁 Project Structure

```
civilathand/
├── index.html              ← Home page (hero, services, testimonials, social banner)
├── services.html           ← All 5 services with detailed descriptions & pricing
├── portfolio.html          ← 6+ project showcases with filter system
├── contact.html            ← Contact form with real-time validation
├── tools.html              ← 8 free live engineering calculators
├── freelancer.html         ← Recruitment page for freelance engineers
├── student-guidance.html   ← Free guidance hub for CE students
├── blog.html               ← Articles with category filter (8 posts)
├── 404.html                ← Custom 404 error page
├── style.css               ← Complete design system (825+ lines)
├── script.js               ← All interactivity (821+ lines, 24 features)
├── robots.txt              ← SEO crawler rules
├── sitemap.xml             ← XML sitemap for search engines
└── assets/
    └── images/
        ├── favicon.svg     ← SVG favicon (scalable, crisp on all screens)
        ├── favicon.ico     ← Legacy ICO fallback
        ├── logo.png        ← Brand logo (replace with real logo)
        ├── hero.jpg        ← Hero background (replace with real photo)
        └── og-image.jpg    ← Open Graph social share image
```

---

## ✏️ How to Edit Content — Quick Reference

### 🔴 CRITICAL: Change These First

Open each file and find-replace these values:

| What | Where | Current Value | Replace With |
|------|-------|--------------|--------------|
| Phone number | All `.html` files | `+91 870-852-4647` | Your number |
| WhatsApp link | All `.html` files | `918708524647` | Your number |
| Email address | All `.html` files | `civilathand.work@gmail.com` | Your email |
| Instagram | All `.html` files | `civilathand` | Your handle |
| YouTube | All `.html` files | `@civilathand` | Your handle |
| Facebook | All `.html` files | `civilathand` | Your handle |
| LinkedIn | All `.html` files | `civilathand` | Your handle |
| Telegram | All `.html` files | `civilathand` | Your handle |
| Website URL | `sitemap.xml`, `robots.txt` | `civilathand.com` | Your domain |
| Footer year | `script.js` line ~330 | auto via JS | automatic ✓ |

### 📝 Editing Text Content

**Company Name** — search `Civil At Hand` in all HTML files  
**Tagline** — search `Design & Consultancy` in all HTML files  
**Services Pricing** — in `services.html`, find `sd-price` elements  
**Statistics** (150+ projects, 4.9★ etc.) — in `index.html`, find `data-count`  
**Testimonials** — in `index.html`, find `testi` class elements  
**FAQ answers** — in `index.html`, find `faq-ai` class elements  

### 💰 Changing Service Prices

In `services.html` and `index.html`, find the price elements:

```html
<!-- Change the number inside strong tags -->
<div class="sd-price">
  <div><strong>From ₹2,500</strong><span>per floor plan set</span></div>
  <span>3–7 business days</span>
</div>

<!-- In index.html service cards: -->
<div class="svc-price">Starting ₹2,500</div>
```

### 🎨 Changing Colors

All colors are CSS variables in `style.css` at the very top:

```css
:root {
  /* Change these to retheme the entire website */
  --b600: #1a3d80;   /* Primary blue — nav buttons, CTAs */
  --b400: #2d68c4;   /* Medium blue — hover states */
  --b200: #7aaae4;   /* Light blue — text accents */
  --b100: #bbcef0;   /* Lightest blue — headings in dark sections */

  /* Gold accent (used for special CTAs) */
  --g:  #c8a84b;
  --g1: #e0c060;
  --g2: #a07830;
}
```

**To switch to a different brand color** (e.g. green):
1. Replace all `--b` values with your green shades
2. Replace `rgba(44,102,196,...)` in CSS with your color's RGB values
3. Replace `#4a85d4` in SVG elements in HTML files

### 📱 Social Media Links

All social links are in every page. To update all at once, run:

```bash
# On Mac/Linux — replace all Instagram links:
sed -i 's/instagram.com\/civilathand/instagram.com\/YOURHANDLE/g' *.html

# Replace all YouTube links:
sed -i 's/youtube.com\/@civilathand/youtube.com\/@YOURHANDLE/g' *.html

# Replace WhatsApp number:
sed -i 's/918708524647/91YOURNUMBER/g' *.html
```

### 🖼️ Adding Real Images

Replace placeholder images in `assets/images/`:

| File | Size | Usage |
|------|------|-------|
| `logo.png` | 200×60px | Brand logo in footer |
| `hero.jpg` | 1440×700px | Hero background photo |
| `og-image.jpg` | 1200×630px | Social media share preview |
| `favicon.svg` | Any (SVG scales) | Browser tab icon |

**For portfolio project images** — in `portfolio.html`, replace the SVG placeholders with:
```html
<div class="pf-img">
  <img src="assets/images/project-name.jpg" alt="Project description" loading="lazy"/>
</div>
```

---

## ⚙️ Features — Complete List

### Navigation
- ✅ Fixed glass-morphism floating pill nav
- ✅ Scroll-solidify effect (transparent → solid on scroll)
- ✅ Mobile hamburger menu with full-screen drawer
- ✅ Staggered link animation when drawer opens
- ✅ Auto-active link detection per page
- ✅ Smooth page transition veil between pages

### Home Page
- ✅ Animated blue city skyline canvas (hero)
- ✅ Hero parallax on mouse move
- ✅ Animated counters (150+, 8+, 4.9★)
- ✅ Blueprint card with 3D tilt on hover
- ✅ Floating animated stat badges
- ✅ Trust ticker marquee (auto-scrolling)
- ✅ 6 service cards with hover effects
- ✅ Impact statistics bar (animated on scroll)
- ✅ Why us section with progress bars
- ✅ 4-step process grid
- ✅ Portfolio showcase (3-card grid)
- ✅ 3 testimonials + star rating strip
- ✅ FAQ accordion (6 questions)
- ✅ CTA section with gold button
- ✅ **Social media banner** (Instagram, YouTube, Facebook, LinkedIn, WhatsApp, Telegram)
- ✅ Full footer with all links

### Interactive Features
- ✅ Dark / Light mode toggle (persisted in localStorage)
- ✅ Reading progress bar (top of page)
- ✅ Cursor glow effect (desktop)
- ✅ 3D card tilt on hover (desktop)
- ✅ Magnetic button pull effect (desktop)
- ✅ Cookie consent banner (GDPR)
- ✅ Back-to-top button (appears after 320px scroll)
- ✅ **WhatsApp float button** (fixed, no blur, pulse ring)
- ✅ Toast notification system
- ✅ Smooth anchor scroll

### Inner Pages
- ✅ Services — 4 detailed service sections with SVG illustrations
- ✅ Portfolio — 6 cards with category filter (5 categories)
- ✅ Contact — Form with real-time validation + success state
- ✅ Tools — 8 live calculators (instant results as you type)
- ✅ Freelancer — Job listings + benefit cards
- ✅ Students — 6 guide cards with expand/collapse
- ✅ Blog — 8 articles with category filter
- ✅ 404 — Custom error page with nav options

### 8 Free Calculators
1. 🏗️ Construction Cost — area × finish × floors
2. 🧱 Material Estimator — cement, steel, sand, bricks, water
3. 📐 Area Calculator — 5 shapes (rectangle, circle, triangle, trapezoid, L-shape)
4. 🔄 Unit Converter — 17 conversions (area, length, volume, weight)
5. 🪨 Concrete Mix Design — M10 to M30, IS:10262 based
6. 🎨 Paint Estimator — litres + cans + drums
7. ⬛ Tile Calculator — with wastage allowance
8. ⚙️ Steel Weight — D²÷162 IS standard formula

### SEO & Performance
- ✅ Semantic HTML5 (header, main, nav, article, section, footer, address, time)
- ✅ Full ARIA labels on all interactive elements
- ✅ Open Graph meta tags (og:title, og:description, og:url)
- ✅ Schema.org JSON-LD (LocalBusiness + AggregateRating)
- ✅ Canonical URLs on every page
- ✅ robots.txt + sitemap.xml
- ✅ No-FOUC theme initialization (inline script)
- ✅ Google Fonts with `preconnect` optimization
- ✅ `loading="lazy"` on images
- ✅ `will-change` on animated elements
- ✅ Pause canvas on hidden tab (saves CPU)

---

## 🛠️ Setup & Deployment

### Option 1 — Static Hosting (Recommended)

**GitHub Pages (Free):**
1. Push this repo to GitHub
2. Settings → Pages → Source: main branch / root
3. Your site is live at `https://username.github.io/repo-name`

**Netlify (Free, Best):**
1. Drag the folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Done in 30 seconds — free SSL included

**Vercel (Free):**
1. `npm i -g vercel`
2. `vercel` in the project folder
3. Follow prompts

### Option 2 — cPanel / Shared Hosting

1. Zip all files
2. Upload to `public_html` via File Manager
3. Extract

### Option 3 — Local Development

```bash
# Using Python (built-in)
python3 -m http.server 8080
# Open: http://localhost:8080

# Using Node.js
npx serve .
# Open: http://localhost:3000
```

---

## 📬 Setting Up the Contact Form

The form currently simulates sending (1.5s delay). Replace with a real service:

### Option A — Formspree (Easiest, Free)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your endpoint URL
3. In `script.js`, find `/* Replace with Formspree */` and update:

```javascript
// Replace the fake delay with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(contactForm),
  headers: { 'Accept': 'application/json' }
});
if (!response.ok) throw new Error('Send failed');
```

### Option B — EmailJS (No Backend)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add their CDN to `contact.html`
3. Replace the fake delay block with EmailJS send call

### Option C — Netlify Forms (Automatic on Netlify)
Add `netlify` attribute to your form tag:
```html
<form id="contactForm" netlify name="contact">
```

---

## 🎨 Design System Reference

### Typography
| Font | Weight | Use Case |
|------|--------|----------|
| Plus Jakarta Sans | 800 | Hero headings, brand name |
| Plus Jakarta Sans | 700 | Section headings, nav links |
| Plus Jakarta Sans | 600 | Buttons, labels |
| Inter | 400–600 | Body text, paragraphs |
| JetBrains Mono | 400–500 | Prices, code, technical data |

### Color Palette
| Variable | Value | Use |
|----------|-------|-----|
| `--b950` | `#030c1e` | Page background (darkest) |
| `--b600` | `#1a3d80` | Primary CTA buttons |
| `--b400` | `#2d68c4` | Hover states |
| `--b200` | `#7aaae4` | Text accents |
| `--b100` | `#bbcef0` | Light headings |
| `--g` | `#c8a84b` | Gold accent (special CTAs) |
| `--wa` | `#25D366` | WhatsApp green |

### Breakpoints
| Breakpoint | Target |
|-----------|--------|
| `≤ 1100px` | Large tablet / small desktop |
| `≤ 960px` | Tablet portrait |
| `≤ 768px` | Mobile landscape + tablet |
| `≤ 480px` | Mobile portrait |

---

## 🔒 Security Notes

- All external links have `rel="noopener noreferrer"` ✅
- No inline JavaScript (all in `script.js`) ✅
- No external scripts except Google Fonts ✅
- Form inputs have type validation + pattern matching ✅
- XSS protected — no `innerHTML` on user inputs ✅
- Cookie consent banner included ✅

---

## 📊 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |
| Samsung Internet 14+ | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 🤝 Credits

**Design & Development:** Civil At Hand Team  
**Fonts:** [Google Fonts](https://fonts.google.com) — Plus Jakarta Sans, Inter, JetBrains Mono  
**Icons:** Inline SVG (no external icon library)  
**Images:** Replace placeholders with licensed photography  

---

## 📞 Support

**WhatsApp:** [+91 870-852-4647](https://wa.me/918708524647)  
**Email:** civilathand.work@gmail.com  
**Instagram:** [@civilathand](https://www.instagram.com/civilathand)

---

*Built with ❤️ by Civil At Hand — India's Trusted Civil Engineering Partner*

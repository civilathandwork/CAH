# Civil At Hand — Premium Website v3.0

## 🚀 What's New in v3.0
- **Footer**: Only on Home page (index.html). All other pages have a slim mini-footer.
- **Loader**: Reduced from 1700ms → 900ms for instant feel.
- **Favicon**: Real file at `assets/images/favicon.svg` (no more inline data-URI).
- **Design**: Improved hover states, better card animations, refined spacing.
- **Performance**: Consolidated CSS, optimized animations, reduced render-blocking.
- **Script**: Cleaner JS, proper progress bar animation via IntersectionObserver.

## 📁 File Structure
```
/
├── index.html              ← Home page (has full footer)
├── services.html           ← Services page
├── portfolio.html          ← Portfolio + filter
├── tools.html              ← Free calculators
├── contact.html            ← Contact + form
├── blog.html               ← Blog
├── freelancer.html         ← Work with us
├── student-guidance.html   ← Student section
├── 404.html                ← Not found page
├── style.css               ← Master stylesheet (edit :root for theming)
├── script.js               ← All JS (calculators, nav, animations)
├── assets/
│   └── images/
│       ├── favicon.svg     ← Replace with your actual favicon
│       ├── favicon.ico     ← Replace with your actual .ico file
│       ├── logo.svg        ← Replace with your actual logo
│       ├── logo.png        ← Replace with your actual logo
│       ├── hero.jpg        ← Replace with a real hero image
│       └── background.jpg  ← Replace with a real background
├── robots.txt
└── sitemap.xml
```

## 🎨 How to Customize

### Change colours/theme
Edit the `:root` block at the top of `style.css`.

### Replace placeholder images
Simply drop your files into `assets/images/` using the same filenames.

### Change phone number
Search & replace `8708524647` in all files.

### Integrate contact form
In `script.js`, find the `CONTACT FORM` section and replace the `await new Promise(...)` 
line with your Formspree / EmailJS / Netlify Forms API call.

## ✅ Verified
- ✅ Footer: Home only
- ✅ Favicon: Real file (assets/images/favicon.svg)
- ✅ Loader: 900ms
- ✅ No broken links
- ✅ Fully responsive (mobile + desktop)
- ✅ All calculators functional
- ✅ WhatsApp float on every page

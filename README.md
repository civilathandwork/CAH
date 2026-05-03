# Civil At Hand — Website v2.1

> Professional civil engineering consultancy website. Built for performance, SEO, and easy content management.

**Live site:** [civilathand.com](https://www.civilathand.com)  
**Phone:** +91 870-852-4647  
**Email:** civilathand.work@gmail.com

---

## Quick Start

This is a **static HTML website** — no build tools required.

1. Unzip the folder
2. Open `index.html` in a browser to preview
3. Deploy by uploading all files to your web host / cPanel / Netlify / GitHub Pages

---

## ✏️ Editing Content (No Coding Needed)

**All editable content is in `Site.data.js`** and `data.js`.

Open in Notepad and change values in quotes:

| What to edit | File | Section |
|---|---|---|
| Phone, email, address | `Site.data.js` | `business:` |
| Stats (projects, years, etc.) | `Site.data.js` | `stats:` |
| Services list | `Site.data.js` | `services:` |
| Testimonials | `Site.data.js` | `testimonials:` |
| FAQs | `Site.data.js` | `faqs:` |
| Social links | `Site.data.js` | `social:` |
| Blog posts | `data.js` | `blogs:` |

---

## 📧 Setting Up the Contact Form (REQUIRED)

The contact form currently requires a **Formspree** account to actually send emails.

1. Go to [formspree.io](https://formspree.io) and sign up (free)
2. Create a new form — copy the **Form ID** (e.g. `xpwzkgvb`)
3. Open `script.js`, find `FORMSPREE_ID` (around line 543)
4. Replace `'YOUR_FORMSPREE_ID'` with your actual ID
5. Done! Form submissions will be emailed to your Formspree inbox

---

## 📁 File Structure

```
/
├── index.html              Homepage
├── about.html              About Us
├── services.html           Services page
├── portfolio.html          Portfolio / Gallery
├── contact.html            Contact form
├── blog.html               Blog listing
├── blog-post.html          Individual blog posts (dynamic)
├── tools.html              Free engineering calculators
├── freelancer.html         Freelancer opportunities
├── student-guidance.html   Student resources
├── thank-you.html          Post-form-submission page
├── 404.html                Not Found page
│
├── privacy.html            Privacy Policy
├── terms.html              Terms of Service
├── refund-policy.html      Refund Policy
├── disclaimer.html         Disclaimer
├── cookie-policy.html      Cookie Policy
│
├── login.html              Client login (Firebase Auth)
├── signup.html             New account signup
├── dashboard.html          Client dashboard
│
├── style.css               Main stylesheet (design system)
├── pages.css               Inner page styles
├── ultra.css               Extended styles (privacy/sitemap pages)
├── script.js               All JavaScript (24 features)
├── data.js                 Blog posts & page data
├── Site.data.js            Business data (services, FAQs, etc.)
├── firebase.js             Firebase Auth config
├── auth.js                 Auth helpers
├── nav-auth.js             Nav auth state
│
├── sitemap.xml             Submit to Google Search Console
├── robots.txt              Search engine directives
│
└── assets/
    └── images/
        ├── favicon.svg
        ├── favicon.ico
        ├── og-image.jpg    Social share image (1200×630)
        └── Logo.svg
```

---

## 🔍 SEO Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add `https://www.civilathand.com` and verify ownership
3. Submit sitemap: `https://www.civilathand.com/sitemap.xml`

---

## 🚀 Deployment

### Shared Hosting (cPanel)
Upload all files to `public_html/` via File Manager or FTP.

### Netlify (Recommended — Free)
1. Drag & drop this folder at [netlify.com/drop](https://app.netlify.com/drop)
2. Set custom domain in Netlify dashboard

### GitHub Pages
1. Push to a GitHub repo
2. Enable Pages in repo Settings → Pages → Deploy from branch `main`

---

## 🔒 Security Notes

- **Firebase API key** is safe to expose client-side (it's restricted to your domain)
- Set authorized domains in Firebase Console → Authentication → Settings
- Enable Firebase Security Rules for Firestore/Storage
- Contact form via Formspree uses HTTPS and no server code needed

---

## 📋 Changelog

### v2.1 (May 2025)
- ✅ Contact form wired to Formspree (real email delivery)
- ✅ Thank-you page added after form submission
- ✅ Cookie banner now links to privacy policy correctly
- ✅ OG image + Twitter card meta added to all pages
- ✅ Structured data (JSON-LD) enhanced with service offerings
- ✅ About Us added to footer quick links
- ✅ Sitemap updated with current dates
- ✅ Robots.txt updated to block admin/auth pages
- ✅ Firebase security note added
- ✅ README completely rewritten

### v2.0 (January 2025)
- Back button blank page fixed (bfcache handler)
- Blog detail articles implemented
- Mobile navigation redesigned
- Counter animations added
- data.js central data file introduced

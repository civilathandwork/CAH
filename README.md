# Civil At Hand — Website v2.0

> Professional civil engineering consultancy website. Built for performance, SEO, and easy content editing.

---

## HOW TO EDIT CONTENT (No Coding Needed!)

**All editable content lives in ONE file: `data.js`**

Open `data.js` in Notepad (Windows) or TextEdit (Mac). Change any text between the "quotes".

### Edit Business Info
Look for the `business:` section and change phone, email, hours, address.

### Edit Stats (Numbers on Homepage)
Look for `stats:` and change projects, years, clients, rating numbers.

### Edit Social Media Links
Look for `social:` and paste your profile URLs.

### Edit Services, FAQ, Testimonials
Each has a clearly labeled section. Copy/paste blocks to add new ones.

---

## HOW TO ADD A NEW BLOG POST

1. Open `data.js`
2. Find `blogs: [` near the bottom
3. Add this at the TOP of the list (after `blogs: [`):

```
{
  id: "your-post-slug",
  slug: "your-post-slug",
  title: "Your Post Title",
  category: "construction",
  date: "February 2025",
  readTime: "5 min read",
  featured: false,
  icon: "🏗️",
  excerpt: "Short summary of the post.",
  content: `
    <p>Your post content with HTML tags.</p>
    <h2>Section Heading</h2>
    <p>More paragraphs...</p>
  `
},
```

4. Also add the URL to `sitemap.xml` for Google.

---

## FILE STRUCTURE

- `data.js` — Edit ALL content here (business info, blogs, services, testimonials, FAQ)
- `index.html` — Homepage
- `services.html` — Services page
- `blog.html` — Blog listing
- `blog-post.html` — Individual blog article (auto-populated from data.js)
- `contact.html` — Contact form
- `tools.html` — Free calculators
- `sitemap.xml` — Submit to Google Search Console
- `robots.txt` — Search engine rules

---

## GOOGLE SEO SETUP

1. Go to search.google.com/search-console
2. Add your site and verify ownership
3. Go to Sitemaps → enter: `https://www.civilathand.com/sitemap.xml`
4. Submit!

---

## FIXES APPLIED IN v2.0

- Back button blank page — FIXED (pageshow bfcache handler)
- Blog "Read More" links now open full detailed articles
- Legal links added to all page footers
- Mobile navigation redesigned as bottom sheet with icons
- Structured data (JSON-LD) added to all pages for Google
- Counter animations on stat numbers
- Read progress bar on blog posts
- TOC with active section highlighting on blog posts
- data.js central data file for easy editing
- sitemap.xml and robots.txt updated
- README with full editing guide

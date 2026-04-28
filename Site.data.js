/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND — SITE DATA FILE
   ─────────────────────────────────────────────────────────────────
   HOW TO EDIT: Change values below. No coding needed.
   - Business info → window.SITE.business
   - Stats → window.SITE.stats
   - Services → window.SITE.services  (add/remove objects in the array)
   - Testimonials → window.SITE.testimonials
   - FAQs → window.SITE.faqs
   - Social links → window.SITE.social
   - Process steps → window.SITE.process
   ═══════════════════════════════════════════════════════════════════ */

window.SITE = {

  /* ──────────────────────────────────────────────────────────────
     BUSINESS INFORMATION
     Edit these fields to update your contact info everywhere.
  ────────────────────────────────────────────────────────────── */
  business: {
    name:       "Civil At Hand",
    tagline:    "Design & Consultancy",
    phone:      "+91 870-852-4647",
    phoneRaw:   "918708524647",        // For WhatsApp links (no + or spaces)
    email:      "civilathand.work@gmail.com",
    website:    "https://www.civilathand.com",
    since:      "2016",
    hours:      "Mon–Sat: 9 AM – 7 PM IST",
    address:    "Punjab, India (Pan-India Remote Service)",
    taglineShort: "Engineering Your Vision"
  },

  /* ──────────────────────────────────────────────────────────────
     STATS — Numbers shown on the homepage & about page
  ────────────────────────────────────────────────────────────── */
  stats: {
    projects:       150,
    years:          8,
    clients:        50,
    rating:         4.9,
    satisfaction:   100,
    onTimeDelivery: 97
  },

  /* ──────────────────────────────────────────────────────────────
     SERVICES — Each object = one service card
     Fields: id, name, icon (emoji), shortDesc, price, delivery, link
  ────────────────────────────────────────────────────────────── */
  services: [
    {
      id:        "house-planning",
      name:      "House Planning 2D/3D",
      icon:      `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      shortDesc: "Custom floor plans & 3D visualizations tailored to your plot, lifestyle, vastu, and local regulations.",
      price:     "From ₹2,500",
      delivery:  "3–7 days",
      link:      "services.html#house-planning"
    },
    {
      id:        "structural-design",
      name:      "Structural Design",
      icon:      `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M7 8h10M7 11h6"/></svg>`,
      shortDesc: "IS code-compliant structural designs for residential & commercial projects — beams, columns, slabs, foundations.",
      price:     "From ₹5,000",
      delivery:  "5–10 days",
      link:      "services.html#structural-design"
    },
    {
      id:        "boq-estimation",
      name:      "BOQ & Cost Estimation",
      icon:      `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      shortDesc: "Accurate Bill of Quantities and cost estimation so you never face budget surprises during your build.",
      price:     "From ₹1,800",
      delivery:  "2–4 days",
      link:      "services.html#boq-estimation"
    },
    {
      id:        "pdf-autocad",
      name:      "PDF to AutoCAD",
      icon:      `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      shortDesc: "Convert PDF drawings into precise, fully editable AutoCAD .dwg files ready for construction and approvals.",
      price:     "From ₹800/sheet",
      delivery:  "1–3 days",
      link:      "services.html#pdf-autocad"
    },
    {
      id:        "consultancy",
      name:      "Technical Consultancy",
      icon:      `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
      shortDesc: "Expert advice on site selection, construction methods, material choices, and regulatory compliance.",
      price:     "From ₹500/session",
      delivery:  "Same day",
      link:      "services.html#consultancy"
    }
  ],

  /* ──────────────────────────────────────────────────────────────
     PROCESS STEPS — shown on homepage and services page
  ────────────────────────────────────────────────────────────── */
  process: [
    {
      num:   "01",
      title: "Share Your Requirements",
      desc:  "Tell us your plot size, project type, budget, and timeline via WhatsApp or the contact form. Takes 2 minutes."
    },
    {
      num:   "02",
      title: "Receive Free Quote",
      desc:  "Get a transparent, itemised cost estimate within 24 hours. No surprises, no hidden fees."
    },
    {
      num:   "03",
      title: "Work Begins",
      desc:  "Our engineers start your project with regular WhatsApp updates throughout."
    },
    {
      num:   "04",
      title: "Delivery & Revisions",
      desc:  "Receive files by email. Free revisions included until you are fully satisfied."
    }
  ],

  /* ──────────────────────────────────────────────────────────────
     TESTIMONIALS — Client reviews
     To add a new review: copy one object, paste below the last one, update fields.
  ────────────────────────────────────────────────────────────── */
  testimonials: [
    {
      name:     "Rajesh Kumar",
      location: "Residential Client, Punjab",
      rating:   5,
      initial:  "R",
      text:     "Civil At Hand designed our 3-bedroom duplex exactly as we envisioned. Vastu-compliant, excellent layout, delivered in 5 days. Very satisfied."
    },
    {
      name:     "Amit Sharma",
      location: "Builder & Developer, Haryana",
      rating:   5,
      initial:  "A",
      text:     "The BOQ estimation helped us save significantly on material costs. The breakdown was detailed and helped us negotiate better rates with our contractor."
    },
    {
      name:     "Priya Mehta",
      location: "Architect, Delhi NCR",
      rating:   5,
      initial:  "P",
      text:     "PDF to AutoCAD conversion done in 2 days with good accuracy. All layers properly organised. The file passed municipal approval without issues."
    }
  ],

  /* ──────────────────────────────────────────────────────────────
     FAQs — Frequently Asked Questions
     To add a new FAQ: copy one object, paste below last, update.
  ────────────────────────────────────────────────────────────── */
  faqs: [
    {
      q: "How much does house planning cost?",
      a: "House planning starts from <strong>₹2,500</strong> for a basic 2D floor plan. Full 2D + 3D packages start from ₹5,000–₹12,000 depending on plot size and number of floors. Contact us for a free quote."
    },
    {
      q: "What is included in BOQ estimation?",
      a: "Our BOQ includes complete itemwise material quantities (cement, steel, bricks, sand, tiles), labour cost estimate, rate analysis, and delivery in Excel and PDF — ready for contractor negotiations."
    },
    {
      q: "How long does structural design take?",
      a: "Structural design for a typical G+1 or G+2 residential building takes <strong>5–10 working days</strong>, including IS code calculations, complete drawing sheets, and beam/column/slab/foundation design."
    },
    {
      q: "Do you serve all states across India?",
      a: "Yes — all services are delivered <strong>100% remotely</strong> via email and WhatsApp. We serve clients in Punjab, Haryana, Delhi NCR, Maharashtra, Karnataka, Tamil Nadu, Gujarat, and all other states."
    },
    {
      q: "Is the initial consultation free?",
      a: "Yes — initial consultation and preliminary estimate are <strong>completely free</strong>. WhatsApp us or fill our contact form. We respond within a few hours on business days (Mon–Sat)."
    },
    {
      q: "What file formats do you deliver?",
      a: "We deliver <strong>.dwg and .dxf</strong> for AutoCAD, PDF for all plans and structural documents, Excel for BOQ, and high-resolution JPG/PNG for 3D visualizations."
    }
  ],

  /* ──────────────────────────────────────────────────────────────
     SOCIAL MEDIA LINKS
  ────────────────────────────────────────────────────────────── */
  social: {
    instagram: "https://www.instagram.com/civilathand",
    youtube:   "https://www.youtube.com/@civilathand",
    facebook:  "https://www.facebook.com/civilathand",
    linkedin:  "https://www.linkedin.com/in/civilathand",
    telegram:  "https://t.me/civilathand"
  },

  /* ──────────────────────────────────────────────────────────────
     WHY CHOOSE US — Features shown on homepage/about
  ────────────────────────────────────────────────────────────── */
  whyUs: [
    {
      title: "Qualified Engineering Team",
      desc:  "All work handled by licensed civil engineers and experienced CAD professionals — never outsourced to untrained workers.",
      icon:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
    },
    {
      title: "Fast Delivery, No Delays",
      desc:  "Most house plans delivered in 3–7 business days with regular WhatsApp progress updates throughout your project.",
      icon:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
    },
    {
      title: "Transparent, Honest Pricing",
      desc:  "Clear upfront quotes, zero hidden charges. House planning from ₹2,500. BOQ from ₹1,800. No surprises ever.",
      icon:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`
    },
    {
      title: "Pan-India Remote Service",
      desc:  "100% online via email and WhatsApp. Punjab to Kerala — no location barrier, same quality everywhere in India.",
      icon:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
    }
  ]

};

/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND — MASTER CMS DATA FILE  v3.0
   ─────────────────────────────────────────────────────────────────
   ✅ ONE FILE TO RULE ALL CONTENT — edit here, updates everywhere
   ✅ Business info · Services · FAQs · Testimonials · Blog posts
   ✅ Pricing · Team · Careers · Portfolio · Social links
   ✅ Managed via /admin.html visual panel (no code needed)
   ─────────────────────────────────────────────────────────────────
   HOW TO EDIT MANUALLY:
     Open this file in any text editor. Change values between quotes.
     Numbers don't need quotes. Save and refresh your browser.
   ═══════════════════════════════════════════════════════════════════ */

(function() {

/* ── LOAD FROM LOCAL STORAGE IF ADMIN HAS SAVED ──────────────── */
function loadOrDefault(key, fallback) {
  try {
    const stored = localStorage.getItem('cah_cms_' + key);
    return stored ? JSON.parse(stored) : fallback;
  } catch(e) { return fallback; }
}

/* ══════════════════════════════════════════════════════════════
   1. BUSINESS INFORMATION
   ══════════════════════════════════════════════════════════════ */
const BUSINESS_DEFAULT = {
  name:         "Civil At Hand",
  tagline:      "Design & Consultancy",
  taglineShort: "Engineering Your Vision",
  phone:        "+91 870-852-4647",
  phoneRaw:     "918708524647",
  email:        "civilathand.work@gmail.com",
  website:      "https://www.civilathand.in",
  since:        "2016",
  hours:        "Mon–Sat: 9 AM – 7 PM IST",
  address:      "Punjab, India (Pan-India Remote Service)",
  description:  "India's trusted civil engineering partner since 2016. Premium house planning, structural design, BOQ estimation, and technical consultancy delivered with precision across India.",
  gstin:        "",
  mapEmbed:     ""
};

/* ══════════════════════════════════════════════════════════════
   2. STATS
   ══════════════════════════════════════════════════════════════ */
const STATS_DEFAULT = {
  projects:       150,
  years:          8,
  clients:        50,
  rating:         4.9,
  satisfaction:   100,
  onTimeDelivery: 97
};

/* ══════════════════════════════════════════════════════════════
   3. SOCIAL LINKS
   ══════════════════════════════════════════════════════════════ */
const SOCIAL_DEFAULT = {
  instagram: "https://www.instagram.com/civilathand",
  youtube:   "https://www.youtube.com/@civilathand",
  facebook:  "https://www.facebook.com/civilathand",
  linkedin:  "https://www.linkedin.com/in/civilathand",
  telegram:  "https://t.me/civilathand",
  twitter:   "",
  whatsapp:  "https://wa.me/918708524647"
};

/* ══════════════════════════════════════════════════════════════
   4. SERVICES
   ══════════════════════════════════════════════════════════════ */
const SERVICES_DEFAULT = [
  {
    id:        "house-planning",
    name:      "House Planning 2D/3D",
    price:     "From ₹2,500",
    priceNote: "per floor plan",
    icon:      "🏠",
    emoji:     "🏠",
    desc:      "Custom floor plans and 3D visualizations tailored to your plot, lifestyle, vastu requirements, and local municipal regulations.",
    features:  ["2D Floor Plan (All Floors)", "3D Elevation Views", "Vastu Compliant Design", "Municipal Approval Ready", "Free 1 Revision"],
    delivery:  "3–7 days",
    popular:   false,
    active:    true,
    link:      "services.html#house-planning"
  },
  {
    id:        "structural-design",
    name:      "Structural Design",
    price:     "From ₹5,000",
    priceNote: "per project",
    icon:      "🏛️",
    emoji:     "🏛️",
    desc:      "Safe, IS code-compliant structural designs for residential & commercial — beams, columns, slabs, and foundations with calculations.",
    features:  ["IS Code Compliant", "Beam & Column Design", "Slab & Foundation Design", "Structural Calculation Sheet", "Engineer Certified"],
    delivery:  "5–10 days",
    popular:   true,
    active:    true,
    link:      "services.html#structural-design"
  },
  {
    id:        "boq-estimation",
    name:      "BOQ & Cost Estimation",
    price:     "From ₹1,800",
    priceNote: "per project",
    icon:      "📊",
    emoji:     "📊",
    desc:      "Accurate Bill of Quantities and construction cost estimation — so you never face budget surprises during your build.",
    features:  ["Itemwise Material Quantities", "Labour Cost Estimate", "Rate Analysis", "Excel + PDF Format", "Contractor Ready"],
    delivery:  "2–4 days",
    popular:   false,
    active:    true,
    link:      "services.html#boq-estimation"
  },
  {
    id:        "pdf-autocad",
    name:      "PDF to AutoCAD",
    price:     "From ₹800",
    priceNote: "per sheet",
    icon:      "📐",
    emoji:     "📐",
    desc:      "Convert any PDF drawing into precise, fully editable AutoCAD .dwg files ready for construction and municipal approvals.",
    features:  [".DWG & .DXF Output", "Proper Layer Organisation", "All Annotations Preserved", "Municipal Approval Ready", "Fast 1–3 Day Delivery"],
    delivery:  "1–3 days",
    popular:   false,
    active:    true,
    link:      "services.html#pdf-autocad"
  },
  {
    id:        "consultancy",
    name:      "Technical Consultancy",
    price:     "From ₹500",
    priceNote: "per session",
    icon:      "💡",
    emoji:     "💡",
    desc:      "Expert advice on site selection, construction methodology, material choices, and full regulatory compliance guidance.",
    features:  ["Site Feasibility Analysis", "Material Selection Advice", "Vastu Consultation", "Contractor Guidance", "WhatsApp Support"],
    delivery:  "Same day",
    popular:   false,
    active:    true,
    link:      "services.html#consultancy"
  },
  {
    id:        "site-supervision",
    name:      "Site Supervision",
    price:     "From ₹8,000",
    priceNote: "per month",
    icon:      "👷",
    emoji:     "👷",
    desc:      "Professional on-site supervision to ensure your construction follows approved plans, IS codes, and quality standards.",
    features:  ["Weekly Site Visits", "Progress Reports", "Quality Checks", "Contractor Coordination", "Photo Documentation"],
    delivery:  "Ongoing",
    popular:   false,
    active:    true,
    link:      "services.html#site-supervision"
  }
];

/* ══════════════════════════════════════════════════════════════
   5. PRICING PACKAGES
   ══════════════════════════════════════════════════════════════ */
const PRICING_DEFAULT = [
  {
    id:       "starter",
    name:     "Starter",
    subtitle: "For small residential plots",
    price:    "₹4,999",
    period:   "one-time",
    color:    "blue",
    popular:  false,
    features: [
      "2D Floor Plan (Ground Floor)",
      "Front Elevation",
      "Basic BOQ Estimate",
      "PDF Delivery",
      "1 Free Revision",
      "Email Support"
    ],
    cta:      "Get Started",
    ctaLink:  "contact.html"
  },
  {
    id:       "professional",
    name:     "Professional",
    subtitle: "Most popular for homeowners",
    price:    "₹12,999",
    period:   "one-time",
    color:    "gold",
    popular:  true,
    features: [
      "2D Floor Plan (All Floors)",
      "3D Exterior Elevations",
      "Structural Design",
      "Full BOQ & Cost Estimate",
      "AutoCAD .DWG Files",
      "3 Free Revisions",
      "WhatsApp Priority Support"
    ],
    cta:      "Most Popular",
    ctaLink:  "contact.html"
  },
  {
    id:       "enterprise",
    name:     "Enterprise",
    subtitle: "For builders & developers",
    price:    "Custom",
    period:   "per project",
    color:    "blue",
    popular:  false,
    features: [
      "Everything in Professional",
      "Interior 3D Renders",
      "Site Supervision",
      "Municipal Liaison Support",
      "Dedicated Engineer",
      "Unlimited Revisions",
      "24/7 Priority Support"
    ],
    cta:      "Contact Us",
    ctaLink:  "contact.html"
  }
];

/* ══════════════════════════════════════════════════════════════
   6. TESTIMONIALS
   ══════════════════════════════════════════════════════════════ */
const TESTIMONIALS_DEFAULT = [
  {
    id:       "t1",
    name:     "Rajesh Kumar",
    location: "Residential Client, Punjab",
    rating:   5,
    initial:  "R",
    text:     "Civil At Hand designed our 3-bedroom duplex exactly as we envisioned. Vastu-compliant, excellent layout, delivered in 5 days. The 3D renders helped us visualize everything before construction. Very satisfied!",
    project:  "2BHK House Plan",
    date:     "January 2025"
  },
  {
    id:       "t2",
    name:     "Amit Sharma",
    location: "Builder & Developer, Haryana",
    rating:   5,
    initial:  "A",
    text:     "The BOQ estimation helped us save significantly on material costs. The breakdown was incredibly detailed and helped us negotiate much better rates with contractors. Will use again for all future projects.",
    project:  "Commercial Complex BOQ",
    date:     "December 2024"
  },
  {
    id:       "t3",
    name:     "Priya Mehta",
    location: "Architect, Delhi NCR",
    rating:   5,
    initial:  "P",
    text:     "PDF to AutoCAD conversion done in 2 days with excellent accuracy. All layers were properly organised and annotated. The file passed municipal approval without any issues whatsoever.",
    project:  "PDF to AutoCAD (12 sheets)",
    date:     "November 2024"
  },
  {
    id:       "t4",
    name:     "Suresh Patel",
    location: "Homeowner, Gujarat",
    rating:   5,
    initial:  "S",
    text:     "Very professional team. They understood our requirements perfectly and delivered the structural design well within the promised timeline. The IS code compliance documentation was thorough.",
    project:  "G+2 Structural Design",
    date:     "October 2024"
  },
  {
    id:       "t5",
    name:     "Kavitha Nair",
    location: "Interior Designer, Kerala",
    rating:   5,
    initial:  "K",
    text:     "Outstanding service! The 3D visualizations were photorealistic and helped my client approve the design instantly. The team was responsive on WhatsApp and incorporated all feedback quickly.",
    project:  "Villa 3D Renders",
    date:     "September 2024"
  }
];

/* ══════════════════════════════════════════════════════════════
   7. FAQs
   ══════════════════════════════════════════════════════════════ */
const FAQS_DEFAULT = [
  {
    id: "f1",
    category: "pricing",
    q: "How much does house planning cost?",
    a: "House planning starts from <strong>₹2,500</strong> for a basic 2D floor plan. Full 2D + 3D packages start from ₹5,000–₹12,000 depending on plot size and number of floors. Contact us for a free quote tailored to your project."
  },
  {
    id: "f2",
    category: "services",
    q: "What is included in BOQ estimation?",
    a: "Our BOQ includes complete itemwise material quantities (cement, steel, bricks, sand, tiles, paint, plumbing, electrical), labour cost estimate, rate analysis, and delivery in Excel and PDF — ready for contractor negotiations."
  },
  {
    id: "f3",
    category: "timeline",
    q: "How long does structural design take?",
    a: "Structural design for a typical G+1 or G+2 residential building takes <strong>5–10 working days</strong>, including IS code calculations, complete drawing sheets, and beam/column/slab/foundation design."
  },
  {
    id: "f4",
    category: "service-area",
    q: "Do you serve all states across India?",
    a: "Yes — all services are delivered <strong>100% remotely</strong> via email and WhatsApp. We serve clients in Punjab, Haryana, Delhi NCR, Maharashtra, Karnataka, Tamil Nadu, Gujarat, Rajasthan, UP and all other states."
  },
  {
    id: "f5",
    category: "pricing",
    q: "Is the initial consultation free?",
    a: "Yes — initial consultation and preliminary estimate are <strong>completely free</strong>. WhatsApp us or fill the contact form. We respond within a few hours on business days (Mon–Sat, 9 AM – 7 PM IST)."
  },
  {
    id: "f6",
    category: "delivery",
    q: "What file formats do you deliver?",
    a: "We deliver <strong>.dwg and .dxf</strong> for AutoCAD files, PDF for all plans and structural documents, Excel for BOQ, and high-resolution JPG/PNG for 3D visualizations. We can also provide .rvt (Revit) on request."
  },
  {
    id: "f7",
    category: "payment",
    q: "How do you accept payment?",
    a: "We accept UPI (GPay, PhonePe, Paytm), bank transfer (NEFT/IMPS/RTGS), and online payment links. A 50% advance is required to start the project, with the balance due on delivery."
  },
  {
    id: "f8",
    category: "revisions",
    q: "How many revisions are included?",
    a: "Basic plans include 1 free revision. Professional packages include 3 free revisions. We ensure you are 100% satisfied with the final design. Additional revisions can be arranged at a nominal fee."
  }
];

/* ══════════════════════════════════════════════════════════════
   8. TEAM MEMBERS
   ══════════════════════════════════════════════════════════════ */
const TEAM_DEFAULT = [
  {
    id:          "team1",
    name:        "Er. Vikram Singh",
    role:        "Founder & Lead Civil Engineer",
    qual:        "B.E. Civil Engineering",
    exp:         "8+ Years Experience",
    initial:     "VS",
    color:       "blue",
    specialties: ["Structural Design", "House Planning", "IS Codes"],
    linkedin:    ""
  },
  {
    id:          "team2",
    name:        "Er. Preethi Sharma",
    role:        "Senior Structural Engineer",
    qual:        "M.Tech Structural Engineering",
    exp:         "6+ Years Experience",
    initial:     "PS",
    color:       "gold",
    specialties: ["Structural Analysis", "RCC Design", "Foundation Design"],
    linkedin:    ""
  },
  {
    id:          "team3",
    name:        "Akash Verma",
    role:        "Senior CAD Designer",
    qual:        "Diploma in Civil Engineering",
    exp:         "5+ Years Experience",
    initial:     "AV",
    color:       "blue",
    specialties: ["AutoCAD", "3D Rendering", "PDF Conversion"],
    linkedin:    ""
  }
];

/* ══════════════════════════════════════════════════════════════
   9. CAREER OPENINGS
   ══════════════════════════════════════════════════════════════ */
const CAREERS_DEFAULT = [
  {
    id:       "job1",
    title:    "Civil Engineer (Freelance)",
    type:     "Remote / Part-time",
    location: "Pan-India",
    exp:      "2+ years",
    skills:   ["AutoCAD", "Structural Design", "IS Codes"],
    desc:     "Looking for experienced civil engineers to join our freelance network. Work on residential and commercial projects remotely.",
    active:   true,
    posted:   "May 2025"
  },
  {
    id:       "job2",
    title:    "CAD Draughtsman",
    type:     "Remote / Full-time",
    location: "Pan-India",
    exp:      "1+ years",
    skills:   ["AutoCAD", "Floor Planning", "3D Modeling"],
    desc:     "Skilled AutoCAD operator needed for producing high-quality 2D and 3D architectural drawings.",
    active:   true,
    posted:   "May 2025"
  }
];

/* ══════════════════════════════════════════════════════════════
   10. PROCESS STEPS
   ══════════════════════════════════════════════════════════════ */
const PROCESS_DEFAULT = [
  {
    num:   "01",
    title: "Share Your Requirements",
    desc:  "Tell us your plot size, project type, budget, and timeline via WhatsApp or contact form. Takes 2 minutes."
  },
  {
    num:   "02",
    title: "Free Quote in 24 Hours",
    desc:  "Get a transparent, itemised cost estimate. No surprises, no hidden fees, no pressure."
  },
  {
    num:   "03",
    title: "Work Begins",
    desc:  "Our engineers start your project with regular WhatsApp updates throughout the entire process."
  },
  {
    num:   "04",
    title: "Delivery & Revisions",
    desc:  "Receive files by email. Free revisions included until you are fully satisfied with the result."
  }
];

/* ══════════════════════════════════════════════════════════════
   11. WHY CHOOSE US
   ══════════════════════════════════════════════════════════════ */
const WHY_US_DEFAULT = [
  {
    title: "Licensed Engineering Team",
    desc:  "All work handled by licensed civil engineers — never outsourced to untrained workers.",
    icon:  "✅"
  },
  {
    title: "Fast, On-Time Delivery",
    desc:  "97% of projects delivered on time. Regular WhatsApp progress updates throughout.",
    icon:  "⚡"
  },
  {
    title: "Transparent Pricing",
    desc:  "Clear upfront quotes, zero hidden charges. House plans from ₹2,500. No surprises.",
    icon:  "💰"
  },
  {
    title: "Pan-India Remote Service",
    desc:  "100% online via email and WhatsApp. Punjab to Kerala — no location barrier.",
    icon:  "🇮🇳"
  }
];

/* ══════════════════════════════════════════════════════════════
   12. BLOG POSTS
   (Each post: id, slug, title, category, date, readTime, featured,
    icon, excerpt, content [HTML string])
   ══════════════════════════════════════════════════════════════ */
const BLOGS_DEFAULT = [
  {
    id:       "construction-mistakes-homeowners",
    slug:     "construction-mistakes-homeowners",
    title:    "10 Common Construction Mistakes That Cost Indian Homeowners Lakhs",
    category: "construction",
    date:     "January 2025",
    readTime: "8 min read",
    featured: true,
    icon:     "🏗️",
    excerpt:  "Avoid the costly errors that plague first-time home builders in India. From foundation failures to approval skips — here's what to watch out for.",
    content:  `
      <p>Building a home in India is one of the biggest investments of your life. Yet thousands of homeowners lose lakhs of rupees every year due to avoidable construction mistakes. Here are the 10 most common ones.</p>
      <h2>1. Skipping Structural Design</h2>
      <p>Many homeowners save money by skipping a proper structural design and relying on the contractor's experience. This can lead to undersized beams, columns, and foundations that are dangerous and expensive to fix later.</p>
      <h2>2. Not Getting Municipal Approval</h2>
      <p>Constructing without approved plans can result in demolition orders, heavy fines, and difficulty selling or mortgaging the property in the future.</p>
      <h2>3. Hiring Unqualified Contractors</h2>
      <p>Always verify a contractor's previous work, check references, and get everything in writing. The cheapest quote is rarely the best value.</p>
      <h2>4. Poor Foundation Work</h2>
      <p>The foundation is the most critical part of any structure. Cutting corners here is the #1 cause of structural failures in Indian residential buildings.</p>
      <h2>5. Using Substandard Materials</h2>
      <p>Always insist on branded cement, IS-marked steel (Fe415/Fe500), and quality bricks. Saving ₹50,000 on materials can cost ₹5,00,000 in repairs within 5 years.</p>
      <h2>Conclusion</h2>
      <p>A small investment in professional engineering services can save you lakhs. Contact Civil At Hand for a free consultation before your project begins.</p>
    `
  },
  {
    id:       "autocad-commands-civil-engineer",
    slug:     "autocad-commands-civil-engineer",
    title:    "30 Essential AutoCAD Commands Every Civil Engineer Must Know",
    category: "autocad",
    date:     "January 2025",
    readTime: "6 min read",
    featured: false,
    icon:     "📐",
    excerpt:  "Master these AutoCAD commands to speed up your drafting workflow by 3x. From basic drawing to advanced productivity shortcuts.",
    content:  `
      <p>AutoCAD remains the industry standard for civil engineering drawings in India. These 30 commands will dramatically improve your productivity.</p>
      <h2>Basic Drawing Commands</h2>
      <p><strong>L (Line)</strong> — Draw straight lines. The foundation of all civil drawings.</p>
      <p><strong>PL (Polyline)</strong> — Draw connected lines as a single entity. Essential for plot boundaries.</p>
      <p><strong>REC (Rectangle)</strong> — Draw rectangles quickly. Used constantly for rooms and columns.</p>
      <h2>Modification Commands</h2>
      <p><strong>TR (Trim)</strong> — Trim lines at intersections. Used hundreds of times per drawing.</p>
      <p><strong>EX (Extend)</strong> — Extend lines to meet another object.</p>
      <p><strong>O (Offset)</strong> — Create parallel copies at a specified distance. Critical for wall thickness.</p>
      <h2>Productivity Commands</h2>
      <p><strong>B (Block)</strong> — Create reusable groups of objects like doors, windows, and sanitary fixtures.</p>
      <p><strong>ATTEDIT</strong> — Edit block attributes in bulk.</p>
    `
  },
  {
    id:       "m20-vs-m25-concrete",
    slug:     "m20-vs-m25-concrete",
    title:    "M20 vs M25 Concrete: Which Grade Should You Use and Why?",
    category: "materials",
    date:     "December 2024",
    readTime: "5 min read",
    featured: false,
    icon:     "🪨",
    excerpt:  "The difference between M20 and M25 concrete explained simply. Know which grade is right for your slab, column, or foundation.",
    content:  `
      <p>One of the most common questions homeowners ask is about concrete grades. Here's everything you need to know about M20 and M25 concrete.</p>
      <h2>What Does the "M" Stand For?</h2>
      <p>M stands for Mix. The number indicates the characteristic compressive strength in N/mm² at 28 days. M20 = 20 N/mm², M25 = 25 N/mm².</p>
      <h2>Mix Ratios</h2>
      <p><strong>M20</strong>: Cement : Sand : Aggregate = 1 : 1.5 : 3</p>
      <p><strong>M25</strong>: Cement : Sand : Aggregate = 1 : 1 : 2</p>
      <h2>When to Use M20</h2>
      <p>M20 is suitable for slabs, beams, and columns in residential construction (G+1 and below) as per IS 456:2000.</p>
      <h2>When to Use M25</h2>
      <p>M25 is recommended for foundations in poor soil conditions, columns in multi-storey buildings (G+2 and above), and any structure in aggressive environments.</p>
    `
  },
  {
    id:       "vastu-modern-house-design",
    slug:     "vastu-modern-house-design",
    title:    "How to Balance Vastu Shastra with Modern House Design in 2024",
    category: "design",
    date:     "December 2024",
    readTime: "7 min read",
    featured: true,
    icon:     "🏡",
    excerpt:  "Can you have a modern, open-plan home that's also fully vastu compliant? Yes — here's how our engineers achieve both without compromise.",
    content:  `
      <p>Vastu Shastra and modern design are often seen as conflicting. But with careful planning, you can have a home that's both architecturally stunning and vastu compliant.</p>
      <h2>The 5 Core Vastu Principles</h2>
      <p>1. Main door facing North, East, or North-East</p>
      <p>2. Kitchen in South-East (Agni corner)</p>
      <p>3. Master bedroom in South-West</p>
      <p>4. Pooja room in North-East</p>
      <p>5. Open space (Brahmasthan) at the centre</p>
      <h2>Modern Design Solutions</h2>
      <p>Open-plan living can absolutely be vastu compliant. The key is zone planning — using furniture, lighting, and level changes to define spaces while maintaining the correct directional placement.</p>
    `
  },
  {
    id:       "fe415-vs-fe500-tmt-steel",
    slug:     "fe415-vs-fe500-tmt-steel",
    title:    "Fe415 vs Fe500 TMT Steel: Complete Comparison for Indian Construction",
    category: "materials",
    date:     "November 2024",
    readTime: "5 min read",
    featured: false,
    icon:     "🔩",
    excerpt:  "Which TMT steel grade is right for your project? We break down the differences, IS code requirements, and cost implications.",
    content:  `
      <p>Choosing the right TMT steel grade is crucial for structural safety. Here's a complete comparison to help you decide.</p>
      <h2>What is TMT Steel?</h2>
      <p>TMT (Thermo-Mechanically Treated) steel is the most widely used reinforcement in Indian construction. The Fe designation refers to the yield strength in MPa.</p>
      <h2>Fe415 Properties</h2>
      <p>Yield Strength: 415 MPa | Tensile Strength: 485 MPa | Better ductility and bendability. Ideal for seismic zones.</p>
      <h2>Fe500 Properties</h2>
      <p>Yield Strength: 500 MPa | Tensile Strength: 545 MPa | Higher strength allows smaller bar diameters, saving weight and cost.</p>
      <h2>Which to Choose?</h2>
      <p>For residential construction in seismic zones (most of India): <strong>Fe415</strong>. For high-rise and commercial structures where weight is critical: <strong>Fe500</strong>. Never use Fe550 for RCC work without engineer sign-off.</p>
    `
  }
];

/* ══════════════════════════════════════════════════════════════
   13. PORTFOLIO ITEMS
   ══════════════════════════════════════════════════════════════ */
const PORTFOLIO_DEFAULT = [
  {
    id:       "p1",
    title:    "3BHK Duplex, Ludhiana",
    category: "house-planning",
    type:     "Residential",
    area:     "2,400 sq.ft",
    year:     "2024",
    icon:     "🏠",
    desc:     "Complete 2D+3D house planning with vastu compliance for a duplex residence in Ludhiana, Punjab."
  },
  {
    id:       "p2",
    title:    "G+2 Structural Design, Chandigarh",
    category: "structural",
    type:     "Residential",
    area:     "3,600 sq.ft",
    year:     "2024",
    icon:     "🏛️",
    desc:     "IS code-compliant structural design for a G+2 residential building in Chandigarh."
  },
  {
    id:       "p3",
    title:    "Commercial Complex BOQ, Delhi",
    category: "boq",
    type:     "Commercial",
    area:     "12,000 sq.ft",
    year:     "2024",
    icon:     "📊",
    desc:     "Detailed BOQ and cost estimation for a commercial complex in Delhi NCR, saving 18% on material costs."
  },
  {
    id:       "p4",
    title:    "Villa Floor Plan, Mohali",
    category: "house-planning",
    type:     "Residential",
    area:     "5,200 sq.ft",
    year:     "2023",
    icon:     "🏡",
    desc:     "Luxury villa design with contemporary aesthetic and full vastu compliance."
  },
  {
    id:       "p5",
    title:    "Industrial Shed, Ludhiana",
    category: "structural",
    type:     "Industrial",
    area:     "8,000 sq.ft",
    year:     "2023",
    icon:     "🏭",
    desc:     "Structural design for an industrial storage shed with pre-engineered building analysis."
  },
  {
    id:       "p6",
    title:    "AutoCAD Conversion (24 Sheets), Amritsar",
    category: "autocad",
    type:     "Conversion",
    area:     "24 Sheets",
    year:     "2024",
    icon:     "📐",
    desc:     "PDF to AutoCAD conversion of 24 sheets for a commercial building approval project."
  }
];

/* ══════════════════════════════════════════════════════════════
   EXPORT — Merge localStorage overrides with defaults
   ══════════════════════════════════════════════════════════════ */
window.CMS = {
  business:     loadOrDefault('business',     BUSINESS_DEFAULT),
  stats:        loadOrDefault('stats',        STATS_DEFAULT),
  social:       loadOrDefault('social',       SOCIAL_DEFAULT),
  services:     loadOrDefault('services',     SERVICES_DEFAULT),
  pricing:      loadOrDefault('pricing',      PRICING_DEFAULT),
  testimonials: loadOrDefault('testimonials', TESTIMONIALS_DEFAULT),
  faqs:         loadOrDefault('faqs',         FAQS_DEFAULT),
  team:         loadOrDefault('team',         TEAM_DEFAULT),
  careers:      loadOrDefault('careers',      CAREERS_DEFAULT),
  process:      loadOrDefault('process',      PROCESS_DEFAULT),
  whyUs:        loadOrDefault('whyUs',        WHY_US_DEFAULT),
  blogs:        loadOrDefault('blogs',        BLOGS_DEFAULT),
  portfolio:    loadOrDefault('portfolio',    PORTFOLIO_DEFAULT),

  /* Save a section back to localStorage */
  save(section, data) {
    try {
      localStorage.setItem('cah_cms_' + section, JSON.stringify(data));
      this[section] = data;
      return true;
    } catch(e) { return false; }
  },

  /* Reset a section to defaults */
  reset(section) {
    localStorage.removeItem('cah_cms_' + section);
    location.reload();
  },

  /* Reset ALL data */
  resetAll() {
    const keys = Object.keys(this).filter(k => typeof this[k] !== 'function');
    keys.forEach(k => localStorage.removeItem('cah_cms_' + k));
    location.reload();
  }
};

/* Backwards compat — legacy data.js and Site.data.js consumers */
window.CAH_DATA = window.CMS;
window.SITE = window.CMS;

})();

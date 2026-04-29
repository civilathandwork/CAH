/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND — Central Data File
   Edit this file to update content across the entire website.
   No coding knowledge needed — just change text values below.
   ═══════════════════════════════════════════════════════════════════ */

window.CAH_DATA = {

  /* ── Business Info ─────────────────────────────────────────── */
  business: {
    name: "Civil At Hand",
    tagline: "Design & Consultancy",
    phone: "+91 870-852-4647",
    phoneRaw: "918708524647",
    email: "civilathand.work@gmail.com",
    website: "https://www.civilathand.in",
    since: "2016",
    hours: "Mon–Sat: 9 AM – 7 PM IST",
    address: "Gurgaon, India (Pan-India Remote Service)"
  },

  /* ── Stats ─────────────────────────────────────────────────── */
  stats: {
    projects: 1,
    years: 1,
    clients: 10,
    rating: 4.8,
    satisfaction: 100,
    onTimeDelivery: 9
  },

  /* ── Social Links ──────────────────────────────────────────── */
  social: {
    instagram: "https://www.instagram.com/civilathand",
    youtube:   "https://www.youtube.com/@civilathand",
    facebook:  "https://www.instagram.com/civilathand",
    linkedin:  "https://www.linkedin.com/company/civil-at-hand",
    telegram:  "https://t.me/civilathand"
  },

  /* ── Services ──────────────────────────────────────────────── */
  services: [
    {
      id: "house-planning",
      name: "House Planning 2D/3D",
      price: "Starting ₹2,500",
      icon: "🏠",
      desc: "Custom floor plans and 3D visualizations tailored to your plot, lifestyle, vastu requirements, and local municipal regulations.",
      delivery: "3–7 days"
    },
    {
      id: "structural-design",
      name: "Structural Design",
      price: "Starting ₹5,000",
      icon: "🏛️",
      desc: "Safe, IS code-compliant structural designs for residential & commercial projects — beams, columns, slabs, and foundations.",
      delivery: "5–10 days"
    },
    {
      id: "boq-estimation",
      name: "BOQ & Cost Estimation",
      price: "Starting ₹1,800",
      icon: "📊",
      desc: "Accurate Bill of Quantities and construction cost estimation — so you never face budget surprises during your build.",
      delivery: "2–4 days"
    },
    {
      id: "pdf-autocad",
      name: "PDF to AutoCAD",
      price: "Starting ₹800/sheet",
      icon: "📐",
      desc: "Convert any PDF drawing into precise, fully editable AutoCAD .dwg files ready for construction and approvals.",
      delivery: "1–3 days"
    },
    {
      id: "consultancy",
      name: "Technical Consultancy",
      price: "Starting ₹500/session",
      icon: "💡",
      desc: "Expert advice on site selection, construction methodology, material choices, and full regulatory compliance.",
      delivery: "Same day"
    }
  ],

  /* ── Testimonials ──────────────────────────────────────────── */
  testimonials: [
    {
      name: "Rajesh Kumar",
      location: "Residential Client, Punjab",
      rating: 5,
      text: "Civil At Hand designed our 3-bedroom duplex exactly as we envisioned. Vastu-compliant, excellent layout, delivered in just 5 days. Outstanding service!"
    },
    {
      name: "Amit Sharma",
      location: "Builder & Developer, Haryana",
      rating: 5,
      text: "The BOQ estimation saved us 15% in material costs. The breakdown was extremely detailed and helped us negotiate better rates with our contractor."
    },
    {
      name: "Priya Mehta",
      location: "Architect, Delhi NCR",
      rating: 5,
      text: "PDF to AutoCAD conversion done in just 2 days with perfect accuracy. All layers properly organised. The file passed municipal approval without any issues."
    },
    {
      name: "Suresh Patel",
      location: "Homeowner, Gujarat",
      rating: 5,
      text: "Very professional team. They understood our requirements perfectly and delivered the structural design within the promised time. Highly recommended!"
    }
  ],

  /* ── FAQ ───────────────────────────────────────────────────── */
  faq: [
    {
      q: "How much does house planning cost in India?",
      a: "House planning starts from <strong>₹2,500</strong> for a basic 2D floor plan. Full 2D + 3D packages start from ₹5,000–₹12,000 depending on plot size and floors. Contact us for a free no-obligation quote within 24 hours."
    },
    {
      q: "What is included in BOQ estimation?",
      a: "Our BOQ includes complete itemwise material quantities (cement, steel, bricks, sand, aggregate, tiles), labour cost estimation, rate analysis per item, and delivery in both Excel and PDF formats — ready for contractor negotiations."
    },
    {
      q: "How long does structural design take?",
      a: "Structural design for a typical G+1 or G+2 residential building takes <strong>5–10 working days</strong>, including IS code compliance calculations, complete drawing sheets, and beam/column/slab/foundation design."
    },
    {
      q: "Do you serve all states across India?",
      a: "Yes — all services are delivered <strong>100% remotely</strong> via email and WhatsApp. We serve clients in Punjab, Haryana, Delhi NCR, Maharashtra, Karnataka, Tamil Nadu, Gujarat, Rajasthan, and all other states."
    },
    {
      q: "Is the initial consultation free?",
      a: "Yes — initial consultation and preliminary estimate are <strong>completely free</strong>. WhatsApp us at 870-852-4647 or fill our contact form. We respond within a few hours on business days (Mon–Sat)."
    },
    {
      q: "What file formats do you deliver?",
      a: "We deliver <strong>.dwg and .dxf</strong> for AutoCAD, PDF for all plans and structural documents, Excel for BOQ, and high-resolution JPG/PNG for 3D visualizations. All formats included at no extra cost."
    }
  ],

  /* ── Blog Posts ────────────────────────────────────────────── */
  blogs: [
    {
      id: "construction-mistakes-homeowners",
      slug: "construction-mistakes-homeowners",
      title: "10 Common Construction Mistakes That Cost Indian Homeowners Lakhs",
      category: "construction",
      date: "January 2025",
      readTime: "8 min read",
      featured: true,
      icon: "🏗️",
      excerpt: "From foundation errors to wrong material choices — avoid these costly mistakes that we see on nearly every residential construction site in India.",
      content: `
        <p>Building a house is the biggest investment most Indian families will ever make. Yet, construction mistakes cost homeowners an estimated <strong>₹2–10 lakhs extra</strong> on average. After 8+ years and 150+ projects, our engineers at Civil At Hand have compiled the most common and costly errors.</p>

        <h2>1. Skipping Soil Testing</h2>
        <p>The single most expensive mistake. Many homeowners skip soil testing to save ₹3,000–₹8,000, only to discover unstable soil after construction begins. Proper soil testing (SPT/plate load test) prevents foundation failures that can cost ₹5–20 lakhs to rectify.</p>
        <p><strong>Fix:</strong> Always get a soil test report before starting any foundation work. It costs ₹3,000–₹8,000 and can save lakhs.</p>

        <h2>2. Wrong Foundation Type</h2>
        <p>Using an isolated footing when strip footing is needed (or vice versa) is extremely common. Foundation type depends on soil bearing capacity, load distribution, and water table depth — not just what the contractor is comfortable with.</p>
        <p><strong>Fix:</strong> Get a structural engineer to design the foundation based on your soil report. Don't leave this to the mason or contractor.</p>

        <h2>3. Substandard Concrete Mix</h2>
        <p>Many contractors use M15 concrete where IS-456 mandates M20 or higher for reinforced concrete members. Weak concrete leads to cracks, spalling, and structural failures within 10–15 years.</p>
        <p><strong>Fix:</strong> For all RCC work (columns, beams, slabs), insist on minimum M20 grade. Use ready-mix concrete (RMC) for consistency.</p>

        <h2>4. Inadequate Curing</h2>
        <p>Curing is the most neglected step in Indian construction. Insufficient water curing after concrete pouring reduces strength by 20–40%. Many contractors stop curing after 3–4 days instead of the mandatory 28 days.</p>
        <p><strong>Fix:</strong> Insist on minimum 14 days of wet curing for slabs and 7 days for columns. Use curing compounds for columns and walls.</p>

        <h2>5. Wrong Steel Grade</h2>
        <p>Using Fe415 steel where Fe500 is specified, or using recycled/local steel without proper mill certificates, is a serious structural risk. The difference in cost is minimal — the difference in safety is enormous.</p>
        <p><strong>Fix:</strong> Always buy TMT steel from reputed manufacturers (SAIL, Tata Tiscon, RINL) and insist on mill test certificates.</p>

        <h2>6. Ignoring Waterproofing</h2>
        <p>Waterproofing is almost always done as an afterthought in India. Leaking roofs and seeping walls are the #1 maintenance complaint from homeowners. Retrofitting waterproofing costs 3–5× more than doing it right during construction.</p>
        <p><strong>Fix:</strong> Budget ₹50,000–₹1.5 lakhs for proper waterproofing at roof, bathroom, and basement levels. Use SBR-modified mortars and membrane systems.</p>

        <h2>7. Inadequate Column Sizes</h2>
        <p>Minimum column size for G+2 buildings as per IS-456 is 230mm × 230mm. Many contractors use 200mm × 200mm to save material cost, creating structural deficiencies.</p>
        <p><strong>Fix:</strong> Never reduce column sizes without structural engineering approval. Small savings now = massive repair costs later.</p>

        <h2>8. Wrong Plumbing Layout</h2>
        <p>Placing drainage lines inside structural beams (chiseling after construction) weakens beams significantly. This is one of the most damaging post-construction modifications.</p>
        <p><strong>Fix:</strong> Plan all plumbing, electrical conduits, and service lines before the structural work begins. Use sleeves during casting.</p>

        <h2>9. Skipping Lintel Beams</h2>
        <p>Lintel beams over windows and doors in load-bearing and frame structures are critical for distributing loads. Many contractors skip these or use inadequate sizes.</p>
        <p><strong>Fix:</strong> Provide proper lintel beams (minimum 150mm × 230mm RCC) over all openings wider than 750mm.</p>

        <h2>10. Not Getting Working Drawings</h2>
        <p>Building from sketch drawings or verbal instructions is a recipe for disputes and errors. Professional working drawings prevent 80% of site conflicts and ensure regulatory compliance.</p>
        <p><strong>Fix:</strong> Invest in proper 2D working drawings (floor plans, elevations, sections) and structural drawings before starting construction. Civil At Hand provides these starting from ₹2,500.</p>

        <h2>The Real Cost of These Mistakes</h2>
        <p>Our experience shows that cutting corners during construction typically costs 3–10× more to fix later. A ₹5,000 structural design investment can prevent a ₹5 lakh repair. A ₹3,000 soil test can save ₹20 lakhs in foundation remediation.</p>
        <p>Before starting your construction project, get a free consultation with our engineers. We'll help you avoid these costly mistakes and build a safe, durable home within your budget.</p>
      `
    },
    {
      id: "autocad-commands-civil-engineer",
      slug: "autocad-commands-civil-engineer",
      title: "Top 20 AutoCAD Commands Every Civil Engineer Must Know",
      category: "autocad",
      date: "January 2025",
      readTime: "6 min read",
      icon: "📐",
      excerpt: "Speed up your drafting 3× with these essential shortcuts used by professional engineers daily.",
      content: `
        <p>After years of professional AutoCAD work at Civil At Hand, our engineers have identified the 20 commands that make the biggest difference in productivity. Master these and you'll draft 3× faster than the average engineer.</p>

        <h2>Essential Drawing Commands</h2>

        <h3>1. L — Line</h3>
        <p>The most fundamental command. Type L, press Enter, click start point, specify length/angle using Direct Distance Entry. Always use coordinate input (@) for precision.</p>

        <h3>2. PL — Polyline</h3>
        <p>Use polylines instead of lines for walls, boundaries, and any closed shapes. Polylines can have width, are easier to offset, and hatching respects them perfectly.</p>

        <h3>3. C — Circle</h3>
        <p>Specify centre point, then radius. For civil work, use 2P (two point) or 3P (three point) options frequently for fitting circles to existing geometry.</p>

        <h3>4. REC — Rectangle</h3>
        <p>Fastest way to draw columns, rooms, and rectangular features. Use @width,height format for precise dimensions. E.g., @230,230 for a standard column.</p>

        <h3>5. H — Hatch</h3>
        <p>Critical for floor plans, sections, and material symbols. Learn to use ANSI31 (general), AR-CONC (concrete), EARTH (soil), and STEEL patterns for civil drawings.</p>

        <h2>Essential Modify Commands</h2>

        <h3>6. O — Offset</h3>
        <p>The most-used command in floor plan drafting. Offset walls, set distances between rooms, create parallel lines. Always specify offset distance first, then select object.</p>

        <h3>7. TR — Trim</h3>
        <p>Select cutting edges first, press Enter, then click elements to trim. In AutoCAD 2021+, trimming works without selecting edges. Massive time saver.</p>

        <h3>8. EX — Extend</h3>
        <p>Works like Trim but extends lines to meet boundaries. Essential for connecting walls and completing intersections quickly.</p>

        <h3>9. M — Move</h3>
        <p>Always specify base point and destination point precisely. Use object snaps (OSNAP) for accuracy. Never use move without proper reference points.</p>

        <h3>10. CO — Copy</h3>
        <p>Similar to Move but keeps originals. Use Multiple option for copying repeated elements like columns. ARRAY command is better for regular patterns.</p>

        <h3>11. MI — Mirror</h3>
        <p>Essential for symmetric floor plans. Mirror about centerlines to create symmetric layouts. Saves 50% drawing time on symmetric buildings.</p>

        <h3>12. AR — Array</h3>
        <p>Rectangular array for regular column grids. Polar array for circular staircases. Path array for elements along roads or curves.</p>

        <h3>13. SC — Scale</h3>
        <p>Use reference option (R) when scaling to a known dimension. Essential when converting imported drawings to correct scale.</p>

        <h3>14. RO — Rotate</h3>
        <p>Rotate with Reference (R) option to rotate elements to a specific angle. Useful for rotating imported survey data to North orientation.</p>

        <h3>15. F — Fillet</h3>
        <p>Set radius to 0 for cleaning up wall intersections (the most common use in floor plans). This is faster than Trim for T and L intersections.</p>

        <h2>Productivity Commands</h2>

        <h3>16. DIMLIN / DIMALIGNED — Dimensions</h3>
        <p>Linear (DIMLIN) for horizontal/vertical, Aligned (DIMALIGNED) for angled elements. Set up a proper dimension style (DIMSTYLE) with correct text height and arrowheads before drafting.</p>

        <h3>17. LA — Layer Manager</h3>
        <p>Proper layer management is non-negotiable in professional CAD. Separate layers for: walls, doors, windows, dimensions, text, structure, plumbing, electrical. Use color coding.</p>

        <h3>18. B — Block</h3>
        <p>Create blocks for repeated elements: doors, windows, columns, sanitary fixtures, north arrow. Insert (I) blocks instead of copying geometry. Much smaller file size, easier editing.</p>

        <h3>19. PURGE — File Cleanup</h3>
        <p>Removes unused blocks, layers, linetypes, and styles. Run before saving final files to reduce file size by 30–70%. Also fixes many "damaged file" errors.</p>

        <h3>20. OVERKILL — Duplicate Removal</h3>
        <p>Removes duplicate and overlapping lines automatically. Essential when combining drawings from multiple sources or after import from PDF. Cleans up messy geometry quickly.</p>

        <h2>Bonus: Essential Settings</h2>
        <ul>
          <li><strong>OSNAP (F3):</strong> Always keep Endpoint, Midpoint, Center, Intersection, Perpendicular active</li>
          <li><strong>ORTHO (F8):</strong> Toggle for precise horizontal/vertical drawing</li>
          <li><strong>POLAR (F10):</strong> For drawing at specific angles (15°, 30°, 45°, 60°, 90°)</li>
          <li><strong>DYNMODE (F12):</strong> Dynamic input for coordinate entry near cursor</li>
        </ul>

        <p>Practice these commands daily and within 2 weeks, your drafting speed will increase dramatically. Civil At Hand's engineers use all 20 of these every single day on professional projects.</p>

        <p>Need help with AutoCAD drafting or want to convert your PDF drawings to AutoCAD? Contact us for professional PDF to DWG conversion starting from ₹800 per sheet.</p>
      `
    },
    {
      id: "m20-vs-m25-concrete",
      slug: "m20-vs-m25-concrete",
      title: "Understanding M20 vs M25 Concrete: Which Grade for Your Home?",
      category: "structural",
      date: "December 2024",
      readTime: "5 min read",
      icon: "🏛️",
      excerpt: "The most common confusion in residential construction — explained simply with real cost comparison.",
      content: `
        <p>One of the most common questions homeowners ask us is: "What concrete grade should I use for my house?" The answer depends on the structural element, location, and exposure conditions. Here's the definitive guide.</p>

        <h2>What Do M20 and M25 Mean?</h2>
        <p>The "M" stands for Mix, and the number represents the <strong>characteristic compressive strength in N/mm²</strong> at 28 days. So:</p>
        <ul>
          <li><strong>M20</strong> = 20 N/mm² (20 MPa) compressive strength</li>
          <li><strong>M25</strong> = 25 N/mm² (25 MPa) compressive strength</li>
          <li><strong>M30</strong> = 30 N/mm² (30 MPa) compressive strength</li>
        </ul>
        <p>Higher number = stronger concrete = more cement content = higher cost.</p>

        <h2>IS Code Requirements (IS 456:2000)</h2>
        <p>IS-456 mandates minimum concrete grades for different structural elements:</p>

        <h3>For Mild Exposure Conditions (Most Homes):</h3>
        <ul>
          <li>Plain concrete (PCC) in footings: <strong>M10</strong></li>
          <li>RCC footings: <strong>M20</strong></li>
          <li>Columns: <strong>M20 minimum</strong></li>
          <li>Beams and slabs: <strong>M20 minimum</strong></li>
        </ul>

        <h3>For Moderate Exposure (Coastal Areas, Industrial Zones):</h3>
        <ul>
          <li>All RCC elements: <strong>M25 minimum</strong></li>
        </ul>

        <h2>When to Use M20</h2>
        <p><strong>Suitable for:</strong></p>
        <ul>
          <li>Single-storey and G+1 residential buildings in inland areas</li>
          <li>Columns and beams in low-rise residential construction</li>
          <li>Roof slabs for residential buildings</li>
          <li>Foundation footings in normal soil conditions</li>
        </ul>
        <p>M20 is the workhorse of Indian residential construction. It's IS code compliant for most home building scenarios and is the minimum grade for any reinforced concrete work.</p>

        <h2>When to Use M25</h2>
        <p><strong>Recommended or required for:</strong></p>
        <ul>
          <li>G+2 and above buildings</li>
          <li>Buildings in coastal areas (within 50km of coastline)</li>
          <li>Columns in ground floor and basement of multi-storey buildings</li>
          <li>Water tanks, swimming pools, and water-retaining structures</li>
          <li>Industrial floors and pavements</li>
          <li>Any structure in aggressive soil or chemical exposure</li>
        </ul>

        <h2>Cost Comparison (Approximate 2024 Rates)</h2>
        <p>Using Ready Mix Concrete (RMC) pricing:</p>
        <ul>
          <li>M20 RMC: approximately ₹3,800–₹4,500 per cubic metre</li>
          <li>M25 RMC: approximately ₹4,200–₹5,000 per cubic metre</li>
          <li>M30 RMC: approximately ₹4,800–₹5,500 per cubic metre</li>
        </ul>
        <p>For a typical 1,000 sq ft house slab (approx. 28 cubic metres of concrete), upgrading from M20 to M25 costs approximately ₹11,000–₹14,000 extra — a very worthwhile investment for a G+1 or taller building.</p>

        <h2>The Right Answer for Your Project</h2>
        <p>The concrete grade decision should be made by a structural engineer based on:</p>
        <ul>
          <li>Number of floors being built now and in future</li>
          <li>Exposure conditions (coastal, industrial, normal)</li>
          <li>Soil conditions and foundation type</li>
          <li>Span lengths and load requirements</li>
        </ul>

        <p>At Civil At Hand, all our structural designs specify the correct concrete grade per IS-456:2000 for every structural element. Contact us for a free consultation on your project.</p>
      `
    },
    {
      id: "vastu-modern-house-design",
      slug: "vastu-modern-house-design",
      title: "Vastu Shastra & Modern House Design: A Practical Engineer's Guide",
      category: "vastu",
      date: "December 2024",
      readTime: "7 min read",
      icon: "🧭",
      excerpt: "How to incorporate vastu principles without compromising structural integrity or space efficiency.",
      content: `
        <p>As civil engineers who've designed 150+ homes across India, we've found that 90% of vastu requirements can be incorporated without any structural compromise — if planned from the beginning. Here's our practical engineering approach to vastu-compliant design.</p>

        <h2>Understanding Vastu from an Engineering Perspective</h2>
        <p>Vastu Shastra originated as a systematic science of spatial arrangement. Many vastu principles align perfectly with modern engineering and environmental science:</p>
        <ul>
          <li><strong>North/East openings:</strong> Maximizes natural light and morning sun — proven to improve indoor air quality and reduce artificial lighting costs</li>
          <li><strong>Kitchen in South-East:</strong> Fire in the south-east aligns with prevailing wind directions in most of India, improving ventilation</li>
          <li><strong>Master bedroom in South-West:</strong> The south-west corner is structurally the heaviest corner in most plans — suitable for heavier use</li>
        </ul>

        <h2>Key Vastu Principles and Engineering Solutions</h2>

        <h3>1. Main Door Direction (North, East, or North-East)</h3>
        <p><strong>Vastu requirement:</strong> Main entrance in north, east, or north-east.<br>
        <strong>Engineering solution:</strong> This is easily achievable in 95% of plots. For south-facing plots, we use a verandah or porch angled to create a north-east entry approach.</p>

        <h3>2. Kitchen in South-East (Agni Corner)</h3>
        <p><strong>Vastu requirement:</strong> Kitchen in south-east corner.<br>
        <strong>Engineering solution:</strong> Usually straightforward. We ensure proper ventilation with exhaust fans and windows on the east or south walls. Gas pipeline routes are planned accordingly.</p>

        <h3>3. Master Bedroom in South-West</h3>
        <p><strong>Vastu requirement:</strong> Master bedroom in south-west, head to south while sleeping.<br>
        <strong>Engineering solution:</strong> The south-west room naturally gets less morning light (cooler for sleeping). We orient the bed placement in the layout drawings to ensure head-south positioning.</p>

        <h3>4. Pooja Room in North-East</h3>
        <p><strong>Vastu requirement:</strong> Prayer room in north-east corner.<br>
        <strong>Engineering solution:</strong> North-east rooms get soft morning light — ideal for meditation. We design these rooms with east-facing windows and minimal structural columns to allow open layout.</p>

        <h3>5. Toilet Placement</h3>
        <p><strong>Vastu requirement:</strong> Avoid toilets in north-east; prefer north-west or south-east for bathrooms.<br>
        <strong>Engineering solution:</strong> This sometimes conflicts with optimal drainage routing. We find alternatives using bathroom venting and drainage layout adjustments.</p>

        <h3>6. Staircase in South, South-West, or West</h3>
        <p><strong>Vastu requirement:</strong> Avoid staircases in north-east; prefer south, south-west, or west.<br>
        <strong>Engineering solution:</strong> Usually achievable. Staircases in the south-west create a good structural mass in the structurally important corner.</p>

        <h2>When Vastu and Structural Engineering Conflict</h2>
        <p>Occasionally, vastu requirements conflict with structural or space planning requirements. Here's our priority framework:</p>
        <ol>
          <li><strong>Safety always first:</strong> Structural requirements are non-negotiable. We never compromise beam, column, or foundation design for vastu.</li>
          <li><strong>Municipality requirements second:</strong> FAR, setbacks, and building codes override vastu.</li>
          <li><strong>Space efficiency third:</strong> Vastu adjustments that create unusable dead spaces or poor room proportions are reconsidered.</li>
          <li><strong>Vastu within the above constraints:</strong> Maximum compliance within structural and regulatory limits.</li>
        </ol>

        <h2>Getting Vastu Compliance Certified</h2>
        <p>Many of our clients ask about getting a vastu certificate for their home. While there's no government-mandated vastu certification, we include a vastu compliance checklist in our design documentation, noting which principles have been incorporated and alternatives used where strict compliance wasn't possible.</p>

        <p>Every floor plan designed by Civil At Hand comes with vastu orientation clearly marked. We indicate the main compass directions on the plan and design rooms to align with vastu principles wherever structurally and spatially feasible.</p>

        <p>Want a vastu-compliant floor plan for your home? Contact us for a free consultation. House planning starts from ₹2,500.</p>
      `
    },
    {
      id: "freelance-civil-engineer-income",
      slug: "freelance-civil-engineer-income",
      title: "How to Earn ₹50,000/Month as a Freelance Civil Engineer in India",
      category: "career",
      date: "November 2024",
      readTime: "9 min read",
      icon: "🎓",
      excerpt: "A step-by-step roadmap from zero clients to a full-time freelance engineering income.",
      content: `
        <p>Civil engineering freelancing is one of the most underrated income opportunities in India. Our founder started Civil At Hand from scratch and grew it to a consistent income within 18 months. Here's the exact roadmap.</p>

        <h2>Is Freelance Civil Engineering Viable?</h2>
        <p>Absolutely. The demand for civil engineering services is massive and underserved, especially for small-to-medium residential projects. Most homeowners struggle to find affordable, qualified engineers for house planning, structural design, and BOQ estimation.</p>

        <p>The opportunity: approximately 10 million new homes are built in India every year. Even capturing 0.001% of this market means 100 projects annually for your practice.</p>

        <h2>Step 1: Build Your Core Technical Skills (Months 1–3)</h2>
        <p>Before marketing yourself, master the technical fundamentals:</p>
        <ul>
          <li><strong>AutoCAD:</strong> 2D drafting (floor plans, sections, elevations). Target 3–4 hours of daily practice. Our AutoCAD commands article is a good starting point.</li>
          <li><strong>IS Codes:</strong> IS 456 (concrete), IS 875 (loads), IS 1893 (seismic). Download free from BIS website.</li>
          <li><strong>BOQ preparation:</strong> Learn Excel-based quantity take-off. Practice with real construction drawings.</li>
          <li><strong>Structural basics:</strong> Beam/column design, RCC fundamentals, foundation types.</li>
        </ul>

        <h2>Step 2: Create a Portfolio (Months 2–4)</h2>
        <p>You need proof of work before getting paid work:</p>
        <ul>
          <li>Design 5–10 sample floor plans for hypothetical plots of different sizes (20×40, 30×50, 40×60)</li>
          <li>Prepare 2–3 sample BOQ documents with real market rates</li>
          <li>Document your design process, not just the final output</li>
          <li>If you have access to real projects (family, friends), get permission to include them</li>
        </ul>

        <h2>Step 3: Set Up Your Digital Presence (Month 3)</h2>
        <p>Your online presence is your 24/7 salesperson:</p>
        <ul>
          <li><strong>Instagram:</strong> Post daily — floor plans, tips, before/after, process videos. Civil engineering content gets excellent organic reach.</li>
          <li><strong>LinkedIn:</strong> Connect with architects, builders, and real estate agents.</li>
          <li><strong>WhatsApp Business:</strong> Set up a professional profile with your portfolio, pricing, and automated responses.</li>
          <li><strong>YouTube:</strong> Even 5–10 tutorials can generate leads for years. "AutoCAD tutorial in Hindi" gets millions of searches.</li>
        </ul>

        <h2>Step 4: Price Your Services Correctly</h2>
        <p>Beginner rates (first 6 months):</p>
        <ul>
          <li>Floor plan 2D (1,000 sq ft): ₹2,000–₹3,000</li>
          <li>BOQ preparation: ₹1,500–₹2,500</li>
          <li>PDF to AutoCAD: ₹500–₹800 per sheet</li>
          <li>Structural design (G+1): ₹4,000–₹6,000</li>
        </ul>
        <p>Intermediate rates (after 10+ projects):</p>
        <ul>
          <li>Floor plan 2D+3D: ₹5,000–₹12,000</li>
          <li>BOQ preparation: ₹3,000–₹6,000</li>
          <li>Structural design: ₹8,000–₹20,000</li>
          <li>Complete project package: ₹25,000–₹60,000</li>
        </ul>

        <h2>Step 5: Get Your First 10 Clients</h2>
        <p>The first 10 clients are the hardest. Strategies that work:</p>
        <ul>
          <li>Offer 2–3 free or heavily discounted projects to build reviews and referrals</li>
          <li>Join local contractor WhatsApp groups — contractors constantly need engineering support</li>
          <li>Connect with real estate agents — they have constant client referrals</li>
          <li>Post in local Facebook groups and NRI housing forums</li>
          <li>Freelancing platforms: Fiverr, Upwork, Freelancer.com (international clients pay in USD)</li>
        </ul>

        <h2>Step 6: Build Recurring Income Streams</h2>
        <p>Single projects are good; recurring work is great:</p>
        <ul>
          <li><strong>Retainer contracts:</strong> Small builders and contractors need ongoing drafting support. Offer monthly packages (10–20 drawings per month for ₹15,000–₹25,000).</li>
          <li><strong>YouTube ad revenue:</strong> A channel with 10,000+ subscribers can earn ₹5,000–₹20,000/month passively.</li>
          <li><strong>Online courses:</strong> Teach AutoCAD, structural design basics, or BOQ preparation. Platforms like Udemy and Unacademy accept civil engineering courses.</li>
          <li><strong>Consultation calls:</strong> Charge ₹500–₹1,000 for 30-minute consultations once you're established.</li>
        </ul>

        <h2>Realistic Income Projections</h2>
        <p>Based on our experience and network:</p>
        <ul>
          <li><strong>Month 1–3:</strong> ₹5,000–₹15,000 (learning, portfolio building, first projects)</li>
          <li><strong>Month 4–6:</strong> ₹15,000–₹30,000 (growing client base)</li>
          <li><strong>Month 7–12:</strong> ₹30,000–₹60,000 (established reputation, referrals)</li>
          <li><strong>Year 2+:</strong> ₹60,000–₹2,00,000 (with team, multiple income streams)</li>
        </ul>

        <h2>Join Civil At Hand's Freelancer Network</h2>
        <p>We regularly work with freelance civil engineers and CAD professionals across India. If you're skilled in AutoCAD drafting, structural design, or BOQ preparation, join our freelancer network. We provide work, mentorship, and a professional platform.</p>

        <p>Check out our Freelancer page for details on joining the Civil At Hand network.</p>
      `
    },
    {
      id: "fe415-vs-fe500-tmt-steel",
      slug: "fe415-vs-fe500-tmt-steel",
      title: "Fe415 vs Fe500 TMT Steel: Complete Comparison for House Construction",
      category: "construction",
      date: "November 2024",
      readTime: "5 min read",
      icon: "🧱",
      excerpt: "Which TMT grade should you use? The definitive answer with cost analysis for Indian construction.",
      content: `
        <p>TMT (Thermo-Mechanically Treated) steel selection is one of the most important decisions in home construction. Using the wrong grade can be a safety risk; using a higher grade than needed wastes money. Here's everything you need to know.</p>

        <h2>What Do Fe415 and Fe500 Mean?</h2>
        <p>The number represents the <strong>minimum yield strength in N/mm²</strong>:</p>
        <ul>
          <li><strong>Fe415:</strong> Yield strength ≥ 415 N/mm²</li>
          <li><strong>Fe500:</strong> Yield strength ≥ 500 N/mm²</li>
          <li><strong>Fe500D:</strong> Fe500 with improved ductility (D = Ductile)</li>
          <li><strong>Fe550:</strong> Yield strength ≥ 550 N/mm²</li>
        </ul>

        <h2>IS Code Requirements</h2>
        <p>IS 1786:2008 governs TMT steel production in India. IS 456:2000 specifies steel requirements for RCC structures:</p>
        <ul>
          <li>Minimum grade for reinforced concrete: <strong>Fe415</strong></li>
          <li>Recommended for seismic zones III, IV, V: <strong>Fe500D or Fe550D</strong></li>
          <li>For ductile detailing (earthquake-resistant design): <strong>Fe500D or higher</strong></li>
        </ul>

        <h2>Property Comparison Table</h2>
        <table style="width:100%;border-collapse:collapse;margin:16px 0">
          <tr style="background:rgba(44,102,196,.1)"><th style="padding:10px;text-align:left;border:1px solid rgba(44,102,196,.2)">Property</th><th style="padding:10px;text-align:left;border:1px solid rgba(44,102,196,.2)">Fe415</th><th style="padding:10px;text-align:left;border:1px solid rgba(44,102,196,.2)">Fe500</th></tr>
          <tr><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">Yield Strength</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">415 N/mm²</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">500 N/mm²</td></tr>
          <tr><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">Tensile Strength</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">485 N/mm²</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">545 N/mm²</td></tr>
          <tr><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">Elongation</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">14.5%</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">12%</td></tr>
          <tr><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">Ductility</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">Higher</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">Lower (Fe500D solves this)</td></tr>
          <tr><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">Cost per kg</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">₹56–₹60</td><td style="padding:10px;border:1px solid rgba(44,102,196,.2)">₹58–₹62</td></tr>
        </table>

        <h2>Which to Use: Practical Guidance</h2>

        <h3>Use Fe415 for:</h3>
        <ul>
          <li>Single-storey residential buildings in seismic zones I and II</li>
          <li>Non-critical structural elements like boundary walls</li>
          <li>Low-rise construction in non-seismic areas</li>
        </ul>

        <h3>Use Fe500 for:</h3>
        <ul>
          <li>G+1 and G+2 buildings in most parts of India</li>
          <li>Main structural elements (columns, beams, foundation) in all projects</li>
          <li>When structural engineer specifically designs for Fe500 (higher strength allows smaller bar diameters)</li>
        </ul>

        <h3>Use Fe500D for:</h3>
        <ul>
          <li>Buildings in seismic zones III, IV, and V (most of North India, East India, Himalayan region)</li>
          <li>Any earthquake-resistant design (IS 13920 compliance)</li>
          <li>Critical structural elements in multi-storey buildings</li>
        </ul>

        <h2>Cost Analysis: Is Fe500 Worth the Extra Cost?</h2>
        <p>For a typical 1,000 sq ft G+1 house needing approximately 8 tonnes of steel:</p>
        <ul>
          <li>Fe415 at ₹58/kg = ₹4,64,000</li>
          <li>Fe500 at ₹60/kg = ₹4,80,000</li>
          <li>Extra cost = ₹16,000</li>
        </ul>
        <p>However, Fe500 allows 15–20% less steel quantity per IS 456 calculations (due to higher design strength). So the final cost difference is often negligible or even savings with Fe500, plus you get a stronger structure.</p>

        <h2>Top TMT Steel Brands in India (2024)</h2>
        <p>In order of recommended quality:</p>
        <ol>
          <li>Tata Tiscon (Tata Steel) — most consistent quality</li>
          <li>SAIL TMT (Steel Authority of India)</li>
          <li>JSW Neo Steel</li>
          <li>RINL Vizag Steel</li>
          <li>Kamdhenu TMT</li>
        </ol>
        <p>Always insist on Mill Test Certificates (MTC) with your purchase, regardless of brand.</p>

        <p>Have questions about steel specifications for your project? Contact Civil At Hand for a free structural consultation.</p>
      `
    },
    {
      id: "autocad-floor-plan-tutorial",
      slug: "autocad-floor-plan-tutorial",
      title: "How to Draw a House Floor Plan in AutoCAD: Step-by-Step Tutorial",
      category: "autocad",
      date: "October 2024",
      readTime: "10 min read",
      icon: "💻",
      excerpt: "Complete beginner-friendly tutorial — from blank canvas to a professional floor plan drawing.",
      content: `
        <p>This step-by-step tutorial will walk you through creating a professional 2BHK house floor plan in AutoCAD. We'll create a 30×40 feet plot with 2 bedrooms, 1 living room, kitchen, and 2 bathrooms. Follow along with AutoCAD 2019 or later.</p>

        <h2>Setup Before You Begin</h2>
        <p><strong>Units Setup:</strong> Type UNITS → Select Decimal, set Precision to 0.00, ensure Length Type is set to Decimal. We'll work in feet.</p>
        <p><strong>Layer Setup:</strong> Create the following layers in Layer Manager (LA):</p>
        <ul>
          <li>WALLS — Color: White, Lineweight: 0.30mm</li>
          <li>DOORS — Color: Cyan, Lineweight: 0.20mm</li>
          <li>WINDOWS — Color: Blue, Lineweight: 0.20mm</li>
          <li>DIMENSIONS — Color: Green, Lineweight: 0.15mm</li>
          <li>TEXT — Color: Yellow, Lineweight: 0.15mm</li>
          <li>HATCH — Color: Gray (8), Lineweight: Default</li>
        </ul>

        <h2>Step 1: Draw the Plot Boundary</h2>
        <ol>
          <li>Set current layer to WALLS</li>
          <li>Type REC (Rectangle), press Enter</li>
          <li>Click anywhere in the drawing area as first corner</li>
          <li>Type @30',40' and press Enter (30 feet width × 40 feet depth)</li>
          <li>This creates your plot boundary</li>
        </ol>

        <h2>Step 2: Draw Setback Lines and Build Area</h2>
        <p>Typical municipal setbacks for a 30×40 plot: Front 10 feet, Back 5 feet, Sides 3 feet each.</p>
        <ol>
          <li>Select the plot rectangle, type O (Offset), enter 3, click inside for side setbacks</li>
          <li>Offset the front wall by 10 feet inside</li>
          <li>Offset the back wall by 5 feet inside</li>
          <li>These create your permissible build area: 24×25 feet = 600 sq ft per floor</li>
        </ol>

        <h2>Step 3: Draw External Walls</h2>
        <p>Standard external wall thickness: 9 inches (230mm ≈ 0.75 feet)</p>
        <ol>
          <li>Draw the outer perimeter of your building: Type L, draw a rectangle 24×25 feet</li>
          <li>Offset this rectangle inward by 0.75 feet to create wall thickness</li>
          <li>Use FILLET (F) with radius 0 to clean up corners</li>
        </ol>

        <h2>Step 4: Draw Internal Walls</h2>
        <p>Room layout for this 2BHK (internal dimensions):</p>
        <ul>
          <li>Master Bedroom: 12×11 feet</li>
          <li>Bedroom 2: 10×10 feet</li>
          <li>Living/Dining: 12×14 feet</li>
          <li>Kitchen: 8×10 feet</li>
          <li>Bathroom 1 (attached): 5×8 feet</li>
          <li>Bathroom 2: 5×6 feet</li>
          <li>Passage/Corridor: remaining space</li>
        </ul>
        <p>Internal wall thickness: 4.5 inches (115mm ≈ 0.38 feet)</p>
        <ol>
          <li>Draw all room division lines using LINE (L) command</li>
          <li>Offset by 0.38 feet for internal wall thickness</li>
          <li>Use TRIM (TR) to clean all intersections</li>
          <li>Use FILLET (F, radius 0) to close corners</li>
        </ol>

        <h2>Step 5: Add Doors</h2>
        <p>Switch to DOORS layer. Standard door sizes:</p>
        <ul>
          <li>Main entrance door: 3.5 feet (1050mm)</li>
          <li>Bedroom doors: 3 feet (900mm)</li>
          <li>Bathroom doors: 2.5 feet (750mm)</li>
        </ul>
        <p>Drawing a door symbol:</p>
        <ol>
          <li>Make a gap in the wall at door location (trim wall lines)</li>
          <li>Draw a line from door hinge point at door width length</li>
          <li>Draw a quarter circle arc (A command) from door endpoint to jamb showing swing direction</li>
          <li>Create this as a BLOCK (B) named "DOOR-900" for reuse</li>
        </ol>

        <h2>Step 6: Add Windows</h2>
        <p>Switch to WINDOWS layer. Standard window sizes:</p>
        <ul>
          <li>Bedroom windows: 4 feet × 4 feet (from floor at 3 feet height)</li>
          <li>Kitchen window: 3 feet × 3 feet</li>
          <li>Bathroom windows: 2 feet × 3 feet</li>
        </ul>
        <p>Window symbol in plan view: Three parallel lines across the wall opening.</p>

        <h2>Step 7: Add Dimensions</h2>
        <ol>
          <li>Switch to DIMENSIONS layer</li>
          <li>First, set up a dimension style: Type DIMSTYLE → New → Set text height to 0.8, arrowhead size to 0.5</li>
          <li>Use DIMLIN for horizontal dimensions, DIMALIGNED for diagonal</li>
          <li>Dimension all room internal widths and lengths</li>
          <li>Dimension overall building footprint</li>
          <li>Add door and window widths</li>
        </ol>

        <h2>Step 8: Add Text and Labels</h2>
        <ol>
          <li>Switch to TEXT layer</li>
          <li>Type MTEXT (MT) for all room labels</li>
          <li>Set text height to 1.0–1.5 feet for readability when printed at 1:100 scale</li>
          <li>Add room names: MASTER BEDROOM, BEDROOM 2, LIVING ROOM, KITCHEN, etc.</li>
          <li>Add a North arrow (create a simple arrow block pointing north)</li>
          <li>Add scale bar and title block</li>
        </ol>

        <h2>Step 9: Plot/Print Settings</h2>
        <ol>
          <li>Type PLOT (Ctrl+P) to open plot dialog</li>
          <li>Select your printer or PDF printer</li>
          <li>Paper size: A3 (420×297mm) for 1:100 scale</li>
          <li>Scale: 1:100 (1mm = 100mm in drawing, i.e., 1 drawing unit = 1 foot → 1mm paper = 100mm real)</li>
          <li>Center the plot, enable Plot with plot styles</li>
        </ol>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Not using object snaps (leads to gaps and overlaps in walls)</li>
          <li>Drawing on wrong layers (makes editing and printing very difficult)</li>
          <li>Forgetting to close polylines (hatching won't work)</li>
          <li>Using text height that's too small (unreadable on print)</li>
          <li>Not saving regularly (Ctrl+S every 10 minutes)</li>
        </ul>

        <p>With practice, a simple 2BHK floor plan like this can be completed in 3–4 hours. Professional engineers at Civil At Hand can produce the same in 45–90 minutes.</p>
        <p>Need a professional floor plan drawn quickly? Contact us — floor plans start from ₹2,500 with 3-day delivery.</p>
      `
    },
    {
      id: "minimum-column-size-g2-building",
      slug: "minimum-column-size-g2-building",
      title: "Minimum Column Size for G+2 Building in India — IS Code Rules",
      category: "structural",
      date: "October 2024",
      readTime: "6 min read",
      icon: "📏",
      excerpt: "The most asked question by homeowners — answered with IS-456 reference and practical examples.",
      content: `
        <p>Column size is the most common structural question we receive. Get it wrong and you have a safety hazard; oversize it and you waste money and reduce room space. Here's the complete IS code-based answer.</p>

        <h2>What IS-456:2000 Says</h2>
        <p>IS-456:2000 Clause 26.5.3 specifies minimum dimensions for reinforced concrete columns:</p>
        <ul>
          <li>Minimum column dimension: <strong>200mm (8 inches)</strong> in any direction</li>
          <li>For columns with 2% steel: minimum cross-section = 40,000 mm² (e.g., 200×200mm)</li>
          <li>Recommended minimum for residential buildings: <strong>230mm × 230mm (9" × 9")</strong></li>
        </ul>

        <p>However, these are MINIMUM values. Actual column sizes must be designed based on loads — not just IS code minimums.</p>

        <h2>Factors Determining Column Size</h2>
        <p>Column size depends on:</p>
        <ol>
          <li><strong>Load on column:</strong> Number of floors, floor area tributary to each column, wall loads, live loads</li>
          <li><strong>Column height:</strong> Slenderness ratio must be within IS-456 limits</li>
          <li><strong>Concrete grade:</strong> Higher grade concrete allows smaller columns for the same load</li>
          <li><strong>Steel percentage:</strong> More steel allows smaller size (but increases cost)</li>
          <li><strong>Seismic zone:</strong> Earthquake-prone areas require larger columns with more ductility</li>
        </ol>

        <h2>Typical Column Sizes for Indian Residential Buildings</h2>

        <h3>Ground Floor (G) Single Storey:</h3>
        <ul>
          <li>Standard: 230mm × 230mm (9" × 9")</li>
          <li>Steel: 4 bars of 12mm diameter, 8mm stirrups @ 150mm c/c</li>
          <li>Concrete: M20</li>
        </ul>

        <h3>G+1 Building (Ground + 1st Floor):</h3>
        <ul>
          <li>Ground floor columns: 230mm × 300mm to 300mm × 300mm</li>
          <li>1st floor columns: 230mm × 230mm</li>
          <li>Steel: 4–6 bars of 16mm, 8mm stirrups @ 150mm c/c</li>
          <li>Concrete: M20 for rural areas, M25 for urban/seismic zones</li>
        </ul>

        <h3>G+2 Building (Ground + 2 Floors):</h3>
        <ul>
          <li>Ground floor columns: 300mm × 300mm to 350mm × 350mm</li>
          <li>1st floor columns: 230mm × 300mm</li>
          <li>2nd floor columns: 230mm × 230mm</li>
          <li>Steel: 6–8 bars of 16–20mm, 8mm stirrups @ 100–150mm c/c</li>
          <li>Concrete: M25 (strongly recommended for G+2)</li>
        </ul>

        <h2>Column Size for Common Plot Sizes (Approximate)</h2>

        <h3>20×30 feet plot, G+2:</h3>
        <p>With columns at approximately 10-foot grid spacing:</p>
        <ul>
          <li>Corner columns: 230mm × 300mm (G floor), 230mm × 230mm (upper floors)</li>
          <li>Mid-span columns (if any): 300mm × 300mm (G floor)</li>
        </ul>

        <h3>30×40 feet plot, G+2:</h3>
        <ul>
          <li>Corner columns: 300mm × 300mm (G floor)</li>
          <li>Interior columns: 300mm × 450mm for long spans (G floor)</li>
        </ul>

        <h3>30×50 feet plot, G+2:</h3>
        <ul>
          <li>All columns: 300mm × 300mm minimum at G floor</li>
          <li>Long-span columns: 350mm × 450mm or 300mm × 500mm</li>
        </ul>

        <h2>Why You Need a Structural Engineer</h2>
        <p>These are general guidelines. Your actual column sizes must be calculated by a structural engineer considering:</p>
        <ul>
          <li>Exact load calculations per IS 875 (Dead Load + Live Load + Wind Load)</li>
          <li>Seismic design per IS 1893 (if in Zone III, IV, or V)</li>
          <li>Actual column grid and span lengths</li>
          <li>Foundation soil bearing capacity</li>
          <li>Interaction between beams and columns (frame analysis)</li>
        </ul>

        <h2>The Cost of Getting It Wrong</h2>
        <p>Undersized columns in a G+2 building are a serious structural risk. Signs of underdesigned columns:</p>
        <ul>
          <li>Cracks in columns (diagonal cracks are serious warning signs)</li>
          <li>Column buckling or visible deformation under load</li>
          <li>Cracks at beam-column joints</li>
        </ul>
        <p>Retrofitting undersized columns with jacketing costs ₹15,000–₹40,000 per column, plus significant disruption. A structural design that prevents this costs ₹5,000–₹15,000 for the entire building.</p>

        <p>Need a complete structural design for your G+2 home? Civil At Hand provides IS-456 compliant structural designs starting from ₹5,000. Contact us for a free consultation.</p>
      `
    }
  ]
};

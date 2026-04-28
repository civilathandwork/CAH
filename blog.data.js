/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND — BLOG DATA FILE
   ─────────────────────────────────────────────────────────────────
   HOW TO ADD A NEW BLOG POST:
   1. Copy the template object below
   2. Paste it at the TOP of the BLOG.posts array (newest first)
   3. Fill in all the fields
   4. That's it — the blog page auto-updates

   TEMPLATE TO COPY:
   {
     id:       "my-post-url-slug",       ← URL-friendly, no spaces
     title:    "Your Post Title Here",
     category: "construction",           ← construction | autocad | career | design | materials
     date:     "January 2025",
     readTime: "5 min read",
     icon:     "🏗️",                    ← Single emoji
     excerpt:  "Short description shown on blog listing (1-2 sentences).",
     content:  `
       <p>Your full article content goes here. Use HTML tags.</p>
       <h2>Section Heading</h2>
       <p>More content...</p>
       <ul><li>List item</li></ul>
     `
   },
   ═══════════════════════════════════════════════════════════════════ */

window.BLOG = {

  /* ── Blog metadata ─────────────────────────────────────────── */
  meta: {
    title:       "Civil Engineering Blog",
    description: "Practical guides, tutorials, and insights for homeowners and civil engineers in India.",
    postsPerPage: 6
  },

  /* ── Categories ──────────────────────────────────────────────
     To add a category: copy a line, add new id and label.
  ────────────────────────────────────────────────────────────── */
  categories: [
    { id: "all",          label: "All Posts" },
    { id: "construction", label: "Construction Tips" },
    { id: "autocad",      label: "AutoCAD & CAD" },
    { id: "career",       label: "Career Guidance" },
    { id: "design",       label: "Design & Planning" },
    { id: "materials",    label: "Materials & Costs" }
  ],

  /* ── Blog Posts ──────────────────────────────────────────────
     NEWEST POST GOES FIRST (at the top of this array)
  ────────────────────────────────────────────────────────────── */
  posts: [

    /* ── POST 1 ── */
    {
      id:       "construction-mistakes-india",
      title:    "7 Common Construction Mistakes That Cost Indian Homeowners Lakhs",
      category: "construction",
      date:     "December 2024",
      readTime: "7 min read",
      icon:     "🏗️",
      excerpt:  "These preventable mistakes happen on most Indian construction sites — and fixing them later costs 3–5x more than getting them right the first time.",
      content:  `
        <p>Building a house is likely the biggest investment of your life. Yet most homeowners unknowingly make critical mistakes during construction that lead to structural problems, legal issues, or budget overruns. Here are the 7 most common — and how to avoid them.</p>

        <h2>1. Not Getting a Proper Structural Design</h2>
        <p>Most homeowners in India rely on local contractors who work from experience rather than engineering calculations. This works for very simple structures, but for G+1 and above buildings, a proper IS 456-compliant structural design is essential.</p>
        <p><strong>The risk:</strong> Without proper reinforcement and beam/column sizing, buildings can develop cracks, settlement issues, or worse — become structurally unsafe during earthquakes.</p>
        <p><strong>The fix:</strong> Get a structural design from a licensed civil engineer before construction starts. For a G+1 house, this costs ₹5,000–₹15,000 — a tiny fraction of your construction budget.</p>

        <h2>2. Skipping the BOQ (Bill of Quantities)</h2>
        <p>Most people accept a contractor's lump-sum quote without understanding what's included. This leads to "extra work" charges that weren't anticipated, and you have no way to verify if you're being overcharged.</p>
        <p><strong>The fix:</strong> Get a detailed BOQ before signing any contractor agreement. A proper BOQ breaks down every material — cement bags, steel kg, bricks, sand cubic metres — with quantities and rates. This alone can save 10–20% on material costs.</p>

        <h2>3. Poor Foundation Work</h2>
        <p>Foundation mistakes are the most expensive to fix. Common issues include insufficient depth, incorrect soil testing assumptions, poor concrete mix, and inadequate curing.</p>
        <p><strong>Signs of poor foundation:</strong> Diagonal cracks in walls (especially above doors and windows), doors/windows that stick or won't close properly, visible settlement on one side of the building.</p>
        <p><strong>The fix:</strong> Always do a basic soil test before foundation design. Foundation depth and design must match soil bearing capacity. Don't let contractors reduce foundation depth to "save money."</p>

        <h2>4. Using Wrong Concrete Mix</h2>
        <p>IS 456 specifies minimum M20 grade concrete for reinforced structures (M25 in seismic zones). Many contractors use M15 or weaker mixes to cut costs.</p>
        <p><strong>How to check:</strong> Ask your engineer to specify concrete grades in writing. For site-mixed concrete, a simple water:cement ratio check can verify approximate mix. Better: use ready-mix concrete (RMC) which comes with a delivery slip showing the grade.</p>

        <h2>5. Ignoring Vastu and North Alignment</h2>
        <p>Many clients discover Vastu issues after construction begins, requiring expensive redesigns. Even if you don't personally follow Vastu, it affects resale value significantly in India.</p>
        <p><strong>The fix:</strong> Get a Vastu-reviewed floor plan before construction. This costs nothing extra when done at the planning stage. Vastu corrections during construction can cost ₹50,000–₹2,00,000.</p>

        <h2>6. Not Getting Municipal Approval Drawings</h2>
        <p>Building without approval is illegal in most Indian municipalities. More importantly, unapproved construction can be demolished, can't be sold easily, and can't get a home loan.</p>
        <p><strong>The fix:</strong> Always get approval drawings done before construction. The drawings need to comply with local building bylaws (setbacks, FAR, height restrictions). Civil At Hand provides municipal approval-ready drawings.</p>

        <h2>7. Poor Waterproofing</h2>
        <p>Waterproofing is the most skipped item on Indian construction sites. Contractors often apply a thin coat of cement paste and call it waterproofing. Real waterproofing requires proper membrane systems.</p>
        <p><strong>Areas that need proper waterproofing:</strong> Roof/terrace, bathrooms, kitchen, basement (if any), exterior walls in high-rainfall areas.</p>
        <p><strong>The fix:</strong> Budget at least ₹25–₹40 per square foot for proper waterproofing. Use Dr. Fixit, Fosroc, or Pidilite products with a proper warranty. Get the waterproofing contractor to give a written guarantee.</p>

        <h2>How Civil At Hand Helps</h2>
        <p>We provide professional house planning, structural design, and BOQ estimation that helps you avoid all these mistakes from the start. Our deliverables are designed to be handed directly to your contractor with clear specifications.</p>
        <p>Contact us for a free consultation on your project requirements.</p>
      `
    },

    /* ── POST 2 ── */
    {
      id:       "house-planning-plot-sizes",
      title:    "House Planning Guide for Common Plot Sizes in Punjab & Haryana",
      category: "design",
      date:     "November 2024",
      readTime: "6 min read",
      icon:     "📐",
      excerpt:  "Practical floor plan guidance for 20×40, 25×50, 30×40, 30×60, and 50×100 plots — the most common sizes in North India.",
      content:  `
        <p>North India has standard plot sizes that most municipalities work with. Here's a practical guide to making the most of each common plot size, with typical room configurations and what's realistically achievable.</p>

        <h2>20×40 Feet Plot (800 sq ft)</h2>
        <p><strong>After setbacks (typically front 6 ft, back 3 ft, sides 2 ft each):</strong> Buildable area ≈ 504 sq ft per floor.</p>
        <p><strong>Realistic layout (1 floor):</strong></p>
        <ul>
          <li>1 bedroom (10×12 ft)</li>
          <li>1 living + dining (10×14 ft)</li>
          <li>1 kitchen (8×8 ft)</li>
          <li>1 bathroom (5×6 ft)</li>
          <li>Small staircase if going G+1</li>
        </ul>
        <p><strong>G+1 option:</strong> Add 1 more bedroom and attached bathroom on upper floor. Total: 2BHK.</p>
        <p><strong>Tip:</strong> Don't try to fit 3 bedrooms in a 20×40 plot — the rooms become too small to be comfortable. Focus on quality over quantity of rooms.</p>

        <h2>25×50 Feet Plot (1,250 sq ft)</h2>
        <p><strong>Buildable area:</strong> ≈ 882 sq ft per floor (after setbacks).</p>
        <p><strong>Ground floor layout:</strong></p>
        <ul>
          <li>Living + dining (12×16 ft)</li>
          <li>Master bedroom with attached bathroom (12×12 ft + 5×8 ft)</li>
          <li>Kitchen with utility area (10×10 ft)</li>
          <li>Guest bathroom (5×5 ft)</li>
          <li>Staircase + passage</li>
        </ul>
        <p><strong>First floor:</strong> 2 more bedrooms + study room. Total: 3BHK in G+1.</p>

        <h2>30×40 Feet Plot (1,200 sq ft)</h2>
        <p>One of the most common plots in Punjab towns. Ideal for a comfortable 2BHK on ground floor.</p>
        <p><strong>Ground floor (after setbacks ≈ 690 sq ft):</strong></p>
        <ul>
          <li>Living room (14×12 ft)</li>
          <li>Master bedroom (12×12 ft) + attached bathroom (5×8 ft)</li>
          <li>Bedroom 2 (10×11 ft)</li>
          <li>Kitchen (9×10 ft)</li>
          <li>Common bathroom (5×6 ft)</li>
        </ul>
        <p><strong>With G+1:</strong> 4BHK + study is achievable while maintaining good room sizes.</p>

        <h2>30×60 Feet Plot (1,800 sq ft)</h2>
        <p>Comfortable size for a proper family home. Can accommodate ground + 2 upper floors (G+2).</p>
        <p><strong>Ground floor options:</strong> Parking (2 cars) + 2BHK living + servant room, OR full 3BHK living floor.</p>
        <p><strong>G+2 total:</strong> 5–6 bedrooms with good room sizes and ventilation.</p>
        <p><strong>Vastu tip for 30×60:</strong> Main entrance on north or east is considered optimal. Keep kitchen in southeast. Master bedroom on southwest upper floor.</p>

        <h2>50×100 Feet Plot (5,000 sq ft)</h2>
        <p>This is a kothi-sized plot. G+2 gives ≈ 6,000 sq ft of built-up area with setbacks.</p>
        <p><strong>Ground floor possibilities:</strong></p>
        <ul>
          <li>Double garage (2 cars)</li>
          <li>Large living + formal dining (20×22 ft)</li>
          <li>Large kitchen with pantry</li>
          <li>1–2 bedrooms (guest room + servant)</li>
          <li>Garden/lawn area (east or north preferred)</li>
        </ul>
        <p><strong>Upper floors:</strong> Master suite, 3–4 bedrooms, family lounge, study room, terraced garden.</p>

        <h2>Important: Municipal Setback Rules Vary</h2>
        <p>The setbacks mentioned above are typical, but every state and municipality has different rules. Always check your local building bylaws before designing. Civil At Hand creates floor plans that comply with your specific municipal requirements and can also prepare the approval drawings.</p>

        <p>Need a floor plan for your plot size? Contact us — we'll give you a free preliminary consultation and suggest the best layout for your requirements.</p>
      `
    },

    /* ── POST 3 ── */
    {
      id:       "tmt-steel-grade-guide",
      title:    "Fe415 vs Fe500 vs Fe500D: Which TMT Steel Grade Should You Use?",
      category: "materials",
      date:     "October 2024",
      readTime: "5 min read",
      icon:     "⚙️",
      excerpt:  "A practical, no-jargon explanation of TMT steel grades for Indian residential construction — and which grade is right for your project.",
      content:  `
        <p>When your contractor or hardware store asks "Fe415 or Fe500?" — most homeowners don't know the answer. This guide explains the practical difference and gives you a clear recommendation for common project types.</p>

        <h2>What Do These Numbers Mean?</h2>
        <p>The number in the grade name (415, 500) represents the <strong>yield strength in N/mm²</strong> — essentially how much force the steel can withstand before permanently deforming.</p>
        <ul>
          <li><strong>Fe415:</strong> Yields at 415 N/mm² — older standard, still used</li>
          <li><strong>Fe500:</strong> Yields at 500 N/mm² — current standard for most construction</li>
          <li><strong>Fe500D:</strong> Same strength as Fe500 but with better ductility (D = Ductile) — for earthquake-prone areas</li>
          <li><strong>Fe550D:</strong> Highest grade for critical structures — usually not needed for residential</li>
        </ul>

        <h2>IS Code Recommendations</h2>
        <ul>
          <li>Minimum grade for reinforced concrete: <strong>Fe415</strong></li>
          <li>Recommended for seismic zones III, IV, V: <strong>Fe500D</strong></li>
          <li>For IS 13920 ductile detailing: <strong>Fe500D or higher</strong></li>
        </ul>

        <h2>Simple Decision Guide</h2>
        <p><strong>Use Fe415 for:</strong> Single-storey residential in seismic zones I–II, non-structural elements, boundary walls.</p>
        <p><strong>Use Fe500 for:</strong> G+1 to G+2 buildings in most parts of India, main structural elements.</p>
        <p><strong>Use Fe500D for:</strong> Buildings in seismic zones III, IV, V (most of North India, Northeast), earthquake-resistant design.</p>

        <h2>Cost Comparison</h2>
        <p>For a typical 1,000 sq ft G+1 house needing approximately 8 tonnes of steel:</p>
        <ul>
          <li>Fe415 at ₹58/kg = ₹4,64,000</li>
          <li>Fe500 at ₹60/kg = ₹4,80,000</li>
          <li>Extra cost = ₹16,000 — but Fe500 allows 15–20% less steel quantity per IS 456</li>
        </ul>
        <p>In practice, the final cost difference is small, and Fe500 gives a stronger structure.</p>

        <h2>Top TMT Steel Brands in India</h2>
        <ol>
          <li>Tata Tiscon (Tata Steel) — most consistent quality</li>
          <li>SAIL TMT (Steel Authority of India)</li>
          <li>JSW Neo Steel</li>
          <li>RINL Vizag Steel</li>
          <li>Kamdhenu TMT</li>
        </ol>
        <p>Always ask for Mill Test Certificates (MTC) with your purchase, regardless of brand.</p>
        <p>Have questions about steel specifications for your project? Contact Civil At Hand for a free structural consultation.</p>
      `
    },

    /* ── POST 4 ── */
    {
      id:       "autocad-floor-plan-tutorial",
      title:    "How to Draw a House Floor Plan in AutoCAD: Beginner's Tutorial",
      category: "autocad",
      date:     "October 2024",
      readTime: "10 min read",
      icon:     "💻",
      excerpt:  "Step-by-step: from blank canvas to a professional 2BHK floor plan. Includes layer setup, wall drawing, doors, windows, and dimensions.",
      content:  `
        <p>This tutorial walks you through creating a 2BHK house floor plan in AutoCAD for a 30×40 foot plot. Follow along with AutoCAD 2019 or later.</p>

        <h2>Before You Start: Setup</h2>
        <p><strong>Units:</strong> Type UNITS → Decimal, Precision: 0.00, Length Type: Decimal. We work in feet.</p>
        <p><strong>Layer Setup (type LA):</strong></p>
        <ul>
          <li>WALLS — White, 0.30mm lineweight</li>
          <li>DOORS — Cyan, 0.20mm</li>
          <li>WINDOWS — Blue, 0.20mm</li>
          <li>DIMENSIONS — Green, 0.15mm</li>
          <li>TEXT — Yellow, 0.15mm</li>
        </ul>

        <h2>Step 1: Draw the Plot Boundary</h2>
        <ol>
          <li>Set current layer to WALLS</li>
          <li>Type REC, press Enter, click for first corner</li>
          <li>Type @30',40' and Enter — this is your 30×40 ft plot</li>
        </ol>

        <h2>Step 2: Draw External Walls</h2>
        <p>External wall thickness = 9 inches = 0.75 ft</p>
        <ol>
          <li>Draw outer perimeter: 24×25 ft rectangle (after setbacks)</li>
          <li>Offset inward by 0.75 ft (type O, enter 0.75, click inside)</li>
          <li>Use FILLET (F) with radius 0 to clean corners</li>
        </ol>

        <h2>Step 3: Internal Walls & Room Layout</h2>
        <p>Room sizes for this 2BHK:</p>
        <ul>
          <li>Master Bedroom: 12×11 ft</li>
          <li>Bedroom 2: 10×10 ft</li>
          <li>Living/Dining: 12×14 ft</li>
          <li>Kitchen: 8×10 ft</li>
          <li>Bathrooms: 5×8 ft and 5×6 ft</li>
        </ul>
        <p>Internal wall thickness: 0.38 ft (4.5 inches). Draw with LINE (L), offset, then TRIM (TR) intersections.</p>

        <h2>Step 4: Add Doors</h2>
        <p>Standard door sizes: Main entry 3.5 ft, bedrooms 3 ft, bathrooms 2.5 ft.</p>
        <ol>
          <li>Trim wall at door location</li>
          <li>Draw line from hinge at door width</li>
          <li>Draw quarter-circle arc (A command) showing swing</li>
          <li>Make it a BLOCK (B) for reuse</li>
        </ol>

        <h2>Step 5: Add Dimensions & Labels</h2>
        <ol>
          <li>Switch to DIMENSIONS layer, type DIMSTYLE to set text height 0.8</li>
          <li>Use DIMLIN for horizontal/vertical dimensions</li>
          <li>Switch to TEXT layer, use MTEXT (MT) for room labels</li>
          <li>Add North arrow and title block</li>
        </ol>

        <h2>Step 6: Print/Export</h2>
        <ol>
          <li>Type PLOT (Ctrl+P)</li>
          <li>Paper: A3, Scale: 1:100</li>
          <li>Center the plot, enable Plot with plot styles</li>
        </ol>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Not using object snaps (causes gaps in walls)</li>
          <li>Drawing on wrong layers</li>
          <li>Text height too small for the print scale</li>
          <li>Not saving regularly (Ctrl+S every 10 minutes)</li>
        </ul>

        <p>Need a professional floor plan quickly? Civil At Hand delivers from ₹2,500 with 3-day turnaround.</p>
      `
    },

    /* ── POST 5 ── */
    {
      id:       "civil-engineering-career-india",
      title:    "Civil Engineering Career in India 2024: Salaries, Specialisations & Growth",
      category: "career",
      date:     "September 2024",
      readTime: "6 min read",
      icon:     "🎓",
      excerpt:  "Honest guide to civil engineering career prospects in India — salaries by specialisation, best sectors to join, and how freelancing compares.",
      content:  `
        <p>Civil engineering remains one of India's most in-demand professions as infrastructure spending continues to grow. Here's an honest, updated look at career prospects, salaries, and pathways.</p>

        <h2>Entry-Level Salaries (0–3 years experience)</h2>
        <ul>
          <li>Government sector (PWD, NHAI, railways): ₹25,000–₹45,000/month</li>
          <li>Private construction companies: ₹18,000–₹35,000/month</li>
          <li>Consultancy firms: ₹20,000–₹40,000/month</li>
          <li>Real estate developers: ₹22,000–₹45,000/month</li>
          <li>Freelance CAD work: ₹15,000–₹60,000/month (variable)</li>
        </ul>

        <h2>Mid-Level (4–8 years experience)</h2>
        <ul>
          <li>Site Engineer: ₹40,000–₹80,000/month</li>
          <li>Structural Engineer: ₹50,000–₹1,00,000/month</li>
          <li>Project Manager: ₹70,000–₹1,50,000/month</li>
          <li>Freelance Consultant: ₹50,000–₹2,00,000/month</li>
        </ul>

        <h2>Best Specialisations for Growth</h2>
        <ol>
          <li><strong>Structural Engineering + AutoCAD/STAAD Pro</strong> — Always in demand for building design</li>
          <li><strong>Project Management (PMP certified)</strong> — High salaries in infrastructure projects</li>
          <li><strong>Geotechnical Engineering</strong> — Niche, high pay, needed for large infrastructure</li>
          <li><strong>BIM (Building Information Modelling)</strong> — Growing fast, good for international work</li>
          <li><strong>Environmental Engineering</strong> — Growing with green building regulations</li>
        </ol>

        <h2>Software Skills That Pay More</h2>
        <ul>
          <li>AutoCAD — Essential, minimum requirement</li>
          <li>STAAD Pro / ETABS — For structural engineers</li>
          <li>Revit (BIM) — Adds 30–50% to salary</li>
          <li>MS Project / Primavera P6 — For project managers</li>
          <li>SketchUp / 3ds Max — For design and presentation</li>
        </ul>

        <h2>Freelancing as a Civil Engineer</h2>
        <p>Freelancing is increasingly viable, especially for CAD drafting, structural design, and BOQ estimation. You can earn ₹500–₹5,000 per drawing/project depending on complexity.</p>
        <p>Platforms to find work: Upwork, Fiverr, Freelancer.com, LinkedIn, local builder networks.</p>
        <p><strong>Civil At Hand accepts freelance applications</strong> from qualified engineers and CAD professionals. Visit our Freelancer page to learn more about working with us.</p>

        <h2>Government Exams Worth Targeting</h2>
        <ul>
          <li>GATE Civil — Gateway to PSU jobs and M.Tech</li>
          <li>SSC JE — Junior Engineer in central government departments</li>
          <li>State PSC exams — State PWD, irrigation, rural development departments</li>
          <li>UPSC ESE (Engineering Services) — IES rank, top engineering government jobs</li>
        </ul>
      `
    },

    /* ── POST 6 ── */
    {
      id:       "minimum-column-size-g2",
      title:    "Minimum Column Size for G+2 Building in India: IS 456 Guidelines",
      category: "construction",
      date:     "September 2024",
      readTime: "4 min read",
      icon:     "🏛️",
      excerpt:  "What is the minimum column size for a 3-storey house in India? Clear IS 456-based guidance with practical examples.",
      content:  `
        <p>One of the most common questions from homeowners and junior engineers is about minimum column sizes for residential buildings. Here's clear, IS 456-compliant guidance.</p>

        <h2>IS 456:2000 Minimum Requirements</h2>
        <ul>
          <li>Minimum column dimension: <strong>230mm × 230mm</strong> (9 inches × 9 inches)</li>
          <li>Minimum reinforcement: <strong>0.8% of gross cross-sectional area</strong></li>
          <li>Maximum reinforcement: <strong>6% of gross cross-sectional area</strong></li>
          <li>Minimum bars: <strong>4 bars for rectangular columns, 6 bars for circular</strong></li>
          <li>Minimum bar diameter: <strong>12mm</strong></li>
          <li>Minimum cover: <strong>40mm</strong> (exposed to weather), 25mm (inside)</li>
        </ul>

        <h2>Practical Column Sizes by Building Type</h2>
        <p><strong>G+0 (Single storey, load-bearing):</strong> 230×230mm is acceptable for small spans up to 3.5m.</p>
        <p><strong>G+1 (2 floors):</strong></p>
        <ul>
          <li>Typical column: 230×300mm or 300×300mm</li>
          <li>Span ≤ 4m: 230×230mm may work with proper design</li>
          <li>Span 4–5m: 230×300mm minimum</li>
        </ul>
        <p><strong>G+2 (3 floors):</strong></p>
        <ul>
          <li>Ground floor columns: 300×300mm to 300×450mm</li>
          <li>Upper floor columns: can reduce to 230×300mm</li>
          <li>For spans over 5m: consult a structural engineer — column size and reinforcement must be calculated</li>
        </ul>

        <h2>Critical: These Are Minimums, Not Design Values</h2>
        <p>The sizes above are starting points, not final answers. Actual column size depends on:</p>
        <ul>
          <li>Total load (number of floors × floor area × dead + live load)</li>
          <li>Span between columns</li>
          <li>Concrete grade (M20, M25)</li>
          <li>Reinforcement arrangement</li>
          <li>Seismic zone of your location</li>
          <li>Soil bearing capacity</li>
        </ul>

        <h2>When to Get a Structural Engineer Involved</h2>
        <p>Always for G+1 and above. Many states in India legally require a structural design signed by a licensed structural engineer for buildings above one floor. This is also required for municipal approval in most cities.</p>

        <p>Civil At Hand provides IS 456-compliant structural designs starting from ₹5,000. Contact us with your floor plan and we'll give you a free preliminary assessment.</p>
      `
    }

    /* ─── TO ADD MORE POSTS: paste your new post object above this line ─── */

  ] /* end of posts array */

}; /* end of window.BLOG */

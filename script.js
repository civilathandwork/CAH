/* ============================================================
   CIVIL AT HAND — Main Script v2.0
   
   HOW TO EDIT:
   - Phone number: search 8708524647 and replace
   - To disable canvas: set HERO_CANVAS = false
   - Calculator logic: scroll to CALCULATORS section
   ============================================================ */

'use strict';

/* ===================================================
   CONFIG
   =================================================== */
const PHONE = '918708524647';
const HERO_CANVAS = true;

/* ===================================================
   PAGE LOADER
   =================================================== */
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  
  setTimeout(() => {
    loader.classList.add('gone');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    startReveal();
    animateCounters();
  }, 1700);
});

function startReveal() {
  // Hero elements animate immediately after loader
  document.querySelectorAll('.hero .reveal, .hero .reveal-right, .hero .reveal-left, .hero .reveal-scale').forEach((el, i) => {
    setTimeout(() => el.classList.add('up'), i * 80);
  });
}

/* ===================================================
   NAVBAR SCROLL EFFECT
   =================================================== */
const navInner = document.getElementById('navInner');
if (navInner) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navInner.classList.toggle('scrolled', window.scrollY > 80);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ===================================================
   MOBILE MENU
   =================================================== */
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
const navClose  = document.getElementById('navClose');

function openMobile() {
  navToggle?.classList.add('open');
  navMobile?.classList.add('open');
  navToggle?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobile() {
  navToggle?.classList.remove('open');
  navMobile?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

navToggle?.addEventListener('click', () => {
  const isOpen = navMobile?.classList.contains('open');
  isOpen ? closeMobile() : openMobile();
});

navClose?.addEventListener('click', closeMobile);

navMobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });

/* ===================================================
   ACTIVE NAV LINK
   =================================================== */
(function setActive() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ===================================================
   INTERSECTION OBSERVER — REVEAL ANIMATIONS
   =================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('up');
      revealObserver.unobserve(entry.target);
      
      // Trigger progress bars when parent is visible
      entry.target.querySelectorAll?.('.wcp-fill').forEach(bar => {
        setTimeout(() => bar.classList.add('animated'), 300);
      });
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

// Observe all reveal elements not in hero (hero handled by loader)
document.querySelectorAll('.reveal, .reveal-right, .reveal-left, .reveal-scale').forEach(el => {
  if (!el.closest('.hero')) revealObserver.observe(el);
});

// Also observe why-card for progress bars
document.querySelectorAll('.why-card').forEach(el => revealObserver.observe(el));

/* ===================================================
   COUNTER ANIMATION
   =================================================== */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const decimals = el.dataset.dec ? parseInt(el.dataset.dec) : 0;
    const dur = 1800;
    const start = performance.now();
    
    const update = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent = prefix + val.toFixed(decimals) + (t >= 1 ? suffix : '');
      if (t < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  });
}

/* ===================================================
   HERO CANVAS — ANIMATED CITY SKYLINE
   =================================================== */
(function initHeroCanvas() {
  if (!HERO_CANVAS) return;
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, af;
  let buildings = [], particles = [];
  
  const GOLD = 'rgba(200,168,75,';
  
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildScene();
  }
  
  function buildScene() {
    // Buildings: random city skyline
    buildings = [];
    const count = Math.ceil(W / 55) + 2;
    for (let i = 0; i < count; i++) {
      const x = ((i - 1) / (count - 2)) * W;
      const w = 30 + Math.random() * 50;
      const h = 60 + Math.random() * (H * 0.45);
      const floors = 3 + Math.floor(Math.random() * 12);
      buildings.push({ x, w, h, floors, phase: Math.random() * Math.PI * 2 });
    }
    
    // Floating particles
    particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.2 - Math.random() * 0.5,
      r: 0.5 + Math.random() * 1.5,
      life: Math.random(),
      alpha: 0.1 + Math.random() * 0.3,
    }));
  }
  
  function draw() {
    ctx.clearRect(0, 0, W, H);
    
    // Dark sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#060d18');
    sky.addColorStop(1, '#0b1828');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    
    // Blueprint grid
    ctx.strokeStyle = GOLD + '0.028)';
    ctx.lineWidth = 0.6;
    const gs = 55;
    for (let x = 0; x <= W; x += gs) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y = 0; y <= H; y += gs) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
    
    // Buildings
    const ground = H * 0.78;
    buildings.forEach(b => {
      const top = ground - b.h;
      
      // Glow
      const grd = ctx.createLinearGradient(b.x, top, b.x, ground);
      grd.addColorStop(0, GOLD + '0.04)');
      grd.addColorStop(1, GOLD + '0)');
      ctx.fillStyle = grd;
      ctx.fillRect(b.x, top, b.w, b.h);
      
      // Outline
      ctx.strokeStyle = GOLD + '0.07)';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(b.x + 0.4, top + 0.4, b.w - 0.8, b.h - 0.4);
      
      // Floor lines
      const fh = b.h / b.floors;
      ctx.strokeStyle = GOLD + '0.04)';
      ctx.lineWidth = 0.5;
      for (let f = 1; f < b.floors; f++) {
        const fy = top + f * fh;
        ctx.beginPath(); ctx.moveTo(b.x, fy); ctx.lineTo(b.x + b.w, fy); ctx.stroke();
      }
      
      // Windows
      const cols = Math.max(1, Math.floor(b.w / 13));
      const ww = 5, wh = 5;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < b.floors - 1; r++) {
          const lit = Math.sin(t * 0.4 + b.phase + c * 1.1 + r * 1.7) > 0.1;
          if (!lit) continue;
          const wx = b.x + 5 + c * 13;
          const wy = top + 6 + r * fh;
          const glow = ctx.createRadialGradient(wx+ww/2, wy+wh/2, 0, wx+ww/2, wy+wh/2, ww);
          glow.addColorStop(0, GOLD + '0.3)');
          glow.addColorStop(1, GOLD + '0.05)');
          ctx.fillStyle = glow;
          ctx.fillRect(wx, wy, ww, wh);
        }
      }
    });
    
    // Ground line
    ctx.strokeStyle = GOLD + '0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, ground); ctx.lineTo(W, ground); ctx.stroke();
    
    // Atmospheric glow at horizon
    const horizonGlow = ctx.createLinearGradient(0, ground - 60, 0, ground + 20);
    horizonGlow.addColorStop(0, GOLD + '0.05)');
    horizonGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = horizonGlow;
    ctx.fillRect(0, ground - 60, W, 80);
    
    // Particles
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life += 0.004;
      if (p.y < 0 || p.life > 1) { p.x = Math.random() * W; p.y = H; p.life = 0; }
      const fade = Math.sin(p.life * Math.PI);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = GOLD + (p.alpha * fade) + ')';
      ctx.fill();
    });
    
    t += 0.012;
    af = requestAnimationFrame(draw);
  }
  
  resize();
  window.addEventListener('resize', () => {
    clearTimeout(window._rt);
    window._rt = setTimeout(resize, 200);
  });
  draw();
  
  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(af); }
    else { draw(); }
  });
})();

/* ===================================================
   FAQ ACCORDION
   =================================================== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    
    // Close all
    document.querySelectorAll('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      i.querySelector('.faq-a').style.height = '0';
    });
    
    // Open clicked (if was closed)
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      // Measure natural height and animate
      answer.style.height = answer.scrollHeight + 'px';
    }
  });
});

/* ===================================================
   EXPAND / READ MORE (Student guidance)
   =================================================== */
document.querySelectorAll('.expand-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    
    if (isOpen) {
      content.style.height = '0';
      btn.classList.remove('open');
      btn.querySelector('.expand-label').textContent = 'Read More';
    } else {
      content.style.height = content.scrollHeight + 'px';
      btn.classList.add('open');
      btn.querySelector('.expand-label').textContent = 'Show Less';
    }
  });
});

/* ===================================================
   PORTFOLIO FILTER
   =================================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    document.querySelectorAll('.port-card').forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.style.opacity = show ? '1' : '0.3';
      card.style.pointerEvents = show ? 'all' : 'none';
    });
  });
});

/* ===================================================
   CONTACT FORM
   =================================================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const orig = btn.innerHTML;
    
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 0.8s linear infinite"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg> Sending…';
    btn.disabled = true;
    
    // In production: replace with Formspree, EmailJS, or Netlify Forms
    await new Promise(r => setTimeout(r, 1500));
    
    contactForm.reset();
    btn.innerHTML = orig;
    btn.disabled = false;
    
    const success = document.getElementById('formSuccess');
    if (success) {
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    } else {
      showToast('✓ Message sent! We\'ll reply within 24 hours.');
    }
  });
}

/* ===================================================
   TOAST
   =================================================== */
function showToast(msg, duration = 4000) {
  document.getElementById('toast')?.remove();
  const t = document.createElement('div');
  t.id = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.style.transform = 'translateY(0)'; t.style.opacity = '1'; });
  setTimeout(() => {
    t.style.transform = 'translateY(20px)'; t.style.opacity = '0';
    setTimeout(() => t.remove(), 400);
  }, duration);
}

/* ===================================================
   SMOOTH SCROLL — ANCHOR LINKS
   =================================================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = 90;
    window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior: 'smooth' });
  });
});

/* ===================================================
   SHARE BUTTONS
   =================================================== */
document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.share;
    const url  = encodeURIComponent(location.href);
    const text = encodeURIComponent('Check out Civil At Hand – Professional Civil Engineering Services in India!');
    
    if (type === 'wa')   window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    else if (type === 'fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    else if (type === 'copy') {
      navigator.clipboard.writeText(location.href).then(() => {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        btn.style.color = '#c8a84b';
        setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 2000);
      });
    }
  });
});

/* ===================================================
   CALCULATORS
   (All live-update calculator functions for tools.html)
   =================================================== */

/* Format Indian currency */
function fmtINR(n) {
  n = Math.round(n);
  if (n >= 10_000_000) return (n / 10_000_000).toFixed(1) + ' Cr';
  if (n >= 100_000)    return (n / 100_000).toFixed(1) + ' L';
  return n.toLocaleString('en-IN');
}

function g(id) { return parseFloat(document.getElementById(id)?.value) || 0; }
function el(id) { return document.getElementById(id); }

/* 1. Construction Cost Calculator */
const costForm = el('costCalcForm');
if (costForm) {
  costForm.addEventListener('input', () => {
    const area  = g('costArea');
    const type  = el('costType')?.value;
    const floor = parseInt(el('costFloor')?.value) || 1;
    const rates = { basic: 1700, standard: 2200, premium: 3000, luxury: 4200 };
    const rate  = rates[type] || 2200;
    const total = area * rate * floor;
    const res   = el('costResult');
    
    if (area > 0 && res) {
      res.innerHTML = `
        <div class="result-label">Estimated Range</div>
        <div class="result-value">₹${fmtINR(total * 0.92)} – ₹${fmtINR(total * 1.1)}</div>
        <div class="result-unit">For ${area} sq.ft × ${floor} floor(s) · ${type} finish @ ₹${rate}/sq.ft</div>
      `;
    } else if (res) {
      res.innerHTML = '<div class="result-label" style="opacity:0.4">Enter area above to calculate</div>';
    }
  });
}

/* 2. Material Estimator */
const matForm = el('matEstForm');
if (matForm) {
  matForm.addEventListener('input', () => {
    const area   = g('matArea');
    const floors = parseInt(el('matFloors')?.value) || 1;
    const res    = el('matResult');
    if (!area || !res) return;
    const total = area * floors;
    const row = (icon, lbl, val, unit) => `
      <div style="background:rgba(255,255,255,0.03);border-radius:10px;padding:12px 14px;border:1px solid rgba(255,255,255,0.05)">
        <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#6e7f95;margin-bottom:4px">${icon} ${lbl}</div>
        <div style="font-weight:700;color:#e0c068;font-size:1rem">${val} <span style="font-size:0.75rem;color:#6e7f95">${unit}</span></div>
      </div>`;
    res.innerHTML = `
      <div class="result-label">Approx. Materials — ${total} sq.ft</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px;text-align:left">
        ${row('🧱','Cement', Math.round((total/100)*42), 'bags')}
        ${row('🪨','Sand', Math.round((total/100)*125), 'cft')}
        ${row('🔩','Aggregate', Math.round((total/100)*155), 'cft')}
        ${row('⚙️','Steel (TMT)', Math.round((total/100)*520), 'kg')}
        ${row('🔶','Bricks', Math.round((total/100)*1050), 'nos')}
        ${row('💧','Water', Math.round((total/100)*900), 'litres')}
      </div>
      <div class="result-unit" style="margin-top:14px">Indicative quantities only — consult engineer for exact BOQ</div>
    `;
  });
}

/* 3. Area Calculator */
const areaForm = el('areaCalcForm');
if (areaForm) {
  const shapeSelect = el('areaShape');
  const areaFields  = el('areaFields');
  const areaResult  = el('areaCalcResult');
  
  const fieldConfig = {
    rectangle: [['aLen','Length (ft)'],['aWid','Width (ft)']],
    circle:    [['aRad','Radius (ft)']],
    triangle:  [['aTBase','Base (ft)'],['aTH','Height (ft)']],
    trapezoid: [['aTrA','Parallel Side A (ft)'],['aTrB','Parallel Side B (ft)'],['aTrH','Height (ft)']],
    lshape:    [['aLa','Total Length (ft)'],['aLb','Total Width (ft)'],['aLc','Cutout Length (ft)'],['aLd','Cutout Width (ft)']],
  };
  
  function buildFields(shape) {
    if (!areaFields) return;
    areaFields.innerHTML = (fieldConfig[shape] || []).map(([id, lbl]) =>
      `<div class="form-group"><label>${lbl}</label><input type="number" id="${id}" class="form-control" placeholder="0" min="0" step="0.01"></div>`
    ).join('');
    areaFields.querySelectorAll('input').forEach(i => i.addEventListener('input', calcArea));
  }
  
  function calcArea() {
    const shape = shapeSelect?.value;
    let sqft = 0;
    const v = id => parseFloat(el(id)?.value) || 0;
    
    if (shape === 'rectangle') sqft = v('aLen') * v('aWid');
    else if (shape === 'circle')    sqft = Math.PI * v('aRad') ** 2;
    else if (shape === 'triangle')  sqft = 0.5 * v('aTBase') * v('aTH');
    else if (shape === 'trapezoid') sqft = 0.5 * (v('aTrA') + v('aTrB')) * v('aTrH');
    else if (shape === 'lshape')    sqft = v('aLa') * v('aLb') - v('aLc') * v('aLd');
    
    if (sqft > 0 && areaResult) {
      areaResult.innerHTML = `
        <div class="result-label">Calculated Area</div>
        <div class="result-value">${sqft.toFixed(2)}</div>
        <div class="result-unit">sq.ft &nbsp;|&nbsp; ${(sqft * 0.0929).toFixed(2)} sq.m &nbsp;|&nbsp; ${(sqft * 0.1111).toFixed(3)} sq.yd &nbsp;|&nbsp; ${(sqft / 9).toFixed(3)} sq.gaj</div>
      `;
    }
  }
  
  if (shapeSelect) {
    shapeSelect.addEventListener('change', () => {
      buildFields(shapeSelect.value);
      if (areaResult) areaResult.innerHTML = '';
    });
    buildFields(shapeSelect.value);
  }
}

/* 4. Unit Converter */
function convertUnit() {
  const val  = parseFloat(el('ucVal')?.value) || 0;
  const type = el('ucType')?.value;
  const out  = el('ucOut');
  if (!out || !val) return;
  
  const factors = {
    sqft_sqm:   [val * 0.0929,  'sq.m'],
    sqm_sqft:   [val * 10.7639, 'sq.ft'],
    sqyd_sqft:  [val * 9,       'sq.ft'],
    sqft_sqyd:  [val / 9,       'sq.yd'],
    acre_sqft:  [val * 43560,   'sq.ft'],
    gaj_sqft:   [val * 9,       'sq.ft'],
    sqft_gaj:   [val / 9,       'Gaj'],
    ft_m:       [val * 0.3048,  'm'],
    m_ft:       [val * 3.28084, 'ft'],
    inch_cm:    [val * 2.54,    'cm'],
    cm_inch:    [val * 0.3937,  'inch'],
    cft_cum:    [val * 0.02832, 'm³'],
    cum_cft:    [val * 35.3147, 'cft'],
    kg_lb:      [val * 2.20462, 'lb'],
    lb_kg:      [val * 0.45359, 'kg'],
    ton_kg:     [val * 1000,    'kg'],
    kg_ton:     [val / 1000,    'MT'],
  };
  
  if (factors[type]) {
    const [res, unit] = factors[type];
    out.innerHTML = `
      <div class="result-label">Result</div>
      <div class="result-value">${res.toFixed(4)}</div>
      <div class="result-unit">${unit}</div>
    `;
  }
}

// Wire up unit converter on change
el('ucVal')?.addEventListener('input', convertUnit);
el('ucType')?.addEventListener('change', convertUnit);

/* 5. Concrete Mix Calculator */
function calcConcrete() {
  const vol    = g('concreteVol');
  const grade  = el('concreteGrade')?.value;
  const result = el('concreteResult');
  if (!vol || !result) return;
  
  const dry = vol * 1.54;
  const mixes = {
    M10: { c:1/10, s:3/10, a:6/10, name:'1:3:6',  wc:0.6 },
    M15: { c:1/7,  s:2/7,  a:4/7,  name:'1:2:4',  wc:0.55},
    M20: { c:1/5.5,s:1.5/5.5,a:3/5.5,name:'1:1.5:3',wc:0.5},
    M25: { c:1/4,  s:1/4,  a:2/4,  name:'1:1:2',  wc:0.45},
    M30: { c:1/3.5,s:1/3.5,a:1.5/3.5,name:'1:1:1.5',wc:0.4},
  };
  const m = mixes[grade];
  if (!m) return;
  
  const cement = ((dry * m.c) / 0.0347).toFixed(1);
  const sand   = (dry * m.s).toFixed(3);
  const agg    = (dry * m.a).toFixed(3);
  const water  = (parseFloat(cement) * 50 * m.wc).toFixed(0);
  
  const box = (label, val, unit) => `
    <div style="background:rgba(200,168,75,0.05);border:1px solid rgba(200,168,75,0.12);border-radius:10px;padding:14px;text-align:center">
      <div style="font-size:9px;color:#6e7f95;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">${label}</div>
      <div style="font-weight:700;color:#e0c068;font-size:1.2rem">${val}</div>
      <div style="font-size:10px;color:#6e7f95;margin-top:2px">${unit}</div>
    </div>`;
  
  result.innerHTML = `
    <div class="result-label">${grade} Mix — Ratio ${m.name}</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px">
      ${box('Cement', cement, 'bags (50kg)')}
      ${box('Sand', sand, 'm³')}
      ${box('Aggregate', agg, 'm³')}
      ${box('Water', water, 'litres')}
    </div>
    <div class="result-unit" style="margin-top:12px">Based on IS:10262. For ${vol} m³ dry volume.</div>
  `;
}

/* 6. Paint Estimator */
function calcPaint() {
  const area  = g('paintArea');
  const coats = parseInt(el('paintCoats')?.value) || 2;
  const ptype = el('paintType')?.value;
  const result = el('paintResult');
  if (!area || !result) return;
  
  const coverage = { interior: 200, exterior: 150, primer: 100, enamel: 120 };
  const cov = coverage[ptype] || 200;
  const litres = (area * coats) / cov;
  const cans4   = Math.ceil(litres / 4);
  const cans20  = Math.ceil(litres / 20);
  
  result.innerHTML = `
    <div class="result-label">Paint Required</div>
    <div class="result-value">${litres.toFixed(2)} L</div>
    <div class="result-unit">
      ≈ <strong style="color:var(--gold-bright)">${cans4}</strong> × 4L cans &nbsp;|&nbsp;
      <strong style="color:var(--gold-bright)">${cans20}</strong> × 20L drums
    </div>
    <div style="margin-top:8px;font-size:0.75rem;color:#6e7f95">Coverage: ${cov} sq.ft/L per coat</div>
  `;
}

/* 7. Tile Calculator */
function calcTile() {
  const roomLen  = g('tileLen');
  const roomWid  = g('tileWid');
  const tileSize = parseFloat(el('tileSize')?.value) || 600;
  const waste    = parseFloat(el('tileWaste')?.value) || 5;
  const result   = el('tileResult');
  if (!roomLen || !roomWid || !result) return;
  
  const roomSqft = roomLen * roomWid;
  const tileSqft = (tileSize / 304.8) ** 2;
  const tilesNeeded = Math.ceil((roomSqft / tileSqft) * (1 + waste / 100));
  const boxes = Math.ceil(tilesNeeded / (tileSize === 600 ? 4 : tileSize === 800 ? 2 : tileSize === 300 ? 9 : 4));
  
  result.innerHTML = `
    <div class="result-label">Tiles Required</div>
    <div class="result-value">${tilesNeeded}</div>
    <div class="result-unit">tiles &nbsp;|&nbsp; ≈ ${boxes} boxes &nbsp;|&nbsp; Room area: ${roomSqft.toFixed(1)} sq.ft</div>
    <div style="margin-top:8px;font-size:0.75rem;color:#6e7f95">Includes ${waste}% wastage for cuts</div>
  `;
}

/* 8. Steel Weight Calculator */
function calcSteel() {
  const dia = g('steelDia');
  const len = g('steelLen');
  const qty = g('steelQty') || 1;
  const result = el('steelResult');
  if (!dia || !len || !result) return;
  
  // IS formula: D²/162 kg/m
  const weightPerMetre = (dia * dia) / 162;
  const totalWeight = weightPerMetre * len * qty;
  
  result.innerHTML = `
    <div class="result-label">TMT Steel Weight</div>
    <div class="result-value">${totalWeight.toFixed(2)} kg</div>
    <div class="result-unit">${weightPerMetre.toFixed(3)} kg/m per bar &nbsp;|&nbsp; ${qty} bar(s) × ${len}m</div>
    <div style="margin-top:8px;font-size:0.75rem;color:#6e7f95">Formula: D²÷162 (IS standard)</div>
  `;
}

/* ===================================================
   INJECT SPIN KEYFRAME
   =================================================== */
const ks = document.createElement('style');
ks.textContent = `
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes float-in { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
`;
document.head.appendChild(ks);

/* ===================================================
   PROGRESS BAR CSS VAR TRICK
   (Set --w on each fill from its target width)
   =================================================== */
document.querySelectorAll('.wcp-fill').forEach(el => {
  const w = el.getAttribute('data-w') || el.style.width;
  el.style.setProperty('--w', w);
  el.style.width = '0';
});

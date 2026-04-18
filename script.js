/* ============================================================
   CIVIL AT HAND – Premium Edition
   Main JavaScript

   HOW TO EDIT:
   - To change phone/WhatsApp: search for "8708524647"
   - To disable canvas animation: set CANVAS_ENABLED = false
   ============================================================ */

'use strict';

/* ===================================================
   PAGE LOADER
   =================================================== */
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    // Start entrance animations after loader
    document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => {
      el.style.transition = el.style.transition || '';
    });
    startEntryAnimations();
  }, 1600);
});

function startEntryAnimations() {
  // Trigger hero elements immediately
  document.querySelectorAll('.hero .reveal-up, .hero .reveal-right').forEach(el => {
    el.classList.add('visible');
  });
  // Start counter animation
  animateCounters();
}

/* ===================================================
   NAVBAR – SCROLL EFFECT
   =================================================== */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ===================================================
   MOBILE MENU TOGGLE
   =================================================== */
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    navMobile.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !navMobile.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  navToggle?.classList.remove('open');
  navMobile?.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ===================================================
   ACTIVE NAV LINK
   =================================================== */
(function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ===================================================
   SCROLL REVEAL – INTERSECTION OBSERVER
   =================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);

      // Trigger progress bar animation when why-card is visible
      if (entry.target.classList.contains('why-card')) {
        setTimeout(() => {
          entry.target.querySelectorAll('.wcp-fill').forEach(bar => {
            bar.classList.add('animated');
          });
        }, 400);
      }
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -48px 0px'
});

document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => {
  // Don't observe hero elements — they're handled after loader
  if (!el.closest('.hero')) {
    revealObserver.observe(el);
  }
});

/* ===================================================
   COUNTER ANIMATION
   (Animates numbers in hero stats)
   =================================================== */
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '+';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = prefix + current + (progress >= 1 ? suffix : '');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

/* ===================================================
   HERO CANVAS – ANIMATED 3D BUILDING/GRID
   (A WebGL-lite CSS canvas animation with building geometry)
   =================================================== */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, animFrame;
  let particles = [];
  let buildings = [];
  let t = 0;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildScene();
  }

  function buildScene() {
    // Create building silhouettes
    buildings = [];
    const count = Math.floor(W / 60);
    for (let i = 0; i < count; i++) {
      const x = (i / count) * W;
      const w = 35 + Math.random() * 40;
      const h = 80 + Math.random() * 220;
      buildings.push({ x, w, h, floors: Math.floor(3 + Math.random() * 8) });
    }

    // Create floating particles
    particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.1,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random()
      });
    }
  }

  function drawGrid() {
    const size = 50;
    ctx.strokeStyle = 'rgba(201,168,76,0.04)';
    ctx.lineWidth = 0.7;

    for (let x = 0; x <= W; x += size) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y <= H; y += size) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
  }

  function drawBuildings() {
    buildings.forEach(b => {
      const ground = H * 0.75;
      const top = ground - b.h;

      // Building shadow/glow
      const grad = ctx.createLinearGradient(b.x, top, b.x, ground);
      grad.addColorStop(0, 'rgba(201,168,76,0.03)');
      grad.addColorStop(1, 'rgba(201,168,76,0.00)');

      ctx.fillStyle = grad;
      ctx.fillRect(b.x, top, b.w, b.h);

      // Building outline
      ctx.strokeStyle = 'rgba(201,168,76,0.06)';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(b.x, top, b.w, b.h);

      // Floor lines
      const floorH = b.h / b.floors;
      ctx.strokeStyle = 'rgba(201,168,76,0.04)';
      ctx.lineWidth = 0.5;
      for (let f = 1; f < b.floors; f++) {
        const fy = top + f * floorH;
        ctx.beginPath();
        ctx.moveTo(b.x, fy);
        ctx.lineTo(b.x + b.w, fy);
        ctx.stroke();
      }

      // Windows — animated blinking
      const wW = 5, wH = 6;
      const cols = Math.floor(b.w / 12);
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < b.floors - 1; r++) {
          const wx = b.x + 5 + c * 12;
          const wy = top + 8 + r * floorH;
          const lit = Math.sin(t * 0.5 + c * 0.7 + r * 1.3 + b.x * 0.01) > 0;
          if (lit) {
            ctx.fillStyle = 'rgba(201,168,76,0.18)';
            ctx.fillRect(wx, wy, wW, wH);
          }
        }
      }
    });

    // Ground line
    ctx.strokeStyle = 'rgba(201,168,76,0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, H * 0.75);
    ctx.lineTo(W, H * 0.75);
    ctx.stroke();
  }

  function drawParticles() {
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life += 0.003;

      if (p.y < 0 || p.life > 1) {
        p.x = Math.random() * W;
        p.y = H;
        p.life = 0;
      }

      const fade = Math.sin(p.life * Math.PI);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${p.opacity * fade * 0.5})`;
      ctx.fill();
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#08111e');
    bgGrad.addColorStop(1, '#0d1f38');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    drawGrid();
    drawBuildings();
    drawParticles();

    t += 0.015;
    animFrame = requestAnimationFrame(draw);
  }

  // Init
  resize();
  window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(resize, 200);
  });

  draw();
})();

/* ===================================================
   FAQ ACCORDION
   =================================================== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    // Open clicked
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ===================================================
   CONTACT FORM HANDLER
   (Works for any form with id="contactForm")
   =================================================== */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.innerHTML;

    btn.innerHTML = '<span style="display:inline-block;animation:spin 0.8s linear infinite">⚙</span> Sending…';
    btn.disabled = true;

    // Simulate send (replace with your actual form submission logic)
    setTimeout(() => {
      contactForm.reset();
      btn.innerHTML = original;
      btn.disabled = false;

      if (formSuccess) {
        formSuccess.style.display = 'block';
        setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
      } else {
        showToast('✓ Message sent! We\'ll reply within 24 hours.');
      }
    }, 1400);
  });
}

/* ===================================================
   TOAST NOTIFICATION
   =================================================== */
function showToast(message) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position:fixed;bottom:100px;right:28px;
    background:rgba(13,31,56,0.97);
    color:#f0ece3;
    border:1px solid rgba(201,168,76,0.3);
    padding:14px 20px;border-radius:8px;
    font-size:0.875rem;z-index:9998;
    box-shadow:0 8px 30px rgba(0,0,0,0.4);
    transform:translateY(20px);opacity:0;
    transition:all 0.4s ease;
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ===================================================
   SHARE BUTTONS
   =================================================== */
document.querySelectorAll('.share-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.share;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out Civil At Hand – Professional Civil Engineering Services in India!');

    if (type === 'wa') {
      window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    } else if (type === 'fb') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    } else if (type === 'copy') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        btn.style.color = '#c9a84c';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.color = '';
        }, 2000);
      });
    }
  });
});

/* ===================================================
   SMOOTH SCROLL – ANCHOR LINKS
   =================================================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===================================================
   TOOLS PAGE – CALCULATORS
   (All calculator functions used in tools.html)
   =================================================== */

/* Helper: format Indian number */
function formatNum(n) {
  const num = parseInt(n);
  if (num >= 10000000) return (num / 10000000).toFixed(1) + ' Cr';
  if (num >= 100000) return (num / 100000).toFixed(1) + ' L';
  return num.toLocaleString('en-IN');
}

/* 1. Construction Cost Calculator */
const costForm = document.getElementById('costCalcForm');
if (costForm) {
  costForm.addEventListener('input', () => {
    const area = parseFloat(document.getElementById('costArea')?.value) || 0;
    const type = document.getElementById('costType')?.value;
    const floor = parseInt(document.getElementById('costFloor')?.value) || 1;
    const rates = { basic: 1700, standard: 2100, premium: 2800, luxury: 3800 };
    const rate = rates[type] || 2100;
    const total = area * rate * floor;
    const resultEl = document.getElementById('costResult');
    if (area > 0 && resultEl) {
      const low = (total * 0.9).toFixed(0);
      const high = (total * 1.1).toFixed(0);
      resultEl.innerHTML = `
        <div class="result-label">Estimated Range</div>
        <div class="result-value">₹${formatNum(low)} – ₹${formatNum(high)}</div>
        <div class="result-unit">For ${area} sq.ft × ${floor} floor(s) · ${type} finish</div>
      `;
    }
  });
}

/* 2. Material Estimator */
const matForm = document.getElementById('matEstForm');
if (matForm) {
  matForm.addEventListener('input', () => {
    const area = parseFloat(document.getElementById('matArea')?.value) || 0;
    const floors = parseInt(document.getElementById('matFloors')?.value) || 1;
    const resultEl = document.getElementById('matResult');
    if (area <= 0 || !resultEl) return;
    const total = area * floors;
    const row = (icon, lbl, val) => `
      <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:10px 12px;border:1px solid rgba(255,255,255,0.05);">
        <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#7a8fa8;margin-bottom:4px;">${icon} ${lbl}</div>
        <div style="font-weight:600;color:#e8c97a;font-size:0.95rem;">${val}</div>
      </div>`;
    resultEl.innerHTML = `
      <div class="result-label">Approx. Material Quantities</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;text-align:left;">
        ${row('🧱','Cement',Math.round((total/100)*40)+' bags')}
        ${row('🪨','Sand',Math.round((total/100)*120)+' cft')}
        ${row('🔩','Aggregate',Math.round((total/100)*150)+' cft')}
        ${row('⚙️','Steel (TMT)',Math.round((total/100)*500)+' kg')}
        ${row('🔶','Bricks',Math.round((total/100)*1000)+' nos')}
      </div>
      <div class="result-unit" style="margin-top:12px;">Built-up area: ${total} sq.ft</div>
    `;
  });
}

/* 3. Area Calculator */
const areaCalcForm = document.getElementById('areaCalcForm');
if (areaCalcForm) {
  const areaShape = document.getElementById('areaShape');
  const areaFields = document.getElementById('areaFields');
  const areaResult = document.getElementById('areaCalcResult');

  function buildAreaFields(shape) {
    const configs = {
      rectangle: [['aLen','Length (ft)'],['aWid','Width (ft)']],
      circle:    [['aRad','Radius (ft)']],
      triangle:  [['aTBase','Base (ft)'],['aTH','Height (ft)']],
      trapezoid: [['aTrA','Side A (ft)'],['aTrB','Side B (ft)'],['aTrH','Height (ft)']],
    };
    if (!areaFields) return;
    areaFields.innerHTML = (configs[shape] || []).map(([id, lbl]) =>
      `<div class="form-group"><label>${lbl}</label><input type="number" id="${id}" class="form-control" placeholder="0" min="0"></div>`
    ).join('');
    areaFields.querySelectorAll('input').forEach(i => i.addEventListener('input', calcArea));
  }

  function calcArea() {
    const shape = areaShape?.value;
    let sqft = 0;
    const g = id => parseFloat(document.getElementById(id)?.value) || 0;
    if (shape === 'rectangle') sqft = g('aLen') * g('aWid');
    else if (shape === 'circle') sqft = Math.PI * g('aRad') ** 2;
    else if (shape === 'triangle') sqft = 0.5 * g('aTBase') * g('aTH');
    else if (shape === 'trapezoid') sqft = 0.5 * (g('aTrA') + g('aTrB')) * g('aTrH');
    if (sqft > 0 && areaResult) {
      areaResult.innerHTML = `
        <div class="result-label">Calculated Area</div>
        <div class="result-value">${sqft.toFixed(2)}</div>
        <div class="result-unit">sq.ft &nbsp;|&nbsp; ${(sqft*0.0929).toFixed(2)} sq.m &nbsp;|&nbsp; ${(sqft*0.1111).toFixed(3)} sq.yd</div>
      `;
    }
  }

  if (areaShape) {
    areaShape.addEventListener('change', () => {
      buildAreaFields(areaShape.value);
      if (areaResult) areaResult.innerHTML = '';
    });
    buildAreaFields(areaShape.value);
  }
}

/* 4. Unit Converter */
function convertUnit() {
  const val = parseFloat(document.getElementById('ucVal')?.value) || 0;
  const type = document.getElementById('ucType')?.value;
  const out = document.getElementById('ucOut');
  if (!out) return;
  const factors = {
    sqft_sqm:[val*0.0929,'sq.m'], sqm_sqft:[val*10.764,'sq.ft'],
    sqyd_sqft:[val*9,'sq.ft'], sqft_sqyd:[val/9,'sq.yd'],
    acre_sqft:[val*43560,'sq.ft'], gaj_sqft:[val*9,'sq.ft'],
    ft_m:[val*0.3048,'m'], m_ft:[val*3.281,'ft'],
    inch_cm:[val*2.54,'cm'], cm_inch:[val*0.3937,'inch'],
    cft_cum:[val*0.02832,'m³'], cum_cft:[val*35.31,'cft'],
  };
  if (val > 0 && factors[type]) {
    const [res, unit] = factors[type];
    out.innerHTML = `
      <span style="font-family:'Playfair Display',serif;font-size:1.9rem;font-weight:700;color:var(--gold);">${res.toFixed(4)}</span>
      <span style="font-size:0.9rem;color:var(--text-muted);"> ${unit}</span>
    `;
  }
}

/* 5. Concrete Mix Calculator */
function calcConcrete() {
  const vol = parseFloat(document.getElementById('concreteVol')?.value) || 0;
  const grade = document.getElementById('concreteGrade')?.value;
  const result = document.getElementById('concreteResult');
  if (!vol || !result) return;
  const dry = vol * 1.54;
  const mixes = {
    M15:{c:1/7,s:2/7,a:4/7,name:'1:2:4'},
    M20:{c:1/5.5,s:1.5/5.5,a:3/5.5,name:'1:1.5:3'},
    M25:{c:1/4,s:1/4,a:2/4,name:'1:1:2'}
  };
  const m = mixes[grade];
  const cement = ((dry*m.c)/0.0347).toFixed(1);
  const sand   = (dry*m.s).toFixed(2);
  const agg    = (dry*m.a).toFixed(2);
  result.innerHTML = `
    <div class="result-label">${grade} Mix Ratio: ${m.name}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:12px;">
      ${['Cement','Sand','Aggregate'].map((l, i) => `
        <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:12px;text-align:center;border:1px solid rgba(255,255,255,0.05);">
          <div style="font-size:9px;color:#7a8fa8;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${l}</div>
          <div style="font-weight:700;color:var(--gold);font-size:1.1rem;">${[cement,sand,agg][i]}</div>
          <div style="font-size:10px;color:#7a8fa8;">${['bags','m³','m³'][i]}</div>
        </div>`).join('')}
    </div>
  `;
}

/* 6. Paint Estimator */
function calcPaint() {
  const area   = parseFloat(document.getElementById('paintArea')?.value) || 0;
  const coats  = parseInt(document.getElementById('paintCoats')?.value) || 2;
  const ptype  = document.getElementById('paintType')?.value;
  const result = document.getElementById('paintResult');
  if (!area || !result) return;
  const cov = {interior:200,exterior:150,primer:100}[ptype] || 200;
  const litres = ((area * coats) / cov).toFixed(1);
  result.innerHTML = `
    <div class="result-label">Paint Required</div>
    <div class="result-value">${litres} L</div>
    <div style="margin-top:8px;font-size:0.8rem;color:var(--text-muted);">
      ≈ <strong style="color:var(--gold-light);">${Math.ceil(litres/4)}</strong> × 4L cans
      &nbsp;|&nbsp;
      <strong style="color:var(--gold-light);">${Math.ceil(litres/20)}</strong> × 20L drums
    </div>
  `;
}

/* ===================================================
   CSS SPIN KEYFRAME (injected for loader icon)
   =================================================== */
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(spinStyle);

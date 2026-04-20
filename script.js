/* ════════════════════════════════════════════════════
   CIVIL AT HAND — Main Script v5.0
   ════════════════════════════════════════════════════
   EDIT:  Phone number → search "918708524647"
          Disable canvas → HERO_CANVAS = false
   ════════════════════════════════════════════════════ */
'use strict';

const PHONE = '918708524647';
const HERO_CANVAS = true;

/* ── UTILITIES ─────────────────────────────────────── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);
const raf = fn => requestAnimationFrame(fn);

/* ════════════════════════════════════════════════════
   PAGE LOADER (home only — auto-dismissed on load)
   ════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  const loader = $('cah-loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('done');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    startHeroReveal();
    animateCounters();
    animateBars();
  }, 750);
});

function startHeroReveal() {
  $$('.hero .reveal, .hero .rev-l, .hero .rev-r, .hero .rev-s').forEach((el, i) => {
    setTimeout(() => el.classList.add('up'), i * 75);
  });
}

/* ════════════════════════════════════════════════════
   NAVIGATION — FIXED, WORKS ON ALL SCREEN SIZES
   ════════════════════════════════════════════════════ */
const navPill   = document.querySelector('.nav-pill');
const navBurger = document.querySelector('.nav-burger');
const navDrawer = document.querySelector('.nav-drawer');
const drawerClose = document.querySelector('.drawer-close');

/* Scroll → solid nav pill */
if (navPill) {
  window.addEventListener('scroll', () => {
    navPill.classList.toggle('solid', window.scrollY > 60);
  }, { passive: true });
}

/* Open/close drawer */
function openDrawer() {
  if (!navDrawer || !navBurger) return;
  navBurger.classList.add('open');
  navDrawer.classList.add('open');
  navBurger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  /* Stagger animate drawer links */
  navDrawer.querySelectorAll('a').forEach((a, i) => {
    a.style.transitionDelay = (i * 0.055) + 's';
  });
}

function closeDrawer() {
  if (!navDrawer || !navBurger) return;
  navBurger.classList.remove('open');
  navDrawer.classList.remove('open');
  navBurger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  navDrawer.querySelectorAll('a').forEach(a => { a.style.transitionDelay = '0s'; });
}

navBurger?.addEventListener('click', () => {
  navDrawer?.classList.contains('open') ? closeDrawer() : openDrawer();
});
drawerClose?.addEventListener('click', closeDrawer);
navDrawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

/* Auto-mark active link */
(function markActive() {
  const page = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (!page && href === 'index.html')) a.classList.add('active');
  });
})();

/* ════════════════════════════════════════════════════
   INTERSECTION OBSERVER — SCROLL REVEALS
   ════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('up');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

$$('.reveal,.rev-l,.rev-r,.rev-s').forEach(el => {
  if (!el.closest('.hero')) revealObs.observe(el);
});

/* Progress bars — animate when visible */
function animateBars() {
  $$('.wcb-fill,.rs-fill').forEach(bar => {
    const w = bar.getAttribute('data-w') || bar.style.width;
    bar.style.width = '0';
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { bar.style.width = w; obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(bar);
  });
}
animateBars();

/* ════════════════════════════════════════════════════
   COUNTER ANIMATION
   ════════════════════════════════════════════════════ */
function animateCounters() {
  $$('[data-count]').forEach(el => {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix || '';
    const decimals = el.dataset.dec ? +el.dataset.dec : 0;
    const dur      = 1600;
    const t0       = performance.now();
    (function tick(now) {
      const p   = Math.min((now - t0) / dur, 1);
      const val = target * (1 - Math.pow(1 - p, 3));
      el.textContent = val.toFixed(decimals) + (p >= 1 ? suffix : '');
      if (p < 1) raf(tick);
    })(t0);
  });
}

/* ════════════════════════════════════════════════════
   HERO CANVAS — ANIMATED CITY / BLUEPRINT SKYLINE
   ════════════════════════════════════════════════════ */
(function initCanvas() {
  if (!HERO_CANVAS) return;
  const canvas = $('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, af, buildings = [], particles = [];
  const G = 'rgba(200,168,75,';

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    initScene();
  }

  function initScene() {
    const n = Math.ceil(W / 52) + 2;
    buildings = Array.from({ length: n }, (_, i) => ({
      x: ((i - 1) / (n - 2)) * W,
      w: 28 + Math.random() * 52,
      h: 55 + Math.random() * H * 0.44,
      floors: 3 + Math.floor(Math.random() * 12),
      phase: Math.random() * Math.PI * 2
    }));
    particles = Array.from({ length: 44 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .25, vy: -.18 - Math.random() * .4,
      r: .5 + Math.random() * 1.2, life: Math.random(),
      alpha: .08 + Math.random() * .22
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* Sky gradient */
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#050c17');
    sky.addColorStop(1, '#08141f');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    /* Blueprint grid */
    ctx.strokeStyle = G + '.022)';
    ctx.lineWidth = .5;
    for (let x = 0; x <= W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    const ground = H * .77;
    buildings.forEach(b => {
      const top = ground - b.h;
      /* Building fill */
      const grd = ctx.createLinearGradient(b.x, top, b.x, ground);
      grd.addColorStop(0, G + '.04)'); grd.addColorStop(1, G + '0)');
      ctx.fillStyle = grd; ctx.fillRect(b.x, top, b.w, b.h);
      ctx.strokeStyle = G + '.065)'; ctx.lineWidth = .8;
      ctx.strokeRect(b.x + .4, top + .4, b.w - .8, b.h - .4);
      /* Floor lines */
      const fh = b.h / b.floors;
      ctx.strokeStyle = G + '.03)'; ctx.lineWidth = .4;
      for (let f = 1; f < b.floors; f++) {
        const fy = top + f * fh;
        ctx.beginPath(); ctx.moveTo(b.x, fy); ctx.lineTo(b.x + b.w, fy); ctx.stroke();
      }
      /* Windows */
      const cols = Math.max(1, Math.floor(b.w / 13));
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < b.floors - 1; r++) {
          if (Math.sin(t * .38 + b.phase + c * 1.1 + r * 1.7) <= .1) continue;
          const wx = b.x + 5 + c * 13, wy = top + 6 + r * fh;
          const wg = ctx.createRadialGradient(wx + 2.5, wy + 2.5, 0, wx + 2.5, wy + 2.5, 5);
          wg.addColorStop(0, G + '.26)'); wg.addColorStop(1, G + '.04)');
          ctx.fillStyle = wg; ctx.fillRect(wx, wy, 5, 5);
        }
      }
    });

    /* Ground + horizon glow */
    ctx.strokeStyle = G + '.13)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, ground); ctx.lineTo(W, ground); ctx.stroke();
    const hg = ctx.createLinearGradient(0, ground - 50, 0, ground + 20);
    hg.addColorStop(0, G + '.055)'); hg.addColorStop(1, 'transparent');
    ctx.fillStyle = hg; ctx.fillRect(0, ground - 50, W, 70);

    /* Particles */
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life += .004;
      if (p.y < 0 || p.life > 1) { p.x = Math.random() * W; p.y = H; p.life = 0; }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = G + (p.alpha * Math.sin(p.life * Math.PI)) + ')'; ctx.fill();
    });

    t += .01;
    af = raf(draw);
  }

  resize();
  let rto;
  window.addEventListener('resize', () => {
    clearTimeout(rto); rto = setTimeout(resize, 220);
  }, { passive: true });
  draw();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(af);
    else draw();
  });
})();

/* ════════════════════════════════════════════════════
   FAQ ACCORDION
   ════════════════════════════════════════════════════ */
$$('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    /* Close all */
    $$('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
      i.querySelector('.faq-a').style.height = '0';
    });
    /* Open this */
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      answer.style.height = answer.scrollHeight + 'px';
    }
  });
});

/* ════════════════════════════════════════════════════
   EXPAND / COLLAPSE (Student guidance)
   ════════════════════════════════════════════════════ */
$$('.expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrap  = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    if (isOpen) {
      wrap.style.height = '0';
      btn.classList.remove('open');
      const lbl = btn.querySelector('.expand-lbl');
      if (lbl) lbl.textContent = 'Read More';
    } else {
      wrap.style.height = wrap.scrollHeight + 'px';
      btn.classList.add('open');
      const lbl = btn.querySelector('.expand-lbl');
      if (lbl) lbl.textContent = 'Show Less';
    }
  });
});

/* ════════════════════════════════════════════════════
   PORTFOLIO FILTER
   ════════════════════════════════════════════════════ */
$$('.pf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.pf-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.filter;
    $$('.pf-card').forEach(card => {
      const match = f === 'all' || card.dataset.cat === f;
      card.style.opacity       = match ? '1' : '.25';
      card.style.transform     = match ? '' : 'scale(.97)';
      card.style.pointerEvents = match ? 'all' : 'none';
      card.style.transition    = 'all .4s ease';
    });
  });
});

/* ════════════════════════════════════════════════════
   CONTACT FORM — demo (replace with Formspree/EmailJS)
   ════════════════════════════════════════════════════ */
const contactForm = $('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = contactForm.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin .8s linear infinite"><path d="M21 12a9 9 0 11-6.22-8.56"/></svg> Sending…';
    btn.disabled = true;
    await new Promise(r => setTimeout(r, 1500));
    contactForm.reset();
    btn.innerHTML = orig;
    btn.disabled  = false;
    const ok = $('formOk');
    if (ok) { ok.classList.add('show'); setTimeout(() => ok.classList.remove('show'), 6000); }
    else showToast('✓ Message sent! We\'ll reply within 24 hours.');
  });
}

/* ════════════════════════════════════════════════════
   TOAST
   ════════════════════════════════════════════════════ */
function showToast(msg, ms = 4000) {
  $('toast')?.remove();
  const el = document.createElement('div');
  el.id = 'toast'; el.textContent = msg;
  document.body.appendChild(el);
  raf(() => { el.style.transform = 'translateY(0)'; el.style.opacity = '1'; });
  setTimeout(() => {
    el.style.transform = 'translateY(20px)'; el.style.opacity = '0';
    setTimeout(() => el.remove(), 400);
  }, ms);
}

/* ════════════════════════════════════════════════════
   SMOOTH ANCHOR SCROLL
   ════════════════════════════════════════════════════ */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id  = a.getAttribute('href').slice(1);
    const tgt = $(id);
    if (!tgt) return;
    e.preventDefault();
    window.scrollTo({ top: tgt.getBoundingClientRect().top + scrollY - 88, behavior: 'smooth' });
  });
});

/* ════════════════════════════════════════════════════
   SHARE BUTTONS
   ════════════════════════════════════════════════════ */
$$('[data-share]').forEach(btn => {
  btn.addEventListener('click', () => {
    const t    = btn.dataset.share;
    const url  = encodeURIComponent(location.href);
    const text = encodeURIComponent('Check out Civil At Hand – Premium Civil Engineering Services India!');
    if      (t === 'wa')   window.open('https://wa.me/?text=' + text + '%20' + url, '_blank');
    else if (t === 'fb')   window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
    else if (t === 'copy') {
      navigator.clipboard.writeText(location.href).then(() => {
        const o = btn.innerHTML; btn.innerHTML = '✓ Copied!'; btn.style.color = '#c8a84b';
        setTimeout(() => { btn.innerHTML = o; btn.style.color = ''; }, 2000);
      });
    }
  });
});

/* ════════════════════════════════════════════════════
   INJECT KEYFRAMES FOR FORM SPINNER
   ════════════════════════════════════════════════════ */
const ks = document.createElement('style');
ks.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(ks);

/* ════════════════════════════════════════════════════
   CALCULATORS — All live-update tools
   ════════════════════════════════════════════════════ */

/* Helpers */
const fmtINR = n => {
  n = Math.round(n);
  if (n >= 1e7) return (n/1e7).toFixed(1) + ' Cr';
  if (n >= 1e5) return (n/1e5).toFixed(1) + ' L';
  return n.toLocaleString('en-IN');
};
const gv  = id => parseFloat($(id)?.value) || 0;
const gel = id => $(id);

/* 1 — Construction Cost */
const costF = gel('costCalcForm');
if (costF) costF.addEventListener('input', () => {
  const area  = gv('costArea'), type  = gel('costType')?.value;
  const floor = +gel('costFloor')?.value || 1;
  const rates = { basic:1700, standard:2200, premium:3000, luxury:4200 };
  const rate  = rates[type] || 2200, total = area * rate * floor;
  const res   = gel('costResult');
  if (area > 0 && res)
    res.innerHTML = `<div class="r-label">Estimated Range</div><div class="r-val">₹${fmtINR(total*.92)} – ₹${fmtINR(total*1.1)}</div><div class="r-unit">${area} sq.ft × ${floor} floor(s) · ${type} finish @ ₹${rate}/sq.ft</div>`;
  else if (res) res.innerHTML = '<div class="r-label" style="opacity:.4">Enter area to calculate</div>';
});

/* 2 — Material Estimator */
const matF = gel('matEstForm');
if (matF) matF.addEventListener('input', () => {
  const area = gv('matArea'), floors = +gel('matFloors')?.value || 1;
  const res  = gel('matResult'); if (!area || !res) return;
  const total = area * floors;
  const row = (e,l,v,u) =>
    `<div style="background:rgba(255,255,255,.03);border-radius:10px;padding:12px;border:1px solid rgba(255,255,255,.05)">
      <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#687888;margin-bottom:4px">${e} ${l}</div>
      <div style="font-weight:700;color:#e8c46a;font-size:1rem">${v} <span style="font-size:.75rem;color:#687888">${u}</span></div>
    </div>`;
  res.innerHTML = `<div class="r-label">Approx. Materials — ${total} sq.ft</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px">
      ${row('🧱','Cement',Math.round((total/100)*42),'bags')}
      ${row('🪨','Sand',Math.round((total/100)*125),'cft')}
      ${row('🔩','Aggregate',Math.round((total/100)*155),'cft')}
      ${row('⚙️','Steel TMT',Math.round((total/100)*520),'kg')}
      ${row('🔶','Bricks',Math.round((total/100)*1050),'nos')}
      ${row('💧','Water',Math.round((total/100)*900),'litres')}
    </div>
    <div class="r-unit" style="margin-top:12px">Indicative only — get exact BOQ from us</div>`;
});

/* 3 — Area Calculator */
const areaF = gel('areaCalcForm');
if (areaF) {
  const shSel = gel('areaShape'), flds = gel('areaFields'), res = gel('areaCalcResult');
  const cfg = {
    rectangle:[['aLen','Length (ft)'],['aWid','Width (ft)']],
    circle:   [['aRad','Radius (ft)']],
    triangle: [['aTB','Base (ft)'],['aTH','Height (ft)']],
    trapezoid:[['aTa','Side A (ft)'],['aTb','Side B (ft)'],['aTH','Height (ft)']],
    lshape:   [['aLa','Total Length'],['aLb','Total Width'],['aLc','Cutout Length'],['aLd','Cutout Width']],
  };
  function buildFields(sh) {
    if (!flds) return;
    flds.innerHTML = (cfg[sh]||[]).map(([id,lbl]) =>
      `<div class="fg"><label>${lbl}</label><input type="number" id="${id}" class="fc" placeholder="0" min="0" step=".01"></div>`).join('');
    flds.querySelectorAll('input').forEach(i => i.addEventListener('input', calc));
  }
  function calc() {
    const sh = shSel?.value; let sqft = 0;
    const v = id => parseFloat($(id)?.value) || 0;
    if      (sh==='rectangle') sqft = v('aLen')*v('aWid');
    else if (sh==='circle')    sqft = Math.PI*v('aRad')**2;
    else if (sh==='triangle')  sqft = .5*v('aTB')*v('aTH');
    else if (sh==='trapezoid') sqft = .5*(v('aTa')+v('aTb'))*v('aTH');
    else if (sh==='lshape')    sqft = v('aLa')*v('aLb')-v('aLc')*v('aLd');
    if (sqft > 0 && res)
      res.innerHTML = `<div class="r-label">Calculated Area</div><div class="r-val">${sqft.toFixed(2)}</div><div class="r-unit">sq.ft | ${(sqft*.0929).toFixed(2)} sq.m | ${(sqft/9).toFixed(3)} sq.gaj</div>`;
  }
  if (shSel) { shSel.addEventListener('change', () => { buildFields(shSel.value); if(res) res.innerHTML=''; }); buildFields(shSel.value); }
}

/* 4 — Unit Converter */
function convertUnit() {
  const val = parseFloat(gel('ucVal')?.value)||0, type = gel('ucType')?.value, out = gel('ucOut');
  if (!out||!val) return;
  const m = {sqft_sqm:[val*.0929,'sq.m'],sqm_sqft:[val*10.7639,'sq.ft'],sqyd_sqft:[val*9,'sq.ft'],sqft_sqyd:[val/9,'sq.yd'],acre_sqft:[val*43560,'sq.ft'],gaj_sqft:[val*9,'sq.ft'],sqft_gaj:[val/9,'Gaj'],ft_m:[val*.3048,'m'],m_ft:[val*3.28084,'ft'],inch_cm:[val*2.54,'cm'],cm_inch:[val*.3937,'inch'],cft_cum:[val*.02832,'m³'],cum_cft:[val*35.3147,'cft'],kg_lb:[val*2.20462,'lb'],lb_kg:[val*.45359,'kg'],ton_kg:[val*1000,'kg'],kg_ton:[val/1000,'MT']};
  if (m[type]) { const [r,u]=m[type]; out.innerHTML=`<div class="r-label">Result</div><div class="r-val">${r.toFixed(4)}</div><div class="r-unit">${u}</div>`; }
}
gel('ucVal')?.addEventListener('input',convertUnit);
gel('ucType')?.addEventListener('change',convertUnit);

/* 5 — Concrete Mix */
function calcConcrete() {
  const vol=gv('concreteVol'), grade=gel('concreteGrade')?.value, res=gel('concreteResult');
  if (!vol||!res) return;
  const dry=vol*1.54;
  const mx={M10:{c:1/10,s:3/10,a:6/10,n:'1:3:6',wc:.6},M15:{c:1/7,s:2/7,a:4/7,n:'1:2:4',wc:.55},M20:{c:1/5.5,s:1.5/5.5,a:3/5.5,n:'1:1.5:3',wc:.5},M25:{c:1/4,s:1/4,a:2/4,n:'1:1:2',wc:.45},M30:{c:1/3.5,s:1/3.5,a:1.5/3.5,n:'1:1:1.5',wc:.4}};
  const m=mx[grade]; if(!m) return;
  const cem=((dry*m.c)/.0347).toFixed(1), sand=(dry*m.s).toFixed(3), agg=(dry*m.a).toFixed(3), water=(parseFloat(cem)*50*m.wc).toFixed(0);
  const box=(l,v,u)=>`<div style="background:rgba(200,168,75,.05);border:1px solid rgba(200,168,75,.12);border-radius:10px;padding:14px;text-align:center"><div style="font-size:9px;color:#687888;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">${l}</div><div style="font-weight:700;color:#e8c46a;font-size:1.2rem">${v}</div><div style="font-size:10px;color:#687888;margin-top:2px">${u}</div></div>`;
  res.innerHTML=`<div class="r-label">${grade} Mix — Ratio ${m.n}</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px">${box('Cement',cem,'bags (50kg)')}${box('Sand',sand,'m³')}${box('Aggregate',agg,'m³')}${box('Water',water,'litres')}</div><div class="r-unit" style="margin-top:12px">IS:10262 based. For ${vol} m³ dry volume.</div>`;
}

/* 6 — Paint */
function calcPaint() {
  const area=gv('paintArea'), coats=+gel('paintCoats')?.value||2, ptype=gel('paintType')?.value, res=gel('paintResult');
  if (!area||!res) return;
  const cov={interior:200,exterior:150,primer:100,enamel:120}[ptype]||200;
  const litres=(area*coats)/cov;
  res.innerHTML=`<div class="r-label">Paint Required</div><div class="r-val">${litres.toFixed(2)} L</div><div class="r-unit">≈ ${Math.ceil(litres/4)} × 4L cans | ${Math.ceil(litres/20)} × 20L drums<br>Coverage: ${cov} sq.ft/L per coat</div>`;
}

/* 7 — Tiles */
function calcTile() {
  const l=gv('tileLen'), w=gv('tileWid'), sz=parseFloat(gel('tileSize')?.value)||600, waste=parseFloat(gel('tileWaste')?.value)||5, res=gel('tileResult');
  if (!l||!w||!res) return;
  const room=l*w, tSqft=(sz/304.8)**2, need=Math.ceil((room/tSqft)*(1+waste/100));
  const perBox=sz===600?4:sz===800?2:sz===300?9:4;
  res.innerHTML=`<div class="r-label">Tiles Required</div><div class="r-val">${need}</div><div class="r-unit">tiles | ≈ ${Math.ceil(need/perBox)} boxes | Room: ${room.toFixed(1)} sq.ft<br>Includes ${waste}% wastage</div>`;
}

/* 8 — Steel Weight */
function calcSteel() {
  const dia=gv('steelDia'), len=gv('steelLen'), qty=gv('steelQty')||1, res=gel('steelResult');
  if (!dia||!len||!res) return;
  const wpm=(dia*dia)/162, total=wpm*len*qty;
  res.innerHTML=`<div class="r-label">TMT Steel Weight</div><div class="r-val">${total.toFixed(2)} kg</div><div class="r-unit">${wpm.toFixed(3)} kg/m per bar | ${qty} bar(s) × ${len}m<br>Formula: D²÷162 (IS standard)</div>`;
}

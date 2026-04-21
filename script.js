/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND  ·  Elite Script  v7.0
   ─────────────────────────────────────────────────────────────────
   ✓ Dark/Light mode (localStorage, no FOUC)
   ✓ Page transition veil (cinematic enter/exit)
   ✓ Reading progress bar
   ✓ Cursor glow (smooth RAF tracking)
   ✓ Cookie banner (localStorage persistence)
   ✓ Back-to-top button (scroll threshold)
   ✓ Page loader with SVG draw animation (home only)
   ✓ Hero canvas — animated city skyline + particles
   ✓ Nav pill scroll-solidify + active link auto-detect
   ✓ Mobile drawer (transform-based, stagger links)
   ✓ Scroll-reveal IntersectionObserver
   ✓ Animated counters (cubic ease-out)
   ✓ Progress bar animation (scroll-triggered observer)
   ✓ Impact bar counters (observer-triggered)
   ✓ 3D card tilt (desktop only)
   ✓ Magnetic button pull (desktop only)
   ✓ FAQ accordion (smooth height transition)
   ✓ Expand/collapse (student guidance)
   ✓ Portfolio filter (fade+scale)
   ✓ Contact form real-time validation + success
   ✓ Toast notifications
   ✓ Smooth anchor scroll
   ✓ Share buttons (WA / FB / copy)
   ✓ Footer year auto-update
   ✓ All 8 live calculators (tools.html)
   ✓ Content Security Policy meta
   ✓ ARIA attributes managed dynamically
   ═══════════════════════════════════════════════════════════════════ */
'use strict';

/* ── Helpers ─────────────────────────────────────────────────── */
const $   = id  => document.getElementById(id);
const $$  = sel => document.querySelectorAll(sel);
const on  = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
const raf = fn  => requestAnimationFrame(fn);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/* ══════════════════════════════════════════════════════════════
   1. THEME — init before first paint (inline in <head> ideally,
      but this runs sync so FOUC is minimal)
   ══════════════════════════════════════════════════════════════ */
function getTheme()   { return localStorage.getItem('cah-theme') || 'dark'; }
function applyTheme(t){ document.documentElement.setAttribute('data-theme', t); }
applyTheme(getTheme());

function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('cah-theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = $('themeToggle');
  if (!btn) return;
  const dark = getTheme() === 'dark';
  btn.innerHTML = dark
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  btn.title = dark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

/* Inject theme toggle button */
(function () {
  const btn = document.createElement('button');
  btn.id = 'themeToggle';
  btn.setAttribute('aria-label', 'Toggle colour theme');
  document.body.appendChild(btn);
  on(btn, 'click', toggleTheme);
  updateThemeIcon();
})();

/* ══════════════════════════════════════════════════════════════
   2. PAGE TRANSITION VEIL
   ══════════════════════════════════════════════════════════════ */
(function () {
  const veil = document.createElement('div');
  veil.id = 'pageVeil';
  document.body.appendChild(veil);
  /* Enter new page: veil is leaving */
  raf(() => veil.classList.add('leaving'));

  on(document, 'click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('tel:') ||
        href.startsWith('mailto:') || href.startsWith('http') ||
        href.startsWith('//') || a.target === '_blank') return;
    e.preventDefault();
    veil.classList.remove('leaving');
    veil.classList.add('entering');
    setTimeout(() => { window.location.href = href; }, 430);
  });
})();

/* ══════════════════════════════════════════════════════════════
   3. PAGE LOADER (home page only)
   ══════════════════════════════════════════════════════════════ */
on(window, 'load', () => {
  const loader = $('cah-loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('done');
    on(loader, 'transitionend', () => loader.remove(), { once: true });
    startHeroReveal();
    triggerImpactCounters();
    animateCounters();
  }, 820);
});

/* Stagger hero elements after loader fades */
function startHeroReveal() {
  $$('.hero .reveal, .hero .rev-l, .hero .rev-r, .hero .rev-s, .hero .rev-bl').forEach((el, i) => {
    setTimeout(() => el.classList.add('up'), i * 72);
  });
}

/* ══════════════════════════════════════════════════════════════
   4. READING PROGRESS BAR
   ══════════════════════════════════════════════════════════════ */
(function () {
  const bar = document.createElement('div');
  bar.id = 'readProgress';
  document.body.appendChild(bar);
  let ticking = false;
  on(window, 'scroll', () => {
    if (!ticking) {
      raf(() => {
        const d = document.documentElement;
        const p = clamp(d.scrollTop / (d.scrollHeight - d.clientHeight), 0, 1);
        bar.style.transform = `scaleX(${p})`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ══════════════════════════════════════════════════════════════
   5. CURSOR GLOW (desktop only)
   ══════════════════════════════════════════════════════════════ */
(function () {
  if (window.matchMedia('(hover:none)').matches) return;
  const glow = document.createElement('div');
  glow.id = 'cursorGlow';
  document.body.appendChild(glow);
  let mx = 0, my = 0, cx = 0, cy = 0;
  on(window, 'mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  on(document, 'mouseleave', () => { glow.style.opacity = '0'; });
  on(document, 'mouseenter', () => { glow.style.opacity = '1'; });
  (function follow() {
    cx += (mx - cx) * 0.07;
    cy += (my - cy) * 0.07;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    raf(follow);
  })();
})();

/* ══════════════════════════════════════════════════════════════
   6. COOKIE BANNER
   ══════════════════════════════════════════════════════════════ */
(function () {
  if (localStorage.getItem('cah-cookie')) return;
  const banner = $('cookieBanner');
  if (!banner) return;
  setTimeout(() => banner.classList.add('show'), 1800);
  on($('cookieAccept'), 'click', () => {
    localStorage.setItem('cah-cookie', 'accepted');
    banner.style.transition = 'transform .4s ease, opacity .4s';
    banner.style.opacity = '0';
    banner.style.transform = 'translateX(-50%) translateY(120px)';
    setTimeout(() => banner.remove(), 450);
  });
  on($('cookieDeny'), 'click', () => {
    localStorage.setItem('cah-cookie', 'declined');
    banner.style.transition = 'transform .4s ease, opacity .4s';
    banner.style.opacity = '0';
    banner.style.transform = 'translateX(-50%) translateY(120px)';
    setTimeout(() => banner.remove(), 450);
  });
})();

/* ══════════════════════════════════════════════════════════════
   7. BACK TO TOP BUTTON
   ══════════════════════════════════════════════════════════════ */
(function () {
  const btn = $('backToTop');
  if (!btn) return;
  on(window, 'scroll', () => {
    btn.classList.toggle('show', window.scrollY > 320);
  }, { passive: true });
  on(btn, 'click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ══════════════════════════════════════════════════════════════
   8. NAVIGATION — scroll solidify, active link, drawer
   ══════════════════════════════════════════════════════════════ */
const navPill    = document.querySelector('.nav-pill');
const navBurger  = document.querySelector('.nav-burger');
const navDrawer  = document.querySelector('.nav-drawer');
const drawerClose = document.querySelector('.drawer-close');

/* Scroll → solid pill */
if (navPill) {
  let nt = false;
  on(window, 'scroll', () => {
    if (!nt) {
      raf(() => { navPill.classList.toggle('solid', window.scrollY > 60); nt = false; });
      nt = true;
    }
  }, { passive: true });
}

/* Drawer open/close */
function openDrawer() {
  if (!navDrawer || !navBurger) return;
  navBurger.classList.add('open');
  navDrawer.classList.add('open');
  navBurger.setAttribute('aria-expanded', 'true');
  navDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  navDrawer.querySelectorAll('a').forEach((a, i) => {
    a.style.transitionDelay = (0.06 + i * 0.055) + 's';
  });
}
function closeDrawer() {
  if (!navDrawer || !navBurger) return;
  navBurger.classList.remove('open');
  navDrawer.classList.remove('open');
  navBurger.setAttribute('aria-expanded', 'false');
  navDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  navDrawer.querySelectorAll('a').forEach(a => { a.style.transitionDelay = '0s'; });
}

on(navBurger,  'click', () => navDrawer?.classList.contains('open') ? closeDrawer() : openDrawer());
on(drawerClose,'click', closeDrawer);
navDrawer?.querySelectorAll('a').forEach(a => on(a, 'click', closeDrawer));
on(document, 'keydown', e => { if (e.key === 'Escape') closeDrawer(); });

/* Auto-detect active link */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (!page && href === 'index.html')) a.classList.add('active');
  });
})();

/* Footer year */
const yr = $('yr');
if (yr) yr.textContent = new Date().getFullYear();

/* ══════════════════════════════════════════════════════════════
   9. SCROLL-REVEAL IntersectionObserver
   ══════════════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('up');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -44px 0px' });

$$('.reveal, .rev-l, .rev-r, .rev-s, .rev-bl').forEach(el => {
  if (!el.closest('.hero')) revealObs.observe(el);
});

/* ══════════════════════════════════════════════════════════════
   10. ANIMATED COUNTERS
   ══════════════════════════════════════════════════════════════ */
function animateCounters(scope) {
  const root = scope || document;
  root.querySelectorAll('[data-count]').forEach(el => {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix  || '';
    const decimals = el.dataset.dec ? +el.dataset.dec : 0;
    const dur = 1700, t0 = performance.now();
    (function tick(now) {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(decimals) + (p >= 1 ? suffix : '');
      if (p < 1) raf(tick);
    })(t0);
  });
}

/* Progress bars — observer triggers animation */
const barContainers = new Set();
$$('.wcb-fill, .rs-fill').forEach(bar => {
  const w = bar.getAttribute('data-w') || bar.style.width || '0';
  bar.setAttribute('data-w', w);
  bar.style.width = '0';
  bar.style.transition = 'none';
  const container = bar.closest('.why-card, .rating-strip');
  if (container) barContainers.add(container);
});

const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.wcb-fill, .rs-fill').forEach(bar => {
      const w = bar.getAttribute('data-w');
      raf(() => {
        bar.style.transition = '';
        bar.style.width = w;
      });
    });
    barObs.unobserve(e.target);
  });
}, { threshold: 0.25 });
barContainers.forEach(c => barObs.observe(c));

/* Impact bar counters — observer-triggered */
function triggerImpactCounters() {
  const impact = document.querySelector('.impact-bar');
  if (!impact) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounters(impact); obs.unobserve(e.target); }
    });
  }, { threshold: 0.3 });
  obs.observe(impact);
}
triggerImpactCounters();

/* ══════════════════════════════════════════════════════════════
   11. HERO CANVAS — animated blueprint city skyline
   ══════════════════════════════════════════════════════════════ */
(function () {
  const canvas = $('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0, af, buildings = [], particles = [];
  const G = n => `rgba(200,168,75,${n})`;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    build();
  }

  function build() {
    const n = Math.ceil(W / 50) + 3;
    buildings = Array.from({ length: n }, (_, i) => ({
      x: ((i - 1) / (n - 2)) * W,
      w: 28 + Math.random() * 54,
      h: 55 + Math.random() * H * 0.44,
      floors: 3 + Math.floor(Math.random() * 13),
      phase:  Math.random() * Math.PI * 2,
    }));
    particles = Array.from({ length: 52 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx:(Math.random() - .5) * .24, vy:-.18 - Math.random() * .38,
      r: .5 + Math.random() * 1.3,
      life:Math.random(), alpha:.07 + Math.random() * .22,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    /* Sky */
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#040b16'); sky.addColorStop(1, '#07121e');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    /* Grid */
    ctx.strokeStyle = G(.022); ctx.lineWidth = .5;
    for (let x = 0; x <= W; x += 62) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 62) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

    const ground = H * .77;
    buildings.forEach(b => {
      const top = ground - b.h;
      const grd = ctx.createLinearGradient(b.x, top, b.x, ground);
      grd.addColorStop(0, G(.038)); grd.addColorStop(1, G(0));
      ctx.fillStyle = grd; ctx.fillRect(b.x, top, b.w, b.h);
      ctx.strokeStyle = G(.062); ctx.lineWidth = .8;
      ctx.strokeRect(b.x+.5, top+.5, b.w-1, b.h-.5);
      const fh = b.h / b.floors;
      ctx.strokeStyle = G(.028); ctx.lineWidth = .4;
      for (let f = 1; f < b.floors; f++) {
        ctx.beginPath(); ctx.moveTo(b.x, top + f*fh); ctx.lineTo(b.x+b.w, top + f*fh); ctx.stroke();
      }
      const cols = Math.max(1, Math.floor(b.w / 13));
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < b.floors - 1; r++) {
          if (Math.sin(t*.38 + b.phase + c*1.1 + r*1.7) <= .06) continue;
          const wx = b.x+5+c*13, wy = top+6+r*fh;
          const wg = ctx.createRadialGradient(wx+2.5,wy+2.5,0, wx+2.5,wy+2.5,5.5);
          wg.addColorStop(0, G(.27)); wg.addColorStop(1, G(.04));
          ctx.fillStyle = wg; ctx.fillRect(wx, wy, 5, 5);
        }
      }
    });
    /* Ground */
    ctx.strokeStyle = G(.12); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, ground); ctx.lineTo(W, ground); ctx.stroke();
    const hg = ctx.createLinearGradient(0, ground-50, 0, ground+18);
    hg.addColorStop(0, G(.055)); hg.addColorStop(1, G(0));
    ctx.fillStyle = hg; ctx.fillRect(0, ground-50, W, 68);
    /* Particles */
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life += .004;
      if (p.y < 0 || p.life > 1) { p.x = Math.random()*W; p.y = H; p.life = 0; }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = G(p.alpha * Math.sin(p.life * Math.PI)); ctx.fill();
    });
    t += .01; af = raf(draw);
  }

  resize();
  let rto;
  on(window, 'resize', () => { clearTimeout(rto); rto = setTimeout(resize, 220); }, { passive: true });
  draw();
  on(document, 'visibilitychange', () => { if (document.hidden) cancelAnimationFrame(af); else draw(); });
})();

/* ══════════════════════════════════════════════════════════════
   12. 3D CARD TILT (desktop hover only)
   ══════════════════════════════════════════════════════════════ */
(function () {
  if (window.matchMedia('(hover:none)').matches) return;
  $$('.bp-card, .svc-card, .why-card, .testi, .tool-card').forEach(card => {
    on(card, 'mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - .5;
      const y = (e.clientY - r.top)  / r.height - .5;
      card.style.transform = `perspective(900px) rotateX(${-y*5.5}deg) rotateY(${x*5.5}deg) translateY(-4px)`;
    });
    on(card, 'mouseleave', () => {
      card.style.transition = 'transform .45s ease';
      card.style.transform = '';
      setTimeout(() => { card.style.transition = ''; }, 450);
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   13. MAGNETIC BUTTONS (desktop only)
   ══════════════════════════════════════════════════════════════ */
(function () {
  if (window.matchMedia('(hover:none)').matches) return;
  $$('.btn-gold, .btn-wa, .btn-ghost').forEach(btn => {
    on(btn, 'mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width  / 2;
      const y = e.clientY - r.top  - r.height / 2;
      btn.style.transform = `translate(${x*.16}px, ${y*.16}px)`;
    });
    on(btn, 'mouseleave', () => { btn.style.transform = ''; });
  });
})();

/* ══════════════════════════════════════════════════════════════
   14. FAQ ACCORDION
   ══════════════════════════════════════════════════════════════ */
$$('.faq-q').forEach(btn => {
  on(btn, 'click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    /* Close all */
    $$('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      i.querySelector('.faq-a').style.height = '0';
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      answer.style.height = answer.scrollHeight + 'px';
    }
  });
});

/* ══════════════════════════════════════════════════════════════
   15. EXPAND / COLLAPSE (student guidance page)
   ══════════════════════════════════════════════════════════════ */
$$('.expand-btn').forEach(btn => {
  on(btn, 'click', () => {
    const wrap   = btn.nextElementSibling;
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

/* ══════════════════════════════════════════════════════════════
   16. PORTFOLIO FILTER
   ══════════════════════════════════════════════════════════════ */
$$('.pf-btn').forEach(btn => {
  on(btn, 'click', () => {
    $$('.pf-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.filter;
    $$('.pf-card').forEach(card => {
      const match = f === 'all' || card.dataset.cat === f;
      card.style.transition = 'all .38s ease';
      card.style.opacity    = match ? '1' : '.18';
      card.style.transform  = match ? '' : 'scale(.96)';
      card.style.pointerEvents = match ? 'all' : 'none';
    });
  });
});

/* ══════════════════════════════════════════════════════════════
   17. CONTACT FORM — real-time validation + async submit
   ══════════════════════════════════════════════════════════════ */
const contactForm = $('contactForm');
if (contactForm) {
  contactForm.querySelectorAll('.fc').forEach(field => {
    on(field, 'blur',  () => validateField(field));
    on(field, 'input', () => { if (field.classList.contains('invalid')) validateField(field); });
  });

  function validateField(field) {
    const val  = field.value.trim();
    const name = field.name || field.id;
    let err = '';
    if (field.required && !val)     err = 'This field is required.';
    else if (name === 'phone' && val && !/^[\d\s+\-()\u0900-\u097F]{7,15}$/.test(val))
                                    err = 'Enter a valid phone number.';
    else if (field.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
                                    err = 'Enter a valid email address.';
    let hint = field.nextElementSibling;
    if (!hint || !hint.classList.contains('field-hint')) {
      hint = document.createElement('span');
      hint.className = 'field-hint';
      field.parentNode.insertBefore(hint, field.nextSibling);
    }
    hint.textContent = err;
    field.classList.toggle('invalid', !!err);
    field.style.borderColor = err ? 'var(--err)' : '';
    return !err;
  }

  on(contactForm, 'submit', async e => {
    e.preventDefault();
    let ok = true;
    contactForm.querySelectorAll('.fc[required]').forEach(f => { if (!validateField(f)) ok = false; });
    if (!ok) { showToast('Please fix the errors highlighted above.', 4000, true); return; }

    const btn  = contactForm.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:_spin .8s linear infinite"><path d="M21 12a9 9 0 11-6.22-8.56"/></svg> Sending…`;
    btn.disabled = true;

    /* ── Replace with Formspree / EmailJS / Netlify Forms in production ── */
    await new Promise(r => setTimeout(r, 1500));
    /* ──────────────────────────────────────────────────────────────────── */

    contactForm.reset();
    contactForm.querySelectorAll('.fc').forEach(f => { f.style.borderColor = ''; f.classList.remove('invalid'); });
    contactForm.querySelectorAll('.field-hint').forEach(h => h.remove());
    btn.innerHTML = orig; btn.disabled = false;

    const successEl = $('formOk');
    if (successEl) { successEl.classList.add('show'); setTimeout(() => successEl.classList.remove('show'), 7000); }
    else showToast('✓ Message sent! We will reply within 24 hours.');
  });
}

/* ══════════════════════════════════════════════════════════════
   18. TOAST NOTIFICATION
   ══════════════════════════════════════════════════════════════ */
function showToast(msg, ms = 4200, isError = false) {
  $('toast')?.remove();
  const el = document.createElement('div');
  el.id = 'toast'; el.textContent = msg;
  if (isError) el.style.borderColor = 'var(--err)';
  document.body.appendChild(el);
  raf(() => { el.style.transform = 'translateY(0)'; el.style.opacity = '1'; });
  setTimeout(() => {
    el.style.transform = 'translateY(20px)'; el.style.opacity = '0';
    setTimeout(() => el.remove(), 430);
  }, ms);
}

/* ══════════════════════════════════════════════════════════════
   19. SMOOTH ANCHOR SCROLL
   ══════════════════════════════════════════════════════════════ */
$$('a[href^="#"]').forEach(a => {
  on(a, 'click', e => {
    const id  = a.getAttribute('href').slice(1);
    const tgt = $(id);
    if (!tgt) return;
    e.preventDefault();
    window.scrollTo({ top: tgt.getBoundingClientRect().top + scrollY - 88, behavior: 'smooth' });
  });
});

/* ══════════════════════════════════════════════════════════════
   20. SHARE BUTTONS
   ══════════════════════════════════════════════════════════════ */
$$('[data-share]').forEach(btn => {
  on(btn, 'click', () => {
    const t   = btn.dataset.share;
    const url = encodeURIComponent(location.href);
    const txt = encodeURIComponent('Check out Civil At Hand – Premium Civil Engineering Services India!');
    if      (t === 'wa')   window.open('https://wa.me/?text=' + txt + '%20' + url, '_blank');
    else if (t === 'fb')   window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
    else if (t === 'copy') {
      navigator.clipboard.writeText(location.href).then(() => {
        const o = btn.innerHTML;
        btn.innerHTML = '✓ Copied!'; btn.style.color = 'var(--g)';
        setTimeout(() => { btn.innerHTML = o; btn.style.color = ''; }, 2000);
      });
    }
  });
});

/* ── Inject spin keyframe for form submit loader ─────────────── */
const _ks = document.createElement('style');
_ks.textContent = '@keyframes _spin{to{transform:rotate(360deg)}}';
document.head.appendChild(_ks);

/* ══════════════════════════════════════════════════════════════
   21. ALL 8 CALCULATORS (tools.html)
   ══════════════════════════════════════════════════════════════ */
const fmtINR = n => {
  n = Math.round(n);
  if (n >= 1e7) return (n/1e7).toFixed(1) + ' Cr';
  if (n >= 1e5) return (n/1e5).toFixed(1) + ' L';
  return n.toLocaleString('en-IN');
};
const gv  = id => parseFloat($(id)?.value) || 0;
const gel = id => $(id);

/* ── 1. Construction Cost ── */
gel('costCalcForm')?.addEventListener('input', () => {
  const area  = gv('costArea'), type = gel('costType')?.value, floor = +gel('costFloor')?.value||1;
  const rates = { basic:1700, standard:2200, premium:3000, luxury:4200 };
  const rate  = rates[type]||2200, tot = area*rate*floor;
  const res   = gel('costResult'); if (!res) return;
  if (area > 0) res.innerHTML = `<div class="r-label">Estimated Range</div>
    <div class="r-val">₹${fmtINR(tot*.92)} – ₹${fmtINR(tot*1.1)}</div>
    <div class="r-unit">${area} sq.ft × ${floor} floor(s) · ${type} finish @ ₹${rate}/sq.ft</div>`;
  else res.innerHTML = '<div class="r-label" style="opacity:.4">Enter area to calculate</div>';
});

/* ── 2. Material Estimator ── */
gel('matEstForm')?.addEventListener('input', () => {
  const area = gv('matArea'), floors = +gel('matFloors')?.value||1;
  const res  = gel('matResult'); if (!area||!res) return;
  const tot  = area * floors;
  const row  = (e,l,v,u) =>
    `<div style="background:rgba(255,255,255,.03);border-radius:10px;padding:12px;border:1px solid rgba(255,255,255,.05)">
      <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:4px">${e} ${l}</div>
      <div style="font-weight:700;color:var(--g1);font-size:1rem">${v} <span style="font-size:.75rem;color:var(--tx3)">${u}</span></div></div>`;
  res.innerHTML = `<div class="r-label">Approx. Materials — ${tot} sq.ft</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px">
      ${row('🧱','Cement',Math.round((tot/100)*42),'bags')}
      ${row('🪨','Sand',Math.round((tot/100)*125),'cft')}
      ${row('🔩','Aggregate',Math.round((tot/100)*155),'cft')}
      ${row('⚙️','Steel TMT',Math.round((tot/100)*520),'kg')}
      ${row('🔶','Bricks',Math.round((tot/100)*1050),'nos')}
      ${row('💧','Water',Math.round((tot/100)*900),'litres')}
    </div>
    <div class="r-unit" style="margin-top:12px">Indicative only — contact us for your exact BOQ</div>`;
});

/* ── 3. Area Calculator ── */
(function () {
  const areaF = gel('areaCalcForm'); if (!areaF) return;
  const shSel = gel('areaShape'), flds = gel('areaFields'), aRes = gel('areaCalcResult');
  const cfg = {
    rectangle:[['aLen','Length (ft)'],['aWid','Width (ft)']],
    circle:   [['aRad','Radius (ft)']],
    triangle: [['aTB','Base (ft)'],['aTH','Height (ft)']],
    trapezoid:[['aTa','Side A (ft)'],['aTb','Side B (ft)'],['aTH','Height (ft)']],
    lshape:   [['aLa','Total Length'],['aLb','Total Width'],['aLc','Cutout Length'],['aLd','Cutout Width']],
  };
  function buildAF(sh) {
    if (!flds) return;
    flds.innerHTML = (cfg[sh]||[]).map(([id,lbl]) =>
      `<div class="fg"><label>${lbl}</label><input type="number" id="${id}" class="fc" placeholder="0" min="0" step=".01"/></div>`).join('');
    flds.querySelectorAll('input').forEach(i => on(i, 'input', calcArea));
  }
  function calcArea() {
    const sh = shSel?.value; let sqft = 0;
    const v = id => parseFloat($(id)?.value)||0;
    if      (sh==='rectangle') sqft = v('aLen')*v('aWid');
    else if (sh==='circle')    sqft = Math.PI*v('aRad')**2;
    else if (sh==='triangle')  sqft = .5*v('aTB')*v('aTH');
    else if (sh==='trapezoid') sqft = .5*(v('aTa')+v('aTb'))*v('aTH');
    else if (sh==='lshape')    sqft = v('aLa')*v('aLb')-v('aLc')*v('aLd');
    if (sqft > 0 && aRes)
      aRes.innerHTML = `<div class="r-label">Calculated Area</div>
        <div class="r-val">${sqft.toFixed(2)}</div>
        <div class="r-unit">sq.ft &nbsp;·&nbsp; ${(sqft*.0929).toFixed(2)} sq.m &nbsp;·&nbsp; ${(sqft/9).toFixed(3)} sq.gaj</div>`;
  }
  if (shSel) {
    on(shSel, 'change', () => { buildAF(shSel.value); if (aRes) aRes.innerHTML = ''; });
    buildAF(shSel.value);
  }
})();

/* ── 4. Unit Converter ── */
function convertUnit() {
  const val = parseFloat(gel('ucVal')?.value)||0, type = gel('ucType')?.value, out = gel('ucOut');
  if (!out||!val) return;
  const m = {
    sqft_sqm:[val*.0929,'sq.m'],sqm_sqft:[val*10.7639,'sq.ft'],sqyd_sqft:[val*9,'sq.ft'],
    sqft_sqyd:[val/9,'sq.yd'],acre_sqft:[val*43560,'sq.ft'],gaj_sqft:[val*9,'sq.ft'],
    sqft_gaj:[val/9,'Gaj'],ft_m:[val*.3048,'m'],m_ft:[val*3.28084,'ft'],
    inch_cm:[val*2.54,'cm'],cm_inch:[val*.3937,'inch'],cft_cum:[val*.02832,'m³'],
    cum_cft:[val*35.3147,'cft'],kg_lb:[val*2.20462,'lb'],lb_kg:[val*.45359,'kg'],
    ton_kg:[val*1000,'kg'],kg_ton:[val/1000,'MT'],
  };
  if (m[type]) { const [r,u]=m[type]; out.innerHTML=`<div class="r-label">Result</div><div class="r-val">${r.toFixed(4)}</div><div class="r-unit">${u}</div>`; }
}
gel('ucVal')?.addEventListener('input',convertUnit);
gel('ucType')?.addEventListener('change',convertUnit);

/* ── 5. Concrete Mix Calculator ── */
function calcConcrete() {
  const vol=gv('concreteVol'), grade=gel('concreteGrade')?.value, res=gel('concreteResult');
  if (!vol||!res) return;
  const dry=vol*1.54;
  const mx={M10:{c:1/10,s:3/10,a:6/10,n:'1:3:6',wc:.6},M15:{c:1/7,s:2/7,a:4/7,n:'1:2:4',wc:.55},M20:{c:1/5.5,s:1.5/5.5,a:3/5.5,n:'1:1.5:3',wc:.5},M25:{c:1/4,s:1/4,a:2/4,n:'1:1:2',wc:.45},M30:{c:1/3.5,s:1/3.5,a:1.5/3.5,n:'1:1:1.5',wc:.4}};
  const m=mx[grade]; if(!m) return;
  const cem=((dry*m.c)/.0347).toFixed(1),sand=(dry*m.s).toFixed(3),agg=(dry*m.a).toFixed(3),wat=(parseFloat(cem)*50*m.wc).toFixed(0);
  const box=(l,v,u)=>`<div style="background:var(--g4);border:1px solid rgba(200,168,75,.14);border-radius:10px;padding:14px;text-align:center">
    <div style="font-size:9px;color:var(--tx3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">${l}</div>
    <div style="font-weight:700;color:var(--g1);font-size:1.2rem">${v}</div>
    <div style="font-size:10px;color:var(--tx3);margin-top:2px">${u}</div></div>`;
  res.innerHTML=`<div class="r-label">${grade} Mix — Ratio ${m.n}</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px">
      ${box('Cement',cem,'bags (50kg)')}${box('Sand',sand,'m³')}${box('Aggregate',agg,'m³')}${box('Water',wat,'litres')}
    </div>
    <div class="r-unit" style="margin-top:12px">IS:10262. For ${vol} m³ dry concrete volume.</div>`;
}

/* ── 6. Paint Estimator ── */
function calcPaint() {
  const area=gv('paintArea'),coats=+gel('paintCoats')?.value||2,ptype=gel('paintType')?.value,res=gel('paintResult');
  if (!area||!res) return;
  const cov={interior:200,exterior:150,primer:100,enamel:120}[ptype]||200;
  const litres=(area*coats)/cov;
  res.innerHTML=`<div class="r-label">Paint Required</div>
    <div class="r-val">${litres.toFixed(2)} L</div>
    <div class="r-unit">≈ ${Math.ceil(litres/4)} × 4L cans &nbsp;·&nbsp; ${Math.ceil(litres/20)} × 20L drums<br>Coverage: ${cov} sq.ft/L per coat</div>`;
}

/* ── 7. Tile Calculator ── */
function calcTile() {
  const l=gv('tileLen'),w=gv('tileWid'),sz=parseFloat(gel('tileSize')?.value)||600;
  const waste=parseFloat(gel('tileWaste')?.value)||5,res=gel('tileResult');
  if (!l||!w||!res) return;
  const room=l*w,tSqft=(sz/304.8)**2,need=Math.ceil((room/tSqft)*(1+waste/100));
  const perBox=sz===600?4:sz===800?2:sz===300?9:4;
  res.innerHTML=`<div class="r-label">Tiles Required</div>
    <div class="r-val">${need}</div>
    <div class="r-unit">tiles &nbsp;·&nbsp; ≈ ${Math.ceil(need/perBox)} boxes &nbsp;·&nbsp; Room: ${room.toFixed(1)} sq.ft<br>Includes ${waste}% wastage</div>`;
}

/* ── 8. Steel Weight Calculator ── */
function calcSteel() {
  const dia=gv('steelDia'),len=gv('steelLen'),qty=gv('steelQty')||1,res=gel('steelResult');
  if (!dia||!len||!res) return;
  const wpm=(dia*dia)/162,total=wpm*len*qty;
  res.innerHTML=`<div class="r-label">TMT Steel Weight</div>
    <div class="r-val">${total.toFixed(2)} kg</div>
    <div class="r-unit">${wpm.toFixed(3)} kg/m per bar &nbsp;·&nbsp; ${qty} bar(s) × ${len} m<br>Formula: D²÷162 (IS standard)</div>`;
}

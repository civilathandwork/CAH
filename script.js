/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND  ·  Main Script  ·  v6.0
   ─────────────────────────────────────────────────────────────────
   Features:
   ✓ Page loader (home only)
   ✓ Page transition veil (smooth between pages)
   ✓ Floating glass-morphism nav pill (scroll-solidify)
   ✓ Mobile drawer (transform-based, works on all devices)
   ✓ Dark / Light mode toggle (persisted in localStorage)
   ✓ Reading progress bar
   ✓ Cursor glow (desktop only)
   ✓ Scroll-reveal with IntersectionObserver
   ✓ Animated counters
   ✓ Animated progress bars (scroll-triggered)
   ✓ Hero canvas: animated city skyline
   ✓ 3D card tilt effect
   ✓ Magnetic button effect
   ✓ FAQ accordion
   ✓ Expand/collapse (student guidance)
   ✓ Portfolio filter with animation
   ✓ Contact form with full validation + success
   ✓ Toast notifications
   ✓ Smooth anchor scroll
   ✓ Share buttons
   ✓ All 8 live calculators (tools.html)
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

/* ── Config ──────────────────────────────────────────────────── */
const PHONE      = '918708524647';
const HERO_CANVAS = true;

/* ── DOM helpers ─────────────────────────────────────────────── */
const $  = id  => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
const raf = fn => requestAnimationFrame(fn);

/* ══════════════════════════════════════════════════════════════
   DARK / LIGHT MODE
   ══════════════════════════════════════════════════════════════ */
(function initTheme() {
  const saved = localStorage.getItem('cah-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('cah-theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn  = $('themeToggle');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  btn.innerHTML = isDark
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

/* Inject theme toggle button */
(function injectThemeBtn() {
  const btn = document.createElement('button');
  btn.id = 'themeToggle';
  btn.setAttribute('aria-label', 'Toggle theme');
  document.body.appendChild(btn);
  btn.addEventListener('click', toggleTheme);
  updateThemeIcon();
})();

/* ══════════════════════════════════════════════════════════════
   PAGE TRANSITION VEIL
   ══════════════════════════════════════════════════════════════ */
(function initPageVeil() {
  const veil = document.createElement('div');
  veil.id = 'pageVeil';
  document.body.appendChild(veil);

  /* On load: remove entering class to reveal page */
  veil.classList.add('exiting');

  /* Intercept internal same-origin link clicks */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    /* Skip: external, anchors, tel, mailto, target=_blank */
    if (!href || href.startsWith('#') || href.startsWith('tel:') ||
        href.startsWith('mailto:') || href.startsWith('http') ||
        a.target === '_blank') return;

    e.preventDefault();
    veil.classList.remove('exiting');
    veil.classList.add('entering');

    setTimeout(() => {
      window.location.href = href;
    }, 420);
  });
})();

/* ══════════════════════════════════════════════════════════════
   PAGE LOADER  —  home page only
   ══════════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  const loader = $('cah-loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('done');
    on(loader, 'transitionend', () => loader.remove(), { once: true });
    startHeroReveal();
    animateCounters();
  }, 780);
});

function startHeroReveal() {
  $$('.hero .reveal,.hero .rev-l,.hero .rev-r,.hero .rev-s,.hero .rev-bl').forEach((el, i) => {
    setTimeout(() => el.classList.add('up'), i * 72);
  });
}

/* ══════════════════════════════════════════════════════════════
   READING PROGRESS BAR
   ══════════════════════════════════════════════════════════════ */
(function initProgress() {
  const bar = document.createElement('div');
  bar.id = 'readProgress';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const progress = doc.scrollTop / (doc.scrollHeight - doc.clientHeight);
    bar.style.transform = `scaleX(${Math.min(progress, 1)})`;
  }, { passive: true });
})();

/* ══════════════════════════════════════════════════════════════
   CURSOR GLOW  —  desktop only
   ══════════════════════════════════════════════════════════════ */
(function initCursorGlow() {
  if (window.innerWidth < 900) return; /* skip on mobile/tablet */
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mx = 0, my = 0, cx = 0, cy = 0;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

  /* Smooth follow */
  (function follow() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    raf(follow);
  })();

  /* Hide when mouse leaves */
  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
})();

/* ══════════════════════════════════════════════════════════════
   NAV  —  scroll solidify
   ══════════════════════════════════════════════════════════════ */
const navPill = document.querySelector('.nav-pill');
if (navPill) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      raf(() => {
        navPill.classList.toggle('solid', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════════════
   MOBILE DRAWER  —  works on all devices
   ══════════════════════════════════════════════════════════════ */
const navBurger  = document.querySelector('.nav-burger');
const navDrawer  = document.querySelector('.nav-drawer');
const drawerClose = document.querySelector('.drawer-close');

function openDrawer() {
  if (!navDrawer || !navBurger) return;
  navBurger.classList.add('open');
  navDrawer.classList.add('open');
  navBurger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  /* Stagger animate drawer links */
  navDrawer.querySelectorAll('a').forEach((a, i) => {
    a.style.transitionDelay = (0.06 + i * 0.055) + 's';
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

on(navBurger,  'click', () => navDrawer?.classList.contains('open') ? closeDrawer() : openDrawer());
on(drawerClose,'click', closeDrawer);
navDrawer?.querySelectorAll('a').forEach(a => on(a, 'click', closeDrawer));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

/* ── Auto-mark active nav link ──────────────────────────────── */
(function markActive() {
  const page = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (!page && href === 'index.html')) a.classList.add('active');
  });
})();

/* ══════════════════════════════════════════════════════════════
   SCROLL-REVEAL  —  IntersectionObserver
   ══════════════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('up');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -44px 0px' });

$$('.reveal,.rev-l,.rev-r,.rev-s,.rev-bl').forEach(el => {
  if (!el.closest('.hero')) revealObs.observe(el);
});

/* ── Progress bars — animate on scroll ─────────────────────── */
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.wcb-fill,.rs-fill').forEach(bar => {
        const w = bar.getAttribute('data-w') || bar.style.width;
        bar.style.width = '0';
        /* Trigger reflow then animate */
        requestAnimationFrame(() => { bar.style.width = w; });
      });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });

/* Init bars at 0 then observe their containers */
$$('.wcb-fill, .rs-fill').forEach(bar => {
  const w = bar.getAttribute('data-w') || bar.style.width;
  bar.setAttribute('data-w', w);
  bar.style.width = '0';
  bar.style.transition = 'none'; /* prevent flash */
  const container = bar.closest('.why-card, .rating-strip');
  if (container) barObs.observe(container);
});

/* ══════════════════════════════════════════════════════════════
   COUNTER ANIMATION
   ══════════════════════════════════════════════════════════════ */
function animateCounters() {
  $$('[data-count]').forEach(el => {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix  || '';
    const decimals = el.dataset.dec ? +el.dataset.dec : 0;
    const dur      = 1700;
    const t0       = performance.now();

    (function tick(now) {
      const p   = Math.min((now - t0) / dur, 1);
      const val = target * (1 - Math.pow(1 - p, 3));
      el.textContent = val.toFixed(decimals) + (p >= 1 ? suffix : '');
      if (p < 1) raf(tick);
    })(t0);
  });
}

/* ══════════════════════════════════════════════════════════════
   HERO CANVAS  —  animated city skyline blueprint
   ══════════════════════════════════════════════════════════════ */
(function initHeroCanvas() {
  if (!HERO_CANVAS) return;
  const canvas = $('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, t = 0, af;
  let buildings = [], particles = [];
  const G = 'rgba(200,168,75,';

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    initScene();
  }

  function initScene() {
    const n = Math.ceil(W / 50) + 3;
    buildings = Array.from({ length: n }, (_, i) => ({
      x: ((i - 1) / (n - 2)) * W,
      w: 28 + Math.random() * 52,
      h: 55 + Math.random() * H * 0.44,
      floors: 3 + Math.floor(Math.random() * 13),
      phase:  Math.random() * Math.PI * 2,
    }));
    particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * W,  y: Math.random() * H,
      vx:(Math.random() - .5) * .24, vy:-.18 - Math.random() * .38,
      r: .5 + Math.random() * 1.2,
      life:  Math.random(), alpha: .07 + Math.random() * .22,
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);

    /* Sky */
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#040b16');
    sky.addColorStop(1, '#07121e');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    /* Blueprint grid */
    ctx.strokeStyle = G + '.022)';
    ctx.lineWidth = .5;
    for (let x = 0; x <= W; x += 62) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y = 0; y <= H; y += 62) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

    const ground = H * .77;
    buildings.forEach(b => {
      const top = ground - b.h;

      /* Glow fill */
      const grd = ctx.createLinearGradient(b.x, top, b.x, ground);
      grd.addColorStop(0, G + '.038)');
      grd.addColorStop(1, G + '0)');
      ctx.fillStyle = grd;
      ctx.fillRect(b.x, top, b.w, b.h);

      /* Outline */
      ctx.strokeStyle = G + '.062)';
      ctx.lineWidth = .8;
      ctx.strokeRect(b.x + .5, top + .5, b.w - 1, b.h - .5);

      /* Floor lines */
      const fh = b.h / b.floors;
      ctx.strokeStyle = G + '.03)';
      ctx.lineWidth = .4;
      for (let f = 1; f < b.floors; f++) {
        const fy = top + f * fh;
        ctx.beginPath(); ctx.moveTo(b.x, fy); ctx.lineTo(b.x + b.w, fy); ctx.stroke();
      }

      /* Windows */
      const cols = Math.max(1, Math.floor(b.w / 13));
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < b.floors - 1; r++) {
          if (Math.sin(t * .38 + b.phase + c * 1.1 + r * 1.7) <= .08) continue;
          const wx = b.x + 5 + c * 13, wy = top + 6 + r * fh;
          const wg = ctx.createRadialGradient(wx+2.5,wy+2.5,0, wx+2.5,wy+2.5,5);
          wg.addColorStop(0, G + '.26)');
          wg.addColorStop(1, G + '.04)');
          ctx.fillStyle = wg;
          ctx.fillRect(wx, wy, 5, 5);
        }
      }
    });

    /* Ground */
    ctx.strokeStyle = G + '.12)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, ground); ctx.lineTo(W, ground); ctx.stroke();

    /* Horizon glow */
    const hg = ctx.createLinearGradient(0, ground - 50, 0, ground + 18);
    hg.addColorStop(0, G + '.055)');
    hg.addColorStop(1, 'transparent');
    ctx.fillStyle = hg;
    ctx.fillRect(0, ground - 50, W, 68);

    /* Particles */
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.life += .004;
      if (p.y < 0 || p.life > 1) { p.x = Math.random() * W; p.y = H; p.life = 0; }
      const fade = Math.sin(p.life * Math.PI);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = G + (p.alpha * fade) + ')';
      ctx.fill();
    });

    t += .01;
    af = raf(frame);
  }

  resize();
  let rto;
  window.addEventListener('resize', () => {
    clearTimeout(rto); rto = setTimeout(resize, 220);
  }, { passive: true });
  frame();

  /* Pause when tab hidden to save CPU */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(af);
    else frame();
  });
})();

/* ══════════════════════════════════════════════════════════════
   3D CARD TILT  —  applied to bp-card and service cards
   ══════════════════════════════════════════════════════════════ */
(function initTilt() {
  if (window.matchMedia('(hover:none)').matches) return; /* skip touch */
  $$('.bp-card, .svc-card, .why-card, .testi').forEach(card => {
    on(card, 'mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = (e.clientX - r.left) / r.width  - .5;
      const y  = (e.clientY - r.top)  / r.height - .5;
      const rx = -y * 6;  /* tilt X */
      const ry =  x * 6;  /* tilt Y */
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    on(card, 'mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .4s ease';
      setTimeout(() => { card.style.transition = ''; }, 400);
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   MAGNETIC BUTTONS  —  subtle pull toward cursor
   ══════════════════════════════════════════════════════════════ */
(function initMagnetic() {
  if (window.matchMedia('(hover:none)').matches) return;
  $$('.btn-gold, .btn-wa, .btn-ghost').forEach(btn => {
    btn.classList.add('btn-magnetic');
    on(btn, 'mousemove', e => {
      const r  = btn.getBoundingClientRect();
      const x  = e.clientX - r.left - r.width  / 2;
      const y  = e.clientY - r.top  - r.height / 2;
      btn.style.transform = `translate(${x * .18}px, ${y * .18}px)`;
    });
    on(btn, 'mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   FAQ ACCORDION
   ══════════════════════════════════════════════════════════════ */
$$('.faq-q').forEach(btn => {
  on(btn, 'click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');

    /* Close all open items */
    $$('.faq-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
      i.querySelector('.faq-a').style.height = '0';
    });

    /* Open this one if it was closed */
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      answer.style.height = answer.scrollHeight + 'px';
    }
  });
});

/* ══════════════════════════════════════════════════════════════
   EXPAND / COLLAPSE  —  student guidance page
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
   PORTFOLIO FILTER  —  animated filter with scale+fade
   ══════════════════════════════════════════════════════════════ */
$$('.pf-btn').forEach(btn => {
  on(btn, 'click', () => {
    $$('.pf-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.filter;
    $$('.pf-card').forEach(card => {
      const match = f === 'all' || card.dataset.cat === f;
      card.style.transition = 'all .38s ease';
      card.style.opacity    = match ? '1' : '.2';
      card.style.transform  = match ? '' : 'scale(.96)';
      card.style.pointerEvents = match ? 'all' : 'none';
    });
  });
});

/* ══════════════════════════════════════════════════════════════
   CONTACT FORM  —  validation + mock send
   (Replace the fake delay with Formspree/EmailJS/Netlify in prod)
   ══════════════════════════════════════════════════════════════ */
const contactForm = $('contactForm');
if (contactForm) {
  /* Real-time field validation */
  contactForm.querySelectorAll('.fc').forEach(field => {
    on(field, 'blur', () => validateField(field));
    on(field, 'input', () => {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });

  function validateField(field) {
    const val  = field.value.trim();
    const name = field.name || field.id;
    let error  = '';

    if (field.required && !val)              error = 'This field is required.';
    else if (name === 'phone' && val && !/^[\d\s\+\-\(\)]{7,15}$/.test(val))
                                              error = 'Please enter a valid phone number.';
    else if (field.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
                                              error = 'Please enter a valid email address.';

    let hint = field.nextElementSibling;
    if (!hint || !hint.classList.contains('field-hint')) {
      hint = document.createElement('span');
      hint.className = 'field-hint';
      hint.style.cssText = 'display:block;font-size:.72rem;margin-top:4px;color:var(--err);';
      field.parentNode.insertBefore(hint, field.nextSibling);
    }
    hint.textContent = error;
    field.classList.toggle('invalid', !!error);
    if (error) field.style.borderColor = 'var(--err)';
    else       field.style.borderColor = '';
    return !error;
  }

  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    let valid = true;
    contactForm.querySelectorAll('.fc[required]').forEach(f => {
      if (!validateField(f)) valid = false;
    });
    if (!valid) { showToast('Please fix the errors above.', 4000, true); return; }

    const btn  = contactForm.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" style="animation:spin .8s linear infinite"><path d="M21 12a9 9 0 11-6.22-8.56"/></svg> Sending…`;
    btn.disabled = true;

    /* — Production: replace this block with your API call — */
    await new Promise(r => setTimeout(r, 1500));
    /* ─────────────────────────────────────────────────────── */

    contactForm.reset();
    contactForm.querySelectorAll('.fc').forEach(f => { f.style.borderColor = ''; f.classList.remove('invalid'); });
    contactForm.querySelectorAll('.field-hint').forEach(h => h.remove());
    btn.innerHTML = orig;
    btn.disabled  = false;

    const ok = $('formOk');
    if (ok) { ok.classList.add('show'); setTimeout(() => ok.classList.remove('show'), 7000); }
    else showToast('✓ Message sent! We\'ll reply within 24 hours.');
  });
}

/* ══════════════════════════════════════════════════════════════
   TOAST NOTIFICATION
   ══════════════════════════════════════════════════════════════ */
function showToast(msg, ms = 4200, isError = false) {
  $('toast')?.remove();
  const el = document.createElement('div');
  el.id = 'toast';
  if (isError) el.style.borderColor = 'var(--err)';
  el.textContent = msg;
  document.body.appendChild(el);
  raf(() => { el.style.transform = 'translateY(0)'; el.style.opacity = '1'; });
  setTimeout(() => {
    el.style.transform = 'translateY(20px)'; el.style.opacity = '0';
    setTimeout(() => el.remove(), 420);
  }, ms);
}

/* ══════════════════════════════════════════════════════════════
   SMOOTH ANCHOR SCROLL
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
   SHARE BUTTONS
   ══════════════════════════════════════════════════════════════ */
$$('[data-share]').forEach(btn => {
  on(btn, 'click', () => {
    const type = btn.dataset.share;
    const url  = encodeURIComponent(location.href);
    const text = encodeURIComponent('Check out Civil At Hand – Premium Civil Engineering Services India!');
    if      (type === 'wa')   window.open('https://wa.me/?text=' + text + '%20' + url, '_blank');
    else if (type === 'fb')   window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
    else if (type === 'copy') {
      navigator.clipboard.writeText(location.href).then(() => {
        const o = btn.innerHTML; btn.innerHTML = '✓ Copied!'; btn.style.color = 'var(--g)';
        setTimeout(() => { btn.innerHTML = o; btn.style.color = ''; }, 2000);
      });
    }
  });
});

/* ══════════════════════════════════════════════════════════════
   INJECT SPIN KEYFRAME (needed for form submit spinner)
   ══════════════════════════════════════════════════════════════ */
const _ks = document.createElement('style');
_ks.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
document.head.appendChild(_ks);

/* ══════════════════════════════════════════════════════════════
   ════════════════════════════════════════════════════════════
   CALCULATORS  —  tools.html  (all 8 live-update tools)
   ════════════════════════════════════════════════════════════
   ══════════════════════════════════════════════════════════════ */

/* Helpers */
const fmtINR = n => {
  n = Math.round(n);
  if (n >= 1e7) return (n / 1e7).toFixed(1) + ' Cr';
  if (n >= 1e5) return (n / 1e5).toFixed(1) + ' L';
  return n.toLocaleString('en-IN');
};
const gv = id => parseFloat($(id)?.value) || 0;

/* ─── 1 · Construction Cost Calculator ─── */
const costF = $('costCalcForm');
if (costF) costF.addEventListener('input', () => {
  const area  = gv('costArea'), type = $('costType')?.value;
  const floor = +($('costFloor')?.value) || 1;
  const rates = { basic:1700, standard:2200, premium:3000, luxury:4200 };
  const rate  = rates[type] || 2200, total = area * rate * floor;
  const res   = $('costResult');
  if (!res) return;
  if (area > 0)
    res.innerHTML = `<div class="r-label">Estimated Range</div>
      <div class="r-val">₹${fmtINR(total*.92)} – ₹${fmtINR(total*1.1)}</div>
      <div class="r-unit">${area} sq.ft × ${floor} floor(s) · ${type} finish @ ₹${rate}/sq.ft</div>`;
  else res.innerHTML = '<div class="r-label" style="opacity:.4">Enter area to calculate</div>';
});

/* ─── 2 · Material Estimator ─── */
const matF = $('matEstForm');
if (matF) matF.addEventListener('input', () => {
  const area = gv('matArea'), floors = +($('matFloors')?.value) || 1;
  const res  = $('matResult'); if (!area || !res) return;
  const tot  = area * floors;
  const row  = (e, l, v, u) =>
    `<div style="background:rgba(255,255,255,.03);border-radius:10px;padding:12px;border:1px solid rgba(255,255,255,.05)">
      <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--tx3);margin-bottom:4px">${e} ${l}</div>
      <div style="font-weight:700;color:var(--g1);font-size:1rem">${v} <span style="font-size:.75rem;color:var(--tx3)">${u}</span></div>
    </div>`;
  res.innerHTML = `<div class="r-label">Approx. Materials — ${tot} sq.ft</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px">
      ${row('🧱','Cement', Math.round((tot/100)*42), 'bags')}
      ${row('🪨','Sand',   Math.round((tot/100)*125),'cft')}
      ${row('🔩','Aggregate',Math.round((tot/100)*155),'cft')}
      ${row('⚙️','Steel TMT',Math.round((tot/100)*520),'kg')}
      ${row('🔶','Bricks', Math.round((tot/100)*1050),'nos')}
      ${row('💧','Water',  Math.round((tot/100)*900), 'litres')}
    </div>
    <div class="r-unit" style="margin-top:12px">Indicative only — contact us for exact BOQ</div>`;
});

/* ─── 3 · Area Calculator ─── */
const areaF = $('areaCalcForm');
if (areaF) {
  const shSel = $('areaShape'), flds = $('areaFields'), aRes = $('areaCalcResult');
  const cfg = {
    rectangle:[['aLen','Length (ft)'],['aWid','Width (ft)']],
    circle:   [['aRad','Radius (ft)']],
    triangle: [['aTB','Base (ft)'],['aTH','Height (ft)']],
    trapezoid:[['aTa','Side A (ft)'],['aTb','Side B (ft)'],['aTH','Height (ft)']],
    lshape:   [['aLa','Total Length'],['aLb','Total Width'],['aLc','Cutout L'],['aLd','Cutout W']],
  };
  function buildAF(sh) {
    if (!flds) return;
    flds.innerHTML = (cfg[sh]||[]).map(([id,lbl]) =>
      `<div class="fg"><label>${lbl}</label><input type="number" id="${id}" class="fc" placeholder="0" min="0" step=".01"></div>`).join('');
    flds.querySelectorAll('input').forEach(i => i.addEventListener('input', calcArea));
  }
  function calcArea() {
    const sh = shSel?.value; let sqft = 0;
    const v = id => parseFloat($(id)?.value) || 0;
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
    shSel.addEventListener('change', () => { buildAF(shSel.value); if(aRes) aRes.innerHTML=''; });
    buildAF(shSel.value);
  }
}

/* ─── 4 · Unit Converter ─── */
function convertUnit() {
  const val = parseFloat($('ucVal')?.value)||0, type = $('ucType')?.value, out = $('ucOut');
  if (!out||!val) return;
  const m = {
    sqft_sqm:[val*.0929,'sq.m'],sqm_sqft:[val*10.7639,'sq.ft'],sqyd_sqft:[val*9,'sq.ft'],
    sqft_sqyd:[val/9,'sq.yd'],acre_sqft:[val*43560,'sq.ft'],gaj_sqft:[val*9,'sq.ft'],
    sqft_gaj:[val/9,'Gaj'],ft_m:[val*.3048,'m'],m_ft:[val*3.28084,'ft'],
    inch_cm:[val*2.54,'cm'],cm_inch:[val*.3937,'inch'],cft_cum:[val*.02832,'m³'],
    cum_cft:[val*35.3147,'cft'],kg_lb:[val*2.20462,'lb'],lb_kg:[val*.45359,'kg'],
    ton_kg:[val*1000,'kg'],kg_ton:[val/1000,'MT'],
  };
  if (m[type]) {
    const [r,u] = m[type];
    out.innerHTML = `<div class="r-label">Result</div><div class="r-val">${r.toFixed(4)}</div><div class="r-unit">${u}</div>`;
  }
}
$('ucVal')?.addEventListener('input', convertUnit);
$('ucType')?.addEventListener('change', convertUnit);

/* ─── 5 · Concrete Mix Calculator ─── */
function calcConcrete() {
  const vol = gv('concreteVol'), grade = $('concreteGrade')?.value, res = $('concreteResult');
  if (!vol||!res) return;
  const dry = vol*1.54;
  const mx = {
    M10:{c:1/10,s:3/10,a:6/10,n:'1:3:6',wc:.6},
    M15:{c:1/7, s:2/7, a:4/7, n:'1:2:4',wc:.55},
    M20:{c:1/5.5,s:1.5/5.5,a:3/5.5,n:'1:1.5:3',wc:.5},
    M25:{c:1/4, s:1/4, a:2/4, n:'1:1:2',wc:.45},
    M30:{c:1/3.5,s:1/3.5,a:1.5/3.5,n:'1:1:1.5',wc:.4},
  };
  const m = mx[grade]; if(!m) return;
  const cem  = ((dry*m.c)/.0347).toFixed(1);
  const sand = (dry*m.s).toFixed(3);
  const agg  = (dry*m.a).toFixed(3);
  const wat  = (parseFloat(cem)*50*m.wc).toFixed(0);
  const box  = (l,v,u) =>
    `<div style="background:var(--g4);border:1px solid rgba(200,168,75,.14);border-radius:10px;padding:14px;text-align:center">
      <div style="font-size:9px;color:var(--tx3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">${l}</div>
      <div style="font-weight:700;color:var(--g1);font-size:1.2rem">${v}</div>
      <div style="font-size:10px;color:var(--tx3);margin-top:2px">${u}</div>
    </div>`;
  res.innerHTML = `<div class="r-label">${grade} Mix — Ratio ${m.n}</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px">
      ${box('Cement',cem,'bags (50kg)')}${box('Sand',sand,'m³')}
      ${box('Aggregate',agg,'m³')}${box('Water',wat,'litres')}
    </div>
    <div class="r-unit" style="margin-top:12px">IS:10262 based. For ${vol} m³ dry volume.</div>`;
}

/* ─── 6 · Paint Estimator ─── */
function calcPaint() {
  const area = gv('paintArea'), coats = +($('paintCoats')?.value)||2;
  const ptype = $('paintType')?.value, res = $('paintResult');
  if (!area||!res) return;
  const cov = {interior:200,exterior:150,primer:100,enamel:120}[ptype]||200;
  const litres = (area*coats)/cov;
  res.innerHTML = `<div class="r-label">Paint Required</div>
    <div class="r-val">${litres.toFixed(2)} L</div>
    <div class="r-unit">≈ ${Math.ceil(litres/4)} × 4L cans &nbsp;·&nbsp; ${Math.ceil(litres/20)} × 20L drums<br>
    Coverage: ${cov} sq.ft/L per coat</div>`;
}

/* ─── 7 · Tile Calculator ─── */
function calcTile() {
  const l = gv('tileLen'), w = gv('tileWid'), sz = parseFloat($('tileSize')?.value)||600;
  const waste = parseFloat($('tileWaste')?.value)||5, res = $('tileResult');
  if (!l||!w||!res) return;
  const room = l*w, tSqft = (sz/304.8)**2;
  const need = Math.ceil((room/tSqft)*(1+waste/100));
  const perBox = sz===600?4:sz===800?2:sz===300?9:4;
  res.innerHTML = `<div class="r-label">Tiles Required</div>
    <div class="r-val">${need}</div>
    <div class="r-unit">tiles &nbsp;·&nbsp; ≈ ${Math.ceil(need/perBox)} boxes &nbsp;·&nbsp; Room: ${room.toFixed(1)} sq.ft<br>
    Includes ${waste}% wastage for cuts</div>`;
}

/* ─── 8 · Steel Weight Calculator ─── */
function calcSteel() {
  const dia = gv('steelDia'), len = gv('steelLen'), qty = gv('steelQty')||1;
  const res = $('steelResult');
  if (!dia||!len||!res) return;
  const wpm = (dia*dia)/162, total = wpm*len*qty;
  res.innerHTML = `<div class="r-label">TMT Steel Weight</div>
    <div class="r-val">${total.toFixed(2)} kg</div>
    <div class="r-unit">${wpm.toFixed(3)} kg/m per bar &nbsp;·&nbsp; ${qty} bar(s) × ${len} m<br>
    Formula: D²÷162 (IS standard)</div>`;
}

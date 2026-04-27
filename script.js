/* ═══════════════════════════════════════════════════════════════
   CIVIL AT HAND  ·  Master Script  v10.0
   Features: Navigation, Theme, Animations, Blog, Forms, Tools
   ═══════════════════════════════════════════════════════════════ */
'use strict';

/* ── Micro helpers ───────────────────────────────────────────── */
const $   = id  => document.getElementById(id);
const $$  = sel => document.querySelectorAll(sel);
const on  = (el, ev, fn, opt) => el && el.addEventListener(ev, fn, opt);
const raf = fn  => requestAnimationFrame(fn);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/* ══════════════════════════════════════════════════════════════
   1 · THEME — zero-FOUC, persisted
   ══════════════════════════════════════════════════════════════ */
const getTheme   = () => localStorage.getItem('cah-theme') || 'dark';
const applyTheme = t  => {
  document.documentElement.setAttribute('data-theme', t);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = t === 'dark' ? '#060d1f' : '#f8fafc';
};
applyTheme(getTheme());

function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('cah-theme', next);
  updateThemeBtn();
}

function updateThemeBtn() {
  const btn = $('themeToggle');
  if (!btn) return;
  const isDark = getTheme() === 'dark';
  btn.innerHTML = isDark
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  btn.setAttribute('aria-label', btn.title);
}

/* Inject theme toggle button */
(function() {
  const btn = document.createElement('button');
  btn.id = 'themeToggle';
  btn.setAttribute('aria-label', 'Toggle colour theme');
  document.body.appendChild(btn);
  on(btn, 'click', toggleTheme);
  updateThemeBtn();
})();

/* ══════════════════════════════════════════════════════════════
   2 · PAGE TRANSITION — with BACK BUTTON FIX
   ══════════════════════════════════════════════════════════════ */
(function() {
  const veil = document.createElement('div');
  veil.id = 'pageVeil';
  document.body.appendChild(veil);

  // Fix: Detect back/forward navigation using pageshow event
  // When bfcache restores a page, remove the veil immediately
  on(window, 'pageshow', e => {
    if (e.persisted) {
      // Page was restored from bfcache (back button)
      veil.classList.add('back-fix');
      veil.classList.remove('entering', 'leaving');
      raf(() => {
        veil.classList.remove('back-fix');
        veil.classList.add('leaving');
      });
    } else {
      raf(() => veil.classList.add('leaving'));
    }
  });

  // Also handle popstate for SPAs / non-bfcache browsers
  on(window, 'popstate', () => {
    veil.classList.add('back-fix');
    veil.classList.remove('entering');
    raf(() => {
      veil.classList.remove('back-fix');
      veil.classList.add('leaving');
    });
  });

  // Intercept same-origin link clicks
  on(document, 'click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('tel:') ||
        href.startsWith('mailto:') || href.startsWith('http') ||
        href.startsWith('//') || a.target === '_blank') return;
    e.preventDefault();
    veil.classList.remove('leaving', 'back-fix');
    veil.classList.add('entering');
    setTimeout(() => { window.location.href = href; }, 420);
  });
})();

/* ══════════════════════════════════════════════════════════════
   3 · LOADER
   ══════════════════════════════════════════════════════════════ */
on(window, 'load', () => {
  const loader = $('cah-loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('done');
    on(loader, 'transitionend', () => loader.remove(), { once: true });
    startCounters();
  }, 700);
});

/* ══════════════════════════════════════════════════════════════
   4 · READING PROGRESS BAR
   ══════════════════════════════════════════════════════════════ */
(function() {
  const bar = document.createElement('div');
  bar.id = 'readProgress';
  document.body.appendChild(bar);
  let ticking = false;
  on(window, 'scroll', () => {
    if (ticking) return;
    raf(() => {
      const d = document.documentElement;
      const p = clamp(d.scrollTop / (d.scrollHeight - d.clientHeight), 0, 1);
      bar.style.transform = `scaleX(${p})`;
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
})();

/* ══════════════════════════════════════════════════════════════
   5 · CURSOR GLOW (desktop only)
   ══════════════════════════════════════════════════════════════ */
(function() {
  if (window.matchMedia('(hover:none)').matches) return;
  const g = document.createElement('div');
  g.id = 'cursorGlow';
  document.body.appendChild(g);
  let mx = 0, my = 0, cx = 0, cy = 0;
  on(window, 'mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  on(document, 'mouseleave', () => { g.style.opacity = '0'; });
  on(document, 'mouseenter', () => { g.style.opacity = '1'; });
  (function follow() { cx += (mx-cx)*.07; cy += (my-cy)*.07; g.style.left=cx+'px'; g.style.top=cy+'px'; raf(follow); })();
})();

/* ══════════════════════════════════════════════════════════════
   6 · COOKIE BANNER
   ══════════════════════════════════════════════════════════════ */
(function() {
  if (localStorage.getItem('cah-cookie')) return;
  const b = $('cookieBanner');
  if (!b) return;
  setTimeout(() => b.classList.add('show'), 2000);
  const hide = v => {
    localStorage.setItem('cah-cookie', v);
    b.style.transition = 'transform .4s, opacity .4s';
    b.style.opacity = '0';
    setTimeout(() => b.remove(), 400);
  };
  on($('cookieAccept'), 'click', () => hide('accepted'));
  on($('cookieDeny'),   'click', () => hide('declined'));
})();

/* ══════════════════════════════════════════════════════════════
   7 · HEADER SCROLL EFFECT
   ══════════════════════════════════════════════════════════════ */
(function() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let prev = 0;
  on(window, 'scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 50);
    prev = y;
  }, { passive: true });
})();

/* ══════════════════════════════════════════════════════════════
   8 · MOBILE NAV DRAWER
   ══════════════════════════════════════════════════════════════ */
(function() {
  const burger  = $('navBurger');
  const drawer  = $('navDrawer');
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function openMenu() {
    drawer?.classList.add('open');
    overlay.classList.add('show');
    burger?.classList.add('open');
    document.body.classList.add('menu-open');
    burger?.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    drawer?.classList.remove('open');
    overlay.classList.remove('show');
    burger?.classList.remove('open');
    document.body.classList.remove('menu-open');
    burger?.setAttribute('aria-expanded', 'false');
  }

  on(burger,  'click', () => drawer?.classList.contains('open') ? closeMenu() : openMenu());
  on(overlay, 'click', closeMenu);
  on($('drawerClose'), 'click', closeMenu);

  // Close on drawer link click
  drawer?.querySelectorAll('a').forEach(a => on(a, 'click', closeMenu));

  // Close on Escape
  on(document, 'keydown', e => { if (e.key === 'Escape') closeMenu(); });
})();

/* ══════════════════════════════════════════════════════════════
   9 · BACK TO TOP
   ══════════════════════════════════════════════════════════════ */
(function() {
  const btn = $('backToTop');
  if (!btn) return;
  on(window, 'scroll', () => {
    btn.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });
  on(btn, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ══════════════════════════════════════════════════════════════
   10 · INTERSECTION OBSERVER — Reveal Animations
   ══════════════════════════════════════════════════════════════ */
(function() {
  if (!('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('up'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('up'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));
})();

/* ══════════════════════════════════════════════════════════════
   11 · COUNTER ANIMATION
   ══════════════════════════════════════════════════════════════ */
function startCounters() {
  $$('[data-count]').forEach(el => {
    const target  = parseFloat(el.dataset.count);
    const suffix  = el.dataset.suffix || '';
    const dec     = parseInt(el.dataset.dec || '0');
    const dur     = 1600;
    const start   = performance.now();
    const update  = now => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * ease).toFixed(dec) + suffix;
      if (p < 1) raf(update);
    };
    raf(update);
  });
}

// Also trigger counters when they scroll into view
(function() {
  const els = $$('[data-count]');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      startCounters();
      io.disconnect();
    }
  }, { threshold: 0.3 });
  els.forEach(el => io.observe(el));
})();

/* ══════════════════════════════════════════════════════════════
   12 · FAQ ACCORDION
   ══════════════════════════════════════════════════════════════ */
(function() {
  $$('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    on(q, 'click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      $$('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
    on(q, 'keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); q.click(); } });
    q.setAttribute('role', 'button');
    q.setAttribute('tabindex', '0');
  });
})();

/* ══════════════════════════════════════════════════════════════
   13 · BLOG FILTER
   ══════════════════════════════════════════════════════════════ */
(function() {
  const btns  = $$('.filter-btn');
  const cards = $$('.blog-card[data-category]');
  if (!btns.length) return;

  btns.forEach(btn => {
    on(btn, 'click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(c => {
        const match = filter === 'all' || c.dataset.category === filter;
        c.style.display  = match ? '' : 'none';
        c.style.opacity  = match ? '1' : '0';
      });
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   14 · BLOG SYSTEM — Load & Render from blogs.json
   ══════════════════════════════════════════════════════════════ */
async function loadBlogs() {
  const grid = $('blogGrid');
  if (!grid) return;

  try {
    const res   = await fetch('data/blogs.json');
    const blogs = await res.json();

    grid.innerHTML = blogs.map((b, i) => `
      <article class="blog-card ${i===0?'feat':''} reveal" data-category="${b.category}" style="--delay:${i*.07}s">
        <div class="blog-thumb" style="background:linear-gradient(135deg,rgba(37,99,235,.18),rgba(6,13,31,.95));display:flex;align-items:center;justify-content:center;font-size:${i===0?'4':'3'}rem">
          ${b.emoji}
        </div>
        <div class="blog-body">
          <div class="blog-meta">
            <span class="blog-cat">${capitalize(b.category)}</span>
            <span class="blog-date">${formatDate(b.date)}</span>
            <span class="blog-read-time">${b.readTime}</span>
          </div>
          <h${i===0?'2':'3'}>${b.title}</h${i===0?'2':'3'}>
          <p>${b.excerpt}</p>
          <a href="blog-posts/${b.slug}.html" class="blog-read">
            ${i===0?'Read Article':'Read More'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </article>
    `).join('');

    // Re-run reveal observer for newly created elements
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('up'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Re-init filter for dynamically loaded cards
    const btns  = $$('.filter-btn');
    const cards = grid.querySelectorAll('[data-category]');
    btns.forEach(btn => {
      btn.onclick = () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        cards.forEach(c => { c.style.display = (f === 'all' || c.dataset.category === f) ? '' : 'none'; });
      };
    });

  } catch (err) {
    console.warn('Blog load error:', err);
    if (grid) grid.innerHTML = '<p style="color:var(--text3);text-align:center;padding:2rem">Blog posts could not be loaded.</p>';
  }
}

/* ══════════════════════════════════════════════════════════════
   15 · BLOG POST — Load & Render individual post
   ══════════════════════════════════════════════════════════════ */
async function loadBlogPost() {
  const postContainer = $('postContent');
  if (!postContainer) return;

  const slug = new URLSearchParams(window.location.search).get('slug')
    || window.location.pathname.replace(/.*\//, '').replace('.html', '');

  try {
    const res   = await fetch('../data/blogs.json');
    const blogs = await res.json();
    const post  = blogs.find(b => b.slug === slug || b.id === slug);
    if (!post) { postContainer.innerHTML = '<p>Post not found.</p>'; return; }

    // Update page meta
    document.title = post.title + ' | Civil At Hand';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = post.excerpt;

    // Update breadcrumb
    const bcPost = $('bcPost');
    if (bcPost) bcPost.textContent = post.title;

    // Render hero
    const heroTitle = $('postTitle');
    if (heroTitle) heroTitle.textContent = post.title;

    const heroMeta = $('postMeta');
    if (heroMeta) heroMeta.innerHTML = `
      <span class="blog-cat">${capitalize(post.category)}</span>
      <span class="blog-date">${formatDate(post.date)}</span>
      <span class="blog-read-time">${post.readTime}</span>
    `;

    // Render content blocks
    postContainer.innerHTML = post.content.map(block => {
      switch(block.type) {
        case 'intro':       return `<p class="intro-text">${block.text}</p>`;
        case 'h2':          return `<h2>${block.text}</h2>`;
        case 'h3':          return `<h3>${block.text}</h3>`;
        case 'p':           return `<p>${block.text}</p>`;
        case 'conclusion':  return `<div class="conclusion">💡 <strong>Need help?</strong> ${block.text}</div>`;
        default:            return `<p>${block.text}</p>`;
      }
    }).join('');

    // Load related posts
    const relatedGrid = $('relatedPosts');
    if (relatedGrid) {
      const related = blogs.filter(b => b.slug !== slug).slice(0, 3);
      relatedGrid.innerHTML = related.map(b => `
        <a href="${b.slug}.html" class="blog-card" style="text-decoration:none">
          <div class="blog-thumb" style="background:var(--bg3);font-size:2rem;display:flex;align-items:center;justify-content:center;aspect-ratio:16/9">${b.emoji}</div>
          <div class="blog-body">
            <div class="blog-meta"><span class="blog-cat">${capitalize(b.category)}</span><span class="blog-date">${formatDate(b.date)}</span></div>
            <h3>${b.title}</h3>
          </div>
        </a>
      `).join('');
    }

  } catch(err) {
    console.warn('Post load error:', err);
  }
}

/* ══════════════════════════════════════════════════════════════
   16 · CONTACT FORM
   ══════════════════════════════════════════════════════════════ */
(function() {
  const form = $('contactForm');
  if (!form) return;

  on(form, 'submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const orig = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate send (replace with actual endpoint)
    await new Promise(r => setTimeout(r, 1200));

    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'var(--blue-light)';
    form.reset();

    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      btn.style.background = '';
    }, 4000);
  });
})();

/* ══════════════════════════════════════════════════════════════
   17 · HERO CANVAS — Animated grid particles
   ══════════════════════════════════════════════════════════════ */
(function() {
  const canvas = $('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    if (!particles.length) initParticles();
  }

  function initParticles() {
    particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 2 + 1, o: Math.random() * .5 + .1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isDark = document.documentElement.dataset.theme !== 'light';
    const color  = isDark ? '37,99,235' : '37,99,235';

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${p.o})`;
      ctx.fill();
    });

    // Draw connections
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${color},${.15 * (1 - d/120)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    animId = raf(draw);
  }

  new ResizeObserver(resize).observe(canvas.parentElement);
  resize();
  draw();

  // Pause when not visible
  on(document, 'visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animId);
    else draw();
  });
})();

/* ══════════════════════════════════════════════════════════════
   18 · TOOLS PAGE — Calculators
   ══════════════════════════════════════════════════════════════ */
function calcBricks() {
  const l = parseFloat($('brickL')?.value||0);
  const h = parseFloat($('brickH')?.value||0);
  const t = parseFloat($('brickT')?.value||0.23);
  const waste = 1.10;
  if (!l || !h) return;
  const vol   = l * h * t;
  const bricks = Math.ceil(vol / 0.002 * waste);
  const mortar = (vol * 0.3).toFixed(3);
  showResult('brickResult', `<strong>${bricks.toLocaleString()}</strong> bricks &nbsp;|&nbsp; <strong>${mortar} m³</strong> mortar (approx)`);
}

function calcConcrete() {
  const l = parseFloat($('concL')?.value||0);
  const b = parseFloat($('concB')?.value||0);
  const h = parseFloat($('concH')?.value||0);
  const grade = $('concGrade')?.value || 'M20';
  if (!l || !b || !h) return;
  const vol = l * b * h;
  const mix = { M15:{c:1,s:2,a:4}, M20:{c:1,s:1.5,a:3}, M25:{c:1,s:1,a:2} }[grade] || {c:1,s:1.5,a:3};
  const total = mix.c + mix.s + mix.a;
  const cement_bags = Math.ceil((vol * 1.54 * mix.c / total) / 0.0347);
  const sand  = ((vol * 1.54 * mix.s / total) * 1600).toFixed(0);
  const agg   = ((vol * 1.54 * mix.a / total) * 1500).toFixed(0);
  showResult('concResult', `Volume: <strong>${vol.toFixed(3)} m³</strong><br>Cement: <strong>${cement_bags} bags</strong> · Sand: <strong>${sand} kg</strong> · Aggregate: <strong>${agg} kg</strong>`);
}

function calcSteel() {
  const len   = parseFloat($('steelLen')?.value||0);
  const dia   = parseFloat($('steelDia')?.value||12);
  const bars  = parseInt($('steelBars')?.value||1);
  if (!len || !dia || !bars) return;
  const weight = (dia * dia / 162) * len * bars;
  showResult('steelResult', `Total weight: <strong>${weight.toFixed(2)} kg</strong> (${(weight/1000).toFixed(3)} MT)`);
}

function calcFloor() {
  const l = parseFloat($('floorL')?.value||0);
  const b = parseFloat($('floorB')?.value||0);
  const t = parseFloat($('tileSz')?.value||0.6);
  const waste = 1.10;
  if (!l || !b || !t) return;
  const area  = l * b;
  const tiles = Math.ceil(area / (t * t) * waste);
  showResult('floorResult', `Area: <strong>${area.toFixed(2)} m²</strong><br>Tiles needed: <strong>${tiles}</strong> (${t*100}cm × ${t*100}cm + 10% waste)`);
}

function calcPlaster() {
  const l = parseFloat($('plastL')?.value||0);
  const h = parseFloat($('plastH')?.value||0);
  const th= parseFloat($('plastTh')?.value||0.012);
  if (!l || !h) return;
  const area = l * h;
  const vol  = area * th * 1.35;
  const cement_bags = Math.ceil(vol * (1/4.5) / 0.0347);
  const sand = (vol * (3/4.5) * 1600).toFixed(0);
  showResult('plastResult', `Area: <strong>${area.toFixed(2)} m²</strong><br>Cement: <strong>${cement_bags} bags</strong> · Sand: <strong>${sand} kg</strong>`);
}

function showResult(id, html) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = html;
  el.style.display = 'block';
  el.style.animation = 'none';
  raf(() => { el.style.animation = ''; el.classList.add('result-show'); });
}

/* Expose calculators globally */
window.calcBricks   = calcBricks;
window.calcConcrete = calcConcrete;
window.calcSteel    = calcSteel;
window.calcFloor    = calcFloor;
window.calcPlaster  = calcPlaster;

/* ══════════════════════════════════════════════════════════════
   19 · TABS
   ══════════════════════════════════════════════════════════════ */
(function() {
  $$('[data-tabs]').forEach(wrapper => {
    const tabs    = wrapper.querySelectorAll('[data-tab]');
    const panels  = wrapper.querySelectorAll('[data-panel]');
    tabs.forEach(tab => {
      on(tab, 'click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.hidden = true);
        tab.classList.add('active');
        const target = wrapper.querySelector(`[data-panel="${tab.dataset.tab}"]`);
        if (target) target.hidden = false;
      });
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   20 · SMOOTH ANCHOR SCROLL
   ══════════════════════════════════════════════════════════════ */
(function() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   21 · ACTIVE NAV LINK
   ══════════════════════════════════════════════════════════════ */
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .drawer-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ══════════════════════════════════════════════════════════════
   22 · HERO STATS REVEAL
   ══════════════════════════════════════════════════════════════ */
on(window, 'load', () => {
  $$('.hero .reveal, .hero .hero-eyebrow, .hero-h1, .hero-p, .hero-actions, .hero-phone, .hero-stats').forEach((el, i) => {
    setTimeout(() => el.classList.add('up'), 100 + i * 80);
  });
});

/* ══════════════════════════════════════════════════════════════
   23 · LOAD BLOG CONTENT (auto-init based on page)
   ══════════════════════════════════════════════════════════════ */
if ($('blogGrid'))   loadBlogs();
if ($('postContent')) loadBlogPost();

/* ══════════════════════════════════════════════════════════════
   UTILITIES
   ══════════════════════════════════════════════════════════════ */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

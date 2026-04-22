/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND  ·  World-Class Script  ·  v8.0
   ─────────────────────────────────────────────────────────────────
   All 23 features — zero dependencies — production ready
   ═══════════════════════════════════════════════════════════════════ */
'use strict';

/* ── Micro utilities ─────────────────────────────────────────── */
const $   = id  => document.getElementById(id);
const $$  = sel => document.querySelectorAll(sel);
const on  = (el, ev, fn, opt) => el && el.addEventListener(ev, fn, opt);
const raf = fn  => requestAnimationFrame(fn);
const clamp = (v,lo,hi) => Math.max(lo, Math.min(hi, v));

/* ══════════════════════════════════════════════════════════════
   1 · THEME — No-FOUC, persisted
   ══════════════════════════════════════════════════════════════ */
const getTheme   = () => localStorage.getItem('cah-theme') || 'dark';
const applyTheme = t => document.documentElement.setAttribute('data-theme', t);
applyTheme(getTheme()); /* Applied sync — no flash */

function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next); localStorage.setItem('cah-theme', next); updateThemeIcon();
}

function updateThemeIcon() {
  const btn = $('themeToggle'); if (!btn) return;
  const dark = getTheme() === 'dark';
  btn.innerHTML = dark
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  btn.title = dark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

/* Inject theme button */
(function() {
  const btn = document.createElement('button');
  btn.id = 'themeToggle'; btn.setAttribute('aria-label','Toggle theme');
  document.body.appendChild(btn);
  on(btn, 'click', toggleTheme);
  updateThemeIcon();
})();

/* ══════════════════════════════════════════════════════════════
   2 · PAGE TRANSITION VEIL
   ══════════════════════════════════════════════════════════════ */
(function() {
  const veil = document.createElement('div');
  veil.id = 'pageVeil'; document.body.appendChild(veil);
  raf(() => veil.classList.add('leaving'));

  on(document, 'click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('tel:') ||
        href.startsWith('mailto:') || href.startsWith('http') ||
        href.startsWith('//') || a.target === '_blank') return;
    e.preventDefault();
    veil.classList.remove('leaving'); veil.classList.add('entering');
    setTimeout(() => { window.location.href = href; }, 430);
  });
})();

/* ══════════════════════════════════════════════════════════════
   3 · PAGE LOADER (home only)
   ══════════════════════════════════════════════════════════════ */
on(window, 'load', () => {
  const loader = $('cah-loader'); if (!loader) return;
  setTimeout(() => {
    loader.classList.add('done');
    on(loader, 'transitionend', () => loader.remove(), { once: true });
    startHeroReveal(); animateCounters(); triggerImpactCounters();
  }, 820);
});

function startHeroReveal() {
  $$('.hero .reveal,.hero .rev-l,.hero .rev-r,.hero .rev-s,.hero .rev-bl').forEach((el,i) => {
    setTimeout(() => el.classList.add('up'), i * 75);
  });
}

/* ══════════════════════════════════════════════════════════════
   4 · READING PROGRESS BAR
   ══════════════════════════════════════════════════════════════ */
(function() {
  const bar = document.createElement('div'); bar.id = 'readProgress';
  document.body.appendChild(bar);
  let t = false;
  on(window, 'scroll', () => {
    if (!t) { raf(() => {
      const d = document.documentElement;
      bar.style.transform = `scaleX(${clamp(d.scrollTop/(d.scrollHeight-d.clientHeight),0,1)})`;
      t = false;
    }); t = true; }
  }, { passive: true });
})();

/* ══════════════════════════════════════════════════════════════
   5 · CURSOR GLOW (desktop only)
   ══════════════════════════════════════════════════════════════ */
(function() {
  if (window.matchMedia('(hover:none)').matches) return;
  const g = document.createElement('div'); g.id = 'cursorGlow';
  document.body.appendChild(g);
  let mx=0,my=0,cx=0,cy=0;
  on(window,'mousemove',e=>{mx=e.clientX;my=e.clientY;},{passive:true});
  on(document,'mouseleave',()=>{g.style.opacity='0';});
  on(document,'mouseenter',()=>{g.style.opacity='1';});
  (function follow() {
    cx += (mx-cx)*.07; cy += (my-cy)*.07;
    g.style.left=cx+'px'; g.style.top=cy+'px'; raf(follow);
  })();
})();

/* ══════════════════════════════════════════════════════════════
   6 · COOKIE BANNER
   ══════════════════════════════════════════════════════════════ */
(function() {
  if (localStorage.getItem('cah-cookie')) return;
  const b = $('cookieBanner'); if (!b) return;
  setTimeout(() => b.classList.add('show'), 1800);
  const hide = v => {
    localStorage.setItem('cah-cookie', v);
    b.style.transition = 'transform .4s ease, opacity .4s';
    b.style.opacity = '0'; b.style.transform = 'translateX(-50%) translateY(140px)';
    setTimeout(() => b.remove(), 450);
  };
  on($('cookieAccept'), 'click', () => hide('accepted'));
  on($('cookieDeny'),   'click', () => hide('declined'));
})();

/* ══════════════════════════════════════════════════════════════
   7 · BACK TO TOP
   ══════════════════════════════════════════════════════════════ */
(function() {
  const btn = $('backToTop'); if (!btn) return;
  on(window,'scroll',()=>{ btn.classList.toggle('show', window.scrollY > 320); },{passive:true});
  on(btn,'click',()=>window.scrollTo({top:0,behavior:'smooth'}));
})();

/* ══════════════════════════════════════════════════════════════
   8 · NAVIGATION
   ══════════════════════════════════════════════════════════════ */
const navPill    = document.querySelector('.nav-pill');
const navBurger  = document.querySelector('.nav-burger');
const navDrawer  = document.querySelector('.nav-drawer');
const drawerClose = document.querySelector('.drawer-close');

/* Scroll → solid */
if (navPill) {
  let nt = false;
  on(window,'scroll',()=>{
    if (!nt) { raf(()=>{ navPill.classList.toggle('solid', window.scrollY > 60); nt=false; }); nt=true; }
  },{passive:true});
}

/* Drawer */
function openDrawer() {
  if (!navDrawer||!navBurger) return;
  navBurger.classList.add('open');
  navDrawer.classList.add('open');
  navBurger.setAttribute('aria-expanded','true');
  navDrawer.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  navDrawer.querySelectorAll('a').forEach((a,i)=>{ a.style.transitionDelay=(0.06+i*.055)+'s'; });
}
function closeDrawer() {
  if (!navDrawer||!navBurger) return;
  navBurger.classList.remove('open');
  navDrawer.classList.remove('open');
  navBurger.setAttribute('aria-expanded','false');
  navDrawer.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  navDrawer.querySelectorAll('a').forEach(a=>{ a.style.transitionDelay='0s'; });
}
on(navBurger,'click',()=> navDrawer?.classList.contains('open')?closeDrawer():openDrawer());
on(drawerClose,'click',closeDrawer);
navDrawer?.querySelectorAll('a').forEach(a=>on(a,'click',closeDrawer));
on(document,'keydown',e=>{ if(e.key==='Escape') closeDrawer(); });

/* Active link detection */
(function() {
  const page = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .nav-drawer a').forEach(a=>{
    const href = a.getAttribute('href')||'';
    if (href===page || (!page && href==='index.html')) a.classList.add('active');
  });
})();

/* Footer year */
const yr = $('yr'); if (yr) yr.textContent = new Date().getFullYear();

/* ══════════════════════════════════════════════════════════════
   9 · SCROLL REVEAL (IntersectionObserver)
   ══════════════════════════════════════════════════════════════ */
const revObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if (e.isIntersecting) { e.target.classList.add('up'); revObs.unobserve(e.target); }
  });
},{threshold:.07, rootMargin:'0px 0px -44px 0px'});

$$('.reveal,.rev-l,.rev-r,.rev-s,.rev-bl,.reveal-left,.reveal-right').forEach(el=>{
  if (!el.closest('.hero')) revObs.observe(el);
});

/* ══════════════════════════════════════════════════════════════
   10 · PROGRESS BARS (scroll-triggered)
   ══════════════════════════════════════════════════════════════ */
const barContainers = new Set();
$$('.wcb-fill, .rs-fill').forEach(bar=>{
  const w = bar.getAttribute('data-w') || bar.style.width || '0';
  bar.setAttribute('data-w',w); bar.style.width='0'; bar.style.transition='none';
  const c = bar.closest('.why-card,.rating-strip'); if(c) barContainers.add(c);
});
const barObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.wcb-fill,.rs-fill').forEach(bar=>{
      raf(()=>{ bar.style.transition=''; bar.style.width=bar.getAttribute('data-w'); });
    });
    barObs.unobserve(e.target);
  });
},{threshold:.25});
barContainers.forEach(c=>barObs.observe(c));

/* ══════════════════════════════════════════════════════════════
   11 · ANIMATED COUNTERS
   ══════════════════════════════════════════════════════════════ */
function animateCounters(scope) {
  const root = scope || document;
  root.querySelectorAll('[data-count]:not([data-animated])').forEach(el=>{
    el.dataset.animated = '1';
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix||'';
    const dec    = el.dataset.dec ? +el.dataset.dec : 0;
    const dur = 1700, t0 = performance.now();
    (function tick(now) {
      const p = Math.min((now-t0)/dur, 1);
      el.textContent = (target*(1-Math.pow(1-p,3))).toFixed(dec) + (p>=1?suffix:'');
      if (p<1) raf(tick);
    })(t0);
  });
}

/* Impact bar counters */
function triggerImpactCounters() {
  const impact = document.querySelector('.impact-bar'); if (!impact) return;
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){animateCounters(impact);obs.unobserve(e.target);} });
  },{threshold:.3});
  obs.observe(impact);
}
triggerImpactCounters();

/* ══════════════════════════════════════════════════════════════
   12 · HERO CANVAS — blue-tinted animated city skyline
   ══════════════════════════════════════════════════════════════ */
(function() {
  const canvas = $('heroCanvas'); if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W,H,t=0,af,buildings=[],particles=[];

  /* Blue palette for the canvas */
  const B = n => `rgba(44,102,196,${n})`;   /* blue */
  const W2= n => `rgba(180,215,255,${n})`;  /* light blue (windows) */

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    build();
  }
  function build() {
    const n = Math.ceil(W/55)+3;
    buildings = Array.from({length:n},(_,i)=>({
      x:((i-1)/(n-2))*W, w:30+Math.random()*58,
      h:60+Math.random()*H*.45,
      floors:3+Math.floor(Math.random()*14),
      phase:Math.random()*Math.PI*2
    }));
    particles = Array.from({length:56},()=>({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*.2, vy:-.15-Math.random()*.35,
      r:.5+Math.random()*1.3, life:Math.random(), a:.06+Math.random()*.2
    }));
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    /* Deep blue sky gradient */
    const sky = ctx.createLinearGradient(0,0,0,H);
    sky.addColorStop(0,'#040e22'); sky.addColorStop(1,'#071428');
    ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);
    /* Blueprint grid */
    ctx.strokeStyle=B(.025); ctx.lineWidth=.5;
    for(let x=0;x<=W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<=H;y+=60){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}

    const ground=H*.78;
    buildings.forEach(b=>{
      const top=ground-b.h;
      /* Building fill — blue tinted */
      const grd=ctx.createLinearGradient(b.x,top,b.x,ground);
      grd.addColorStop(0,B(.055)); grd.addColorStop(1,B(0));
      ctx.fillStyle=grd; ctx.fillRect(b.x,top,b.w,b.h);
      ctx.strokeStyle=B(.09); ctx.lineWidth=.9;
      ctx.strokeRect(b.x+.5,top+.5,b.w-1,b.h-.5);
      /* Floor lines */
      const fh=b.h/b.floors;
      ctx.strokeStyle=B(.04); ctx.lineWidth=.4;
      for(let f=1;f<b.floors;f++){ctx.beginPath();ctx.moveTo(b.x,top+f*fh);ctx.lineTo(b.x+b.w,top+f*fh);ctx.stroke();}
      /* Windows — light blue glow */
      const cols=Math.max(1,Math.floor(b.w/13));
      for(let c=0;c<cols;c++){
        for(let r=0;r<b.floors-1;r++){
          if(Math.sin(t*.35+b.phase+c*1.1+r*1.8)<=.06) continue;
          const wx=b.x+5+c*13,wy=top+6+r*fh;
          const wg=ctx.createRadialGradient(wx+2.5,wy+2.5,0,wx+2.5,wy+2.5,5.5);
          wg.addColorStop(0,W2(.35)); wg.addColorStop(1,W2(.04));
          ctx.fillStyle=wg; ctx.fillRect(wx,wy,5,5);
        }
      }
    });
    /* Ground */
    ctx.strokeStyle=B(.15); ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(0,ground); ctx.lineTo(W,ground); ctx.stroke();
    const hg=ctx.createLinearGradient(0,ground-55,0,ground+18);
    hg.addColorStop(0,B(.08)); hg.addColorStop(1,B(0));
    ctx.fillStyle=hg; ctx.fillRect(0,ground-55,W,73);
    /* Particles */
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.life+=.004;
      if(p.y<0||p.life>1){p.x=Math.random()*W;p.y=H;p.life=0;}
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=B(p.a*Math.sin(p.life*Math.PI)); ctx.fill();
    });
    t+=.01; af=raf(draw);
  }

  resize();
  let rto;
  on(window,'resize',()=>{clearTimeout(rto);rto=setTimeout(resize,220);},{passive:true});
  draw();
  on(document,'visibilitychange',()=>{ if(document.hidden) cancelAnimationFrame(af); else draw(); });
})();

/* ══════════════════════════════════════════════════════════════
   13 · 3D CARD TILT (desktop only)
   ══════════════════════════════════════════════════════════════ */
(function() {
  if (window.matchMedia('(hover:none)').matches) return;
  $$('.bp-card,.svc-card,.why-card,.testi,.tool-card,.fl-card,.guide-card').forEach(card=>{
    on(card,'mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-4px)`;
    });
    on(card,'mouseleave',()=>{
      card.style.transition='transform .45s ease';
      card.style.transform='';
      setTimeout(()=>{card.style.transition='';},450);
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   14 · MAGNETIC BUTTONS (desktop only)
   ══════════════════════════════════════════════════════════════ */
(function() {
  if (window.matchMedia('(hover:none)').matches) return;
  $$('.btn-primary,.btn-gold,.btn-wa,.btn-outline').forEach(btn=>{
    on(btn,'mousemove',e=>{
      const r=btn.getBoundingClientRect();
      btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.15}px)`;
    });
    on(btn,'mouseleave',()=>{btn.style.transform='';});
  });
})();

/* ══════════════════════════════════════════════════════════════
   15 · FAQ ACCORDION
   ══════════════════════════════════════════════════════════════ */
$$('.faq-q').forEach(btn=>{
  on(btn,'click',()=>{
    const item=btn.closest('.faq-item');
    const ans=item.querySelector('.faq-a');
    const open=item.classList.contains('open');
    $$('.faq-item.open').forEach(i=>{
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded','false');
      i.querySelector('.faq-a').style.height='0';
    });
    if (!open) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded','true');
      ans.style.height=ans.scrollHeight+'px';
    }
  });
});

/* ══════════════════════════════════════════════════════════════
   16 · EXPAND / COLLAPSE (student guidance)
   ══════════════════════════════════════════════════════════════ */
$$('.expand-btn').forEach(btn=>{
  on(btn,'click',()=>{
    const wrap=btn.nextElementSibling, open=btn.classList.contains('open');
    if (open) {
      wrap.style.height='0'; btn.classList.remove('open');
      const lbl=btn.querySelector('.expand-lbl'); if(lbl) lbl.textContent='Read More';
    } else {
      wrap.style.height=wrap.scrollHeight+'px'; btn.classList.add('open');
      const lbl=btn.querySelector('.expand-lbl'); if(lbl) lbl.textContent='Show Less';
    }
  });
});

/* ══════════════════════════════════════════════════════════════
   17 · PORTFOLIO FILTER
   ══════════════════════════════════════════════════════════════ */
$$('.pf-btn').forEach(btn=>{
  on(btn,'click',()=>{
    $$('.pf-btn').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    const f=btn.dataset.filter;
    $$('.pf-card').forEach(card=>{
      const match=f==='all'||card.dataset.cat===f;
      card.style.transition='all .38s ease';
      card.style.opacity=match?'1':'.15';
      card.style.transform=match?'':'scale(.96)';
      card.style.pointerEvents=match?'all':'none';
    });
  });
});

/* ══════════════════════════════════════════════════════════════
   18 · CONTACT FORM — validation + async submit
   ══════════════════════════════════════════════════════════════ */
const contactForm = $('contactForm');
if (contactForm) {
  contactForm.querySelectorAll('.fc').forEach(f=>{
    on(f,'blur',()=>validateField(f));
    on(f,'input',()=>{ if(f.classList.contains('invalid')) validateField(f); });
  });
  function validateField(field) {
    const val=field.value.trim(), name=field.name||field.id;
    let err='';
    if (field.required && !val) err='This field is required.';
    else if (name==='phone' && val && !/^[\d\s+\-()\u0900-\u097F]{7,15}$/.test(val)) err='Enter a valid phone number.';
    else if (field.type==='email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) err='Enter a valid email address.';
    let hint=field.nextElementSibling;
    if (!hint||!hint.classList.contains('field-hint')) {
      hint=document.createElement('span'); hint.className='field-hint';
      field.parentNode.insertBefore(hint,field.nextSibling);
    }
    hint.textContent=err;
    field.classList.toggle('invalid',!!err);
    field.style.borderColor=err?'var(--red)':'';
    return !err;
  }
  on(contactForm,'submit',async e=>{
    e.preventDefault();
    let ok=true;
    contactForm.querySelectorAll('.fc[required]').forEach(f=>{ if(!validateField(f)) ok=false; });
    if (!ok) { showToast('Please fix the errors above.',4000,true); return; }
    const btn=contactForm.querySelector('[type=submit]');
    const orig=btn.innerHTML;
    btn.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:_spin .8s linear infinite"><path d="M21 12a9 9 0 11-6.22-8.56"/></svg> Sending…`;
    btn.disabled=true;
    await new Promise(r=>setTimeout(r,1500)); /* Replace with real API call */
    contactForm.reset();
    contactForm.querySelectorAll('.fc').forEach(f=>{ f.style.borderColor=''; f.classList.remove('invalid'); });
    contactForm.querySelectorAll('.field-hint').forEach(h=>h.remove());
    btn.innerHTML=orig; btn.disabled=false;
    const ok2=$('formOk');
    if (ok2) { ok2.classList.add('show'); setTimeout(()=>ok2.classList.remove('show'),7000); }
    else showToast('✓ Message sent! We\'ll reply within 24 hours.');
  });
}

/* ══════════════════════════════════════════════════════════════
   19 · TOAST
   ══════════════════════════════════════════════════════════════ */
function showToast(msg, ms=4200, isError=false) {
  $('toast')?.remove();
  const el=document.createElement('div'); el.id='toast'; el.textContent=msg;
  if(isError) el.style.borderColor='var(--red)';
  document.body.appendChild(el);
  raf(()=>{ el.style.transform='translateY(0)'; el.style.opacity='1'; });
  setTimeout(()=>{
    el.style.transform='translateY(20px)'; el.style.opacity='0';
    setTimeout(()=>el.remove(),430);
  },ms);
}

/* ══════════════════════════════════════════════════════════════
   20 · SMOOTH ANCHOR SCROLL
   ══════════════════════════════════════════════════════════════ */
$$('a[href^="#"]').forEach(a=>{
  on(a,'click',e=>{
    const id=a.getAttribute('href').slice(1), tgt=$(id); if(!tgt) return;
    e.preventDefault();
    window.scrollTo({top:tgt.getBoundingClientRect().top+scrollY-90,behavior:'smooth'});
  });
});

/* ══════════════════════════════════════════════════════════════
   21 · SHARE BUTTONS
   ══════════════════════════════════════════════════════════════ */
$$('[data-share]').forEach(btn=>{
  on(btn,'click',()=>{
    const t=btn.dataset.share, url=encodeURIComponent(location.href);
    const txt=encodeURIComponent('Check out Civil At Hand – Premium Civil Engineering Services India!');
    if(t==='wa')   window.open('https://wa.me/?text='+txt+'%20'+url,'_blank');
    if(t==='fb')   window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'_blank');
    if(t==='copy') navigator.clipboard.writeText(location.href).then(()=>{
      const o=btn.innerHTML; btn.innerHTML='✓ Copied!'; btn.style.color='var(--b300)';
      setTimeout(()=>{ btn.innerHTML=o; btn.style.color=''; },2000);
    });
  });
});

/* Inject _spin keyframe */
const ks=document.createElement('style');
ks.textContent='@keyframes _spin{to{transform:rotate(360deg)}}';
document.head.appendChild(ks);

/* ══════════════════════════════════════════════════════════════
   22 · HERO PARALLAX (subtle depth on mouse move)
   ══════════════════════════════════════════════════════════════ */
(function() {
  const hero = document.querySelector('.hero'); if (!hero) return;
  if (window.matchMedia('(hover:none)').matches) return;
  on(hero,'mousemove',e=>{
    const r=hero.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    const card=hero.querySelector('.bp-card');
    const badges=hero.querySelectorAll('.badge-float');
    if(card) card.style.transform=`perspective(1200px) rotateX(${-y*4}deg) rotateY(${x*4}deg) translateY(-5px)`;
    badges.forEach((b,i)=>{ b.style.transform=`translate(${x*(8+i*4)}px,${y*(6+i*3)}px)`; });
  });
  on(hero,'mouseleave',()=>{
    const card=hero.querySelector('.bp-card');
    if(card){card.style.transition='transform .5s ease';card.style.transform='';setTimeout(()=>{card.style.transition='';},500);}
    hero.querySelectorAll('.badge-float').forEach(b=>{b.style.transform='';});
  });
})();

/* ══════════════════════════════════════════════════════════════
   23 · ALL 8 LIVE CALCULATORS
   ══════════════════════════════════════════════════════════════ */
const fmtINR = n => {
  n=Math.round(n);
  if(n>=1e7) return (n/1e7).toFixed(1)+' Cr';
  if(n>=1e5) return (n/1e5).toFixed(1)+' L';
  return n.toLocaleString('en-IN');
};
const gv  = id => parseFloat($(id)?.value)||0;
const gel = id => $(id);

/* 1 — Construction Cost */
gel('costCalcForm')?.addEventListener('input',()=>{
  const a=gv('costArea'),t=gel('costType')?.value,f=+gel('costFloor')?.value||1;
  const rt={basic:1700,standard:2200,premium:3000,luxury:4200};
  const r=rt[t]||2200,tot=a*r*f;
  const res=gel('costResult'); if(!res) return;
  if(a>0) res.innerHTML=`<div class="r-label">Estimated Range</div><div class="r-val">₹${fmtINR(tot*.92)} – ₹${fmtINR(tot*1.1)}</div><div class="r-unit">${a} sq.ft × ${f} floor(s) · ${t} finish @ ₹${r}/sq.ft</div>`;
  else res.innerHTML='<div class="r-label" style="opacity:.4">Enter area above to calculate</div>';
});

/* 2 — Material Estimator */
gel('matEstForm')?.addEventListener('input',()=>{
  const a=gv('matArea'),fl=+gel('matFloors')?.value||1;
  const res=gel('matResult'); if(!a||!res) return;
  const tot=a*fl;
  const row=(e,l,v,u)=>`<div style="background:rgba(44,102,196,.07);border-radius:10px;padding:12px;border:1px solid rgba(44,102,196,.14)"><div style="font-size:10px;text-transform:uppercase;color:var(--tx3);margin-bottom:4px;font-family:var(--f-brand);font-weight:700;letter-spacing:1px">${e} ${l}</div><div style="font-weight:800;color:var(--b200);font-size:1rem;font-family:var(--f-brand)">${v} <span style="font-size:.75rem;color:var(--tx3)">${u}</span></div></div>`;
  res.innerHTML=`<div class="r-label">Approx. Materials — ${tot} sq.ft</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px">${row('🧱','Cement',Math.round((tot/100)*42),'bags')}${row('🪨','Sand',Math.round((tot/100)*125),'cft')}${row('🔩','Aggregate',Math.round((tot/100)*155),'cft')}${row('⚙️','Steel TMT',Math.round((tot/100)*520),'kg')}${row('🔶','Bricks',Math.round((tot/100)*1050),'nos')}${row('💧','Water',Math.round((tot/100)*900),'litres')}</div><div class="r-unit" style="margin-top:12px">Indicative only — contact us for exact BOQ</div>`;
});

/* 3 — Area Calculator */
(function(){
  const af=gel('areaCalcForm'); if(!af) return;
  const ss=gel('areaShape'),fl=gel('areaFields'),ar=gel('areaCalcResult');
  const cfg={rectangle:[['aLen','Length (ft)'],['aWid','Width (ft)']],circle:[['aRad','Radius (ft)']],triangle:[['aTB','Base (ft)'],['aTH','Height (ft)']],trapezoid:[['aTa','Side A (ft)'],['aTb','Side B (ft)'],['aTH','Height (ft)']],lshape:[['aLa','Total Length'],['aLb','Total Width'],['aLc','Cutout L'],['aLd','Cutout W']]};
  function bld(sh){if(!fl)return;fl.innerHTML=(cfg[sh]||[]).map(([id,l])=>`<div class="fg"><label>${l}</label><input type="number" id="${id}" class="fc" placeholder="0" min="0" step=".01"/></div>`).join('');fl.querySelectorAll('input').forEach(i=>i.addEventListener('input',calc));}
  function calc(){const sh=ss?.value;let s=0;const v=id=>parseFloat($(id)?.value)||0;if(sh==='rectangle')s=v('aLen')*v('aWid');else if(sh==='circle')s=Math.PI*v('aRad')**2;else if(sh==='triangle')s=.5*v('aTB')*v('aTH');else if(sh==='trapezoid')s=.5*(v('aTa')+v('aTb'))*v('aTH');else if(sh==='lshape')s=v('aLa')*v('aLb')-v('aLc')*v('aLd');if(s>0&&ar)ar.innerHTML=`<div class="r-label">Calculated Area</div><div class="r-val">${s.toFixed(2)}</div><div class="r-unit">sq.ft · ${(s*.0929).toFixed(2)} sq.m · ${(s/9).toFixed(3)} sq.gaj</div>`;}
  if(ss){ss.addEventListener('change',()=>{bld(ss.value);if(ar)ar.innerHTML='';});bld(ss.value);}
})();

/* 4 — Unit Converter */
function convertUnit(){
  const v=parseFloat(gel('ucVal')?.value)||0,t=gel('ucType')?.value,o=gel('ucOut'); if(!o||!v) return;
  const m={sqft_sqm:[v*.0929,'sq.m'],sqm_sqft:[v*10.7639,'sq.ft'],sqyd_sqft:[v*9,'sq.ft'],sqft_sqyd:[v/9,'sq.yd'],acre_sqft:[v*43560,'sq.ft'],gaj_sqft:[v*9,'sq.ft'],sqft_gaj:[v/9,'Gaj'],ft_m:[v*.3048,'m'],m_ft:[v*3.28084,'ft'],inch_cm:[v*2.54,'cm'],cm_inch:[v*.3937,'inch'],cft_cum:[v*.02832,'m³'],cum_cft:[v*35.3147,'cft'],kg_lb:[v*2.20462,'lb'],lb_kg:[v*.45359,'kg'],ton_kg:[v*1000,'kg'],kg_ton:[v/1000,'MT']};
  if(m[t]){const[r,u]=m[t];o.innerHTML=`<div class="r-label">Result</div><div class="r-val">${r.toFixed(4)}</div><div class="r-unit">${u}</div>`;}
}
gel('ucVal')?.addEventListener('input',convertUnit);
gel('ucType')?.addEventListener('change',convertUnit);

/* 5 — Concrete Mix */
function calcConcrete(){
  const v=gv('concreteVol'),g=gel('concreteGrade')?.value,res=gel('concreteResult'); if(!v||!res) return;
  const dry=v*1.54;
  const mx={M10:{c:1/10,s:3/10,a:6/10,n:'1:3:6',wc:.6},M15:{c:1/7,s:2/7,a:4/7,n:'1:2:4',wc:.55},M20:{c:1/5.5,s:1.5/5.5,a:3/5.5,n:'1:1.5:3',wc:.5},M25:{c:1/4,s:1/4,a:2/4,n:'1:1:2',wc:.45},M30:{c:1/3.5,s:1/3.5,a:1.5/3.5,n:'1:1:1.5',wc:.4}};
  const m=mx[g]; if(!m) return;
  const cem=((dry*m.c)/.0347).toFixed(1),sand=(dry*m.s).toFixed(3),agg=(dry*m.a).toFixed(3),wat=(parseFloat(cem)*50*m.wc).toFixed(0);
  const box=(l,v,u)=>`<div style="background:rgba(44,102,196,.08);border:1px solid rgba(44,102,196,.18);border-radius:10px;padding:14px;text-align:center"><div style="font-size:9px;color:var(--tx3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-family:var(--f-brand);font-weight:700">${l}</div><div style="font-weight:800;color:var(--b200);font-size:1.2rem;font-family:var(--f-brand)">${v}</div><div style="font-size:10px;color:var(--tx3);margin-top:2px">${u}</div></div>`;
  res.innerHTML=`<div class="r-label">${g} Mix — Ratio ${m.n}</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px">${box('Cement',cem,'bags (50kg)')}${box('Sand',sand,'m³')}${box('Aggregate',agg,'m³')}${box('Water',wat,'litres')}</div><div class="r-unit" style="margin-top:12px">IS:10262 based. For ${v} m³ dry volume.</div>`;
}

/* 6 — Paint */
function calcPaint(){
  const a=gv('paintArea'),c=+gel('paintCoats')?.value||2,pt=gel('paintType')?.value,res=gel('paintResult'); if(!a||!res) return;
  const cov={interior:200,exterior:150,primer:100,enamel:120}[pt]||200;
  const l=(a*c)/cov;
  res.innerHTML=`<div class="r-label">Paint Required</div><div class="r-val">${l.toFixed(2)} L</div><div class="r-unit">≈ ${Math.ceil(l/4)} × 4L cans · ${Math.ceil(l/20)} × 20L drums<br>Coverage: ${cov} sq.ft/L per coat</div>`;
}

/* 7 — Tiles */
function calcTile(){
  const l=gv('tileLen'),w=gv('tileWid'),sz=parseFloat(gel('tileSize')?.value)||600;
  const ws=parseFloat(gel('tileWaste')?.value)||5,res=gel('tileResult'); if(!l||!w||!res) return;
  const room=l*w,ts=(sz/304.8)**2,n=Math.ceil((room/ts)*(1+ws/100));
  const pb=sz===600?4:sz===800?2:sz===300?9:4;
  res.innerHTML=`<div class="r-label">Tiles Required</div><div class="r-val">${n}</div><div class="r-unit">tiles · ≈ ${Math.ceil(n/pb)} boxes · Room: ${room.toFixed(1)} sq.ft<br>Includes ${ws}% wastage</div>`;
}

/* 8 — Steel Weight */
function calcSteel(){
  const d=gv('steelDia'),l=gv('steelLen'),q=gv('steelQty')||1,res=gel('steelResult'); if(!d||!l||!res) return;
  const wpm=(d*d)/162,tot=wpm*l*q;
  res.innerHTML=`<div class="r-label">TMT Steel Weight</div><div class="r-val">${tot.toFixed(2)} kg</div><div class="r-unit">${wpm.toFixed(3)} kg/m per bar · ${q} bar(s) × ${l} m<br>Formula: D²÷162 (IS standard)</div>`;
}

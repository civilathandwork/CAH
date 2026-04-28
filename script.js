/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND  ·  Master Stylesheet  ·  v10.0
   Brand: Professional Blue × Platinum × Amber Gold
   Fixed dark theme — no toggle
   ═══════════════════════════════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

/* ── DESIGN TOKENS ─────────────────────────────────────────────── */
:root {
  /* Blues */
  --b950: #020a1a; --b900: #040d1e; --b850: #060f24; --b800: #0a172e;
  --b700: #102440; --b600: #163660; --b500: #1e4a80; --b400: #2660a8;
  --b300: #4080d0; --b200: #6aa0e0; --b100: #a8c8f0; --b050: #ddeeff;

  /* Gold accents */
  --g: #c8a84b; --g1: #e0c060; --g2: #a07830;
  --g-bg: rgba(200,168,75,.1); --g-bd: rgba(200,168,75,.22);

  /* System */
  --wa:   #25D366;
  --err:  #ef4444;
  --ok:   #22c55e;
  --warn: #f59e0b;

  /* Typography */
  --f-head: 'Plus Jakarta Sans', system-ui, sans-serif;
  --f-body: 'Inter', system-ui, sans-serif;
  --f-mono: 'JetBrains Mono', monospace;

  /* Layout */
  --wrap: 1240px;
  --pad:  clamp(16px, 4vw, 48px);
  --nh:   70px;
  --gap:  clamp(60px, 8vw, 110px);
  --r1: 4px; --r2: 8px; --r3: 14px; --r4: 20px; --r5: 32px; --rpill: 100px;

  /* Surfaces */
  --bg:  #040d1e;
  --s1:  #060f24;
  --s2:  #091428;
  --s3:  #0d1c38;
  --s4:  #112248;

  /* Borders */
  --bd:  rgba(255,255,255,.07);
  --bd2: rgba(255,255,255,.12);
  --bdb: rgba(64,128,208,.28);

  /* Text */
  --tx1: #eef2ff;
  --tx2: #a8bcd8;
  --tx3: #607090;

  /* Shadows */
  --sh-sm: 0 2px 10px rgba(0,0,0,.4);
  --sh:    0 8px 36px rgba(0,0,0,.5);
  --sh-lg: 0 20px 70px rgba(0,0,0,.65);
  --sh-b:  0 4px 28px rgba(38,96,168,.35);
  --glow:  0 0 40px rgba(64,128,208,.3);

  /* Motion */
  --ease:   cubic-bezier(.25,.46,.45,.94);
  --spring: cubic-bezier(.34,1.56,.64,1);
  --t1: .15s; --t2: .28s; --t3: .5s;
}

/* ── RESET ─────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
body { font-family: var(--f-body); background: var(--bg); color: var(--tx1); line-height: 1.72; overflow-x: hidden; }
img { max-width: 100%; display: block; height: auto; }
a { text-decoration: none; color: inherit; }
ul, ol { list-style: none; }
button { cursor: pointer; font-family: var(--f-body); border: none; background: none; }
strong { font-weight: 700; }
address { font-style: normal; }
::selection { background: rgba(64,128,208,.3); color: #fff; }
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--s1); }
::-webkit-scrollbar-thumb { background: var(--b600); border-radius: 3px; }

/* ── LAYOUT ────────────────────────────────────────────────────── */
.container { max-width: var(--wrap); margin: 0 auto; padding: 0 var(--pad); }
.section    { padding: var(--gap) 0; }
.tc         { text-align: center; }

/* ── TYPOGRAPHY ────────────────────────────────────────────────── */
h1, h2, h3, h4 {
  font-family: var(--f-head);
  font-weight: 700;
  line-height: 1.18;
  color: var(--tx1);
  letter-spacing: -.02em;
}
h1 { font-size: clamp(2.2rem, 5vw, 4.2rem); }
h2 { font-size: clamp(1.7rem, 3vw, 2.7rem); }
h3 { font-size: clamp(1.05rem, 1.8vw, 1.45rem); }
h4 { font-size: 1rem; }

.display {
  font-family: var(--f-head);
  font-size: clamp(2rem, 4.5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -.035em;
}
.headline {
  font-family: var(--f-head);
  font-size: clamp(1.6rem, 2.8vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -.025em;
}
.sub { font-size: clamp(.9rem, 1.2vw, 1.02rem); color: var(--tx2); line-height: 1.8; max-width: 62ch; }
.lead { font-size: clamp(.98rem, 1.3vw, 1.1rem); color: var(--tx2); line-height: 1.84; max-width: 64ch; }

.text-blue {
  background: linear-gradient(120deg, var(--b200) 0%, var(--b100) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.text-gold {
  background: linear-gradient(120deg, var(--g2) 0%, var(--g) 50%, var(--g1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Tag / badge */
.tag {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--f-head);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--b200);
  padding: 5px 14px;
  border: 1px solid rgba(64,128,208,.25);
  border-radius: var(--rpill);
  background: rgba(64,128,208,.08);
}
.tag-dot {
  width: 6px; height: 6px;
  background: var(--b200);
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 8px var(--b200);
  animation: tagpulse 2.4s ease infinite;
}
@keyframes tagpulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: .3; transform: scale(.5); }
}

.sec-head { margin-bottom: clamp(36px, 5vw, 64px); }
.sec-head .tag { margin-bottom: 16px; display: inline-flex; }

/* ── BUTTONS ───────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  border-radius: var(--rpill);
  font-family: var(--f-head);
  font-size: .875rem;
  font-weight: 700;
  letter-spacing: -.01em;
  transition: all var(--t2) var(--ease);
  cursor: pointer;
  border: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}
.btn svg { flex-shrink: 0; transition: transform var(--t1); }
.btn:hover svg { transform: translateX(3px); }
.btn:active { transform: scale(.97) !important; }

.btn-primary {
  background: linear-gradient(135deg, var(--b600), var(--b400));
  color: #fff;
  box-shadow: var(--sh-b);
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 40px rgba(38,96,168,.5); }

.btn-gold {
  background: linear-gradient(135deg, var(--g2), var(--g), var(--g1));
  color: #0a1628;
  font-weight: 800;
  box-shadow: 0 4px 24px rgba(200,168,75,.35);
}
.btn-gold:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(200,168,75,.5); }

.btn-wa {
  background: var(--wa);
  color: #fff;
  box-shadow: 0 4px 20px rgba(37,211,102,.3);
}
.btn-wa:hover { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(37,211,102,.45); }

.btn-outline {
  background: transparent;
  color: var(--b200);
  border: 1.5px solid rgba(64,128,208,.3);
}
.btn-outline:hover { background: rgba(64,128,208,.1); border-color: var(--b300); transform: translateY(-2px); }

.btn-ghost {
  background: transparent;
  color: var(--tx2);
  border: 1.5px solid var(--bd2);
}
.btn-ghost:hover { background: var(--s3); color: var(--tx1); transform: translateY(-2px); }

.btn-lg  { padding: 16px 38px; font-size: .94rem; }
.btn-sm  { padding: 8px 18px; font-size: .8rem; }
.btn-xs  { padding: 6px 14px; font-size: .74rem; }
.btn-full { width: 100%; justify-content: center; }

/* ── PAGE VEIL (transition) ────────────────────────────────────── */
#pageVeil {
  position: fixed; inset: 0; z-index: 89999;
  pointer-events: none;
  background: var(--b950);
  transform: scaleY(0); transform-origin: bottom;
  transition: transform .42s var(--ease);
}
#pageVeil.entering { transform: scaleY(1); pointer-events: all; }
#pageVeil.leaving  { transform-origin: top; transform: scaleY(0); }

/* ── LOADER ────────────────────────────────────────────────────── */
#cah-loader {
  position: fixed; inset: 0; background: var(--bg); z-index: 99999;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: opacity .6s var(--ease), visibility .6s;
}
#cah-loader.done { opacity: 0; visibility: hidden; pointer-events: none; }
.ld-ring { position: relative; width: 68px; height: 68px; margin-bottom: 26px; }
.ld-ring::before {
  content: ''; position: absolute; inset: 0; border-radius: 50%;
  border: 2px solid rgba(64,128,208,.12); border-top-color: var(--b400);
  animation: spin 1.1s linear infinite;
}
.ld-ring::after {
  content: ''; position: absolute; inset: 11px; border-radius: 50%;
  border: 1.5px solid rgba(200,168,75,.1); border-bottom-color: var(--g);
  animation: spin 1.9s linear infinite reverse;
}
.ld-icon  { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.ld-path  { stroke-dasharray: 200; stroke-dashoffset: 200; animation: draw .85s var(--ease) .1s forwards; }
.ld-brand { font-family: var(--f-head); font-size: .9rem; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; color: var(--b200); margin-bottom: 5px; opacity: 0; animation: fadeUp .5s ease .42s forwards; }
.ld-sub   { font-size: .66rem; letter-spacing: 2.5px; text-transform: uppercase; color: var(--tx3); margin-bottom: 22px; opacity: 0; animation: fadeUp .5s ease .52s forwards; }
.ld-bar   { width: 140px; height: 2px; background: rgba(64,128,208,.12); border-radius: 2px; overflow: hidden; }
.ld-fill  { height: 100%; background: linear-gradient(90deg, var(--b700), var(--b300)); animation: load .95s var(--ease) forwards; }

@keyframes spin    { to { transform: rotate(360deg); } }
@keyframes draw    { to { stroke-dashoffset: 0; } }
@keyframes fadeUp  { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@keyframes load    { to { width: 100%; } }

/* ── READING PROGRESS BAR ──────────────────────────────────────── */
#readProgress {
  position: fixed; top: 0; left: 0; right: 0; height: 2px; z-index: 99998;
  background: linear-gradient(90deg, var(--b700), var(--b300));
  transform-origin: left; transform: scaleX(0);
  transition: transform .08s linear;
}

/* ── NAVIGATION ────────────────────────────────────────────────── */
.site-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 9000;
  padding: 10px var(--pad);
  pointer-events: none;
}
.nav-pill {
  max-width: var(--wrap); margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: var(--nh); padding: 0 24px;
  background: rgba(4,13,30,.85);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid rgba(64,128,208,.15);
  border-radius: var(--r5);
  transition: all var(--t3) var(--ease);
  pointer-events: all;
}
.nav-pill.scrolled {
  background: rgba(4,13,30,.97);
  border-color: rgba(64,128,208,.25);
  box-shadow: 0 8px 40px rgba(0,0,0,.45);
}

/* Brand */
.nav-brand { display: flex; align-items: center; gap: 11px; flex-shrink: 0; }
.brand-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  background: linear-gradient(135deg, var(--b700), var(--b400));
  border: 1px solid rgba(64,128,208,.35);
  display: flex; align-items: center; justify-content: center;
  transition: all var(--t2);
  box-shadow: var(--sh-b);
}
.nav-brand:hover .brand-icon { transform: scale(1.06); box-shadow: var(--glow); }
.brand-text { line-height: 1.2; }
.brand-name {
  font-family: var(--f-head); font-size: .94rem; font-weight: 800;
  color: var(--tx1); white-space: nowrap; letter-spacing: -.02em; display: block;
}
.brand-name span { color: var(--b200); }
.brand-sub {
  font-family: var(--f-body); font-size: 9px; letter-spacing: 2px;
  text-transform: uppercase; color: var(--tx3); display: block;
}

/* Desktop links */
.nav-links { display: flex; align-items: center; gap: 2px; }
.nav-links a {
  font-family: var(--f-head); font-size: .82rem; font-weight: 500;
  color: var(--tx3); padding: 7px 11px; border-radius: var(--r2);
  transition: all var(--t1); white-space: nowrap; position: relative;
}
.nav-links a:hover { color: var(--tx1); background: rgba(64,128,208,.08); }
.nav-links a.active { color: var(--b200); background: rgba(64,128,208,.1); }
.nav-links a.active::after {
  content: ''; position: absolute; bottom: 1px; left: 50%;
  transform: translateX(-50%); width: 14px; height: 2px;
  background: var(--b300); border-radius: 2px;
}
.nav-cta {
  margin-left: 8px !important;
  padding: 9px 22px !important;
  background: linear-gradient(135deg, var(--b600), var(--b400)) !important;
  color: #fff !important;
  border-radius: var(--rpill) !important;
  font-weight: 700 !important;
  box-shadow: var(--sh-b) !important;
}
.nav-cta:hover { transform: translateY(-1px) !important; box-shadow: 0 8px 28px rgba(38,96,168,.5) !important; }

/* Auth zone in nav */
.nav-auth-zone { display: flex; align-items: center; gap: 8px; margin-left: 6px; }
.nav-user-btn {
  display: flex; align-items: center; gap: 8px;
  padding: 5px 13px 5px 5px; border-radius: var(--rpill);
  background: rgba(64,128,208,.1); border: 1px solid rgba(64,128,208,.2);
  cursor: pointer; transition: all var(--t1); color: var(--tx1);
  position: relative;
}
.nav-user-btn:hover { background: rgba(64,128,208,.18); border-color: rgba(64,128,208,.38); }
.nav-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, var(--b500), var(--b300));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--f-head); font-size: .7rem; font-weight: 800; color: #fff;
}
.nav-uname {
  font-family: var(--f-head); font-size: .8rem; font-weight: 600; color: var(--tx1);
  max-width: 90px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.nav-chevron { color: var(--tx3); transition: transform var(--t1); }
.nav-user-btn[aria-expanded="true"] .nav-chevron { transform: rotate(180deg); }

/* Dropdown */
.nav-dropdown {
  position: absolute; top: calc(100% + 8px); right: 0; width: 230px;
  background: var(--s2); border: 1px solid var(--bd2);
  border-radius: var(--r3); box-shadow: var(--sh-lg); z-index: 9100;
  opacity: 0; visibility: hidden; transform: translateY(-6px);
  transition: all var(--t2) var(--ease); pointer-events: none;
}
.nav-dropdown.open { opacity: 1; visibility: visible; transform: translateY(0); pointer-events: all; }
.nd-header { display: flex; align-items: center; gap: 11px; padding: 14px 16px; }
.nd-avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: linear-gradient(135deg, var(--b500), var(--b300));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--f-head); font-size: .82rem; font-weight: 800; color: #fff; flex-shrink: 0;
}
.nd-name  { font-family: var(--f-head); font-size: .85rem; font-weight: 700; color: var(--tx1); }
.nd-email { font-size: .7rem; color: var(--tx3); font-family: var(--f-mono); margin-top: 1px; }
.nd-divider { height: 1px; background: var(--bd); }
.nd-item {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px; font-family: var(--f-head); font-size: .82rem; font-weight: 500;
  color: var(--tx2); text-decoration: none; transition: all var(--t1);
  cursor: pointer; width: 100%; text-align: left; background: none; border: none;
}
.nd-item:hover { background: rgba(64,128,208,.08); color: var(--tx1); }
.nd-item svg { color: var(--tx3); flex-shrink: 0; }
.nd-item:hover svg { color: var(--b200); }
.nd-signout { color: #fca5a5; }
.nd-signout:hover { background: rgba(239,68,68,.07) !important; color: #ef4444 !important; }

/* Hamburger */
.nav-burger {
  display: none; flex-direction: column; justify-content: center;
  gap: 5px; width: 38px; height: 38px; padding: 7px;
  border-radius: var(--r2); transition: background var(--t1); cursor: pointer;
}
.nav-burger:hover { background: rgba(64,128,208,.1); }
.nav-burger span {
  display: block; width: 20px; height: 1.5px; background: var(--tx1);
  border-radius: 2px; transition: all var(--t2) var(--ease); transform-origin: center;
}
.nav-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile Drawer */
.nav-drawer {
  position: fixed; inset: 0; z-index: 8999;
  background: rgba(3,9,22,.97);
  backdrop-filter: blur(32px);
  display: flex; flex-direction: column;
  align-items: flex-start; justify-content: center;
  padding: 80px var(--pad) 44px;
  transform: translateX(100%);
  transition: transform var(--t3) var(--ease);
  pointer-events: none;
}
.nav-drawer.open { transform: translateX(0); pointer-events: all; }
.drawer-close {
  position: absolute; top: 20px; right: 20px;
  width: 42px; height: 42px; border-radius: 50%;
  background: var(--s3); border: 1px solid var(--bd2);
  color: var(--tx1); font-size: 1.1rem; display: flex;
  align-items: center; justify-content: center; cursor: pointer;
  transition: all var(--t1);
}
.drawer-close:hover { background: rgba(64,128,208,.15); }
.drawer-brand { display: flex; align-items: center; gap: 12px; margin-bottom: 40px; }
.drawer-brand-name { font-family: var(--f-head); font-size: 1rem; font-weight: 800; color: var(--tx1); }
.drawer-brand-sub  { font-size: .72rem; letter-spacing: 2px; text-transform: uppercase; color: var(--tx3); margin-top: 2px; }
.nav-drawer a {
  font-family: var(--f-head); font-size: 1.4rem; font-weight: 700;
  color: var(--tx2); padding: 10px 0; width: 100%;
  border-bottom: 1px solid var(--bd); display: block;
  transition: color var(--t1);
}
.nav-drawer a:hover { color: var(--b200); }
.drawer-cta { margin-top: 32px; width: 100%; display: flex; flex-direction: column; gap: 10px; }
.drawer-auth-zone { width: 100%; margin-bottom: 16px; }
.drawer-user-card {
  display: flex; align-items: center; gap: 12px;
  background: rgba(64,128,208,.08); border: 1px solid rgba(64,128,208,.18);
  border-radius: var(--r3); padding: 12px; margin-bottom: 8px;
}

/* ── WHATSAPP BUTTON (clean chat icon, no blur) ────────────────── */
.wa-float {
  position: fixed; bottom: 26px; right: 26px; z-index: 8000;
  width: 54px; height: 54px; border-radius: 50%;
  background: var(--wa);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 28px rgba(37,211,102,.42);
  transition: transform var(--t2) var(--spring), box-shadow var(--t2);
  isolation: isolate;
  will-change: transform;
}
.wa-float:hover { transform: scale(1.12); box-shadow: 0 12px 44px rgba(37,211,102,.6); }
.wa-float svg { width: 26px; height: 26px; fill: #fff; display: block; }
.wa-float::before {
  content: ''; position: absolute; inset: -8px; border-radius: 50%;
  border: 2px solid rgba(37,211,102,.38);
  animation: waPulse 2.8s ease infinite; pointer-events: none;
}
@keyframes waPulse {
  0%  { opacity: .5; transform: scale(1); }
  65% { opacity: 0; transform: scale(1.5); }
  100%{ opacity: 0; transform: scale(1.5); }
}
.wa-float-tip {
  position: absolute; right: calc(100% + 12px); top: 50%;
  transform: translateY(-50%) translateX(8px);
  background: var(--s3); color: var(--tx1);
  font-size: .72rem; font-weight: 600; font-family: var(--f-head);
  white-space: nowrap; padding: 6px 12px;
  border-radius: var(--r2); border: 1px solid var(--bd2);
  pointer-events: none; opacity: 0; transition: all var(--t2);
}
.wa-float:hover .wa-float-tip { opacity: 1; transform: translateY(-50%) translateX(0); }

/* Back to top */
#backToTop {
  position: fixed; bottom: 26px; right: 90px; z-index: 8001;
  width: 42px; height: 42px; border-radius: 50%;
  background: var(--s2); border: 1px solid var(--bd2);
  color: var(--b200); display: flex; align-items: center; justify-content: center;
  opacity: 0; transform: translateY(20px); pointer-events: none;
  transition: all var(--t2); box-shadow: var(--sh-sm); cursor: pointer;
}
#backToTop.show { opacity: 1; transform: translateY(0); pointer-events: all; }
#backToTop:hover { background: rgba(64,128,208,.12); border-color: var(--b400); transform: translateY(-3px); }

/* Cookie banner */
#cookieBanner {
  position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(150px);
  z-index: 9800; width: min(580px, calc(100vw - 28px));
  background: var(--s2); border: 1px solid var(--bd2);
  border-radius: var(--r4); padding: 18px 22px;
  box-shadow: var(--sh-lg); transition: transform .5s var(--spring);
}
#cookieBanner.show { transform: translateX(-50%) translateY(0); }
.cookie-inner { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.cookie-inner p { font-size: .83rem; color: var(--tx2); flex: 1; min-width: 200px; line-height: 1.6; }
.cookie-inner a { color: var(--b200); text-decoration: underline; }
.cookie-btns { display: flex; gap: 9px; flex-shrink: 0; }

/* Toast */
#toast {
  position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(20px);
  background: var(--s3); border: 1px solid var(--bd2);
  color: var(--tx1); font-size: .85rem; font-family: var(--f-head); font-weight: 600;
  padding: 13px 24px; border-radius: var(--rpill);
  box-shadow: var(--sh-lg); z-index: 9500;
  opacity: 0; transition: all var(--t2); max-width: 400px; text-align: center;
}

/* ── HERO ──────────────────────────────────────────────────────── */
.hero {
  min-height: 100vh; display: flex; align-items: center;
  position: relative; overflow: hidden;
  padding: calc(var(--nh) + 40px) 0 80px;
}
.hero-grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(64,128,208,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(64,128,208,.045) 1px, transparent 1px);
  background-size: 44px 44px;
  pointer-events: none;
}
.hero-overlay {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 70% at 10% 50%, rgba(38,96,168,.2) 0%, transparent 55%),
    radial-gradient(ellipse 60% 80% at 90% 20%, rgba(200,168,75,.06) 0%, transparent 50%);
  pointer-events: none;
}
#heroCanvas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: .45; }
.hero-inner { position: relative; z-index: 2; }
.hero-gl {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
}
.hero-eyebrow { margin-bottom: 20px; }
.hero-h1 { margin-bottom: 20px; }
.hero-p { margin-bottom: 32px; font-size: clamp(.94rem, 1.3vw, 1.08rem); color: var(--tx2); max-width: 52ch; line-height: 1.82; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
.hero-phone {
  display: inline-flex; align-items: center; gap: 12px;
  margin-bottom: 36px; color: var(--tx2); font-size: .88rem;
  transition: color var(--t1);
}
.hero-phone:hover { color: var(--tx1); }
.ph-ring {
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(64,128,208,.12); border: 1px solid rgba(64,128,208,.25);
  display: flex; align-items: center; justify-content: center; color: var(--b200);
  flex-shrink: 0;
}
.ph-text { line-height: 1.3; }
.ph-text small { display: block; font-size: .74rem; color: var(--tx3); }
.ph-text strong { font-size: .95rem; font-family: var(--f-head); color: var(--tx1); font-weight: 700; }

/* Hero stats */
.hero-stats { display: flex; gap: 28px; flex-wrap: wrap; }
.stat { display: flex; flex-direction: column; gap: 4px; padding-right: 28px; border-right: 1px solid var(--bd2); }
.stat:last-child { border-right: none; padding-right: 0; }
.stat-n { font-family: var(--f-head); font-size: 1.7rem; font-weight: 800; color: var(--b200); line-height: 1; letter-spacing: -.03em; }
.stat-l { font-size: .73rem; color: var(--tx3); text-transform: uppercase; letter-spacing: 1.2px; font-weight: 500; }

/* Blueprint card */
.bp-card {
  background: var(--s2); border: 1px solid var(--bdb);
  border-radius: var(--r4); overflow: hidden;
  box-shadow: var(--sh-lg);
  animation: floatY 6s ease-in-out infinite;
}
@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
.bp-header { display: flex; align-items: center; gap: 10px; padding: 14px 18px; background: rgba(64,128,208,.1); border-bottom: 1px solid var(--bdb); }
.bp-dots { display: flex; gap: 6px; }
.bp-dots span { width: 10px; height: 10px; border-radius: 50%; background: var(--bd2); }
.bp-label { font-family: var(--f-mono); font-size: .68rem; letter-spacing: 2px; text-transform: uppercase; color: var(--b200); }
.bp-footer { display: flex; gap: 8px; flex-wrap: wrap; padding: 12px 18px; background: rgba(64,128,208,.05); border-top: 1px solid var(--bdb); }
.bp-chip { font-size: .7rem; font-weight: 700; color: var(--b200); padding: 3px 10px; border-radius: var(--rpill); background: rgba(64,128,208,.12); border: 1px solid rgba(64,128,208,.2); font-family: var(--f-head); }

/* Floating badges */
.badge-float {
  position: absolute; display: flex; align-items: center; gap: 10px;
  background: var(--s2); border: 1px solid var(--bd2);
  border-radius: var(--r3); padding: 10px 14px; box-shadow: var(--sh);
}
.bf-1 { bottom: 24px; left: -20px; animation: floatY 5s ease-in-out 1.5s infinite; }
.bf-2 { top: 18px; right: -20px; animation: floatY 5s ease-in-out .8s infinite; }
.bf-icon { font-size: 1.4rem; }
.bf-val   { display: block; font-family: var(--f-head); font-size: .88rem; font-weight: 800; color: var(--tx1); }
.bf-label { display: block; font-size: .68rem; color: var(--tx3); }

/* Scroll cue */
.scroll-cue { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--tx3); font-size: .68rem; letter-spacing: 2px; text-transform: uppercase; animation: fadeUp 1s ease 1.2s both; }
.scroll-mouse { width: 22px; height: 36px; border: 1.5px solid var(--tx3); border-radius: 11px; display: flex; justify-content: center; padding-top: 6px; }
.scroll-wheel { width: 3px; height: 6px; background: var(--tx3); border-radius: 3px; animation: scrollW 2s ease infinite; }
@keyframes scrollW { 0%,100%{transform:translateY(0);opacity:1} 80%{transform:translateY(10px);opacity:0} }

/* ── TICKER ────────────────────────────────────────────────────── */
.ticker { background: var(--s2); border-top: 1px solid var(--bd); border-bottom: 1px solid var(--bd); padding: 14px 0; overflow: hidden; }
.ticker-track { display: flex; gap: 0; animation: tick 28s linear infinite; white-space: nowrap; }
.ticker-track span { font-family: var(--f-head); font-size: .82rem; font-weight: 600; color: var(--tx2); padding: 0 20px; }
.ticker-track .sep { color: var(--b400); opacity: .5; padding: 0 4px; }
@keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ── SECTION HEADS ─────────────────────────────────────────────── */
.section-head { margin-bottom: clamp(36px, 5.5vw, 68px); }
.section-head .tag { margin-bottom: 16px; display: inline-flex; }

/* ── SERVICE CARDS ─────────────────────────────────────────────── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.svc-card {
  background: var(--s1); border: 1px solid var(--bd);
  border-radius: var(--r3); padding: 28px;
  transition: transform var(--t2) var(--ease), box-shadow var(--t2), border-color var(--t2);
  position: relative; overflow: hidden;
}
.svc-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--b600), var(--b300));
  transform: scaleX(0); transition: transform var(--t2) var(--ease);
  transform-origin: left;
}
.svc-card:hover { transform: translateY(-5px); box-shadow: var(--sh); border-color: rgba(64,128,208,.3); }
.svc-card:hover::before { transform: scaleX(1); }
.svc-ico {
  width: 52px; height: 52px; border-radius: 12px; margin-bottom: 18px;
  background: rgba(64,128,208,.1); border: 1px solid rgba(64,128,208,.2);
  display: flex; align-items: center; justify-content: center;
  color: var(--b200); transition: all var(--t2);
}
.svc-card:hover .svc-ico { background: rgba(64,128,208,.18); }
.svc-card h3 { font-size: 1.08rem; margin-bottom: 10px; }
.svc-card p  { font-size: .87rem; color: var(--tx2); line-height: 1.72; margin-bottom: 16px; }
.svc-price   { font-family: var(--f-mono); font-size: .82rem; color: var(--g); font-weight: 500; margin-bottom: 16px; }
.svc-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--f-head); font-size: .82rem; font-weight: 700;
  color: var(--b200); transition: gap var(--t1), color var(--t1);
}
.svc-link:hover { gap: 10px; color: var(--b100); }
.svc-cta-card {
  background: linear-gradient(135deg, rgba(64,128,208,.12), rgba(64,128,208,.06));
  border-color: rgba(64,128,208,.25);
  display: flex; flex-direction: column; justify-content: center;
}

/* ── IMPACT BAR ────────────────────────────────────────────────── */
.impact-bar { background: var(--s2); border-top: 1px solid var(--bd); border-bottom: 1px solid var(--bd); padding: 40px 0; }
.impact-grid { display: flex; align-items: center; justify-content: center; gap: 0; flex-wrap: wrap; }
.impact-item { text-align: center; padding: 16px 40px; }
.impact-n { font-family: var(--f-head); font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 800; color: var(--b200); letter-spacing: -.04em; display: block; }
.impact-l { font-size: .74rem; color: var(--tx3); text-transform: uppercase; letter-spacing: 1.5px; font-weight: 500; display: block; margin-top: 4px; }
.impact-div { width: 1px; height: 48px; background: var(--bd2); }

/* ── WHY US LAYOUT ─────────────────────────────────────────────── */
.why-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
.why-feats { display: flex; flex-direction: column; gap: 22px; margin-top: 36px; }
.why-feat { display: flex; align-items: flex-start; gap: 16px; }
.wf-icon {
  width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0; margin-top: 2px;
  background: rgba(64,128,208,.1); border: 1px solid rgba(64,128,208,.2);
  display: flex; align-items: center; justify-content: center; color: var(--b200);
}
.wf-body h3 { font-size: .95rem; margin-bottom: 5px; }
.wf-body p  { font-size: .85rem; color: var(--tx2); line-height: 1.68; }

/* Why card */
.why-card {
  background: var(--s2); border: 1px solid var(--bdb);
  border-radius: var(--r4); padding: 36px; position: relative; overflow: hidden;
}
.why-card::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 60% at 80% 20%, rgba(64,128,208,.1) 0%, transparent 60%);
  pointer-events: none;
}
.wc-badge {
  display: inline-block; font-size: .72rem; font-weight: 700; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--g); background: var(--g-bg);
  border: 1px solid var(--g-bd); border-radius: var(--rpill);
  padding: 4px 12px; margin-bottom: 18px;
}
.wc-metrics { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; margin: 24px 0; }
.wc-m { text-align: center; background: rgba(64,128,208,.06); border-radius: var(--r2); padding: 14px; }
.wc-mn { font-family: var(--f-head); font-size: 1.3rem; font-weight: 800; color: var(--b200); }
.wc-ml { font-size: .7rem; color: var(--tx3); text-transform: uppercase; letter-spacing: 1px; }
.wc-bar { margin-top: 14px; }
.wcb-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: .8rem; color: var(--tx2); }
.wcb-row strong { color: var(--b200); font-family: var(--f-head); }
.wcb-track { height: 4px; background: var(--bd2); border-radius: 4px; overflow: hidden; }
.wcb-fill { height: 100%; background: linear-gradient(90deg, var(--b600), var(--b300)); border-radius: 4px; width: 0; transition: width 1.4s var(--ease); }

/* ── PROCESS ───────────────────────────────────────────────────── */
.process-bg { background: rgba(4,13,30,.6); }
.process-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 24px;
  position: relative;
}
.process-grid::before {
  content: ''; position: absolute; top: 30px; left: 12%;
  width: 76%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--bdb) 20%, var(--bdb) 80%, transparent);
}
.proc { padding: 28px; background: var(--s1); border: 1px solid var(--bd); border-radius: var(--r3); position: relative; }
.proc-n {
  font-family: var(--f-mono); font-size: 2rem; font-weight: 700; color: var(--b600);
  opacity: .5; display: block; margin-bottom: 14px; line-height: 1;
}
.proc h3 { font-size: 1rem; margin-bottom: 8px; }
.proc p  { font-size: .83rem; color: var(--tx2); line-height: 1.7; }

/* ── SHOWCASE / PORTFOLIO GRID ─────────────────────────────────── */
.showcase { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 18px; }
.shw.big  { grid-row: span 2; }
.shw { background: var(--s1); border: 1px solid var(--bd); border-radius: var(--r3); overflow: hidden; transition: transform var(--t2), box-shadow var(--t2), border-color var(--t2); }
.shw:hover { transform: translateY(-4px); box-shadow: var(--sh); border-color: rgba(64,128,208,.28); }
.shw-img { overflow: hidden; background: var(--s2); }
.shw-body { padding: 20px; }
.shw-cat { font-size: .72rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--b200); font-family: var(--f-head); display: block; margin-bottom: 8px; }
.shw-body h3 { font-size: 1rem; margin-bottom: 8px; }
.shw-body p  { font-size: .83rem; color: var(--tx2); line-height: 1.68; }

/* ── TESTIMONIALS ──────────────────────────────────────────────── */
.testi-bg { background: rgba(4,13,30,.5); }
.testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-bottom: 40px; }
.testi {
  background: var(--s1); border: 1px solid var(--bd);
  border-radius: var(--r3); padding: 28px;
  transition: transform var(--t2), box-shadow var(--t2);
}
.testi:hover { transform: translateY(-3px); box-shadow: var(--sh); }
.testi-stars { color: var(--g); font-size: 1rem; margin-bottom: 14px; letter-spacing: 2px; }
.testi blockquote { font-size: .88rem; color: var(--tx2); line-height: 1.78; font-style: italic; margin-bottom: 20px; }
.testi-who { display: flex; align-items: center; gap: 12px; }
.testi-av {
  width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, var(--b500), var(--b300));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--f-head); font-size: .88rem; font-weight: 800; color: #fff;
}
.testi-who strong { display: block; font-size: .88rem; font-family: var(--f-head); }
.testi-who span   { display: block; font-size: .74rem; color: var(--tx3); margin-top: 2px; }

/* Rating strip */
.rating-strip {
  display: flex; align-items: center; gap: 40px;
  background: var(--s2); border: 1px solid var(--bd); border-radius: var(--r3); padding: 28px 32px;
}
.rs-score { text-align: center; flex-shrink: 0; }
.rs-num { font-family: var(--f-head); font-size: 3rem; font-weight: 800; color: var(--tx1); line-height: 1; }
.rs-stars { color: var(--g); font-size: 1.1rem; margin: 4px 0; letter-spacing: 3px; }
.rs-count { font-size: .76rem; color: var(--tx3); }
.rs-div { width: 1px; height: 64px; background: var(--bd2); flex-shrink: 0; }
.rs-bars { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.rs-row { display: flex; align-items: center; gap: 10px; font-size: .8rem; color: var(--tx2); }
.rs-track { flex: 1; height: 4px; background: var(--bd2); border-radius: 4px; overflow: hidden; }
.rs-fill { height: 100%; background: var(--g); border-radius: 4px; width: 0; transition: width 1.4s var(--ease); }

/* ── FAQ ───────────────────────────────────────────────────────── */
.faq-layout { display: grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: start; }
.faq-item { border-bottom: 1px solid var(--bd); }
.faq-q {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding: 18px 0;
  font-family: var(--f-head); font-size: .94rem; font-weight: 600; color: var(--tx1);
  text-align: left; cursor: pointer; background: none; border: none;
  transition: color var(--t1);
}
.faq-q:hover { color: var(--b200); }
.faq-ico { width: 24px; height: 24px; border-radius: 50%; background: rgba(64,128,208,.1); border: 1px solid rgba(64,128,208,.2); display: flex; align-items: center; justify-content: center; font-size: .9rem; color: var(--b200); flex-shrink: 0; transition: all var(--t2); }
.faq-q[aria-expanded="true"] .faq-ico { background: var(--b600); transform: rotate(45deg); color: #fff; }
.faq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--t2) var(--ease); }
.faq-a.open { grid-template-rows: 1fr; }
.faq-ai { overflow: hidden; padding: 0 0 18px; font-size: .88rem; color: var(--tx2); line-height: 1.8; }

/* ── CTA SECTION ───────────────────────────────────────────────── */
.cta-section { background: linear-gradient(135deg, rgba(38,96,168,.12) 0%, transparent 60%); border-top: 1px solid var(--bd); border-bottom: 1px solid var(--bd); }
.cta-inner { max-width: 780px; margin: 0 auto; text-align: center; }
.cta-desc { font-size: clamp(.92rem,1.2vw,1.04rem); color: var(--tx2); line-height: 1.78; margin: 16px 0 32px; }
.cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
.cta-trust { display: flex; align-items: center; gap: 20px; justify-content: center; flex-wrap: wrap; }
.cta-trust li { font-size: .78rem; color: var(--tx3); display: flex; align-items: center; gap: 5px; }
.cta-trust li::before { content: '✓'; color: var(--ok); font-weight: 700; }

/* ── SOCIAL BANNER ─────────────────────────────────────────────── */
.social-banner { background: var(--s1); border-top: 1px solid var(--bd); border-bottom: 1px solid var(--bd); padding: 48px 0; }
.social-banner-inner { display: flex; align-items: center; gap: 44px; flex-wrap: wrap; }
.social-banner-text h3 { font-family: var(--f-head); font-size: clamp(1.3rem,2.5vw,1.8rem); font-weight: 800; margin-bottom: 7px; }
.social-banner-text p  { font-size: .88rem; color: var(--tx2); max-width: 30ch; }
.social-links-row { display: flex; gap: 12px; flex-wrap: wrap; flex: 1; }
.social-link {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 18px; border-radius: var(--r3);
  background: var(--s2); border: 1px solid var(--bd);
  color: var(--tx1); transition: all var(--t2) var(--ease);
  flex: 1; min-width: 145px; position: relative; overflow: hidden;
}
.social-link:hover { transform: translateY(-3px); border-color: transparent; }
.social-icon-wrap { width: 40px; height: 40px; border-radius: var(--r2); background: rgba(255,255,255,.06); flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: all var(--t2); }
.social-link:hover .social-icon-wrap { background: rgba(255,255,255,.18); }
.social-name   { display: block; font-family: var(--f-head); font-size: .85rem; font-weight: 700; transition: color var(--t1); }
.social-handle { display: block; font-size: .72rem; color: var(--tx3); font-family: var(--f-mono); margin-top: 1px; transition: color var(--t1); }
.social-arrow  { font-size: .9rem; color: var(--tx3); flex-shrink: 0; margin-left: auto; transition: all var(--t2); }
.social-link:hover .social-arrow { transform: translate(2px,-2px); color: #fff; }

.social-link.insta:hover   { background: linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); box-shadow: 0 8px 28px rgba(220,39,67,.35); }
.social-link.youtube:hover { background: #ff0000; box-shadow: 0 8px 28px rgba(255,0,0,.35); }
.social-link.facebook:hover{ background: #1877f2; box-shadow: 0 8px 28px rgba(24,119,242,.35); }
.social-link.linkedin:hover{ background: #0a66c2; box-shadow: 0 8px 28px rgba(10,102,194,.35); }
.social-link.whatsapp:hover{ background: #25d366; box-shadow: 0 8px 28px rgba(37,211,102,.35); }
.social-link.telegram:hover{ background: #0088cc; box-shadow: 0 8px 28px rgba(0,136,204,.35); }
.social-link.insta .social-icon-wrap   { color: #e1306c; }
.social-link.youtube .social-icon-wrap { color: #ff0000; }
.social-link.facebook .social-icon-wrap{ color: #1877f2; }
.social-link.linkedin .social-icon-wrap{ color: #0a66c2; }
.social-link.whatsapp .social-icon-wrap{ color: #25d366; }
.social-link.telegram .social-icon-wrap{ color: #0088cc; }
.social-link:hover .social-icon-wrap { color: #fff; }
.social-link:hover .social-name, .social-link:hover .social-handle { color: #fff; }

/* ── FOOTER ────────────────────────────────────────────────────── */
.site-footer { background: var(--s1); border-top: 1px solid var(--bd); padding: 60px 0 0; }
.footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr 1.2fr; gap: 40px; margin-bottom: 40px; }
.ft-brand > p { font-size: .85rem; color: var(--tx2); line-height: 1.78; margin: 16px 0 24px; }
.brand-name-large { font-family: var(--f-head); font-size: 1.5rem; font-weight: 800; color: var(--tx1); display: block; margin: 14px 0 4px; letter-spacing: -.02em; }
.brand-name-large span { color: var(--b200); }
.brand-tagline { font-size: .75rem; letter-spacing: 2px; text-transform: uppercase; color: var(--tx3); display: block; margin-bottom: 14px; }
.ft-social { display: flex; gap: 10px; flex-wrap: wrap; }
.ft-social a {
  width: 34px; height: 34px; border-radius: var(--r2); background: var(--s2);
  border: 1px solid var(--bd2); display: flex; align-items: center; justify-content: center;
  color: var(--tx3); transition: all var(--t1);
}
.ft-social a:hover { background: rgba(64,128,208,.12); border-color: var(--b400); color: var(--b200); }
.ft-col h4 { font-family: var(--f-head); font-size: .84rem; font-weight: 700; color: var(--tx1); margin-bottom: 18px; text-transform: uppercase; letter-spacing: 1.2px; }
.ft-col a  { display: block; font-size: .84rem; color: var(--tx3); margin-bottom: 10px; transition: color var(--t1); }
.ft-col a:hover { color: var(--b200); }
.ft-contact-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; font-size: .84rem; color: var(--tx3); }
.ft-contact-row svg { flex-shrink: 0; color: var(--b300); }
.ft-contact-row a { color: var(--tx3); transition: color var(--t1); }
.ft-contact-row a:hover { color: var(--b200); }
.footer-bottom {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 0; border-top: 1px solid var(--bd);
  font-size: .78rem; color: var(--tx3); flex-wrap: wrap; gap: 12px;
}
.footer-bottom-links { display: flex; gap: 18px; }
.footer-bottom-links a { color: var(--tx3); transition: color var(--t1); }
.footer-bottom-links a:hover { color: var(--b200); }

/* ── ANIMATIONS & REVEAL ───────────────────────────────────────── */
.reveal    { opacity: 0; transform: translateY(24px); transition: opacity var(--t3) var(--ease), transform var(--t3) var(--ease); transition-delay: var(--delay, 0s); }
.reveal.up { opacity: 1; transform: translateY(0); }
.rev-l  { opacity: 0; transform: translateX(-32px); transition: opacity var(--t3) var(--ease), transform var(--t3) var(--ease); transition-delay: var(--delay, 0s); }
.rev-l.up { opacity: 1; transform: translateX(0); }
.rev-r  { opacity: 0; transform: translateX(32px); transition: opacity var(--t3) var(--ease), transform var(--t3) var(--ease); transition-delay: var(--delay, 0s); }
.rev-r.up { opacity: 1; transform: translateX(0); }

/* Stagger utility — sets --delay on children */
.stagger > *:nth-child(1) { --delay: 0s; }
.stagger > *:nth-child(2) { --delay: .08s; }
.stagger > *:nth-child(3) { --delay: .16s; }
.stagger > *:nth-child(4) { --delay: .24s; }
.stagger > *:nth-child(5) { --delay: .32s; }
.stagger > *:nth-child(6) { --delay: .40s; }

/* ── PAGE CONTENT OFFSET ───────────────────────────────────────── */
.page-content { padding-top: calc(var(--nh) + 20px); }
.inner-page   { padding-top: 0; }

/* ── CONTACT FORM ──────────────────────────────────────────────── */
.contact-layout { display: grid; grid-template-columns: 1fr 1.3fr; gap: 56px; align-items: start; }
.contact-form-wrap { background: var(--s1); border: 1px solid var(--bd); border-radius: var(--r4); padding: clamp(24px,4vw,44px); }
.contact-form-wrap h3 { font-size: 1.3rem; margin-bottom: 8px; }
.contact-form-wrap > p { font-size: .88rem; color: var(--tx2); margin-bottom: 28px; }
.fr  { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.fg  { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.fg label { font-family: var(--f-head); font-size: .8rem; font-weight: 600; color: var(--tx2); }
.fc {
  width: 100%; height: 48px; padding: 0 16px;
  background: var(--s2); border: 1.5px solid var(--bd);
  border-radius: var(--r2); font-family: var(--f-body); font-size: .88rem; color: var(--tx1);
  outline: none; transition: border-color var(--t1), box-shadow var(--t1);
}
.fc::placeholder { color: var(--tx3); }
.fc:focus { border-color: var(--b400); box-shadow: 0 0 0 3px rgba(64,128,208,.12); }
.fc.invalid { border-color: var(--err); }
textarea.fc { height: auto; padding: 12px 16px; resize: vertical; min-height: 110px; }
select.fc { appearance: none; cursor: pointer; }
.f-ok {
  display: none; align-items: center; gap: 8px;
  padding: 13px 18px; border-radius: var(--r2); margin-top: 16px;
  background: rgba(34,197,94,.08); border: 1px solid rgba(34,197,94,.25);
  color: #86efac; font-size: .88rem; font-family: var(--f-head); font-weight: 600;
}
.f-ok.show { display: flex; }
.field-hint { font-size: .74rem; color: var(--err); margin-top: 3px; }

/* ── BREADCRUMB ────────────────────────────────────────────────── */
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: .8rem; color: var(--tx3); margin-bottom: 12px; flex-wrap: wrap; }
.breadcrumb a { color: var(--tx3); transition: color var(--t1); }
.breadcrumb a:hover { color: var(--b200); }
.breadcrumb span { color: var(--tx3); }
.breadcrumb .current { color: var(--tx2); }

/* ── PAGE HERO (inner pages) ───────────────────────────────────── */
.page-hero {
  padding: calc(var(--nh) + 48px) 0 56px;
  background: linear-gradient(135deg, var(--s1), var(--bg));
  border-bottom: 1px solid var(--bd); position: relative; overflow: hidden;
}
.page-hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 80% at 20% 50%, rgba(64,128,208,.12) 0%, transparent 55%);
  pointer-events: none;
}

/* ── RESPONSIVE ────────────────────────────────────────────────── */
@media (max-width: 1100px) {
  .hero-gl       { grid-template-columns: 1fr; gap: 48px; }
  .hero-card-col { display: none; }
  .why-layout    { grid-template-columns: 1fr; gap: 40px; }
  .footer-grid   { grid-template-columns: 1fr 1fr 1fr; }
  .showcase      { grid-template-columns: 1fr 1fr; }
  .shw.big       { grid-row: auto; grid-column: span 2; }
}
@media (max-width: 900px) {
  .process-grid    { grid-template-columns: repeat(2,1fr); }
  .process-grid::before { display: none; }
  .faq-layout      { grid-template-columns: 1fr; gap: 36px; }
  .contact-layout  { grid-template-columns: 1fr; gap: 36px; }
  .testi-grid      { grid-template-columns: 1fr 1fr; }
  .rating-strip    { flex-direction: column; gap: 20px; }
  .rs-div          { display: none; }
  .social-banner-inner { flex-direction: column; gap: 28px; }
}
@media (max-width: 768px) {
  .nav-links  { display: none; }
  .nav-burger { display: flex; }
  .services-grid  { grid-template-columns: 1fr; }
  .showcase       { grid-template-columns: 1fr; }
  .shw.big        { grid-column: span 1; }
  .testi-grid     { grid-template-columns: 1fr; }
  .footer-grid    { grid-template-columns: 1fr 1fr; gap: 28px; }
  .footer-bottom  { flex-direction: column; text-align: center; gap: 10px; }
  .fr             { grid-template-columns: 1fr; }
  .impact-grid    { display: grid; grid-template-columns: 1fr 1fr; }
  .impact-div     { display: none; }
  .wc-metrics     { grid-template-columns: 1fr 1fr; }
  #backToTop      { right: 82px; }
}
@media (max-width: 520px) {
  :root { --gap: 56px; }
  .hero-actions { flex-direction: column; }
  .hero-actions .btn, .cta-btns .btn { width: 100%; justify-content: center; }
  .hero-stats   { flex-direction: column; gap: 10px; }
  .stat         { border-right: none; padding-right: 0; text-align: center; }
  .process-grid { grid-template-columns: 1fr; }
  .footer-grid  { grid-template-columns: 1fr; }
  .social-link  { min-width: calc(50% - 6px); }
  .site-header  { padding: 8px 12px; }
  .nav-pill     { padding: 0 14px; border-radius: var(--r4); }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
@media print {
  #cah-loader, .wa-float, .site-header, .nav-drawer,
  #readProgress, #pageVeil, #cookieBanner, #backToTop { display: none !important; }
  body { background: #fff; color: #000; padding-top: 0 !important; }
}

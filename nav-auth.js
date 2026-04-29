/* ═══════════════════════════════════════════════════
   Civil At Hand · nav-auth.js · Injects auth state into nav
   Include this as a module on every page
   ═══════════════════════════════════════════════════ */
import { auth, onAuthStateChanged, signOut } from "./auth.js";

function getInitials(user) {
  if (user.displayName) {
    return user.displayName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  }
  return user.email[0].toUpperCase();
}

function injectAuthNav(user) {
  // Desktop nav auth area
  const navLinks = document.querySelector(".nav-links");
  const drawerCta = document.querySelector(".drawer-cta");

  // Remove existing auth elements to avoid duplication
  document.querySelectorAll(".nav-auth-zone, .drawer-auth-zone").forEach(el => el.remove());

  if (user) {
    // ── LOGGED IN: show avatar + dropdown
    const initials = getInitials(user);
    const displayName = user.displayName || user.email.split("@")[0];
    const email = user.email;

    const authZone = document.createElement("div");
    authZone.className = "nav-auth-zone";
    authZone.innerHTML = `
      <div class="nav-user-btn" id="navUserBtn" aria-haspopup="true" aria-expanded="false">
        <div class="nav-avatar">${initials}</div>
        <span class="nav-uname">${displayName}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="nav-chevron"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="nav-dropdown" id="navDropdown" aria-hidden="true">
        <div class="nd-header">
          <div class="nd-avatar">${initials}</div>
          <div>
            <div class="nd-name">${displayName}</div>
            <div class="nd-email">${email}</div>
          </div>
        </div>
        <div class="nd-divider"></div>
        <a href="dashboard.html" class="nd-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          Dashboard
        </a>
        <a href="contact.html" class="nd-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          My Projects
        </a>
        <a href="tools.html" class="nd-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
          Free Tools
        </a>
        <div class="nd-divider"></div>
        <button class="nd-item nd-signout" id="navSignOut">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
          Sign Out
        </button>
      </div>
    `;
    if (navLinks) navLinks.appendChild(authZone);

    // Drawer auth zone
    if (drawerCta) {
      const dz = document.createElement("div");
      dz.className = "drawer-auth-zone";
      dz.innerHTML = `
        <div class="drawer-user-card">
          <div class="nd-avatar" style="width:40px;height:40px;font-size:.95rem">${initials}</div>
          <div>
            <div class="nd-name">${displayName}</div>
            <div class="nd-email">${email}</div>
          </div>
        </div>
        <a href="dashboard.html" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:14px">Dashboard</a>
        <button id="drawerSignOut" class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px">Sign Out</button>
      `;
      drawerCta.prepend(dz);
      document.getElementById("drawerSignOut")?.addEventListener("click", doSignOut);
    }

    // Wire up dropdown toggle
    const btn = document.getElementById("navUserBtn");
    const drop = document.getElementById("navDropdown");
    btn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = drop.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      drop.setAttribute("aria-hidden", !open);
    });
    document.addEventListener("click", () => {
      drop?.classList.remove("open");
      btn?.setAttribute("aria-expanded", "false");
      drop?.setAttribute("aria-hidden", "true");
    });
    document.getElementById("navSignOut")?.addEventListener("click", doSignOut);

  } else {
    // ── NOT LOGGED IN: show Login / Sign Up buttons
    const authZone = document.createElement("div");
    authZone.className = "nav-auth-zone";
    authZone.innerHTML = `
      <a href="login.html" class="btn btn-ghost btn-sm">Sign In</a>
      <a href="signup.html" class="btn btn-primary btn-sm">Get Started</a>
    `;
    if (navLinks) navLinks.appendChild(authZone);

    // Drawer guest zone
    if (drawerCta) {
      const dz = document.createElement("div");
      dz.className = "drawer-auth-zone";
      dz.innerHTML = `
        <a href="login.html" class="btn btn-outline" style="width:100%;justify-content:center;margin-bottom:10px">Sign In</a>
        <a href="signup.html" class="btn btn-primary" style="width:100%;justify-content:center;margin-bottom:14px">Create Account</a>
      `;
      drawerCta.prepend(dz);
    }
  }
}

async function doSignOut() {
  try {
    await signOut(auth);
    window.location.href = "index.html";
  } catch (e) {
    console.error(e);
  }
}

// Initialize on DOM ready
onAuthStateChanged(auth, (user) => {
  injectAuthNav(user);
});

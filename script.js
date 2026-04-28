'use strict';
/* ═══════════════════════════════════════════════
   CIVIL AT HAND · script.js · v10.0
   No theme toggle. Clean. Production ready.
   ═══════════════════════════════════════════════ */

const $ = id => document.getElementById(id);
const $$ = s => document.querySelectorAll(s);
const on = (el,ev,fn,opt) => el && el.addEventListener(ev,fn,opt);

/* ── PAGE VEIL TRANSITION ── */
(function(){
  const v = document.createElement('div'); v.id='pageVeil'; document.body.appendChild(v);
  requestAnimationFrame(()=>v.classList.add('leaving'));
  on(document,'click',e=>{
    const a=e.target.closest('a[href]'); if(!a) return;
    const h=a.getAttribute('href')||'';
    if(!h||h.startsWith('#')||h.startsWith('tel:')||h.startsWith('mailto:')||h.startsWith('http')||h.startsWith('//')||a.target==='_blank') return;
    e.preventDefault(); v.classList.remove('leaving'); v.classList.add('entering');
    setTimeout(()=>window.location.href=h,400);
  });
})();

/* ── LOADER ── */
on(window,'load',()=>{
  const l=$('cah-loader'); if(!l) return;
  setTimeout(()=>{ l.classList.add('done'); startReveal(); animateCounters(); animateImpact(); },800);
});

/* ── NAV SCROLL ── */
(function(){
  const p=document.querySelector('.nav-pill'); if(!p) return;
  const update=()=>p.classList.toggle('scrolled',scrollY>30);
  update(); on(window,'scroll',update,{passive:true});
})();

/* ── ACTIVE NAV LINK ── */
(function(){
  const page=location.pathname.split('/').pop()||'index.html';
  $$('.nav-links a, .nav-drawer a').forEach(a=>{
    const h=a.getAttribute('href')||'';
    if(h===page||(page===''&&h==='index.html')) a.classList.add('active');
  });
})();

/* ── HAMBURGER ── */
(function(){
  const burger=$('navBurger'), drawer=$('navDrawer'), close=$('drawerClose');
  if(!burger) return;
  const toggle=open=>{
    burger.classList.toggle('open',open);
    drawer.classList.toggle('open',open);
    burger.setAttribute('aria-expanded',open);
    drawer.setAttribute('aria-hidden',!open);
    document.body.style.overflow=open?'hidden':'';
  };
  on(burger,'click',()=>toggle(!burger.classList.contains('open')));
  on(close,'click',()=>toggle(false));
  on(document,'keydown',e=>{ if(e.key==='Escape') toggle(false); });
  on(drawer,'click',e=>{ if(e.target===drawer) toggle(false); });
})();

/* ── READING PROGRESS ── */
(function(){
  const bar=document.createElement('div'); bar.id='readProgress';
  document.body.prepend(bar);
  on(window,'scroll',()=>{
    const h=document.documentElement;
    bar.style.transform=`scaleX(${scrollY/(h.scrollHeight-h.clientHeight)||0})`;
  },{passive:true});
})();

/* ── REVEAL ON SCROLL ── */
function startReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('up'); });
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  $$('.reveal,.rev-l,.rev-r').forEach(el=>obs.observe(el));
}
if(document.readyState==='complete') startReveal();
else on(window,'load',startReveal);

/* ── HERO COUNTERS ── */
function animateCounters(){
  $$('[data-count]').forEach(el=>{
    const target=+el.dataset.count, decimals=el.dataset.dec||0;
    let n=0; const dur=1600, step=16;
    const iv=setInterval(()=>{
      n=Math.min(n+(target/(dur/step)),target);
      el.textContent=+n.toFixed(decimals)+(el.dataset.suffix||'');
      if(n>=target) clearInterval(iv);
    },step);
  });
}

/* ── IMPACT BAR COUNTERS ── */
function animateImpact(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      e.target.querySelectorAll('[data-count]').forEach(el=>{
        const target=+el.dataset.count;
        let n=0; const iv=setInterval(()=>{
          n=Math.min(n+Math.ceil(target/50),target);
          el.textContent=n+(el.dataset.suffix||'');
          if(n>=target) clearInterval(iv);
        },30);
      });
      obs.unobserve(e.target);
    });
  },{threshold:.3});
  const bar=document.querySelector('.impact-bar');
  if(bar) obs.observe(bar);
  /* progress bars */
  const bobs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      e.target.querySelectorAll('.wcb-fill,.rs-fill').forEach(f=>{
        f.style.width=f.dataset.w||f.style.width;
      });
      bobs.unobserve(e.target);
    });
  },{threshold:.2});
  $$('.why-card,.rating-strip').forEach(el=>bobs.observe(el));
}

/* ── FAQ ACCORDION ── */
(function(){
  $$('.faq-q').forEach(btn=>{
    on(btn,'click',()=>{
      const open=btn.getAttribute('aria-expanded')==='true';
      $$('.faq-q').forEach(b=>{ b.setAttribute('aria-expanded','false'); b.nextElementSibling?.classList.remove('open'); });
      if(!open){ btn.setAttribute('aria-expanded','true'); btn.nextElementSibling?.classList.add('open'); }
    });
  });
})();

/* ── BACK TO TOP ── */
(function(){
  const btn=$('backToTop'); if(!btn) return;
  on(window,'scroll',()=>btn.classList.toggle('show',scrollY>500),{passive:true});
  on(btn,'click',()=>window.scrollTo({top:0,behavior:'smooth'}));
})();

/* ── COOKIE BANNER ── */
(function(){
  const banner=$('cookieBanner'); if(!banner) return;
  if(localStorage.getItem('cah-cookie')) return;
  setTimeout(()=>banner.classList.add('show'),1400);
  on($('cookieAccept'),'click',()=>{ localStorage.setItem('cah-cookie','1'); banner.classList.remove('show'); });
  on($('cookieDeny'),'click',()=>banner.classList.remove('show'));
})();

/* ── TOAST ── */
function showToast(msg,ms=4000,isError=false){
  $('toast')?.remove();
  const el=document.createElement('div'); el.id='toast'; el.textContent=msg;
  if(isError) el.style.borderColor='var(--err)';
  document.body.appendChild(el);
  requestAnimationFrame(()=>{ el.style.transform='translateX(-50%) translateY(0)'; el.style.opacity='1'; });
  setTimeout(()=>{ el.style.opacity='0'; setTimeout(()=>el.remove(),400); },ms);
}

/* ── CONTACT FORM (real FormSubmit.co integration) ── */
(function(){
  const form=$('contactForm'); if(!form) return;
  /* Live validation */
  form.querySelectorAll('.fc').forEach(f=>{
    on(f,'blur',()=>validateField(f));
    on(f,'input',()=>{ if(f.classList.contains('invalid')) validateField(f); });
  });
  function validateField(f){
    const v=f.value.trim(); let err='';
    if(f.required && !v) err='This field is required.';
    else if(f.type==='email'&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) err='Enter a valid email.';
    else if(f.type==='tel'&&v&&v.replace(/\D/g,'').length<10) err='Enter a valid phone number.';
    showFieldError(f,err); return !err;
  }
  function showFieldError(f,msg){
    f.classList.toggle('invalid',!!msg);
    const old=f.parentNode.querySelector('.field-hint'); old?.remove();
    if(msg){ const h=document.createElement('div'); h.className='field-hint'; h.textContent=msg; f.parentNode.appendChild(h); }
  }
  on(form,'submit',async e=>{
    e.preventDefault();
    let ok=true;
    form.querySelectorAll('.fc[required]').forEach(f=>{ if(!validateField(f)) ok=false; });
    if(!ok){ showToast('Please fix the errors above.',4000,true); return; }

    const btn=form.querySelector('[type=submit]'), orig=btn.innerHTML;
    btn.innerHTML='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M21 12a9 9 0 11-2.33-6"/></svg> Sending…';
    btn.disabled=true;

    try {
      /* FormSubmit.co — replace YOUR_EMAIL below with your actual email or keep as-is */
      const data=new FormData(form);
      data.append('_captcha','false');
      data.append('_template','table');
      data.append('_subject','New enquiry from Civil At Hand website');
      const res=await fetch('https://formsubmit.co/civilathand.work@gmail.com',{method:'POST',body:data,headers:{Accept:'application/json'}});
      if(res.ok){
        form.reset(); form.querySelectorAll('.fc').forEach(f=>f.classList.remove('invalid'));
        form.querySelectorAll('.field-hint').forEach(h=>h.remove());
        const ok2=$('formOk'); if(ok2){ ok2.classList.add('show'); setTimeout(()=>ok2.classList.remove('show'),7000); }
        else showToast('✓ Message sent! We'll reply within 24 hours.');
      } else { throw new Error('Server error'); }
    } catch(_){
      showToast('Could not send. Please WhatsApp us directly.',5000,true);
    } finally { btn.innerHTML=orig; btn.disabled=false; }
  });
})();

/* ── FREELANCER FORM ── */
(function(){
  const form=$('freelancerForm'); if(!form) return;
  on(form,'submit',async e=>{
    e.preventDefault();
    const btn=form.querySelector('[type=submit]'), orig=btn.innerHTML;
    btn.innerHTML='Sending…'; btn.disabled=true;
    try {
      const data=new FormData(form);
      data.append('_subject','New Freelancer Application – Civil At Hand');
      data.append('_captcha','false');
      await fetch('https://formsubmit.co/civilathand.work@gmail.com',{method:'POST',body:data,headers:{Accept:'application/json'}});
      form.reset();
      showToast('✓ Application sent! We'll review and contact you within 3 business days.');
    } catch(_){ showToast('Error. Please email us directly.',5000,true); }
    finally { btn.innerHTML=orig; btn.disabled=false; }
  });
})();

/* ── BLOG FILTER ── */
(function(){
  const btns=$$('.blog-filter-btn'), cards=$$('.blog-card');
  if(!btns.length) return;
  btns.forEach(btn=>{
    on(btn,'click',()=>{
      btns.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
      const cat=btn.dataset.cat;
      cards.forEach(c=>{ c.style.display=(cat==='all'||c.dataset.cat===cat)?'':'none'; });
    });
  });
})();

/* ── PORTFOLIO FILTER ── */
(function(){
  const btns=$$('.pf-btn'), items=$$('.pf-item');
  if(!btns.length) return;
  btns.forEach(btn=>{
    on(btn,'click',()=>{
      btns.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
      const cat=btn.dataset.cat;
      items.forEach(it=>{ it.style.display=(cat==='all'||it.dataset.cat===cat)?'':'none'; });
    });
  });
})();

/* ── TOOLS CALCULATORS ── */
(function(){
  /* Cement Calculator */
  const cBtn=$('calcCementBtn');
  if(cBtn) on(cBtn,'click',()=>{
    const area=+$('cArea').value, floors=+$('cFloors').value||1, mix=+$('cMix').value||1;
    if(!area){ showToast('Enter built-up area.',3000,true); return; }
    const vol=area*floors*0.3*mix; /* simplified estimate */
    const bags=Math.ceil(vol*6.25);
    $('cResult').innerHTML=`<strong>Estimated Cement:</strong> ~${bags} bags (50kg each) for ${area*floors} sq ft`;
    $('cResult').style.display='block';
  });

  /* Steel Calculator */
  const sBtn=$('calcSteelBtn');
  if(sBtn) on(sBtn,'click',()=>{
    const area=+$('sArea').value, floors=+$('sFloors').value||1;
    if(!area){ showToast('Enter built-up area.',3000,true); return; }
    const kg=Math.ceil(area*floors*3.5);
    $('sResult').innerHTML=`<strong>Estimated Steel:</strong> ~${kg} kg (${(kg/1000).toFixed(2)} MT) for ${area*floors} sq ft`;
    $('sResult').style.display='block';
  });

  /* BOQ Estimator */
  const bBtn=$('calcBoqBtn');
  if(bBtn) on(bBtn,'click',()=>{
    const area=+$('bArea').value, qual=+$('bQual').value||3000;
    if(!area){ showToast('Enter built-up area.',3000,true); return; }
    const low=Math.round(area*qual*0.9), high=Math.round(area*qual*1.1);
    $('bResult').innerHTML=`<strong>Estimated Construction Cost:</strong> ₹${low.toLocaleString('en-IN')} – ₹${high.toLocaleString('en-IN')}<br><small>This is a rough estimate. Get a proper BOQ from Civil At Hand for accuracy.</small>`;
    $('bResult').style.display='block';
  });
})();

/* ── RENDER FUNCTIONS (used by pages that load data) ── */
window.renderServices=function(containerId){
  const el=$(containerId); if(!el||!window.SITE) return;
  el.innerHTML=window.SITE.services.map(s=>`
    <div class="svc-card reveal">
      <div class="svc-ico">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.shortDesc}</p>
      <div class="svc-price">${s.price} · ${s.delivery}</div>
      <a href="${s.link}" class="svc-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    </div>`).join('');
  startReveal();
};

window.renderTestimonials=function(containerId){
  const el=$(containerId); if(!el||!window.SITE) return;
  el.innerHTML=window.SITE.testimonials.map(t=>`
    <div class="testi reveal">
      <div class="testi-stars">${'★'.repeat(t.rating)}</div>
      <blockquote>"${t.text}"</blockquote>
      <div class="testi-who"><div class="testi-av">${t.initial}</div><div><strong>${t.name}</strong><span>${t.location}</span></div></div>
    </div>`).join('');
  startReveal();
};

window.renderBlogCards=function(containerId,limit=6){
  const el=$(containerId); if(!el||!window.BLOG) return;
  el.innerHTML=window.BLOG.posts.slice(0,limit).map(p=>`
    <div class="blog-card reveal" data-cat="${p.category}">
      <div class="blog-card-ico">${p.icon}</div>
      <div class="blog-card-body">
        <div class="blog-meta"><span class="blog-cat">${p.category}</span><span>${p.date}</span><span>${p.readTime}</span></div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <a href="blog-post.html?id=${p.id}" class="svc-link">Read article <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>
    </div>`).join('');
  startReveal();
};

window.renderFAQs=function(containerId){
  const el=$(containerId); if(!el||!window.SITE) return;
  el.innerHTML=window.SITE.faqs.map((f,i)=>`
    <div class="faq-item">
      <button class="faq-q" aria-expanded="${i===0}" aria-controls="fa${i}">${f.q}<span class="faq-ico">+</span></button>
      <div class="faq-a ${i===0?'open':''}" id="fa${i}" role="region"><div class="faq-ai">${f.a}</div></div>
    </div>`).join('');
  /* re-wire accordion */
  el.querySelectorAll('.faq-q').forEach(btn=>{
    on(btn,'click',()=>{
      const open=btn.getAttribute('aria-expanded')==='true';
      el.querySelectorAll('.faq-q').forEach(b=>{ b.setAttribute('aria-expanded','false'); b.nextElementSibling?.classList.remove('open'); });
      if(!open){ btn.setAttribute('aria-expanded','true'); btn.nextElementSibling?.classList.add('open'); }
    });
  });
};

/* ── BLOG POST PAGE ── */
(function(){
  const article=$('blogArticle'); if(!article||!window.BLOG) return;
  const params=new URLSearchParams(location.search);
  const id=params.get('id');
  const post=window.BLOG.posts.find(p=>p.id===id||p.slug===id);
  if(!post){ article.innerHTML='<p style="color:var(--tx3)">Post not found. <a href="blog.html" style="color:var(--b200)">Back to blog →</a></p>'; return; }
  document.title=post.title+' – Civil At Hand';
  const meta=document.querySelector('meta[name="description"]'); if(meta) meta.content=post.excerpt;
  article.innerHTML=`
    <div class="breadcrumb"><a href="index.html">Home</a><span>›</span><a href="blog.html">Blog</a><span>›</span><span class="current">${post.title}</span></div>
    <div class="post-meta-row"><span class="blog-cat">${post.category}</span><span>${post.date}</span><span>${post.readTime}</span></div>
    <h1 class="post-title">${post.title}</h1>
    <div class="post-content">${post.content}</div>
    <div class="post-cta-box">
      <p>Have questions about your project? <strong>Civil At Hand</strong> provides free initial consultation.</p>
      <a href="contact.html" class="btn btn-primary">Get Free Quote →</a>
      <a href="https://wa.me/${window.SITE?.business?.phoneRaw||'918708524647'}" target="_blank" class="btn btn-wa">WhatsApp Us</a>
    </div>
    <a href="blog.html" class="btn btn-outline" style="margin-top:28px">← Back to Blog</a>`;
})();

/* ── NAV-AUTH injection (also in nav-auth.js for module pages) ── */
(function(){
  /* lightweight inline auth check using Firebase CDN — for pages using regular script tags */
  /* The full auth injection is in nav-auth.js for module pages (login, signup, dashboard) */
})();

console.log('%cCivil At Hand · civilathand.com','color:#6aa0e0;font-size:12px;font-weight:700');

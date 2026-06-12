/* ===================================================================
   91 GI — Landing Page Interactions
   Two tracked events: "Product Interest Click" + "Survey Form Submit"
   =================================================================== */
(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* -----------------------------------------------------------------
     PRODUCT DATA — all 12 GI products from the brief
  ----------------------------------------------------------------- */
  const PRODUCTS = [
    { name: "Kashmir Saffron",            badge: "Kashmir GI",        emoji: "🌺", g1: "#f0a93c", g2: "#b3460f", video: "videos/safron fnl.mp4",
      tag: "The world's most expensive spice — grown only at 1,600 m above sea level.",
      story: "Hand-plucked from Pampore's purple fields for over 2,500 years. Darker, longer-stranded and more aromatic than Iranian or Spanish saffron — the altitude does what no greenhouse can." },
    { name: "Diabetic Friendly Rice",     badge: "AP / Telangana GI", emoji: "🌾", g1: "#ece2c0", g2: "#c4ab6f", video: "videos/sona_masoori_rice.mp4",
      tag: "Light on the stomach. The everyday rice of 50 million South Indian homes.",
      story: "A medium-grain rice from South India's black-cotton and red-laterite soils. Low-starch, lightweight and quick-cooking — GI protection keeps it from being diluted with cheaper paddy blends." },
    { name: "Guntur Mirchi",              badge: "Andhra Pradesh GI", emoji: "🌶️", g1: "#d94a2b", g2: "#7a1f12", video: "videos/GUNTUR_MIRCHI.mp4",
      tag: "India's fieriest red chilli — the colour and heat that define South Indian cooking.",
      story: "The Guntur Sannam variety, grown in Andhra's red and black soils, is India's largest chilli export. Prized for its deep red colour and sharp pungency, it gives Andhra cuisine its legendary fire — GI-protected so no blend can dilute it." },
    { name: "Lakdong Turmeric",           badge: "Meghalaya GI",      emoji: "🟡", g1: "#e0a72b", g2: "#8a5a12", video: "videos/turmeric .mp4",
      tag: "4× the curcumin of ordinary turmeric. Not a claim — this is soil science.",
      story: "Grown in the red laterite soil of the Jaintia Hills by Khasi and Jaintia communities. Tests at 7–12% curcumin versus 2–3% in regular turmeric. Validated by science, known by Ayurveda." },
    { name: "Dagdi Jowar of Jalna",       badge: "Maharashtra GI",    emoji: "🌾", g1: "#d8b87a", g2: "#8a6328", video: "videos/jonna.mp4",
      tag: "The stone-hard sorghum of Marathwada — built to survive, built to nourish.",
      story: "‘Dagdi’ means stone — and this drought-prone Jalna jowar earns it. Extraordinarily hard-grained, with a shelf life and nutritional density softer varieties cannot match." },
    { name: "Gura Rajmash",               badge: "Jammu GI",          emoji: "🫘", g1: "#c98b6a", g2: "#7a3b22", video: "videos/Gura Rajmash.mp4",
      tag: "Kidney beans grown at 2,000 m — altitude changes everything.",
      story: "Grown through cold nights and thin air in Jammu's Chenab valley. Small, speckled and distinct, with a soft-cooking texture and earthy depth that plains rajma simply cannot replicate." },
    { name: "Thalanadan Grambu",          badge: "Kerala GI",         emoji: "🌰", g1: "#b5703f", g2: "#5c2f15", video: "videos/lavanga.mp4",
      tag: "Kerala's most potent clove — the Malabar trade route's prized export.",
      story: "Grown in Malappuram for over 400 years, traded by Arab merchants long before colonisation. Exceptionally high eugenol content, hand-harvested before the buds open to lock in the oils." },
    { name: "Tandur Red Gram",            badge: "Telangana GI",      emoji: "🫛", g1: "#d99b4a", g2: "#8a5316", video: "videos/tandur.mp4",
      tag: "India's favourite dal — from the one place that grows it right.",
      story: "A specific red gram (tur dal) from Ranga Reddy's black-cotton Deccan soil. Cooks faster, holds shape and tastes richer — Hyderabadi homes have asked for it by name for generations." },
    { name: "Himachali Kala Zeera",       badge: "Himachal GI",       emoji: "🖤", g1: "#8a7a5c", g2: "#3f3320", video: "videos/black_Zeera.mp4",
      tag: "Not regular cumin. A wild, smoky Himalayan spice you cannot farm in the plains.",
      story: "A wild species (Bunium persicum) found only at 2,500–4,500 m in Himachal's alpine meadows. Earthy, smoky and caraway-like — the altitude is not optional, it is the ingredient." },
    { name: "Koli Hills Pepper",          badge: "Tamil Nadu GI",     emoji: "⚫", g1: "#6f8a5a", g2: "#2f4a24", video: "videos/pepper.mp4",
      tag: "Black pepper from the Eastern Ghats — bold, shade-grown, uncompromised.",
      story: "Grown for centuries as a shade vine on native forest trees in the fog-covered Kolli Hills. Bold and aromatic with high piperine — graded separately from plains pepper for good reason." },
    { name: "Rajasthan Jeera",            badge: "Rajasthan GI",      emoji: "🌿", g1: "#d9a85a", g2: "#8a5e1e", video: "videos/jeera.mp4",
      tag: "India grows 70% of the world's cumin. Rajasthan grows the finest of it.",
      story: "The arid heat and sandy loam of Barmer, Jalore and Nagaur concentrate cumin's volatile oils like no other geography — a sharper, more intense aroma from India's cumin heartland." },
    { name: "Kashmir Walnut",             badge: "Kashmir GI",        emoji: "🌰", g1: "#c79a6a", g2: "#6b4326", video: "videos/walnut.mp4",
      tag: "Paper-thin shell. Thousand-year-old trees. Kashmir's most exported treasure.",
      story: "The Kagzi (paper-shell) variety, grown at 1,500–2,000 m on trees that live 200+ years. Long cold winters give a fat content and flavour depth Californian or Iranian walnuts can't match." }
  ];

  // Hero ticker order (per brief)
  const TICKER = ["Kashmir Saffron","Lakdong Turmeric","Govind Bhog Rice","Tandur Red Gram","Koli Hills Pepper","Kashmir Walnut","Rajasthan Jeera","Thalanadan Clove","Dagdi Jowar","Gura Rajmash","Himachali Kala Zeera","Diabetic Friendly Rice"];

  /* -----------------------------------------------------------------
     EVENT LOGGING (localStorage stand-in for backend)
     Replace these with real API POSTs when the backend is ready.
  ----------------------------------------------------------------- */
  function logEvent(key, payload) {
    try {
      const all = JSON.parse(localStorage.getItem(key) || "[]");
      all.push({ ...payload, ts: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(all));
    } catch (_) { /* storage unavailable */ }
    // e.g. fetch("/api/event", { method:"POST", headers:{"Content-Type":"application/json"},
    //        body: JSON.stringify({ event: key, ...payload }) });
  }

  /* -----------------------------------------------------------------
     HERO TICKER
  ----------------------------------------------------------------- */
  const tickerTrack = $("#tickerTrack");
  if (tickerTrack) {
    const make = () => TICKER.map((n) => `<span>${n}</span>`).join("");
    tickerTrack.innerHTML = make() + make(); // duplicate for seamless loop
  }

  /* -----------------------------------------------------------------
     PRODUCT GRID  +  "I Am Interested" (tracked event)
  ----------------------------------------------------------------- */
  const grid = $("#productGrid");
  const interestCounter = $("#interestCounter");
  let interestedSet = new Set();
  try { interestedSet = new Set(JSON.parse(localStorage.getItem("gi_interested") || "[]")); } catch (_) {}

  function persistInterested() {
    try { localStorage.setItem("gi_interested", JSON.stringify([...interestedSet])); } catch (_) {}
  }
  function updateInterestCounter() {
    if (!interestCounter) return;
    const n = interestedSet.size;
    interestCounter.innerHTML = n
      ? `You love <b>${n}</b> of these — hit <b>❤️ I Love This</b> at the top to back our mission. ↑`
      : `Love what we're building? Hit <b>❤️ I Love This</b> at the top. ↑`;
  }

  if (grid) {
    PRODUCTS.forEach((p) => {
      const card = document.createElement("article");
      card.className = "pcard reveal";
      card.setAttribute("data-reveal", "rise");
      card.innerHTML = `
        <div class="pcard__media" style="--g1:${p.g1};--g2:${p.g2}">
          <span class="pcard__badge">${p.badge}</span>
          ${p.video
            ? `<video class="pcard__video" autoplay muted loop playsinline preload="metadata" aria-label="${p.name}"><source src="${p.video}" type="video/mp4"></video>`
            : `<span class="pcard__emoji" aria-hidden="true">${p.emoji}</span>`}
        </div>
        <div class="pcard__body">
          <h3 class="pcard__name">${p.name}</h3>
          <p class="pcard__tag">${p.tag}</p>
          <p class="pcard__story">${p.story}</p>
        </div>`;
      grid.appendChild(card);
    });
    updateInterestCounter();
  }

  function burstHeart(el) {
    if (prefersReduced) return;
    const r = el.getBoundingClientRect();
    const originX = r.left + r.width / 2;
    const originY = r.top + r.height / 2;
    const hearts = ["🧡", "❤️", "🧡", "💛", "🧡"];

    // 1) Big love symbol pops in the centre of the screen
    const big = document.createElement("span");
    big.textContent = "🧡";
    Object.assign(big.style, {
      position: "fixed", left: "50%", top: "44%", transform: "translate(-50%,-50%) scale(.2)",
      fontSize: "clamp(72px, 16vw, 150px)", pointerEvents: "none", zIndex: 360, opacity: "0",
      filter: "drop-shadow(0 12px 28px rgba(163,52,52,.45))",
      transition: "transform .5s cubic-bezier(.18,.9,.3,1.4), opacity .5s ease",
    });
    document.body.appendChild(big);
    requestAnimationFrame(() => { big.style.opacity = "1"; big.style.transform = "translate(-50%,-50%) scale(1)"; });
    setTimeout(() => { big.style.opacity = "0"; big.style.transform = "translate(-50%,-58%) scale(1.25)"; }, 550);
    setTimeout(() => big.remove(), 1150);

    // 2) Hearts flood the WHOLE page — a burst from the button + a rain from all over the screen
    const vw = window.innerWidth, vh = window.innerHeight;
    const spawn = (startX, startY, dx, dy, dur) => {
      const s = document.createElement("span");
      s.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      const size = 16 + Math.random() * 34;
      Object.assign(s.style, {
        position: "fixed", left: startX + "px", top: startY + "px",
        fontSize: size + "px", pointerEvents: "none", zIndex: 350, opacity: "1",
        filter: "drop-shadow(0 4px 8px rgba(163,52,52,.25))",
        transition: `transform ${dur}s cubic-bezier(.25,.6,.3,1), opacity ${dur}s ease`,
        willChange: "transform, opacity",
      });
      document.body.appendChild(s);
      const rot = (Math.random() - 0.5) * 120;
      const delay = Math.random() * 350;
      setTimeout(() => requestAnimationFrame(() => {
        s.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(${0.7 + Math.random() * 1})`;
        s.style.opacity = "0";
      }), delay);
      setTimeout(() => s.remove(), dur * 1000 + delay + 200);
    };

    // a) big fountain bursting out from the button
    for (let i = 0; i < 45; i++) {
      const dx = (Math.random() - 0.5) * vw * 1.1;
      const dy = -(originY + 60) - Math.random() * vh * 0.4;
      spawn(originX, originY, dx, dy, 1.4 + Math.random() * 0.7);
    }
    // b) hearts rising from random points across the whole width of the page
    for (let i = 0; i < 45; i++) {
      const startX = Math.random() * vw;
      const startY = vh + 20;
      const dx = (Math.random() - 0.5) * 240;
      const dy = -(vh + 80) - Math.random() * vh * 0.3;
      spawn(startX, startY, dx, dy, 1.8 + Math.random() * 1);
    }
  }

  // "Love our mission" — top-right nav button + floating banner heart stay in sync
  const missionLove = $("#missionLove");
  const navLike = $("#navLike");
  const navLikeIcon = navLike && $(".nav__like-icon", navLike);

  // turn BOTH hearts red whenever either one is loved
  function markLoved() {
    if (missionLove) { missionLove.textContent = "❤️"; missionLove.classList.add("is-loved"); }
    if (navLikeIcon) navLikeIcon.textContent = "❤️";
    if (navLike) navLike.classList.add("is-loved");
  }

  if (missionLove) {
    const loveIt = (e) => {
      e.preventDefault();      // don't follow the banner link
      e.stopPropagation();
      markLoved();
      burstHeart(missionLove);
      logEvent("gi_mission_love", { event: "Mission Loved", source: "banner" });
    };
    missionLove.addEventListener("click", loveIt);
    missionLove.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") loveIt(e);
    });
  }

  if (navLike) {
    navLike.addEventListener("click", () => {
      markLoved();
      burstHeart(navLike);
      logEvent("gi_mission_love", { event: "Mission Loved", source: "nav" });
    });
  }

  /* -----------------------------------------------------------------
     SURVEY — Q1 chips (multi-select)
  ----------------------------------------------------------------- */
  const q1 = $("#q1Chips");
  function syncChip(name, on) {
    if (!q1) return;
    const chip = $$(".chip", q1).find((c) => c.dataset.value === name);
    if (chip) { chip.classList.toggle("is-selected", on); chip.setAttribute("aria-pressed", String(on)); }
  }
  if (q1) {
    PRODUCTS.forEach((p) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.textContent = p.name;
      b.dataset.value = p.name; b.setAttribute("aria-pressed", "false");
      if (interestedSet.has(p.name)) { b.classList.add("is-selected"); b.setAttribute("aria-pressed", "true"); }
      b.addEventListener("click", () => {
        const on = !b.classList.contains("is-selected");
        b.classList.toggle("is-selected", on);
        b.setAttribute("aria-pressed", String(on));
        // track interest from the survey chips
        if (on) interestedSet.add(p.value || p.name); else interestedSet.delete(p.name);
        persistInterested(); updateInterestCounter();
        clearErr("q1");
      });
      q1.appendChild(b);
    });
  }

  /* -----------------------------------------------------------------
     SURVEY — validation + submit
  ----------------------------------------------------------------- */
  const form = $("#surveyForm");
  const setErr = (key, msg) => { const e = $(`[data-error="${key}"]`); if (e) e.textContent = msg; };
  const clearErr = (key) => setErr(key, "");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[6-9]\d{9}$/;

  if (form) {
    // live-clear errors
    form.addEventListener("change", (e) => { if (e.target.matches("input[type=radio]")) clearErr(e.target.name); });
    ["name", "contact", "city"].forEach((id) => {
      const el = $("#" + id);
      el?.addEventListener("input", () => { el.classList.remove("is-invalid"); clearErr(id); });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true, firstBad = null;

      // Q1 — at least one product
      const selected = $$(".chip.is-selected", q1).map((c) => c.dataset.value);
      if (!selected.length) { setErr("q1", "Please pick at least one product you'd buy."); ok = false; firstBad ||= q1; }

      // Q2 / Q3 — required single-select
      if (!form.q2.value) { setErr("q2", "Please choose one option."); ok = false; firstBad ||= $('[name="q2"]'); }
      if (!form.q3.value) { setErr("q3", "Please choose one option."); ok = false; firstBad ||= $('[name="q3"]'); }

      // contact fields
      const name = $("#name"), contact = $("#contact"), city = $("#city");
      if (!name.value.trim()) { fieldBad(name, "name", "Please tell us your name."); ok = false; firstBad ||= name; }
      const cv = contact.value.trim();
      const isEmail = cv.includes("@");
      const cleanPhone = cv.replace(/[\s-]/g, "");
      if (!cv) { fieldBad(contact, "contact", "Add a WhatsApp number or email so we can notify you."); ok = false; firstBad ||= contact; }
      else if (isEmail && !emailRe.test(cv)) { fieldBad(contact, "contact", "That email doesn't look right."); ok = false; firstBad ||= contact; }
      else if (!isEmail && !phoneRe.test(cleanPhone)) { fieldBad(contact, "contact", "Enter a valid 10-digit mobile number or an email."); ok = false; firstBad ||= contact; }
      if (!city.value.trim()) { fieldBad(city, "city", "Which city are you in?"); ok = false; firstBad ||= city; }

      if (!ok) { firstBad?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" }); return; }

      const data = {
        event: "Survey Form Submit",
        name: name.value.trim(),
        contact: cv,
        contactType: isEmail ? "email" : "whatsapp",
        city: city.value.trim(),
        products: selected,
        q2_motivation: form.q2.value,
        q3_price_comfort: form.q3.value
      };
      logEvent("gi_surveys", data);
      // Replace with: fetch("/api/survey", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(data) });

      showThanks();
    });
  }

  function fieldBad(input, key, msg) { input.classList.add("is-invalid"); setErr(key, msg); }

  function showThanks() {
    form.hidden = true;
    $("#thanks").hidden = false;
    fireConfetti();
    $("#thanks").scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
  }

  /* share */
  $("#shareBtn")?.addEventListener("click", async () => {
    const shareData = { title: "91 GI — Authentic Indian GI Products",
      text: "I just shared my feedback for 91 GI — help bring authentic, origin-certified Indian foods to your doorstep!",
      url: location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else { await navigator.clipboard.writeText(location.href); flash($("#shareBtn"), "Link copied!"); }
    } catch (_) {}
  });
  function flash(btn, msg) { const o = btn.textContent; btn.textContent = msg; setTimeout(() => (btn.textContent = o), 1800); }

  /* -----------------------------------------------------------------
     SCROLL: progress bar, nav state, reveal, counters
  ----------------------------------------------------------------- */
  const scrollBar = $("#scrollProgress"), nav = $("#nav");
  const surveyFab = $("#surveyFab");
  function onScroll() {
    const h = document.documentElement;
    const ratio = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if (scrollBar) scrollBar.style.width = (ratio * 100) + "%";
    if (nav) nav.classList.toggle("is-scrolled", h.scrollTop > 20);
    if (surveyFab) {
      // visible everywhere, including the home/hero at the top of the page
      surveyFab.classList.add("is-visible");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const reveals = $$("[data-reveal]");
  if ("IntersectionObserver" in window && !prefersReduced) {
    // auto-stagger: elements sharing a parent cascade in one after another
    const seen = new Map();
    reveals.forEach((el) => {
      const p = el.parentElement;
      const i = seen.get(p) || 0;
      seen.set(p, i + 1);
      el.style.setProperty("--reveal-delay", Math.min(i, 9) * 0.08 + "s");
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add("is-visible"));

  const counters = $$("[data-count]");
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach((c) => cio.observe(c));
  } else counters.forEach((c) => { c.textContent = (+c.dataset.count).toLocaleString("en-IN") + (c.dataset.suffix || ""); });

  function animateCount(el) {
    const target = +el.dataset.count, suffix = el.dataset.suffix || "";
    if (prefersReduced || target === 0) { el.textContent = target.toLocaleString("en-IN") + suffix; return; }
    const dur = 1500, start = performance.now();
    (function tick(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (t < 1) requestAnimationFrame(tick);
    })(start);
  }

  /* -----------------------------------------------------------------
     PARALLAX (hero floating cards, desktop only)
  ----------------------------------------------------------------- */
  const parallaxEls = $$("[data-parallax]");
  if (parallaxEls.length && !prefersReduced && window.matchMedia("(min-width: 880px)").matches) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        parallaxEls.forEach((el) => { el.style.transform = `translateY(${-y * (parseFloat(el.dataset.parallax) || 0.1)}px)`; });
        ticking = false;
      });
    }, { passive: true });
  }

  /* -----------------------------------------------------------------
     CONFETTI (success animation)
  ----------------------------------------------------------------- */
  function fireConfetti() {
    if (prefersReduced) return;
    const canvas = $("#confettiCanvas");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const size = () => { canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size();
    const colors = ["#a33434", "#C8993F", "#2D4A2F", "#995f2e", "#f6c453"];
    const parts = Array.from({ length: 130 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 140, y: innerHeight / 2 - 30,
      vx: (Math.random() - 0.5) * 11, vy: Math.random() * -13 - 4,
      g: 0.28 + Math.random() * 0.12, size: 5 + Math.random() * 7,
      rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
      color: colors[(Math.random() * colors.length) | 0], life: 1
    }));
    let frame = 0;
    (function loop() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      let alive = false;
      parts.forEach((p) => {
        p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        if (frame > 60) p.life -= 0.012;
        if (p.life > 0 && p.y < innerHeight + 40) {
          alive = true;
          ctx.save(); ctx.globalAlpha = Math.max(p.life, 0);
          ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6); ctx.restore();
        }
      });
      frame++;
      if (alive && frame < 260) requestAnimationFrame(loop);
      else ctx.clearRect(0, 0, innerWidth, innerHeight);
    })();
    window.addEventListener("resize", size, { once: true });
  }

  /* -----------------------------------------------------------------
     IN-CARD VIDEOS — pause offscreen (perf) + respect reduced-motion
  ----------------------------------------------------------------- */
  $$(".pcard__video").forEach((v) => {
    if (prefersReduced) { v.removeAttribute("autoplay"); v.pause(); return; }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => { en.isIntersecting ? v.play().catch(() => {}) : v.pause(); });
      }, { threshold: 0.25 }).observe(v);
    }
  });

  /* -----------------------------------------------------------------
     Smooth-scroll offset for fixed nav
  ----------------------------------------------------------------- */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
    });
  });
})();

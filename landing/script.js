/* ===================================================================
   91 GI — idea validation (CRO pass)
   Signal: which products people would buy (likes) + a yes/no verdict
   + optional contact. Sent to your Sheet + Meta Pixel.
   Speed: product videos lazy-load on scroll (no 40MB upfront).
   =================================================================== */
(() => {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- CONFIG: where responses go (see survey-backend.gs) ---- */
  const SURVEY_ENDPOINT = "";

  /* a stable per-visitor id so the dashboard can count unique people */
  const SESSION = (() => {
    try {
      let s = localStorage.getItem("gi_sid");
      if (!s) { s = "s_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36); localStorage.setItem("gi_sid", s); }
      return s;
    } catch (_) { return "s_anon"; }
  })();

  /* ---- 12 GI products (g1/g2 = placeholder tint shown before the video loads) ---- */
  const PRODUCTS = [
    { name: "Kashmir Saffron",        region: "Kashmir",        video: "videos/safron fnl.mp4",        poster: "videos/saffron.jpeg",   g1: "#f0a93c", g2: "#b3460f" },
    { name: "Diabetic Friendly Rice", region: "AP / Telangana", video: "videos/sona_masoori_rice.mp4", poster: "videos/Bhog-Rice.jpeg", g1: "#ece2c0", g2: "#c4ab6f" },
    { name: "Lakdong Turmeric",       region: "Meghalaya",      video: "videos/turmeric .mp4",         poster: "videos/turmeric.jpeg", g1: "#e0a72b", g2: "#8a5a12" },
    { name: "Guntur Mirchi",          region: "Andhra Pradesh", video: "videos/GUNTUR_MIRCHI.mp4",     g1: "#d94a2b", g2: "#7a1f12" },
    { name: "Dagdi Jowar of Jalna",   region: "Maharashtra",    video: "videos/jonna.mp4",             g1: "#d8b87a", g2: "#8a6328" },
    { name: "Gura Rajmash",           region: "Jammu",          video: "videos/Gura Rajmash.mp4",      g1: "#c98b6a", g2: "#7a3b22" },
    { name: "Thalanadan Grambu",      region: "Kerala",         video: "videos/lavanga.mp4",           g1: "#b5703f", g2: "#5c2f15" },
    { name: "Tandur Red Gram",        region: "Telangana",      video: "videos/tandur.mp4",            g1: "#d99b4a", g2: "#8a5316" },
    { name: "Himachali Kala Zeera",   region: "Himachal",       video: "videos/black_Zeera.mp4",       g1: "#8a7a5c", g2: "#3f3320" },
    { name: "Koli Hills Pepper",      region: "Tamil Nadu",     video: "videos/pepper.mp4",            g1: "#6f8a5a", g2: "#2f4a24" },
    { name: "Rajasthan Jeera",        region: "Rajasthan",      video: "videos/jeera.mp4",             g1: "#d9a85a", g2: "#8a5e1e" },
    { name: "Kashmir Walnut",         region: "Kashmir",        video: "videos/walnut.mp4",            g1: "#c79a6a", g2: "#6b4326" }
  ];

  const HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.6S3.6 15.3 3.6 9.3c0-2.5 2-4.4 4.4-4.4 1.7 0 3.1 1 3.9 2.4.8-1.4 2.2-2.4 3.9-2.4 2.4 0 4.4 1.9 4.4 4.4 0 6-8.6 11.3-8.6 11.3z"/></svg>';

  /* ---- tracking + storage helpers ---- */
  function track(event, params) {
    try { if (window.fbq) fbq(event === "Lead" ? "track" : "trackCustom", event, params || {}); } catch (_) {}
    try { if (window.clarity) clarity("event", event.toLowerCase()); } catch (_) {}
  }
  function save(key, payload) {
    try {
      const all = JSON.parse(localStorage.getItem(key) || "[]");
      all.push({ ...payload, ts: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(all));
    } catch (_) {}
  }
  function sendToBackend(data) {
    if (!SURVEY_ENDPOINT) return;
    try { fetch(SURVEY_ENDPOINT, { method: "POST", mode: "no-cors", body: JSON.stringify(data) }); } catch (_) {}
  }

  /* ---- state ---- */
  const liked = new Set();

  /* ---- render product grid ---- */
  const grid = $("#grid");
  PRODUCTS.forEach((p) => {
    const card = document.createElement("article");
    card.className = "pick reveal";
    card.innerHTML = `
      <div class="pick__media">
        <div class="pick__ph" style="background:linear-gradient(150deg, ${p.g1}, ${p.g2})"></div>
        <span class="pick__region">${p.region}</span>
        <video class="pick__vid" muted loop playsinline preload="none" data-src="${p.video}"${p.poster ? ` poster="${p.poster}"` : ""} aria-label="${p.name}"></video>
        <button class="like" type="button" aria-pressed="false" aria-label="I'd buy ${p.name}">${HEART}</button>
      </div>
      <div class="pick__body"><h3 class="pick__name">${p.name}</h3></div>`;

    const btn = $(".like", card);
    btn.addEventListener("click", () => {
      const on = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(on));
      card.classList.toggle("is-liked", on);
      btn.classList.remove("pop"); void btn.offsetWidth; btn.classList.add("pop");
      if (on) liked.add(p.name); else liked.delete(p.name);
      const likePing = { type: "like", session: SESSION, product: p.name, action: on ? "like" : "unlike" };
      save("gi_likes", likePing);   // local copy (powers the dashboard's "this device" mode)
      sendToBackend(likePing);      // → Google Sheet → /admin dashboard
      if (on) track("Like", { product: p.name });
      updateCount();
    });
    grid.appendChild(card);
  });

  /* ---- lazy-load videos: only fetch when about to enter the viewport ---- */
  if ("IntersectionObserver" in window) {
    const vio = new IntersectionObserver((es) => es.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) {
        if (!v.dataset.loaded) { v.src = v.dataset.src; v.dataset.loaded = "1"; }
        if (!reduced) v.play().catch(() => {});   // load always; autoplay only if motion is allowed
      } else if (!reduced) { v.pause(); }
    }), { threshold: .2, rootMargin: "300px 0px" });
    $$(".pick__vid").forEach((v) => vio.observe(v));
  } else {
    // very old browser: just load them
    $$(".pick__vid").forEach((v) => { v.src = v.dataset.src; if (!reduced) v.play().catch(() => {}); });
  }

  /* ---- live count (grid caption + sticky bar) ---- */
  const count = $("#count");
  const ctaCount = $("#ctaCount");
  function updateCount() {
    const n = liked.size;
    count.innerHTML = n ? `You'd buy <b>${n}</b> of these.` : `Tap the ones you'd buy.`;
    if (ctaCount) ctaCount.innerHTML = n ? `<b>${n}</b> you'd buy` : `Tap what you'd buy`;
  }

  /* ---- sticky CTA bar: keep the "finish" action one tap away ---- */
  const ctaBar = $("#ctaBar"), ctaBtn = $("#ctaBtn");
  const decide = $("#decide");
  let finished = false;
  if (ctaBtn) ctaBtn.addEventListener("click", () => $("#decideMain").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" }));
  function onScroll() {
    if (!ctaBar || finished) return;
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    const decideNear = decide.getBoundingClientRect().top < innerHeight * 0.85;
    ctaBar.classList.toggle("show", y > 240 && !decideNear);
  }
  addEventListener("scroll", onScroll, { passive: true });
  updateCount();
  onScroll();

  /* ---- verdict + optional contact ---- */
  const contact = $("#contact");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[6-9]\d{9}$/;

  $$(".vbtn").forEach((b) => b.addEventListener("click", () => submit(b.dataset.verdict)));

  function submit(verdict) {
    const cv = (contact.value || "").trim();
    const clean = cv.replace(/[\s-]/g, "");
    const isEmail = cv.includes("@");
    if (cv && !(isEmail ? emailRe.test(cv) : phoneRe.test(clean))) {
      contact.classList.add("bad");
      contact.focus();
      contact.placeholder = "Enter a valid mobile / email — or leave it blank";
      return;
    }

    const data = {
      type: "response",
      event: "Validation Response",
      session: SESSION,
      verdict: verdict,
      likedCount: liked.size,
      liked: [...liked],
      contact: cv,
      contactType: cv ? (isEmail ? "email" : "whatsapp") : ""
    };
    save("gi_validation", data);
    sendToBackend(data);
    track("Lead", { verdict: verdict, num_products: liked.size });

    finished = true;
    if (ctaBar) ctaBar.classList.remove("show");
    $("#decideMain").hidden = true;
    const done = $("#done");
    if (verdict === "no") $("#doneTitle").textContent = "Got it — thank you for the honesty.";
    done.hidden = false;
    done.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  }
  contact.addEventListener("input", () => contact.classList.remove("bad"));

  /* ---- reveal on scroll ---- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }
})();

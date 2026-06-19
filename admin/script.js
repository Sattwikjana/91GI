/* ===================================================================
   91 GI — Validation Dashboard
   Reads aggregated stats from the Apps Script backend (JSONP, so it
   works from a static site with no CORS headaches), or from this
   device's localStorage in "preview" mode.
   =================================================================== */
(() => {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const app = $("#app");
  const CFG_KEY = "gi_admin_cfg";

  let cfg = load();
  let mode = cfg ? "live" : null;     // "live" | "local"
  let timer = null;

  /* ---------------- config ---------------- */
  function load() { try { return JSON.parse(localStorage.getItem(CFG_KEY) || "null"); } catch (_) { return null; } }
  function store(c) { localStorage.setItem(CFG_KEY, JSON.stringify(c)); }
  function clearCfg() { localStorage.removeItem(CFG_KEY); }

  /* ---------------- JSONP fetch ---------------- */
  function fetchLive(url, key) {
    return new Promise((resolve, reject) => {
      const cb = "__giStats_" + Math.random().toString(36).slice(2);
      const sep = url.includes("?") ? "&" : "?";
      const s = document.createElement("script");
      const timeout = setTimeout(() => { cleanup(); reject(new Error("Timed out. Check the URL and that the web app is deployed to ‘Anyone’.")); }, 15000);
      function cleanup() { delete window[cb]; clearTimeout(timeout); s.remove(); }
      window[cb] = (data) => { cleanup(); resolve(data); };
      s.onerror = () => { cleanup(); reject(new Error("Couldn't reach the backend URL.")); };
      s.src = url + sep + "stats=1&key=" + encodeURIComponent(key) + "&callback=" + cb;
      document.body.appendChild(s);
    });
  }

  /* ---------------- local (this-device) aggregation ---------------- */
  function localStats() {
    const likes = JSON.parse(localStorage.getItem("gi_likes") || "[]");
    const resp = JSON.parse(localStorage.getItem("gi_validation") || "[]");
    let yes = 0, no = 0, contacts = 0;
    resp.forEach((r) => {
      const v = (r.verdict || "").toLowerCase();
      if (v === "yes") yes++; else if (v === "no") no++;
      if ((r.contact || "").trim()) contacts++;
    });
    const per = {}, likers = {};
    let likeClicks = 0, unlikeClicks = 0;
    likes.forEach((l) => {
      const pr = l.product || "", action = (l.action || "like").toLowerCase(), ses = l.session || "local";
      if (!per[pr]) per[pr] = { likes: 0, unlikes: 0 };
      if (action === "unlike") { per[pr].unlikes++; unlikeClicks++; }
      else { per[pr].likes++; likeClicks++; likers[ses] = true; }
    });
    const products = Object.keys(per).map((n) => ({ name: n, likes: per[n].likes, net: per[n].likes - per[n].unlikes })).sort((a, b) => b.net - a.net);
    const engaged = {};
    resp.forEach((r) => engaged[r.session || "local"] = true);
    Object.keys(likers).forEach((s) => engaged[s] = true);
    const recent = resp.slice(-15).reverse().map((r) => ({ ts: r.ts, verdict: r.verdict, liked: r.likedCount, contact: (r.contact || "").trim() ? "yes" : "", contactType: r.contactType }));
    return {
      ok: true, updated: new Date().toISOString(), responses: resp.length, yes, no,
      wouldBuyPct: resp.length ? Math.round(yes * 100 / resp.length) : 0,
      contacts, peopleWhoLiked: Object.keys(likers).length, totalLikeClicks: likeClicks,
      totalUnlikes: unlikeClicks, engagedSessions: Object.keys(engaged).length, products, recent
    };
  }

  /* ---------------- top bar controls ---------------- */
  function showControls(on) {
    ["#source", "#refresh", "#settings", "#autoWrap"].forEach((s) => $(s).hidden = !on);
    if (on) {
      const src = $("#source");
      src.textContent = mode === "live" ? "● Live · Google Sheet" : "● Preview · this device";
      src.className = "source " + (mode === "live" ? "source--live" : "source--local");
    }
  }
  $("#refresh").addEventListener("click", refresh);
  $("#settings").addEventListener("click", () => { stopAuto(); renderSetup(); showControls(false); });
  $("#auto").addEventListener("change", (e) => e.target.checked ? startAuto() : stopAuto());
  function startAuto() { stopAuto(); timer = setInterval(refresh, 30000); }
  function stopAuto() { if (timer) clearInterval(timer); timer = null; }

  /* ---------------- flows ---------------- */
  function refresh() {
    if (mode === "local") return render(localStats());
    app.dataset.loading = "1";
    fetchLive(cfg.url, cfg.key)
      .then((data) => { delete app.dataset.loading; data && data.ok ? render(data) : renderError((data && data.error) || "Unknown error"); })
      .catch((err) => { delete app.dataset.loading; renderError(err.message); });
  }

  function renderSetup(prefill) {
    showControls(false);
    const c = prefill || cfg || {};
    app.innerHTML = `
      <div class="setup">
        <h1>Connect your dashboard</h1>
        <p>Paste the Google Apps Script web-app URL and the admin key you set in <code>survey-backend.gs</code>.</p>
        <label for="u">Apps Script web-app URL</label>
        <input id="u" type="url" placeholder="https://script.google.com/macros/s/…/exec" value="${c.url || ""}" />
        <label for="k">Admin key</label>
        <input id="k" type="text" placeholder="your ADMIN_KEY" value="${c.key || ""}" />
        <div class="err" id="setupErr"></div>
        <div class="row">
          <button class="btn" id="connect">Connect</button>
          <button class="btn btn--ghost" id="useLocal">Preview with this device's data</button>
        </div>
        <p class="hint">The dashboard reads aggregated counts only. The admin key keeps the data private —
          anyone with the URL <em>and</em> key can view it, so don't share them. See
          <a href="../landing/survey-backend.gs">survey-backend.gs</a> for setup.</p>
      </div>`;
    $("#connect").addEventListener("click", () => {
      const url = $("#u").value.trim(), key = $("#k").value.trim();
      if (!url || !key) { $("#setupErr").textContent = "Enter both the URL and the admin key."; return; }
      $("#setupErr").textContent = "Connecting…";
      fetchLive(url, key).then((data) => {
        if (data && data.ok) { cfg = { url, key }; store(cfg); mode = "live"; showControls(true); render(data); }
        else $("#setupErr").textContent = (data && data.error) || "The backend rejected the key.";
      }).catch((e) => $("#setupErr").textContent = e.message);
    });
    $("#useLocal").addEventListener("click", () => { mode = "local"; showControls(true); render(localStats()); });
  }

  function renderError(msg) {
    showControls(true);
    app.innerHTML = `<div class="setup"><h1>Couldn't load stats</h1><p>${esc(msg)}</p>
      <div class="row"><button class="btn" id="retry">Retry</button>
      <button class="btn btn--ghost" id="reconfig">Change settings</button></div></div>`;
    $("#retry").addEventListener("click", refresh);
    $("#reconfig").addEventListener("click", () => { renderSetup(); showControls(false); });
  }

  /* ---------------- dashboard ---------------- */
  function render(d) {
    showControls(true);
    const maxNet = Math.max(1, ...d.products.map((p) => p.net));
    const bars = d.products.length ? d.products.map((p) => `
      <div class="brow">
        <div class="brow__top"><span class="brow__name">${esc(p.name)}</span><span class="brow__val">${p.net}</span></div>
        <div class="brow__track"><div class="brow__fill" style="width:${Math.round(p.net / maxNet * 100)}%"></div></div>
      </div>`).join("") : `<p class="empty">No likes yet.</p>`;

    const recent = d.recent.length ? d.recent.map((r) => `
      <li>
        <span class="tag tag--${String(r.verdict).toLowerCase() === "yes" ? "yes" : "no"}">${esc(r.verdict || "?")}</span>
        <span class="recent__meta">${r.liked || 0} liked${r.contact ? " · <b>contact</b>" : ""}</span>
        <span class="recent__time">${fmt(r.ts)}</span>
      </li>`).join("") : `<p class="empty">No responses yet.</p>`;

    const yesPct = d.responses ? Math.round(d.yes / d.responses * 100) : 0;

    app.innerHTML = `
      <div class="kpis">
        ${kpi("Responses", d.responses, "people who answered yes/no")}
        ${kpi("Would buy", d.wouldBuyPct + "%", d.yes + " yes · " + d.no + " no", "green")}
        ${kpi("People who liked", d.peopleWhoLiked, "tapped at least one heart", "accent")}
        ${kpi("Total like taps", d.totalLikeClicks, d.totalUnlikes ? d.totalUnlikes + " undone" : "across all products", "accent")}
        ${kpi("Contacts captured", d.contacts, "left a number / email")}
        ${kpi("Engaged people", d.engagedSessions, "liked or answered")}
      </div>

      <div class="cols">
        <section class="panel">
          <h2>Which products people would buy</h2>
          <p class="sub">Net likes per product (likes minus undone). Your demand ranking.</p>
          <div class="bars">${bars}</div>
        </section>

        <div style="display:flex;flex-direction:column;gap:18px">
          <section class="panel">
            <h2>Would you buy these?</h2>
            <p class="sub">The core yes / no signal.</p>
            <div class="split">
              <div class="split__cell split__cell--yes"><div class="split__n">${d.yes}</div><div class="split__l">Yes</div></div>
              <div class="split__cell split__cell--no"><div class="split__n">${d.no}</div><div class="split__l">No</div></div>
            </div>
            <div class="splitbar"><div class="splitbar__yes" style="width:${yesPct}%"></div></div>
          </section>

          <section class="panel">
            <h2>Recent responses</h2>
            <p class="sub">Last ${d.recent.length} answers.</p>
            <ul class="recent">${recent}</ul>
          </section>
        </div>
      </div>

      <div class="updated">Updated ${fmt(d.updated)}${mode === "local" ? " · this device only" : ""}</div>`;
  }

  function kpi(label, num, sub, variant) {
    return `<div class="kpi${variant ? " kpi--" + variant : ""}">
      <div class="kpi__label">${label}</div>
      <div class="kpi__num">${num}</div>
      <div class="kpi__sub">${esc(sub)}</div>
    </div>`;
  }

  /* ---------------- utils ---------------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function fmt(ts) {
    if (!ts) return "—";
    const d = new Date(ts);
    if (isNaN(d)) return String(ts);
    return d.toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  }

  /* ---------------- boot ---------------- */
  if (cfg) { showControls(true); refresh(); } else { renderSetup(); }
})();

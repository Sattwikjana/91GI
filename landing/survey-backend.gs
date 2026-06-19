/**
 * 91 GI — backend + stats API (Google Apps Script)
 * ------------------------------------------------------------------
 * Stores two things from the landing page and serves live stats to
 * the /admin dashboard. 100% free, no server.
 *
 *   • Responses tab  — one row per yes/no answer
 *   • Likes tab      — one row per heart tap (so you can count likes
 *                      and how many people tapped, even if they don't finish)
 *
 * SETUP (about 5 minutes)
 * 1. Create a new Google Sheet (sheet.new).
 * 2. Extensions → Apps Script. Delete the sample, paste THIS file, Save.
 * 3. Set ADMIN_KEY below to your own secret word.
 * 4. Deploy → New deployment → gear → "Web app".
 *      • Execute as     : Me
 *      • Who has access : Anyone
 *    Deploy, authorise, and COPY the "Web app URL".
 * 5. Paste that URL into landing/script.js  →  const SURVEY_ENDPOINT = "...";
 * 6. Open /admin/ , paste the same URL + your ADMIN_KEY. Done.
 *
 * Note: every heart tap writes a row. For a normal validation campaign
 * that's fine; if you expect huge traffic you can stop logging likes by
 * removing the sendToBackend(likePing) line in script.js.
 */

const ADMIN_KEY       = "Befach@91GI";   // <-- same as your admin dashboard password
const SHEET_RESPONSES = "Responses";
const SHEET_LIKES     = "Likes";

/* ---------- write (from the landing page) ---------- */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === "like") {
      tab(ss, SHEET_LIKES, ["Timestamp", "Session", "Product", "Action"])
        .appendRow([new Date(), data.session || "", data.product || "", data.action || "like"]);
    } else {
      tab(ss, SHEET_RESPONSES, ["Timestamp", "Session", "Would buy?", "# liked", "Products they'd buy", "Contact", "Contact type"])
        .appendRow([new Date(), data.session || "", data.verdict || "", data.likedCount || 0,
                    (data.liked || []).join(", "), data.contact || "", data.contactType || ""]);
    }
    return out({ ok: true }, null);
  } catch (err) {
    return out({ ok: false, error: String(err) }, null);
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

/* ---------- read (from the /admin dashboard) ---------- */
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (!p.stats) return ContentService.createTextOutput("91 GI backend is live.");
  if (p.key !== ADMIN_KEY) return out({ ok: false, error: "Unauthorized — wrong admin key." }, p.callback);
  return out(buildStats(), p.callback);
}

function buildStats() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const R = rows(ss, SHEET_RESPONSES);   // [Timestamp, Session, Verdict, #liked, Products, Contact, ContactType]
  const L = rows(ss, SHEET_LIKES);       // [Timestamp, Session, Product, Action]

  // responses
  let yes = 0, no = 0, contacts = 0;
  R.forEach(r => {
    const v = String(r[2]).toLowerCase();
    if (v === "yes") yes++; else if (v === "no") no++;
    if (String(r[5]).trim()) contacts++;
  });
  const recent = R.slice(-15).reverse().map(r => ({
    ts: r[0], verdict: r[2], liked: r[3], contact: String(r[5]).trim() ? "yes" : "", contactType: r[6]
  }));

  // likes
  const per = {}, likers = {};
  let likeClicks = 0, unlikeClicks = 0;
  L.forEach(r => {
    const session = String(r[1]), product = String(r[2]), action = String(r[3]).toLowerCase();
    if (!per[product]) per[product] = { likes: 0, unlikes: 0 };
    if (action === "unlike") { per[product].unlikes++; unlikeClicks++; }
    else { per[product].likes++; likeClicks++; likers[session] = true; }
  });
  const products = Object.keys(per).map(name => ({
    name: name, likes: per[name].likes, net: per[name].likes - per[name].unlikes
  })).sort((a, b) => b.net - a.net);

  const engaged = {};
  R.forEach(r => engaged[String(r[1])] = true);
  Object.keys(likers).forEach(s => engaged[s] = true);

  return {
    ok: true,
    updated: new Date(),
    responses: R.length,
    yes: yes, no: no,
    wouldBuyPct: R.length ? Math.round(yes * 100 / R.length) : 0,
    contacts: contacts,
    peopleWhoLiked: Object.keys(likers).length,
    totalLikeClicks: likeClicks,
    totalUnlikes: unlikeClicks,
    engagedSessions: Object.keys(engaged).length,
    products: products,
    recent: recent
  };
}

/* ---------- helpers ---------- */
function tab(ss, name, header) {
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) sh.appendRow(header);
  return sh;
}
function rows(ss, name) {
  const sh = ss.getSheetByName(name);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
}
function out(obj, callback) {
  const body = JSON.stringify(obj);
  if (callback) return ContentService.createTextOutput(callback + "(" + body + ")").setMimeType(ContentService.MimeType.JAVASCRIPT);
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JSON);
}

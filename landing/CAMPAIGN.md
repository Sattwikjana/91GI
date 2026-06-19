# 91 GI — Meta Campaign Plan (Demand Validation)

**Goal of this campaign:** find out, with real money and real strangers, whether people
will **buy** (or at least **like**) authentic GI-certified Indian foods — *before* we build
inventory and launch. The landing page is the test; this campaign drives honest traffic to it.

We are NOT trying to sell yet. We are buying **signal**: survey submissions, product votes,
and likes/shares from people who don't know us.

---

## 1. What we are measuring (success metrics)

The landing page is deliberately minimal: people **tap a heart** on the products they'd buy, then
answer one **yes/no** ("would you buy these if authentic and fairly priced?"). That's the whole test.

| Signal | Where it comes from | "Worth pursuing" benchmark |
|---|---|---|
| **Cost per response (CPL)** | Meta Pixel `Lead` (the yes/no tap) | < ₹40–₹70 per response |
| **Response rate** | responses ÷ landing-page views | > 10–15% of visitors |
| **"Yes, I'd buy" rate** | `verdict` in your Google Sheet | > 55% answer yes |
| **Like rate** | Pixel custom `Like` per product tap | > 30% of visitors like ≥1 |
| **Top products** | `liked` column (your Google Sheet) | clear winners emerge |
| **Where people drop** | Microsoft Clarity recordings/heatmaps | spot friction |

**Go / No-Go rule after the test:** if CPL is under ~₹70 **and** >55% answer "yes" **and** a few
products clearly win the likes → the idea has a pulse, scale it. If CPL is high and most tap "no" →
the concept (or audience, or price expectation) needs to change before you invest more.

---

## 2. Tracking setup (do this first — the campaign is blind without it)

1. **Create a Meta Pixel:** Events Manager → Connect Data Sources → Web → Meta Pixel.
2. Copy the Pixel ID and **replace both `YOUR_PIXEL_ID`** placeholders in `landing/index.html`.
3. Events that already fire from the page (no extra work once the ID is set):
   - `PageView` — every visit
   - `Like` (custom) — each time someone taps a product heart
   - `Lead` — on the yes/no answer (this is your optimization event)
4. In Events Manager, **verify** the Pixel is receiving `PageView` and `Lead` (use the Test Events tab).
5. Microsoft Clarity is already installed — use it to **watch session recordings** and see exactly
   where people drop off on the page (heatmaps + scroll depth).

> Note: also wire the survey to your Google Sheet (see `survey-backend.gs`) so you can read the
> actual answers, not just the counts Meta shows you.

### Live dashboard

Open **`/admin/`** on the site to see everything in one place: total responses, "would buy" %,
how many people tapped a like, total like taps, contacts captured, and a **per-product leaderboard**
of what people want most. It reads from the same Google Sheet (set `ADMIN_KEY` in `survey-backend.gs`,
then enter the web-app URL + key once in the dashboard). A "preview with this device's data" mode lets
you sanity-check it before the Sheet is connected. The `/admin/` page is `noindex` and key-gated, but
it's not strong security — don't share the URL + key.

---

## 3. Campaign structure

```
Campaign:  91GI — Demand Validation
  Objective: Leads        (optimize for the survey "Lead" event)
  Budget:    ₹400 / day (CBO — Campaign Budget Optimization)
  Duration:  7 days  (≈ ₹2,800 total for a first read)

  ├─ Ad set A — "Heritage & Authenticity"
  │     Audience: see §4.1
  ├─ Ad set B — "Health & Quality"
  │     Audience: see §4.2
  └─ Ad set C — "Broad / let Meta find them"
        Audience: see §4.3
```

Keep it to **3 ad sets, 3 ads each** at the start. Don't over-segment a small budget — give Meta
enough events per ad set to learn (aim for ~10+ leads/ad set before judging it).

**Optimization event:** `Lead`. If you get too few leads for Meta to optimize (under ~10/week),
temporarily switch the objective to **Engagement** or optimize for **Landing Page Views** to gather
cheaper signal, then move back to Leads once volume is there.

---

## 4. Targeting (India)

Common settings: **Location** India (start with metros + tier-2: Bengaluru, Hyderabad, Mumbai,
Delhi NCR, Pune, Chennai, Kolkata, Ahmedabad). **Age** 25–55. **Language** English + regional.
Placements: **Advantage+ (automatic)**.

**4.1 Ad set A — Heritage & Authenticity**
Interests: Geographical indication, Organic food, Khadi, Made in India, Slow food,
Indian cuisine, Ayurveda, Handicrafts, Farmers market. Behaviours: Engaged shoppers.

**4.2 Ad set B — Health & Quality**
Interests: Turmeric, Superfoods, Healthy eating, Organic food, Diabetic diet, Home cooking,
Spices, Saffron, Nutrition. Good fit for the "4× curcumin / diabetic-friendly rice" angle.

**4.3 Ad set C — Broad**
No interests. Age 25–55, India metros. Let the Pixel + Advantage+ find buyers. Often the
**cheapest leads** once the Pixel has ~50 events — keep it running.

---

## 5. Creative — 3 angles to test

Use the product videos already in `landing/videos/` (saffron, turmeric, rice, etc.) as the ad
media — they're authentic and stop the scroll. One concept per ad; test hook + first 3 seconds hardest.

**Angle 1 — "The Fake in Your Kitchen" (problem/authenticity)**
- Hook (first line / on-screen text): *"90% of 'Kashmiri saffron' sold in India isn't from Kashmir."*
- Primary text: Most Indians have never tasted the real thing. India has 635+ GI-protected foods —
  saffron, turmeric, rice — that can legally come from only one place. We're putting them all on one
  platform, direct from the farmers. **Would you buy them? Tell us in a 60-second survey.**
- Headline: *India's Rarest Foods — Protected by Law*
- CTA button: **Learn More**

**Angle 2 — "Soil Science / Health" (4× curcumin)**
- Hook: *"This turmeric has 4× the curcumin of the one in your kitchen. It's not a brand claim — it's the soil."*
- Primary text: Lakdong turmeric. Diabetic-friendly rice. Kashmir walnuts with paper-thin shells.
  Real GI-certified ingredients, sourced from origin. Help us decide what to launch first.
- Headline: *Origin-Certified. Lab-Different. Worth It?*
- CTA: **Learn More**

**Angle 3 — "Patriotism / Farmers" (emotional)**
- Hook: *"India grew the world's greatest ingredients. Most Indians have never tasted them."*
- Primary text: Your money reaching the farmer, not the middleman. The real flavour of the land.
  We're building one honest platform for every GI product of India — and we want to know if you'd
  back it. 60-second survey, no payment.
- Headline: *Rooted in India. Respected Globally.*
- CTA: **Learn More**

**Creative tips:** square (1:1) and vertical (4:5 / 9:16) for Reels & Stories; burn captions into
video (most watch muted); put the strongest line in the first 3 seconds; show the GI badge.

---

## 6. Budget tiers

| Tier | Daily | 7-day total | Use when |
|---|---|---|---|
| Lean test | ₹200 | ₹1,400 | Tight budget; expect slower, noisier read |
| **Recommended** | **₹400** | **₹2,800** | Enough leads to judge 3 ad sets in a week |
| Faster read | ₹800 | ₹5,600 | Want a confident decision in 4–5 days |

Start lean, and **scale the winners** (raise budget 20–30% every 2–3 days on ad sets beating your
CPL target). Kill any ad set above target after it has spent ~₹400 with no leads.

---

## 7. 7-day run plan

- **Day 0:** Pixel verified, Google Sheet connected, privacy note live, 3 ad sets × 3 ads submitted.
- **Days 1–2:** Learning phase — *don't touch it*. Let each ad set gather data.
- **Day 3:** First read. Pause the worst ad/audience. Note CPL and "would-buy" % from the Sheet.
- **Days 4–5:** Shift budget to the winning angle. Maybe add a 4th creative based on what's working.
- **Day 6–7:** Final read. Apply the Go/No-Go rule (§1). Export the Sheet, rank products by votes.

---

## 8. Compliance checklist (so ads aren't rejected)

- [ ] A reachable **privacy note** is on the page (footer `#privacy` — expand into a full
      Privacy Policy page before scaling; Meta requires one when you collect contact info).
- [ ] No false health/medical claims ("cures diabetes" → ✗; "diabetic-friendly" framing → keep it factual).
- [ ] Business name shown (Befach 4X Pvt. Ltd. — in the footer).
- [ ] Pixel + Lead event firing (Test Events shows green).
- [ ] Don't over-promise a launch date you can't hit.

---

*Files in this folder:* `index.html` (the survey landing page) · `survey-backend.gs` (Google
Sheet capture) · `CAMPAIGN.md` (this plan).

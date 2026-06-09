# 91GI — Rooted in India. Respected Globally.

A premium e-commerce storefront for **India's Geographical Indication (GI) products** — 62 heritage foods from 22 states, each sourced direct from its protected region of origin. Built as a fast, dependency-free static site.

> **91** = India's calling code · **GI** = Geographical Indication

🌐 Domain: **91GI.com**

---

## ✨ Features

- **62 GI products** across 16 categories (Rice, Spices, Coffee, Makhana, Turmeric, Nuts & Dry Fruits, Ghee, and more)
- **Browse by Category** and **Browse by State** (grouped by region of India)
- **Storytelling product pages** — every product carries the real story of its origin, why it earned its GI tag, and an emotional connection to the place and the people who grow it
- **Full shop experience** — search, multi-filter (category + state + price), and sort
- **Working cart & checkout** — slide-out basket, full cart page, and a complete checkout flow with order summary, live totals, free-shipping threshold, and multiple payment options
- **Befach Low Diabetic Rice** featured as a special product
- **Premium design** — forest-green / cream / vermillion palette drawn from the 91GI logo, Playfair Display + DM Sans typography, scroll-reveal animations, responsive down to mobile
- **Accessible & SEO-aware** — associated form labels, per-page meta descriptions, semantic markup

## 🗂️ Project Structure

```
.
├── index.html          # Home — hero, featured products, categories, story, states
├── shop.html           # Shop all — filters, search, sort
├── product.html        # Product detail — story, key facts, add-to-cart, related
├── cart.html           # Full basket page
├── checkout.html       # Checkout flow + order summary
├── categories.html     # Browse by category
├── states.html         # Browse by state (grouped by region)
├── about.html          # The 91GI story / mission / what is GI
├── 91GI_logo.png       # Brand logo
└── assets/
    ├── css/style.css   # Full design system + components
    └── js/
        ├── products.js # 62-product catalog + stories + helpers
        └── main.js     # Cart, nav/footer injection, animations
```

## 🚀 Run Locally

No build step. It's a static site — serve the folder with anything:

```bash
# Option A: Node http-server
npx -y http-server . -p 8765

# Option B: Python
python3 -m http.server 8765
```

Then open <http://localhost:8765>.

## 🛠️ Tech

- Vanilla HTML, CSS, and JavaScript — **zero framework, zero dependencies**
- `localStorage`-backed cart
- Google Fonts (Playfair Display, Cormorant Garamond, DM Sans)

## 📦 Catalog Source

Products are defined in [`assets/js/products.js`](assets/js/products.js). Each entry includes its category, region/city, state, price, pack size, key facts, and a written origin story.

---

© 91GI. Built to put protected-origin Indian products — and the farmers behind them — in one honest place.

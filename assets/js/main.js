// 91GI — Main JavaScript
// Handles cart, navigation, animations, and shared UI

// ============================================
// CART MANAGEMENT
// ============================================
const Cart = {
  key: '91gi_cart_v1',

  get() {
    try {
      const raw = JSON.parse(localStorage.getItem(this.key)) || [];
      // Drop any stored line whose product no longer exists in the catalog,
      // so the badge, drawer, cart page and checkout never desync on a phantom id.
      const cleaned = raw.filter(i => i && i.id && typeof getProductById === 'function' && getProductById(i.id));
      if (cleaned.length !== raw.length) {
        localStorage.setItem(this.key, JSON.stringify(cleaned));
      }
      return cleaned;
    } catch (e) {
      return [];
    }
  },

  save(items) {
    localStorage.setItem(this.key, JSON.stringify(items));
    this.updateUI();
  },

  add(productId, qty = 1) {
    const items = this.get();
    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id: productId, qty });
    }
    this.save(items);
    showToast(`Added to cart`);
  },

  remove(productId) {
    this.save(this.get().filter(i => i.id !== productId));
  },

  updateQty(productId, qty) {
    if (qty < 1) return this.remove(productId);
    const items = this.get();
    const item = items.find(i => i.id === productId);
    if (item) {
      item.qty = qty;
      this.save(items);
    }
  },

  clear() {
    this.save([]);
  },

  getCount() {
    return this.get().reduce((sum, item) => sum + item.qty, 0);
  },

  getSubtotal() {
    return this.get().reduce((sum, item) => {
      const product = getProductById(item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  },

  getMRPSavings() {
    return this.get().reduce((sum, item) => {
      const product = getProductById(item.id);
      if (!product || !product.mrp) return sum;
      return sum + ((product.mrp - product.price) * item.qty);
    }, 0);
  },

  getShipping() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 999 ? 0 : 79;
  },

  getTotal() {
    return this.getSubtotal() + this.getShipping();
  },

  updateUI() {
    const count = this.getCount();
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
    const drawer = document.getElementById('cartDrawer');
    if (drawer) renderCartDrawer();
    // Let the current page keep its own cart views (checkout summary, full cart page)
    // in sync whenever the drawer edits the cart.
    if (typeof window.onCartChange === 'function') window.onCartChange();
  }
};

// ============================================
// CART DRAWER
// ============================================
function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) {
    drawer.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!itemsContainer) return;

  const items = Cart.get();
  if (items.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="color: var(--mute); margin: 0 auto;">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <p>Your basket is empty</p>
        <a href="/shop/" class="btn btn-primary btn-sm">Discover GI Products</a>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  itemsContainer.innerHTML = items.map(item => {
    const p = getProductById(item.id);
    if (!p) return '';
    const theme = p.badge && p.badge.includes('Befach') ? 'cat-special' : (CATEGORY_THEME[p.category] || 'cat-spice');
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <div class="styled-image ${theme}" style="padding: 8px;">
            <div class="styled-image-content">
              <svg class="styled-image-pin" viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; margin: 0;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
            </div>
          </div>
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-region">${p.region} · ${p.unit}</div>
          <div class="cart-item-qty">
            <button onclick="Cart.updateQty('${p.id}', ${item.qty - 1})">−</button>
            <span class="qty-display">${item.qty}</span>
            <button onclick="Cart.updateQty('${p.id}', ${item.qty + 1})">+</button>
          </div>
        </div>
        <div>
          <div class="cart-item-price">₹${(p.price * item.qty).toLocaleString('en-IN')}</div>
          <a class="cart-item-remove" onclick="Cart.remove('${p.id}')">Remove</a>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cartSubtotal').textContent = '₹' + Cart.getSubtotal().toLocaleString('en-IN');
  document.getElementById('cartShipping').textContent = Cart.getShipping() === 0 ? 'Free' : '₹' + Cart.getShipping();
  document.getElementById('cartTotal').textContent = '₹' + Cart.getTotal().toLocaleString('en-IN');
  const savings = Cart.getMRPSavings();
  const savingsEl = document.getElementById('cartSavings');
  if (savingsEl) {
    if (savings > 0) {
      savingsEl.parentElement.style.display = 'flex';
      savingsEl.textContent = '− ₹' + savings.toLocaleString('en-IN');
    } else {
      savingsEl.parentElement.style.display = 'none';
    }
  }
}

// ============================================
// MOBILE NAV
// ============================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  menu.classList.toggle('open');
  overlay.classList.toggle('show');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// Header search: focus the shop filter input if present, else send the user to the shop page.
function navSearch() {
  const el = document.getElementById('searchInput');
  if (el) {
    el.focus();
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    window.location.href = '/shop/';
  }
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

function initReveal() {
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ============================================
// IMAGE LOADING
// ============================================
function initImageLoad() {
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => {
        img.classList.add('loaded');
        // Add fallback styling to parent
        if (img.parentElement && !img.dataset.fallback) {
          img.dataset.fallback = '1';
          img.style.opacity = '0.4';
          img.style.mixBlendMode = 'luminosity';
        }
      });
    }
  });
}

// ============================================
// TOAST
// ============================================
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============================================
// RENDER HELPERS
// ============================================
const CATEGORY_THEME = {
  'Rice': 'cat-rice',
  'Wheat': 'cat-wheat',
  'Millets & Pseudo-cereals': 'cat-millet',
  'Pulses & Legumes': 'cat-pulse',
  'Turmeric (Haldi)': 'cat-turmeric',
  'Chilli (Dried Spice)': 'cat-chilli',
  'Other Spices': 'cat-spice',
  'Nuts & Dry Fruits': 'cat-nuts',
  'Coconut & Copra': 'cat-coconut',
  'Oilseeds': 'cat-oil',
  'Coffee': 'cat-coffee',
  'Tea': 'cat-tea',
  'Makhana (Fox Nut)': 'cat-makhana',
  'Medicinal & Herbal': 'cat-herbal',
  'Onion, Garlic & Roots': 'cat-roots',
  'Processed / Other': 'cat-processed'
};

function styledProductImage(p, opts = {}) {
  const theme = p.badge && p.badge.includes('Befach') ? 'cat-special' : (CATEGORY_THEME[p.category] || 'cat-spice');
  const cleanState = (p.state || '').replace(' (UT)', '').replace('India (Andhra Pradesh & Odisha)', 'Araku').replace('India (', '').replace(')', '');
  return `
    <div class="styled-image ${theme}">
      <div class="styled-image-content">
        <svg class="styled-image-pin" viewBox="0 0 24 24" fill="currentColor" opacity="0.8">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
        </svg>
        <div class="styled-image-region">${cleanState}</div>
        <div class="styled-image-divider"></div>
        <div class="styled-image-name">${p.name}</div>
      </div>
      <div class="styled-image-tag">91GI · Origin Verified</div>
    </div>
  `;
}

function renderProductCard(p) {
  const discount = p.mrp ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
  return `
    <a href="/product/?id=${p.id}" class="product-card">
      <div class="product-card-image">
        ${p.badge ? `<span class="product-badge ${p.badge.includes('Befach') ? 'red' : p.badge.includes('Premium') ? 'gold' : ''}">${p.badge}</span>` : ''}
        ${styledProductImage(p)}
        <span class="product-quick-add" onclick="event.preventDefault(); event.stopPropagation(); Cart.add('${p.id}'); openCart();">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Add to Basket
        </span>
      </div>
      <div class="product-card-meta">${p.state}</div>
      <div class="product-card-title">${p.name}</div>
      <div class="product-card-region">${p.region}${p.unit ? ' · ' + p.unit : ''}</div>
      <div class="product-card-price">
        <span class="price">₹${p.price.toLocaleString('en-IN')}</span>
        ${p.mrp ? `<span class="price-mrp">₹${p.mrp.toLocaleString('en-IN')}</span>` : ''}
        ${discount ? `<span class="price-discount">−${discount}%</span>` : ''}
      </div>
    </a>
  `;
}

function renderProductGrid(products, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <p style="color: var(--mute); font-size: 18px;">No products match these filters.</p>
        <button onclick="clearAllFilters()" class="btn btn-ghost btn-sm" style="margin-top: 20px;">Reset Filters</button>
      </div>
    `;
    return;
  }
  container.innerHTML = products.map(renderProductCard).join('');
}

// ============================================
// NAV / FOOTER INJECTION (so we don't repeat HTML)
// ============================================
function injectNav(activePage) {
  return `
    <div class="top-banner">
      <div class="top-banner-track">
        <span>FREE SHIPPING ON ORDERS ABOVE ₹999</span>
        <span>·</span>
        <span>GI-AUTHENTICATED PRODUCTS</span>
        <span>·</span>
        <span>SOURCED DIRECT FROM FARMERS</span>
        <span>·</span>
        <span>SHIPS PAN INDIA</span>
        <span>·</span>
        <span>FREE SHIPPING ON ORDERS ABOVE ₹999</span>
        <span>·</span>
        <span>GI-AUTHENTICATED PRODUCTS</span>
        <span>·</span>
        <span>SOURCED DIRECT FROM FARMERS</span>
        <span>·</span>
        <span>SHIPS PAN INDIA</span>
      </div>
    </div>
    <nav class="nav">
      <div class="container">
        <div class="nav-inner">
          <a href="/" class="nav-logo">
            <img src="/91GI_logo.png" alt="91GI — Rooted in India. Respected Globally.">
          </a>
          <div class="nav-links">
            <a href="/" class="${activePage==='home'?'active':''}">Home</a>
            <a href="/shop/" class="${activePage==='shop'?'active':''}">Shop All</a>
            <a href="/categories/" class="${activePage==='categories'?'active':''}">Categories</a>
            <a href="/states/" class="${activePage==='states'?'active':''}">By State</a>
            <a href="/about/" class="${activePage==='about'?'active':''}">Our Story</a>
          </div>
          <div class="nav-actions">
            <button class="nav-icon-btn" onclick="navSearch()" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
            <button class="nav-icon-btn" onclick="openCart()" aria-label="Cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span class="cart-badge">0</span>
            </button>
            <button class="mobile-toggle" onclick="toggleMobileMenu()" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="mobile-overlay" id="mobileOverlay" onclick="toggleMobileMenu()"></div>
    <aside class="mobile-menu" id="mobileMenu">
      <a href="/">Home</a>
      <a href="/shop/">Shop All</a>
      <a href="/categories/">Categories</a>
      <a href="/states/">By State</a>
      <a href="/about/">Our Story</a>
      <a href="/cart/">Basket</a>
    </aside>
  `;
}

function injectFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>91GI</h3>
            <p>Rooted in India. Respected Globally. Every product on 91GI is sourced direct from the GI region it belongs to — protected origin, unbroken authenticity, fair price for the farmer.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="/shop/">All Products</a></li>
              <li><a href="/categories/">Categories</a></li>
              <li><a href="/states/">By State</a></li>
              <li><a href="/shop/?category=Rice">Rice</a></li>
              <li><a href="/shop/?category=Other%20Spices">Spices</a></li>
              <li><a href="/shop/?category=Coffee">Coffee</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about/">Our Story</a></li>
              <li><a href="/about/#mission">Mission</a></li>
              <li><a href="/about/#farmers">Farmers</a></li>
              <li><a href="/about/#gi">What is GI?</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="mailto:hello@91gi.com">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} 91GI. All rights reserved.</span>
          <span><a href="#">Privacy</a> · <a href="#">Terms</a> · 91GI.com</span>
        </div>
      </div>
    </footer>
  `;
}

function injectCartDrawer() {
  return `
    <div class="mobile-overlay" id="cartOverlay" onclick="closeCart()"></div>
    <aside class="cart-drawer" id="cartDrawer">
      <div class="cart-header">
        <h3>Your Basket</h3>
        <button class="cart-close" onclick="closeCart()" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="cart-items" id="cartItems"></div>
      <div class="cart-footer" id="cartFooter">
        <div class="cart-totals"><span>Subtotal</span><span id="cartSubtotal">₹0</span></div>
        <div class="cart-totals" style="color: var(--vermillion);"><span>You save</span><span id="cartSavings">₹0</span></div>
        <div class="cart-totals"><span>Shipping</span><span id="cartShipping">Free</span></div>
        <div class="cart-totals grand"><span>Total</span><span id="cartTotal">₹0</span></div>
        <div class="cart-actions">
          <a href="/cart/" class="btn btn-ghost btn-sm" style="flex:1;">View Basket</a>
          <a href="/checkout/" class="btn btn-primary btn-sm" style="flex:1;">Checkout</a>
        </div>
      </div>
    </aside>
  `;
}

// ============================================
// INSTANT NAVIGATION — speculative prefetch
// Prefetches same-site pages on hover/pointer-down so they
// open instantly. Gracefully ignored by unsupported browsers.
// ============================================
function initPrefetch() {
  try {
    if (typeof HTMLScriptElement !== 'undefined' &&
        HTMLScriptElement.supports &&
        HTMLScriptElement.supports('speculationrules')) {
      const rules = {
        prefetch: [{
          source: 'document',
          where: { href_matches: '/*' },
          eagerness: 'moderate'
        }]
      };
      const s = document.createElement('script');
      s.type = 'speculationrules';
      s.textContent = JSON.stringify(rules);
      document.head.appendChild(s);
      return;
    }
  } catch (e) { /* fall through to manual prefetch */ }

  // Fallback: prefetch internal links on hover via <link rel="prefetch">
  const prefetched = new Set();
  const prefetch = (url) => {
    if (prefetched.has(url)) return;
    prefetched.add(url);
    const l = document.createElement('link');
    l.rel = 'prefetch';
    l.href = url;
    document.head.appendChild(l);
  };
  document.addEventListener('pointerover', (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
    if (a.target === '_blank') return;
    prefetch(a.href);
  }, { passive: true });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav, footer, cart
  const navMount = document.getElementById('navMount');
  const footerMount = document.getElementById('footerMount');
  const activePage = document.body.dataset.page;

  if (navMount) navMount.innerHTML = injectNav(activePage);
  if (footerMount) footerMount.innerHTML = injectFooter() + injectCartDrawer();

  Cart.updateUI();
  initNavScroll();
  initReveal();
  initImageLoad();
  initPrefetch();

  // Add reveal class to common elements (NOT .product-grid — it's too tall and would never trigger)
  document.querySelectorAll('.section-header, .category-grid, .state-grid, .features-strip, .about-grid').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });
  setTimeout(initReveal, 50);
});

// Non-module script; products provided by products.js on window.PRODUCTS

function qs(sel, ctx=document){ return ctx.querySelector(sel); }
function qsa(sel, ctx=document){ return [...ctx.querySelectorAll(sel)]; }

function formatPrice(n){
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

function getParam(name){
  const url = new URL(window.location.href);
  let v = url.searchParams.get(name);
  if (!v || v === 'null' || v === 'undefined') {
    // try hash fallback (#iphone-16-pro)
    const hash = (url.hash || '').replace(/^#/, '');
    if (hash) v = hash;
  }
  return v;
}

function render(product){
  document.title = `${product.name} — iStore`;
  const el = qs('#product');
  el.innerHTML = `
    <div class="product-detail__grid">
      <div class="product-detail__gallery">
        <div class="product-detail__hero">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail__thumbs">
          ${product.gallery.map(src => `<button class="thumb" aria-label="Preview"><img src="${src}" alt="${product.name} preview"></button>`).join('')}
        </div>
      </div>

      <div class="product-detail__info">
        <h1>${product.name}</h1>
        <div class="product-detail__price">${formatPrice(product.price)}</div>
        <p class="product-detail__desc">${product.description}</p>

        <div class="product-detail__group">
          <label>Color</label>
          <div class="chip-list">
            ${product.colors.map(c => `<button class="chip" data-value="${c}">${c}</button>`).join('')}
          </div>
        </div>

        <div class="product-detail__group">
          <label>Storage</label>
          <div class="chip-list">
            ${product.storage.map(s => `<button class="chip" data-value="${s}">${s}</button>`).join('')}
          </div>
        </div>

        <div class="product-detail__group">
          <label>Key specs</label>
          <ul class="spec-list">
            ${product.specs.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="product-detail__cta">
          <button class="btn btn--primary">Buy Now</button>
          <a class="btn btn--ghost" href="index.html#products">Back to Products</a>
        </div>
      </div>
    </div>
  `;
  // Make container visible (bypass global reveal script on this standalone page)
  el.classList.add('is-visible');

  // Simple interactions
  const heroImg = qs('.product-detail__hero img');
  qsa('.thumb').forEach((btn) => btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    if (img && heroImg) heroImg.src = img.src;
  }));

  qsa('.chip-list').forEach((list) => {
    list.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      qsa('.chip', list).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function main(){
  const id = getParam('id');
  const list = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
  let product = list.find(p => p.id === id);

  // Fallback: if no id provided, use first product
  if (!product && !id && list.length) {
    product = list[0];
  }

  if (!product){
    const container = qs('#product');
    const suggestions = list.map(p => `<li><a class="btn" href="product.html?id=${p.id}">${p.name}</a></li>`).join('');
    container.innerHTML = `<div class="not-found">
      <h2>Product not found</h2>
      <p>The product you are looking for doesn’t exist.</p>
      ${suggestions ? `<ul style="display:grid;gap:6px;list-style:none;padding:0;margin:12px 0 0">${suggestions}</ul>` : ''}
      <p style="margin-top:12px"><a class="btn btn--primary" href="index.html#products">Go back</a></p>
    </div>`;
    container.classList.add('is-visible');
    return;
  }
  render(product);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}

// Product catalogue: simple, extensible
// id is the URL key used in product.html?id=...
// Expose globally for non-module usage
window.PRODUCTS = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    price: 1199,
    image: 'assets/iPhone_16_Pro.png',
    gallery: ['assets/iPhone_16_Pro.png'],
    colors: ['Natural Titanium', 'Black Titanium', 'White Titanium'],
    storage: ['128GB', '256GB', '512GB', '1TB'],
    specs: [
      '6.3" ProMotion display',
      'A18 Pro chip',
      'Triple‑camera system',
      'Titanium design'
    ],
    description: 'The ultimate Pro iPhone with exceptional performance and refined design.'
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    price: 999,
    image: 'assets/iPhone_16.png',
    gallery: ['assets/iPhone_16.png'],
    colors: ['Blue', 'Pink', 'Black'],
    storage: ['128GB', '256GB', '512GB'],
    specs: ['6.1" Super Retina XDR', 'A18 chip', 'Advanced dual‑camera'],
    description: 'A powerful everyday iPhone with great display and battery.'
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    price: 1099,
    image: 'assets/iPhone_15_Pro.png',
    gallery: ['assets/iPhone_15_Pro.png'],
    colors: ['Natural Titanium', 'Black Titanium'],
    storage: ['128GB', '256GB', '512GB', '1TB'],
    specs: ['6.1" ProMotion', 'A17 Pro', 'Pro camera system'],
    description: 'Compact Pro power with brilliant display and cameras.'
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    price: 899,
    image: 'assets/iPhone_15.png',
    gallery: ['assets/iPhone_15.png'],
    colors: ['Blue', 'Green', 'Pink', 'Black'],
    storage: ['128GB', '256GB', '512GB'],
    specs: ['6.1" Super Retina XDR', 'A16 Bionic', 'Dual‑camera system'],
    description: 'Balanced performance and value, now with USB‑C.'
  },
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    price: 799,
    image: 'assets/iPhone_14_Pro.png',
    gallery: ['assets/iPhone_14_Pro.png'],
    colors: ['Space Black', 'Silver', 'Gold'],
    storage: ['128GB', '256GB', '512GB', '1TB'],
    specs: ['6.1" ProMotion', 'A16 Bionic', 'Dynamic Island'],
    description: 'Pro features with an iconic design.'
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    price: 699,
    image: 'assets/iPhone_14.png',
    gallery: ['assets/iPhone_14.png'],
    colors: ['Blue', 'Purple', 'Midnight'],
    storage: ['128GB', '256GB', '512GB'],
    specs: ['6.1" Super Retina XDR', 'A15 Bionic', 'Ceramic Shield'],
    description: 'Reliable performance with beloved design.'
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    price: 599,
    image: 'assets/iPhone_13.png',
    gallery: ['assets/iPhone_13.png'],
    colors: ['Starlight', 'Midnight', 'Blue'],
    storage: ['128GB', '256GB', '512GB'],
    specs: ['6.1" Super Retina XDR', 'A15 Bionic', 'Great battery'],
    description: 'Proven value with solid features.'
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    price: 429,
    image: 'assets/iPhone_SE.png',
    gallery: ['assets/iPhone_SE.png'],
    colors: ['Red', 'Starlight', 'Midnight'],
    storage: ['64GB', '128GB', '256GB'],
    specs: ['4.7" Retina HD', 'A15 Bionic', 'Touch ID'],
    description: 'Compact and powerful classic design.'
  }
];

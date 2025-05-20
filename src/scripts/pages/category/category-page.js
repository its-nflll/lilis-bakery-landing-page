export default class CategoryPage {
  constructor() {
    this.products = [
      {
        image: './images/kue-bolu/bolu-ketan-topping-coklat-keju.jpg',
        name: 'Bolu Ketan Topping Coklat & Keju',
        rating: 4.7,
        category: ['Bolu & Pastry', 'Semua'],
      },
      {
        image: './images/kue-bolu/chiffon-keju.jpg',
        name: 'Chiffon Keju',
        rating: 4.6,
        category: ['Bolu & Pastry', 'Semua'],
      },
      {
        image: './images/kue-bolu/kue-nikahan-custom.jpg',
        name: 'Kue Nikahan Custom',
        rating: 4.9,
        category: ['Kue Pernikahan', 'Semua'],
      },
      {
        image: './images/kue-bolu/bolu-ketan-hitam.jpeg',
        name: 'Bolu Ketan Hitam',
        rating: 4.8,
        category: ['Bolu & Pastry', 'Semua'],
      },
      {
        image: './images/kue-bolu/kue-ultah-custom.jpg',
        name: 'Kue Ultah Custom',
        rating: 4.9,
        category: ['Kue Ulang Tahun', 'Semua'],
      },
      // Tambahkan produk lain sesuai kebutuhan
    ];
    this.categories = [
      'Semua',
      'Kue Ulang Tahun',
      'Kue Pernikahan',
      'Bolu & Pastry',
      'Kue Kering',
    ];
  }

  async render() {
    return `
      <section class="category-section">
        <div class="container">
          <div class="section-header">
            <h1>Kategori Produk</h1>
            <p>Temukan berbagai pilihan kue dan pastry homemade berkualitas premium dari Lilis Bakery</p>
          </div>
          <div class="category-filters">
            ${this.categories.map((cat, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}">${cat}</button>`).join('')}
          </div>
          <div class="product-cards">
            ${this.products.map(product => `
              <div class="product-card" data-category="${product.category.join(',')}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="rating">
                  <span class="stars">★★★★★</span>
                  <span class="count">${product.rating} Rating</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const categories = this.categories;
    const products = this.products;

    // Tampilkan semua produk dengan fade in sederhana
    productCards.forEach(card => {
      card.style.opacity = '0';
      setTimeout(() => {
        card.style.transition = 'opacity 0.4s ease';
        card.style.opacity = '1';
      }, 100);
    });

    filterButtons.forEach((button, idx) => {
      button.addEventListener('click', () => {
        // Hapus kelas aktif dari semua tombol
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        // Tambahkan kelas aktif ke tombol yang diklik
        button.classList.add('active');
        
        const selectedCategory = categories[idx];
        
        // Transisi fade sederhana untuk produk
        productCards.forEach((card, i) => {
          const prod = products[i];
          const shouldDisplay = selectedCategory === 'Semua' || prod.category.includes(selectedCategory);
          
          if (shouldDisplay) {
            // Tampilkan produk dengan fade in
            if (card.style.display === 'none') {
              card.style.opacity = '0';
              card.style.display = '';
              
              setTimeout(() => {
                card.style.opacity = '1';
              }, 50);
            }
          } else {
            // Sembunyikan produk dengan fade out
            card.style.opacity = '0';
            
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
} 
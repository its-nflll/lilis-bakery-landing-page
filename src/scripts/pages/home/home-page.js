export default class HomePage {
  async render() {
    return `
      <div class="gradient-bg-container">
        <section class="hero-section">
          <div class="container hero-container">
            <div class="hero-text">
              <h1>Bawa kebahagiaan-mu melalui sepotong kue!</h1>
              <p>Spesialis kue ulang tahun, pernikahan, dan bolu elegan — semua dibuat homemade dari bahan premium, khusus pre-order & delivery. Melayani pesanan custom untuk momen spesialmu</p>
              <div class="hero-buttons">
                <button class="btn btn-primary">Pesan Sekarang</button>
                <button class="btn btn-outline">Lihat Menu</button>
              </div>
            </div>
            <div class="hero-image">
              <img src="./images/display-kue-bolu/display-bolu-hangat.jpg" alt="Bolu Hangat" style="transition: all 0.4s ease; opacity: 1;">
              <div style="position: relative; max-width: 600px; margin-top: 20px; margin-left: auto;">
                <div style="position: absolute; left: -150px; top: 50%; transform: translateY(-50%); background-color: white; border-radius: 30px; padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; width: 110px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
                  <button style="background: none; border: none; font-size: 18px; cursor: pointer; padding: 0; color: #333; font-weight: bold; transition: all 0.2s ease;" class="nav-prev" onmouseover="this.style.color='#5D2A1F'; this.style.transform='scale(1.1)'" onmouseout="this.style.color='#333'; this.style.transform='scale(1)'">←</button>
                  <span style="font-size: 14px; font-weight: 600; transition: all 0.3s ease;">1/3</span>
                  <button style="background: none; border: none; font-size: 18px; cursor: pointer; padding: 0; color: #333; font-weight: bold; transition: all 0.2s ease;" class="nav-next" onmouseover="this.style.color='#5D2A1F'; this.style.transform='scale(1.1)'" onmouseout="this.style.color='#333'; this.style.transform='scale(1)'">→</button>
                </div>
                <div class="hero-thumbnails" style="width: 100%; padding: 10px 0; display: flex; justify-content: center; gap: 20px; transition: all 0.3s ease;">
                  <img src="./images/display-kue-bolu/display-bolu-hangat-2.jpg" alt="Bolu Hangat 2" style="margin: 0 5px; transition: all 0.3s ease; border: 2px solid transparent; cursor: pointer;">
                  <img src="./images/display-kue-bolu/display-bolu-hangat-3.jpg" alt="Bolu Hangat 3" style="margin: 0 5px; transition: all 0.3s ease; border: 2px solid transparent; cursor: pointer;">
                  <img src="./images/display-kue-bolu/display-toko-kue.jpg" alt="Toko Kue" style="margin: 0 5px; transition: all 0.3s ease; border: 2px solid transparent; cursor: pointer;">
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="products-section section">
          <div class="container">
            <div class="section-header">
              <h2>Coba Kreasi Terbaik Kami</h2>
              <p>Brownies lembut, roll cake, bolu, dan aneka kue pilihan yang disukai banyak pelanggan. Perpaduan rasa manis dan tekstur sempurna yang bikin pengen lagi dan lagi.</p>
            </div>
            <div class="product-cards stagger-animation">
              <div class="product-card">
                <img src="./images/kue-bolu/bolu-ketan-topping-coklat-keju.jpg" alt="Bolu Ketan Topping Coklat & Keju">
                <h3>Bolu Ketan Topping Coklat & Keju</h3>
                <div class="rating">
                  <span class="stars">★★★★★</span>
                  <span class="count">4.7 Rating</span>
                </div>
              </div>
              <div class="product-card">
                <img src="./images/kue-bolu/chiffon-keju.jpg" alt="Chiffon Keju">
                <h3>Chiffon Keju</h3>
                <div class="rating">
                  <span class="stars">★★★★★</span>
                  <span class="count">4.6 Rating</span>
                </div>
              </div>
              <div class="product-card">
                <img src="./images/kue-bolu/kue-nikahan-custom.jpg" alt="Kue Nikahan Custom">
                <h3>Kue Nikahan Custom</h3>
                <div class="rating">
                  <span class="stars">★★★★★</span>
                  <span class="count">4.9 Rating</span>
                </div>
              </div>
              <div class="product-card">
                <img src="./images/kue-bolu/bolu-ketan-hitam.jpeg" alt="Bolu Ketan Hitam">
                <h3>Bolu Ketan Hitam</h3>
                <div class="rating">
                  <span class="stars">★★★★★</span>
                  <span class="count">4.8 Rating</span>
                </div>
              </div>
              <div class="product-card">
                <img src="./images/kue-bolu/kue-ultah-custom.jpg" alt="Kue Ultah Custom">
                <h3>Kue Ultah Custom</h3>
                <div class="rating">
                  <span class="stars">★★★★★</span>
                  <span class="count">4.9 Rating</span>
                </div>
              </div>
            </div>
            <div class="text-center">
              <a href="#/kategori" class="btn-link">Selengkapnya <span>→</span></a>
            </div>
          </div>
        </section>
      </div>

      <section class="about-section section">
        <div class="container">
          <div class="about-text">
            <h2>Karena kenangan manis dimulai dari rasa yang tulus</h2>
            <p>Kami membuat kue custom premium mulai dari kue ulang tahun, pernikahan, hingga bolu harian dengan bahan berkualitas tinggi dan sentuhan personal. Setiap kue disiapkan dengan cinta dari bakat berpengalaman, dan keinginan hangat dari oven kami untuk Anda.</p>
            <a href="#" class="btn-link">Selengkapnya <span>→</span></a>
          </div>
          <div class="about-image">
            <img src="./images/display-kue-bolu/display-bolu-hangat-3.jpg" alt="Kue Custom">
          </div>
        </div>
      </section>

      <section class="visit-section section">
        <div class="container">
          <div class="visit-image">
            <img src="./images/kue-bolu/display-toko-kue.jpg" alt="Toko Lilis Bakery">
          </div>
          <div class="visit-text">
            <h2>Ayo datang dan pilih menu favoritmu!</h2>
            <p>Cobalah untuk datang langsung ke toko kami untuk memilih selekatan.</p>
            <p>Apa yang kamu sukai dari oven kami? Semua memilikinya dengan rasa yang apa saja dan kami di toko kami yang sangat nyaman. Songsong!</p>
            <p>Cocok untuk ngobrol santai dengan tim Anda</p>
            <a href="#" class="btn-link">Selengkapnya <span>→</span></a>
          </div>
        </div>
      </section>

      <section class="contact-section section">
        <div class="container">
          <h2>Untuk Pesanan Kue Custom, Silahkan Hubungi Kami</h2>
          <p>Kunjungi toko kami atau hubungi kami melalui Whatsapp +62 812 8275 1978 (07.00 - 20.00 WIB) untuk pesan</p>
          <button class="btn btn-primary">Pesan Sekarang</button>
        </div>
      </section>

      <section class="testimonial-section section">
        <div class="container">
          <div class="testimonial-header">
            <span>KATA MEREKA</span>
          </div>
          <div class="testimonial-content">
            <h2>Bolu Ketan Hitam yang jadi best seller, Ayo coba kalau belum pernah</h2>
            <div class="testimonial-author">
              <h3>Lilis Chotimah</h3>
              <p>Founder at Lilis Bakery</p>
            </div>
            <div class="testimonial-dots">
              <span class="dot active"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Implementasi interaksi jika diperlukan
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons.length > 0) {
      heroButtons[0].addEventListener('click', () => {
        window.location.href = '#/kontak-kami';
      });
      
      heroButtons[1].addEventListener('click', () => {
        window.location.href = '#/kategori';
      });
    }
    
    // Implementasi thumbnails slider
    const mainImage = document.querySelector('.hero-image > img');
    const thumbnails = document.querySelectorAll('.hero-thumbnails img');
    const prevButton = document.querySelector('.nav-prev');
    const nextButton = document.querySelector('.nav-next');
    const navCounter = document.querySelector('.hero-image div div span');
    
    let currentIndex = 0;
    const totalImages = thumbnails.length;
    
    // Update counter display
    const updateCounter = () => {
      navCounter.textContent = `${currentIndex + 1}/${totalImages}`;
    };
    
    // Update active thumbnail
    const updateActiveThumbnail = () => {
      // Tambahkan efek fade untuk gambar utama
      mainImage.style.opacity = '0.8';
      
      thumbnails.forEach((thumb, i) => {
        if (i === currentIndex) {
          thumb.style.borderColor = '#5D2A1F';
          thumb.style.transform = 'scale(1.05)';
          thumb.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        } else {
          thumb.style.borderColor = 'transparent';
          thumb.style.transform = 'scale(1)';
          thumb.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        }
      });
      
      // Update gambar utama dengan delay kecil untuk efek fade
      setTimeout(() => {
        mainImage.src = thumbnails[currentIndex].src;
        // Kembalikan opacity setelah gambar berubah
        setTimeout(() => {
          mainImage.style.opacity = '1';
        }, 50);
      }, 150);
      
      // Update counter
      updateCounter();
    };
    
    // Set thumbnail pertama sebagai active
    updateActiveThumbnail();
    
    // Tambahkan event listener untuk thumbnail
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateActiveThumbnail();
      });
    });
    
    // Tombol navigasi sebelumnya
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateActiveThumbnail();
    });
    
    // Tombol navigasi selanjutnya
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateActiveThumbnail();
    });
    
    const contactButton = document.querySelector('.contact-section .btn');
    if (contactButton) {
      contactButton.addEventListener('click', () => {
        window.location.href = '#/kontak-kami';
      });
    }
  }
}

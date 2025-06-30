export default class AboutPage {
  async render() {
    return `
      <section class="about-page-section">
        <div class="container">
          <div class="section-header">
            <h1>Tentang Lilis Bakery</h1>
            <p>Cerita kami dimulai dari dapur kecil dengan cinta besar untuk kue berkualitas. Sejak 2015, Lilis Bakery telah menjadi bagian dari momen spesial keluarga di Sumedang.</p>
          </div>
          
          <div class="about-story">
            <div class="about-image">
              <img src="./images/display-kue-bolu/display-toko-kue.jpg" alt="Toko Lilis Bakery">
            </div>
            <div class="about-text">
              <h2>Cerita Kami</h2>
              <p>Lilis Bakery didirikan oleh Ibu Lilis Chotimah yang memiliki passion dalam membuat kue. Berawal pendidikan yang ditempuh di SMK Negeri 3 Magelang dengan mengambil jurusan Tata Boga, kini Lilis Bakery telah berkembang menjadi toko kue yang dikenal di wilayah Sumedang dengan kualitas premium dan rasa autentik.</p>
              <p>Kami percaya bahwa setiap kue yang kami buat membawa kebahagiaan dan kenangan manis bagi pelanggan kami. Itulah mengapa kami selalu berkomitmen untuk menggunakan bahan-bahan berkualitas terbaik dan teknik pembuatan yang teliti.</p>
            </div>
          </div>
          
          <div class="our-values">
            <h2>Nilai-Nilai Kami</h2>
            <div class="values-cards">
              <div class="value-card">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h3>Kualitas Premium</h3>
                <p>Kami hanya menggunakan bahan-bahan berkualitas terbaik untuk setiap produk kami.</p>
              </div>
              
              <div class="value-card">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                  </svg>
                </div>
                <h3>Dibuat dengan Tangan</h3>
                <p>Setiap kue dibuat dengan tangan penuh ketelitian dan cinta.</p>
              </div>
              
              <div class="value-card">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3>Inovasi Rasa</h3>
                <p>Kami terus berinovasi untuk menciptakan rasa baru yang unik dan lezat.</p>
              </div>
              
              <div class="value-card">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3>Kepuasan Pelanggan</h3>
                <p>Kepuasan pelanggan adalah prioritas utama kami dalam setiap layanan.</p>
              </div>
            </div>
          </div>
          
          <div class="team-section">
            <h2>Tim Kami</h2>
            <div class="team-cards single-card">
              <div class="team-card" style="margin: 0 auto; max-width: 300px;">
                <div class="team-image">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3>Lilis Chotimah</h3>
                <p>Founder & Head Baker</p>
              </div>
            </div>
          </div>
          
          <div class="cta-section">
            <h2>Ingin Memesan Kue Custom?</h2>
            <p>Hubungi kami untuk konsultasi dan pemesanan kue sesuai keinginan Anda</p>
            <button class="btn btn-primary">Hubungi Kami</button>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Implementasi interaksi jika diperlukan
    const ctaButton = document.querySelector('.cta-section .btn');
    
    if (ctaButton) {
      ctaButton.addEventListener('click', () => {
        window.location.href = '#/kontak-kami';
      });
    }
  }
}

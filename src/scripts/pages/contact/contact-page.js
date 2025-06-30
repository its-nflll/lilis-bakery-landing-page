export default class ContactPage {
  async render() {
    return `
      <section class="contact-page-section">
        <div class="container">
          <div class="section-header">
            <h1>Hubungi Kami</h1>
            <p>Silahkan hubungi kami untuk pesanan kue custom atau informasi lainnya</p>
          </div>
          
          <div class="contact-content">
            <div class="contact-info">
              <div class="contact-card">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3>Alamat Toko</h3>
                <p>JL. Raya Buahdua - Hariang RT. 022/RW. 010, Sumber, Bojongloa, Kec. Buahdua, Kab. Sumedang, Jawa Barat</p>
              </div>
              
              <div class="contact-card">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3>Telepon / WhatsApp</h3>
                <p>+62 812 8275 1978</p>
              </div>
              
              <div class="contact-card">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3>Email</h3>
                <p>info@lilisbakery.com</p>
              </div>
              
              <div class="contact-card">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5D2A1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3>Jam Operasional</h3>
                <p>Senin - Minggu: 07.00 - 20.00 WIB</p>
              </div>
            </div>
            
            <div class="contact-form">
              <h3>Kirim Pesan</h3>
              <form id="contactForm">
                <div class="form-group">
                  <label for="name">Nama Lengkap</label>
                  <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                  <label for="phone">No. Telepon / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" required>
                </div>
                
                <div class="form-group">
                  <label for="message">Pesan</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">Kirim Pesan</button>
              </form>
            </div>
          </div>
          
          <div class="map-container">
            <h3>Lokasi Kami</h3>
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d607.0852949380064!2d107.9436182580394!3d-6.719239582054644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6929c9f4d79843%3A0x191d262054086b1c!2sLilis%20Bakery!5e1!3m2!1sid!2sid!4v1747519728060!5m2!1sid!2sid" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Implementasi interaksi form
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Implementasi pengiriman form
        alert('Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
        contactForm.reset();
      });
    }
  }
} 
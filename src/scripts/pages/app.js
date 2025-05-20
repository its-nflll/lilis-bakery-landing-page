import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;

    this._setupDrawer();
    this._setupPageTransitions();
  }

  _setupDrawer() {
    this.#drawerButton.addEventListener('click', () => {
      this.#navigationDrawer.classList.toggle('open');
    });

    document.body.addEventListener('click', (event) => {
      if (!this.#navigationDrawer.contains(event.target) && !this.#drawerButton.contains(event.target)) {
        this.#navigationDrawer.classList.remove('open');
      }

      this.#navigationDrawer.querySelectorAll('a').forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove('open');
        }
      })
    });
  }
  
  _setupPageTransitions() {
    // Menambahkan class untuk transisi ke content
    this.#content.classList.add('page-transition');
    
    // Menangani klik pada link navigasi
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      
      if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetUrl = link.getAttribute('href');
        
        // Tambahkan class untuk animasi keluar
        this.#content.classList.add('fade-out');
        
        // Tunggu animasi selesai kemudian navigasi
        setTimeout(() => {
          window.location.hash = targetUrl.substring(1);
        }, 300);
      }
    });
    
    // Tangani perubahan hash untuk navigasi
    window.addEventListener('hashchange', () => {
      // Jika content sedang fade-out, jangan tambahkan lagi
      if (!this.#content.classList.contains('fade-out')) {
        this.#content.classList.add('fade-out');
      }
      
      this.renderPage();
    });
  }

  async renderPage() {
    const url = getActiveRoute();
    const page = routes[url];
    
    // Jika tidak ada page yang diminta, arahkan ke home
    if (!page) {
      window.location.hash = '/';
      return;
    }
    
    // Mulai render saat elemen dalam keadaan fade-out
    setTimeout(async () => {
      this.#content.innerHTML = await page.render();
      
      // Gunakan setTimeout untuk memastikan DOM telah diperbarui
      setTimeout(async () => {
        await page.afterRender();
        
        // Animasi masuk
        this.#content.classList.remove('fade-out');
      }, 50);
    }, this.#content.classList.contains('fade-out') ? 300 : 0);
  }
}

export default App;

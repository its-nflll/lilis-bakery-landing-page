import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';
import PageTransition from '../utils/page-transition';
import NavigationHandler from '../utils/navigation-handler';

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
    
    // Initialize page transition utilities only
    PageTransition.init();
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
    
    // Handle normal hash changes
    window.addEventListener('hashchange', () => {
      this.renderPage();
    });
    
    // Handle force page refresh for same-page navigation
    window.addEventListener('force-page-refresh', () => {
      this.renderPage(true);
    });
  }

  async renderPage(forceRender = false) {
    const url = getActiveRoute();
    const page = routes[url];
    
    // Jika tidak ada page yang diminta, arahkan ke home
    if (!page) {
      window.location.hash = '/';
      return;
    }

    try {
      // Reset animasi sebelumnya
      PageTransition.resetAnimations();
      
      // Handle force render (same page refresh)
      if (forceRender) {
        PageTransition.forceRefreshPage(async () => {
          this.#content.innerHTML = await page.render();
          
          // Jalankan afterRender jika ada
          if (page.afterRender) {
            await page.afterRender();
          }
        }, 200);
      } else {
        // Handle normal page transition
        PageTransition.startExitTransition(async () => {
          this.#content.innerHTML = await page.render();
          
          // Jalankan afterRender jika ada
          if (page.afterRender) {
            await page.afterRender();
          }
          
          // Mulai transisi masuk dengan animasi
          PageTransition.startEnterTransition(50);
        }, 300);
      }
      
    } catch (error) {
      console.error('Error rendering page:', error);
      this.#content.innerHTML = `
        <div class="error-page">
          <h2>Halaman tidak dapat dimuat</h2>
          <p>Terjadi kesalahan saat memuat halaman. Silakan coba lagi.</p>
          <a href="#/" class="btn btn-primary">Kembali ke Beranda</a>
        </div>
      `;
    }
  }
}

export default App;

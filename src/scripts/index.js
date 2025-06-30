// CSS imports
import '../styles/styles.css';

import App from './pages/app';
import AccountDropdown from './utils/account-dropdown';
import SearchHandler from './utils/search-handler';
import MobileNavigation from './utils/mobile-navigation';
import PageTransition from './utils/page-transition';
import NavigationHandler from './utils/navigation-handler';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.querySelector('#main-content'),
    drawerButton: document.querySelector('#drawer-button'),
    navigationDrawer: document.querySelector('#navigation-drawer'),
  });
  
  // Inisialisasi dropdown menu akun
  AccountDropdown.init();
  
  // Inisialisasi search handler
  SearchHandler.init();
  
  // Inisialisasi mobile navigation
  MobileNavigation.init();
  
  // Inisialisasi page transitions
  PageTransition.init();
  
  // Inisialisasi navigation handler
  NavigationHandler.init();
  
  // Lakukan initial render
  await app.renderPage();
  
  // Listener untuk hashchange sudah tidak diperlukan karena sudah ditangani di dalam class App
});

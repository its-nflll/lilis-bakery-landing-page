// CSS imports
import '../styles/styles.css';

import App from './pages/app';
import AccountDropdown from './utils/account-dropdown';
import SearchHandler from './utils/search-handler';

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
  
  // Lakukan initial render
  await app.renderPage();
  
  // Listener untuk hashchange sudah tidak diperlukan karena sudah ditangani di dalam class App
});

/**
 * Mobile Navigation Handler
 * Menangani navigasi mobile dengan drawer dan overlay
 */
const MobileNavigation = {
  init() {
    this._setupDrawer();
    this._setupOverlay();
    this._setupResponsiveHandling();
  },

  _setupDrawer() {
    const drawerButton = document.querySelector('#drawer-button');
    const navigationDrawer = document.querySelector('#navigation-drawer');
    
    if (!drawerButton || !navigationDrawer) return;
    
    drawerButton.addEventListener('click', () => {
      this._toggleDrawer();
    });
    
    // Close drawer when clicking nav links
    const navLinks = navigationDrawer.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this._closeDrawer();
      });
    });
  },

  _setupOverlay() {
    // Create overlay element if it doesn't exist
    let overlay = document.querySelector('.drawer-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'drawer-overlay';
      document.body.appendChild(overlay);
    }
    
    overlay.addEventListener('click', () => {
      this._closeDrawer();
    });
  },

  _setupResponsiveHandling() {
    // Close drawer on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1000) {
        this._closeDrawer();
      }
    });
    
    // Handle orientation change
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this._closeDrawer();
      }, 100);
    });
    
    // Handle escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this._closeDrawer();
      }
    });
  },

  _toggleDrawer() {
    const navigationDrawer = document.querySelector('#navigation-drawer');
    const overlay = document.querySelector('.drawer-overlay');
    const body = document.body;
    
    if (navigationDrawer.classList.contains('open')) {
      this._closeDrawer();
    } else {
      this._openDrawer();
    }
  },

  _openDrawer() {
    const navigationDrawer = document.querySelector('#navigation-drawer');
    const overlay = document.querySelector('.drawer-overlay');
    const body = document.body;
    
    navigationDrawer.classList.add('open');
    overlay.classList.add('active');
    body.style.overflow = 'hidden'; // Prevent scrolling when drawer is open
    
    // Focus first nav link for accessibility
    const firstNavLink = navigationDrawer.querySelector('.nav-list a');
    if (firstNavLink) {
      setTimeout(() => firstNavLink.focus(), 100);
    }
  },

  _closeDrawer() {
    const navigationDrawer = document.querySelector('#navigation-drawer');
    const overlay = document.querySelector('.drawer-overlay');
    const body = document.body;
    
    navigationDrawer.classList.remove('open');
    overlay.classList.remove('active');
    body.style.overflow = ''; // Restore scrolling
    
    // Return focus to drawer button
    const drawerButton = document.querySelector('#drawer-button');
    if (drawerButton) {
      drawerButton.focus();
    }
  }
};

export default MobileNavigation;

/**
 * Navigation Handler
 * Menangani navigasi dengan dukungan untuk same-page refresh
 */
const NavigationHandler = {
  currentPage: null,
  
  init() {
    this._setupNavigationListeners();
    this._trackCurrentPage();
    this._updateActiveNavLinks();
  },

  _setupNavigationListeners() {
    // Handle all navigation link clicks
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="#"]');
      
      if (link) {
        event.preventDefault();
        const href = link.getAttribute('href');
        const targetPage = href.substring(1) || '/';
        
        // Add visual feedback
        this._addClickFeedback(link);
        
        this.navigateTo(targetPage);
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this._trackCurrentPage();
      this._updateActiveNavLinks();
    });
    
    // Handle hash changes
    window.addEventListener('hashchange', () => {
      this._trackCurrentPage();
      this._updateActiveNavLinks();
    });
  },

  _trackCurrentPage() {
    const currentHash = window.location.hash.substring(1) || '/';
    this.currentPage = currentHash;
  },

  _updateActiveNavLinks() {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link-active').forEach(link => {
      link.classList.remove('nav-link-active');
    });
    
    // Add active class to current page links
    const currentPage = window.location.hash || '#/';
    document.querySelectorAll(`a[href="${currentPage}"]`).forEach(link => {
      link.classList.add('nav-link-active');
    });
  },

  _addClickFeedback(link) {
    // Add temporary visual feedback
    link.style.transform = 'scale(0.95)';
    link.style.opacity = '0.7';
    
    setTimeout(() => {
      link.style.transform = '';
      link.style.opacity = '';
    }, 150);
  },

  navigateTo(targetPage) {
    const currentPage = window.location.hash.substring(1) || '/';
    
    if (targetPage === currentPage) {
      // Same page - force refresh with visual feedback
      this._forcePageRefresh();
    } else {
      // Different page - normal navigation
      window.location.hash = targetPage;
    }
    
    this.currentPage = targetPage;
  },

  _forcePageRefresh() {
    // Add refresh indicator
    const mainContent = document.querySelector('#main-content');
    if (mainContent) {
      mainContent.classList.add('page-refreshing');
      
      // Remove indicator after animation
      setTimeout(() => {
        mainContent.classList.remove('page-refreshing');
      }, 1000);
    }
    
    // Trigger a custom event for same-page refresh
    const refreshEvent = new CustomEvent('force-page-refresh', {
      detail: { 
        page: this.currentPage,
        timestamp: Date.now()
      }
    });
    
    window.dispatchEvent(refreshEvent);
  },

  getCurrentPage() {
    return this.currentPage;
  },

  isCurrentPage(page) {
    const currentPage = window.location.hash.substring(1) || '/';
    return currentPage === page;
  }
};

export default NavigationHandler;

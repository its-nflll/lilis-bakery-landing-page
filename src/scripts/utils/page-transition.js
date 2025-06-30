/**
 * Page Transition Handler
 * Menangani transisi halus antar halaman dan animasi elemen
 */
const PageTransition = {
  init() {
    this._setupIntersectionObserver();
    this._setupPageLoadAnimations();
  },

  /**
   * Memulai transisi keluar halaman
   */
  startExitTransition(callback, delay = 300) {
    const content = document.querySelector('#main-content');
    if (content) {
      content.classList.add('fade-out');
      setTimeout(callback, delay);
    } else {
      callback();
    }
  },

  /**
   * Force refresh current page content
   */
  forceRefreshPage(callback, delay = 300) {
    const content = document.querySelector('#main-content');
    if (content) {
      content.classList.add('fade-out');
      
      setTimeout(() => {
        if (callback) callback();
        // Start enter transition after callback
        setTimeout(() => {
          this.startEnterTransition(50);
        }, 50);
      }, delay);
    } else if (callback) {
      callback();
    }
  },

  /**
   * Memulai transisi masuk halaman
   */
  startEnterTransition(delay = 50) {
    const content = document.querySelector('#main-content');
    if (content) {
      setTimeout(() => {
        content.classList.remove('fade-out');
        this._animatePageElements();
      }, delay);
    }
  },

  /**
   * Menganimasi elemen-elemen di halaman saat pertama kali dimuat
   */
  _animatePageElements() {
    // Animate sections with stagger effect
    const sections = document.querySelectorAll('.section, .hero-section, .about-section, .visit-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('fade-in');
      }, index * 100);
    });

    // Animate product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('smooth-appear');
      }, index * 100);
    });

    // Animate hero elements
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
      setTimeout(() => {
        heroText.classList.add('fade-in');
      }, 200);
    }
    
    if (heroImage) {
      setTimeout(() => {
        heroImage.classList.add('fade-in');
      }, 400);
    }
  },

  /**
   * Setup Intersection Observer untuk animasi saat scroll
   */
  _setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          
          // Special handling for product grids
          if (entry.target.classList.contains('product-cards')) {
            const cards = entry.target.querySelectorAll('.product-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('smooth-appear');
              }, index * 100);
            });
          }

          // Special handling for stagger animations
          if (entry.target.classList.contains('stagger-animation')) {
            entry.target.classList.add('active');
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements when they're added to the page
    this._observeElements(observer);
  },

  /**
   * Mengamati elemen untuk animasi scroll
   */
  _observeElements(observer) {
    // Re-run this when page content changes
    setTimeout(() => {
      const elementsToObserve = document.querySelectorAll(
        '.section-header, .product-cards, .team-card, .about-content, .contact-info, .stagger-animation'
      );
      
      elementsToObserve.forEach(element => {
        if (!element.classList.contains('fade-in')) {
          observer.observe(element);
        }
      });
    }, 100);
  },

  /**
   * Setup animasi saat halaman pertama kali dimuat
   */
  _setupPageLoadAnimations() {
    // Animate header
    const header = document.querySelector('header');
    if (header) {
      header.style.transform = 'translateY(-100%)';
      header.style.transition = 'transform 0.6s ease-out';
      
      setTimeout(() => {
        header.style.transform = 'translateY(0)';
      }, 100);
    }

    // Animate navigation drawer
    const drawer = document.querySelector('.navigation-drawer');
    if (drawer) {
      drawer.classList.add('slide-in-left');
    }
  },

  /**
   * Menambahkan efek loading
   */
  showLoading() {
    const content = document.querySelector('#main-content');
    if (content) {
      content.classList.add('page-loading');
      content.innerHTML = '<div class="loading-spinner"></div>';
    }
  },

  /**
   * Menghilangkan efek loading
   */
  hideLoading() {
    const content = document.querySelector('#main-content');
    if (content) {
      content.classList.remove('page-loading');
    }
  },

  /**
   * Reset semua animasi untuk halaman baru
   */
  resetAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .smooth-appear, .scale-in');
    animatedElements.forEach(element => {
      element.classList.remove('fade-in', 'smooth-appear', 'scale-in');
    });
  },

  /**
   * Animate specific element with given animation
   */
  animateElement(element, animationType = 'fade-in', delay = 0) {
    if (element) {
      setTimeout(() => {
        element.classList.add(animationType);
      }, delay);
    }
  }
};

export default PageTransition;

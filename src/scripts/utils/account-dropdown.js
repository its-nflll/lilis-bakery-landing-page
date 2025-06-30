/**
 * Account Dropdown Initializer
 * Menangani interaksi dropdown menu untuk perangkat mobile dan desktop
 */
const AccountDropdown = {
  init() {
    this._setupDropdown();
    this._setupResponsiveHandling();
  },

  _setupDropdown() {
    const accountIcon = document.querySelector('.account-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (!accountIcon || !dropdownMenu) return;
    
    // Event untuk mobile (touch devices)
    accountIcon.addEventListener('click', (event) => {
      if (window.innerWidth < 768) {
        event.preventDefault();
        dropdownMenu.classList.toggle('active');
      }
    });
    
    // Event untuk desktop (hover)
    accountIcon.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 768) {
        dropdownMenu.classList.add('active');
      }
    });
    
    accountIcon.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 768) {
        setTimeout(() => {
          if (!dropdownMenu.matches(':hover')) {
            dropdownMenu.classList.remove('active');
          }
        }, 100);
      }
    });
    
    // Tutup dropdown ketika klik di luar dropdown
    document.addEventListener('click', (event) => {
      const isClickInside = accountIcon.contains(event.target) || dropdownMenu.contains(event.target);
      
      if (!isClickInside && dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
      }
    });
    
    // Tutup dropdown dengan escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
        accountIcon.focus();
      }
    });
  },

  _setupResponsiveHandling() {
    // Handle resize events
    window.addEventListener('resize', () => {
      const dropdownMenu = document.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.remove('active');
      }
    });
    
    // Handle orientation changes on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.remove('active');
        }
      }, 100);
    });
  }
};

export default AccountDropdown; 
/**
 * Account Dropdown Initializer
 * Menangani interaksi dropdown menu untuk perangkat mobile
 */
const AccountDropdown = {
  init() {
    this._setupMobileDropdown();
  },

  _setupMobileDropdown() {
    const accountIcon = document.querySelector('.account-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // Jika menggunakan perangkat mobile, tambahkan event click
    if (window.innerWidth < 768) {
      accountIcon.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.classList.toggle('active');
      });
      
      // Tutup dropdown ketika klik di luar dropdown
      document.addEventListener('click', (event) => {
        const isClickInside = accountIcon.contains(event.target) || dropdownMenu.contains(event.target);
        
        if (!isClickInside && dropdownMenu.classList.contains('active')) {
          dropdownMenu.classList.remove('active');
        }
      });
    }
  }
};

export default AccountDropdown; 
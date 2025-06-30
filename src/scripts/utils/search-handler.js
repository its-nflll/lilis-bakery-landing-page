/**
 * Search Handler
 * Menangani fungsi pencarian
 */
const SearchHandler = {
  init() {
    this._setupSearchButton();
  },

  _setupSearchButton() {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    
    searchButton.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this._handleSearch(searchInput.value);
      }
    });
  },
  
  _handleSearch(query) {
    if (!query || query.trim() === '') {
      alert('Silakan masukkan kata kunci pencarian');
      return;
    }
    
    // Arahkan ke halaman hasil pencarian
    window.location.hash = `/search?q=${encodeURIComponent(query)}`;
  }
};

export default SearchHandler; 
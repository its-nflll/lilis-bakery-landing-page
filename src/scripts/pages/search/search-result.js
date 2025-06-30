import { getUrlParams } from '../../routes/url-parser';

const SearchResult = {
  async render() {
    const params = getUrlParams();
    const query = params.q || '';
    
    return `
      <section class="search-result-section">
        <div class="container">
          <div class="section-header">
            <h2>Hasil Pencarian</h2>
            <p>Menampilkan hasil untuk: "${query}"</p>
          </div>
          
          <div class="search-results">
            <p class="no-results">Belum ada produk yang sesuai dengan pencarian Anda.</p>
            <!-- Di sini nantinya akan ditampilkan hasil pencarian -->
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Nantinya di sini akan ada kode untuk mengambil data hasil pencarian
    // Untuk saat ini, kita hanya tampilkan placeholder
  }
};

export default SearchResult; 
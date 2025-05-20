const Register = {
  async render() {
    return `
      <section class="auth-section">
        <div class="container">
          <div class="auth-card">
            <h2>Register</h2>
            <form id="register-form">
              <div class="form-group">
                <label for="name">Nama Lengkap</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
              </div>
              <div class="form-group">
                <label for="confirm-password">Konfirmasi Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required>
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <div class="auth-links">
              <p>Sudah punya akun? <a href="#/login">Login</a></p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const registerForm = document.getElementById('register-form');
    
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Di sini nanti akan ada kode untuk menangani register
      // Untuk sekarang, kita hanya tampilkan alert
      alert('Fitur register akan segera tersedia!');
    });
  }
};

export default Register; 
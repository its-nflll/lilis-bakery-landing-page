const Login = {
  async render() {
    return `
      <section class="auth-section">
        <div class="container">
          <div class="auth-card">
            <h2>Login</h2>
            <form id="login-form">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <div class="auth-links">
              <p>Belum punya akun? <a href="#/register">Register</a></p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Di sini nanti akan ada kode untuk menangani login
      // Untuk sekarang, kita hanya tampilkan alert
      alert('Fitur login akan segera tersedia!');
    });
  }
};

export default Login; 
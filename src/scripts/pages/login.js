const Login = {
  async render() {
    return `
      <section class="auth-section section">
        <div class="container">
          <div class="auth-card">
            <h2>Masuk ke Akun Anda</h2>
            <form id="login-form">
              <div class="form-group">
                <label for="login-email">Email</label>
                <input 
                  type="email" 
                  id="login-email" 
                  name="email" 
                  placeholder="Masukkan email Anda"
                  required
                >
                <div class="form-error">Email tidak valid</div>
              </div>
              <div class="form-group">
                <label for="login-password">Password</label>
                <input 
                  type="password" 
                  id="login-password" 
                  name="password" 
                  placeholder="Masukkan password Anda"
                  required
                >
                <div class="form-error">Password minimal 6 karakter</div>
              </div>
              <button type="submit" class="btn btn-primary">
                Masuk
              </button>
            </form>
            <div class="auth-links">
              <p>Belum punya akun? <a href="#/register">Daftar Sekarang</a></p>
              <p><a href="#/forgot-password">Lupa Password?</a></p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    
    // Form validation
    const validateForm = () => {
      let isValid = true;
      
      // Email validation
      const emailGroup = emailInput.closest('.form-group');
      if (!emailInput.value || !emailInput.validity.valid) {
        emailGroup.classList.add('error');
        isValid = false;
      } else {
        emailGroup.classList.remove('error');
      }
      
      // Password validation
      const passwordGroup = passwordInput.closest('.form-group');
      if (!passwordInput.value || passwordInput.value.length < 6) {
        passwordGroup.classList.add('error');
        isValid = false;
      } else {
        passwordGroup.classList.remove('error');
      }
      
      return isValid;
    };
    
    // Real-time validation
    emailInput.addEventListener('blur', validateForm);
    passwordInput.addEventListener('blur', validateForm);
    
    // Form submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateForm()) {
        const authCard = document.querySelector('.auth-card');
        authCard.classList.add('loading');
        
        // Simulate API call
        setTimeout(() => {
          authCard.classList.remove('loading');
          
          // Success simulation
          const successMessage = document.createElement('div');
          successMessage.className = 'form-success';
          successMessage.textContent = 'Login berhasil! Mengalihkan...';
          authCard.insertBefore(successMessage, loginForm);
          
          // Redirect after success
          setTimeout(() => {
            window.location.hash = '/';
          }, 1500);
        }, 2000);
      }
    });
  }
};

export default Login; 
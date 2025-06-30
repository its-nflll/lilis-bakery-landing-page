const Register = {
  async render() {
    return `
      <section class="auth-section section">
        <div class="container">
          <div class="auth-card">
            <h2>Buat Akun Baru</h2>
            <form id="register-form">
              <div class="form-group">
                <label for="register-name">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="register-name" 
                  name="name" 
                  placeholder="Masukkan nama lengkap Anda"
                  required
                >
                <div class="form-error">Nama minimal 3 karakter</div>
              </div>
              <div class="form-group">
                <label for="register-email">Email</label>
                <input 
                  type="email" 
                  id="register-email" 
                  name="email" 
                  placeholder="Masukkan email Anda"
                  required
                >
                <div class="form-error">Email tidak valid</div>
              </div>
              <div class="form-group">
                <label for="register-password">Password</label>
                <input 
                  type="password" 
                  id="register-password" 
                  name="password" 
                  placeholder="Minimal 6 karakter"
                  required
                >
                <div class="form-error">Password minimal 6 karakter</div>
              </div>
              <div class="form-group">
                <label for="register-confirm-password">Konfirmasi Password</label>
                <input 
                  type="password" 
                  id="register-confirm-password" 
                  name="confirm-password" 
                  placeholder="Ulangi password Anda"
                  required
                >
                <div class="form-error">Password tidak cocok</div>
              </div>
              <button type="submit" class="btn btn-primary">
                Daftar Sekarang
              </button>
            </form>
            <div class="auth-links">
              <p>Sudah punya akun? <a href="#/login">Masuk di sini</a></p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const registerForm = document.getElementById('register-form');
    const nameInput = document.getElementById('register-name');
    const emailInput = document.getElementById('register-email');
    const passwordInput = document.getElementById('register-password');
    const confirmPasswordInput = document.getElementById('register-confirm-password');
    
    // Form validation
    const validateForm = () => {
      let isValid = true;
      
      // Name validation
      const nameGroup = nameInput.closest('.form-group');
      if (!nameInput.value || nameInput.value.length < 3) {
        nameGroup.classList.add('error');
        isValid = false;
      } else {
        nameGroup.classList.remove('error');
      }
      
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
      
      // Confirm password validation
      const confirmPasswordGroup = confirmPasswordInput.closest('.form-group');
      if (!confirmPasswordInput.value || confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordGroup.classList.add('error');
        isValid = false;
      } else {
        confirmPasswordGroup.classList.remove('error');
      }
      
      return isValid;
    };
    
    // Real-time validation
    nameInput.addEventListener('blur', validateForm);
    emailInput.addEventListener('blur', validateForm);
    passwordInput.addEventListener('blur', validateForm);
    confirmPasswordInput.addEventListener('blur', validateForm);
    
    // Password match validation on typing
    confirmPasswordInput.addEventListener('input', () => {
      const confirmPasswordGroup = confirmPasswordInput.closest('.form-group');
      if (confirmPasswordInput.value && confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordGroup.classList.add('error');
      } else {
        confirmPasswordGroup.classList.remove('error');
      }
    });
    
    // Form submission
    registerForm.addEventListener('submit', (e) => {
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
          successMessage.textContent = 'Pendaftaran berhasil! Silakan login dengan akun Anda.';
          authCard.insertBefore(successMessage, registerForm);
          
          // Redirect to login after success
          setTimeout(() => {
            window.location.hash = '/login';
          }, 2000);
        }, 2500);
      }
    });
  }
};

export default Register; 
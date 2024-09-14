class LoginModel {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }

    isValid() {
      return this.email.includes('@') && this.senha.length >= 8;
    }
  }
  
  export default LoginModel;
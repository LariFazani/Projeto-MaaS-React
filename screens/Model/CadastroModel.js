class CadastroModel {
    constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    }
  
    isValid() {
      return this.nome.length > 0 && this.email.includes('@') && this.senha.length >= 8;
    }
  }
  
  export default CadastroModel;
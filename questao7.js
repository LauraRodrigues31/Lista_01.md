// Definindo a classe Animal
class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    descrever() {
      console.log(`Este animal é um ${this.nome} e tem ${this.idade} anos.`);
    }
  }
  
  // Criando e manipulando animais
  const cachorro = new Animal("cachorro", 5);
  const gato = new Animal("gato", 3);
  
  cachorro.descrever();
  gato.descrever();
  
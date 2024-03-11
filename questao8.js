// Definição da classe Animal
class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    descrever() {
      console.log(`Este animal é um(a) ${this.nome} e tem ${this.idade} anos.`);
    }
  }
  
  // Definição da classe Gato que herda de Animal
  class Gato extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade);
      this.cor = cor;
    }
  
    miar() {
      console.log("Miaaauuww");
    }
  }
  
  // Criando animais
  const cachorro = new Animal("cachorro", 5);
  const gato = new Gato("gato", 3, "preto");
  
  // Chamando métodos
  cachorro.descrever();
  gato.descrever();
  gato.miar();
  
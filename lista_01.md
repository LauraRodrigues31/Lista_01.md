# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina!
- ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10.

b) Imprime os números ímpares de 1 a 10.

c) Imprime os números pares de 2 a 10. //  correta

d) Imprime os números ímpares de 2 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

A) let carro = new Carro("Toyota"); // correta

B) let ligar = new ligar("Toyota");

C) class Moto extends Veiculo {};

D) carro1.ligar();

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

A) 18 // correta

B) 16

C) 14

D) 12

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) ![Uma imagem](assets/ex04_1.PNG) // correta

B) ![Uma imagem](assets/ex04_2.PNG)

C) ![Uma imagem](assets/ex04_3.PNG)

D) ![Uma imagem](assets/ex04_4.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) ![Uma imagem](assets/ex05_1.PNG) // correta

B) ![Uma imagem](assets/ex05_2.PNG)

C) ![Uma imagem](assets/ex05_3.PNG)

D) ![Uma imagem](assets/ex05_4.PNG)

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) "Olá, meu nome é João. Olá, meu nome é Maria." //correta

B) "Olá, meu nome é ."

C) "João Maria"

D) "undefined undefined"

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

```javascript
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
  ```
  


______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

```javascript
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
  
  ```


______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

```javascript
class SomadorDeNotas {
    constructor() {
      this.total = 0;
    }
  
    adicionarNota(nota) {
      this.total += nota;
    }
  
    verTotal() {
      console.log("Total das notas:", this.total);
    }
  }
  
  // Criando o somador
  const somador = new SomadorDeNotas();
  
  // Adicionando notas
  somador.adicionarNota(7);
  somador.adicionarNota(8.5);
  somador.adicionarNota(6);
  
  // Exibindo o total das notas
  somador.verTotal();
  
  ```

______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

// Definição da classe Funcionario
class Funcionario {
    // Construtor da classe Funcionario
    constructor(nome, idade, salarioBase) { // lista de atributos que tem q fazer
      this.nome = nome; // Atributo com nome de funcionário
      this.idade = idade; // atributo de idade de funcionário 
      this.salarioBase = salarioBase; // atributo de salário base do funcionário
    }
  
    // Método para calcular o salário do funcionário dentro da classe funcionário
  calcularSalario() {
    console.log("O salário do funcionário " + this.nome + " é R$ " + this.salarioBase.toFixed(2) + ".");
  }
}
  ```javaScript 
  // Definição da classe Professor, que herda de Funcionario
  class Professor extends Funcionario {
    // Construtor da classe Professor
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
      super(nome, idade, salarioBase); // Chama os atributos construtor da classe mae Funcionario
      this.disciplina = disciplina; // Disciplina do professor
      this.horasAula = horasAula; // Horas de aula por semana do professor
    }
  
    // Método para calcular o salário do professor
    calcularSalario() {
      const valorHoraAula = this.salarioBase / 40; // Calcula o valor da hora/aula (considerando 40 horas semanais)
      const salario = this.horasAula * valorHoraAula; // Calcula o salário multiplicando as horas de aula pelo valor da hora/aula
      console.log(`O salário do professor(a) ${this.nome} é R$ ${salario.toFixed(2)}.`);
    }
  }
  
  // Criando dois objetos do tipo Professor com informações 
  const professor1 = new Professor("Mateus", 35, 3000, "Matemática", 20); // Professor com 20 horas de aula
  const professor2 = new Professor("Deisiane", 40, 3500, "Português", 15); // Professor com 15 horas de aula
  
  // Chamando o método calcularSalario() para cada professor e mostrando o salário calculado no console
  professor1.calcularSalario();
  professor2.calcularSalario();
  ```

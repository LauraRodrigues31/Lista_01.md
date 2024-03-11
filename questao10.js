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
  
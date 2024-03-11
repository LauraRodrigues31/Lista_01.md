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
  
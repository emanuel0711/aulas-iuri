const ask = require('readline-sync')

class Contador {
    private valor: number = 0;
  
    constructor() {
      // Inicializa o contador com o valor 0
    }
  
    zerar(): void {
      this.valor = 0;
    }
  
    incrementar(): void {
      this.valor++;
    }
  
    Valor(): number {
      return this.valor;
    }
  }
  
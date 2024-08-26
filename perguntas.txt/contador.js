export function runTests(){
    console.log('Testando Contador...')
}

class Contador {
    private _valor: number;
    
         constructor() {
            this._valor = 0;
        }
    
        valor() {
            return this._valor;
        }
    
        incrementar() {
            this._valor++;
        }
    }
    
    const contador = new Contador();
    
    // Verifica se o valor inicial é 0
    console.assert(contador.valor() === 0, "Teste falhou: valor inicial não é 0");
    
    // Incrementa o valor e verifica se ele foi incrementado corretamente
    contador.incrementar();
    console.assert(contador.valor() === 1, "Teste falhou: valor não foi incrementado corretamente");
    

var Contador = /** @class */ (function () {
    function Contador() {
        this.valor = 0;
        // Inicializa o contador com o valor 0
    }
    Contador.prototype.zerar = function () {
        this.valor = 0;
    };
    Contador.prototype.incrementar = function () {
        this.valor++;
    };
    Contador.prototype.Valor = function () {
        return this.valor;
    };
    return Contador;
}());
 
console.log()
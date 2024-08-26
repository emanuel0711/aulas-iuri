const leitor = require('readline-sync');

class Carro {
    motor: number;
    rodas: number;
    marca: string;
    cor: string;
    kmmax: number;

    constructor(motor: number, rodas: number, marca: string, cor: string, kmmax: number) {
        this.motor = motor;
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
        this.kmmax = kmmax;
    }

    dirigir() {
        console.log(`Estou dirigindo meu ${this.marca}`);
    }

    acelerar() {
        console.log(`O seu ${this.marca} chegou a ${this.kmmax} km/h`);
    }

    lavar() {
        console.log(`Estou lavando meu ${this.marca}`);
    }
}

const marcaCarro: string = leitor.question("Qual a marca do seu carro?");

const novocarro = new Carro(1.6, 4, marcaCarro, 'Preto', 220);  // corrigido de 15 para 4 rodas
// printando a propriedade:
console.log(novocarro.cor);

let menu = true;

while (menu) {
    const opcao: number = leitor.questionInt("1 - Dirigir, 2 - Acelerar, 3 - Lavar, 4 - Sair: ");

    switch (opcao) {
        case 1:
            novocarro.dirigir();
            break;
        case 2:
            novocarro.acelerar();
            break;
        case 3:
            novocarro.lavar();
            break;
        case 4:
            console.log('Saindo...');
            menu = false;
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
    }
}

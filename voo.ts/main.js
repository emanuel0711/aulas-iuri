"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
var Voo_1 = require("./Voo");
var data_1 = require("./data");
var voo = new Voo_1.Voo('A29', new data_1.Data(14, 8, 2024));
/*
    banco de dados dos voos
    selecionar voo para comprar passagem
    sistema de primeira classe
    tempo estimado de voo
*/
function menuApp() {
    var option = true;
    while (option) {
        console.log("\n--------MENU--------\n1. Escolher Assento\n2. Ver o proximo assento livre\n3. Quantidade de assentos disponiveis\n4. Sair\n--------------------\nEscolha uma opção:");
        var choose = readLineSync.questionInt();
        console.clear();
        switch (choose) {
            case 1:
                console.log("Qual assento voce deseja escolher?");
                var ocupa = readLineSync.questionInt();
                voo.ocupa(ocupa);
                break;
            case 2:
                voo.proximoLivre();
                break;
            case 3:
                voo.vagas();
                break;
            default:
                option = false;
                break;
        }
    }
}
menuApp();

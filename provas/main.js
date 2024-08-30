"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../voo.ts/data");
var provas_1 = require("./provas");
var provas_2 = require("./provas");
var datateste = new data_1.Data(1, 12, 2002);
function gerarResposta() {
    var n = Math.floor(Math.random() * 11);
    var r = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E'];
    return r[n];
}
function gerarGabarito() {
    var gabarito = new provas_2.Gabarito();
    for (var i = 0; i < 10; i++) {
        gabarito.addResposta('A', 0.5);
    }
    for (var i = 0; i < 5; i++) {
        gabarito.addResposta('A', 1);
    }
    return gabarito;
}
function respoderProva(prova) {
    for (var i = 0; i < 15; i++) {
        prova.respostaAluno(gerarResposta());
    }
}
var gabaritoAleatorio = gerarGabarito();
var prova = new provas_1.Prova(gabaritoAleatorio);
var prova2 = new provas_1.Prova(gabaritoAleatorio);
respoderProva(prova);
respoderProva(prova2);
console.log('GABARITO:');
console.log(gabaritoAleatorio.getGabarito());
function menuApp() {
    var option = true;
    while (option) {
    }
}

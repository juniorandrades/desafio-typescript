"use strict";
// Como podemos melhorar o esse código usando TS? 
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Desenvovedora"] = 1] = "Desenvovedora";
    profissao[profissao["Pintora"] = 2] = "Pintora";
    profissao[profissao["Jogadora"] = 3] = "Jogadora";
    profissao[profissao["Padeiro"] = 4] = "Padeiro";
})(profissao || (profissao = {}));
let maria = {
    nome: 'Maria',
    idade: 29,
    profissao: profissao.Atriz
};
let roberto = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissao.Padeiro
};
let laura = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.Atriz
};
let carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: profissao.Padeiro
};

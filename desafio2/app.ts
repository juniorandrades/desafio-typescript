// Como podemos melhorar o esse código usando TS? 

enum profissao {
    Atriz,
    Desenvovedora,
    Pintora,
    Jogadora,
    Padeiro
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: profissao
}


let maria = {
    nome: 'Maria',
    idade: 29,
    profissao: profissao.Atriz

}

let roberto = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissao.Padeiro
}

let laura = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.Atriz
};

let carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: profissao.Padeiro
}
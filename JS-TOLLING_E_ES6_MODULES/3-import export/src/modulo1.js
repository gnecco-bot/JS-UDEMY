export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 50;
const cpf = '12313'; // var privada

export default function soma(x, y) {
    return x + y;
}

export class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export { nome as nome2, sobrenome, idade, soma };
// export { nome as default, sobrenome, idade, soma };
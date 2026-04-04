const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
console.log(pessoa.nome);

const pessoa1 = new Object();
pessoa1.nome = 'luiza';
pessoa1.sobrenome = 'Otavia';

console.log(pessoa1);
// delete pessoa1.nome;
// console.log(pessoa1);

pessoa1.idade = 21;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento= function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.falarNome())
console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1) {
    console.log(chave);
    // console.log(pessoa1[chave]);
};


// Factory functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luana', 'Horlanda');
console.log(p1.nomeCompleto());

// Constructor functions
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // bloqueia a alteracao de valores
}
const p2 = new Pessoa2('Lucifer', 'Miranda');
console.log(p2)
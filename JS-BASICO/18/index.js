const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
// array = 'Outra'; // impossivel remodificar uma const de array declarado, apenas remover ou alterar
console.log(array);

const pessoa = {
    nome: 'luiz',
    sobrenome: 'oliveira',
    idade: 25,
    
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala(); 
pessoa.incrementaIdade();
pessoa.fala(); 

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('luiz', 'otavio', 25);
const pessoa2 = criaPessoa('luiz2', 'otavio', 25);
const pessoa3 = criaPessoa('luiz3', 'otavio', 25);
const pessoa4 = criaPessoa('luiz4', 'otavio', 25);
const pessoa5 = criaPessoa('luiz5', 'otavio', 25);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
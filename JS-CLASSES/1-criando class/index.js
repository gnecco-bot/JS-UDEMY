// Classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }
    
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Luana', 'Otavia');
const p3 = new Pessoa('Luan', 'Fernanda');
console.log(p1)
console.log(p2)
console.log(p3)


// Função constutora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando dentro da funcao construtora.`)
}

const p1FC = new Pessoa2('Leando', 'Junior');
console.log(p1FC)


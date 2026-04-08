// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
        // __proto__: Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // objA se torna um prototype (camada filha)
Object.setPrototypeOf(objC, objB); // objB se torna um prototype (camada filha)
console.log(objC.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveC);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

//metodo 1
const p1 = new Produto('Camiseta', 50);
p1.desconto(55);
console.log(p1)

//metodo 2
const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2);

//metodo 3
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 55
    }
});
p3.desconto(15);
console.log(p3);

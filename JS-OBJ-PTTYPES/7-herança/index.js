// Produto -> aumento, desconto
// Camiseta = Cor 
// Caneca = Material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // herença | chama o Produto e suas variaveis
    this.cor = cor;
};

Camiseta.prototype = Object.create(Produto.prototype); // pega o __proto__ do Produto
Camiseta.prototype.constructor = Camiseta; // cria um construtor proprio do copiado acima

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // herança | chama o Produto e suas variaveis
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        },
    });
}
Caneca.prototype = Object.create(Produto.prototype); // pega o __proto__ do Produto
Caneca.prototype.constructor = Caneca; // cria um construtor proprio do copiado acima

const produto = new Produto('gen', 10);
const camiseta = new Camiseta('Regata', 7.6, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 100; // setter

console.log(produto);
camiseta.aumento(10);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque); // getter
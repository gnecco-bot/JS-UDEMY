// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    
    // define as propriedades direto nas chaves declaradas
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra chave
            value: nome, // valor
            writable: false, // pode alterar
            configurable: true, // pode ser reconfigurada
        },
        preco: {
            enumerable: true, // mostra chave
            value: preco, // valor
            writable: false, // pode alterar
            configurable: true, // pode ser reconfigurada
        },
    })

    // define propriedade de apenas uma chave
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: true, // pode ser reconfigurada
    });
    
    // define propriedade de apenas uma chave
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: false, // nao pode ser reconfigurada nem apagada
    });
}


const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000
console.log(p1);
console.log(Object.keys(p1))
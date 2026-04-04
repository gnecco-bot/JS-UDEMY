// Getters pega o valor | Setters modifica o valor

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // define propriedade de apenas uma chave
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        configurable: true, // pode ser reconfigurada
        get: function() {
            return estoque;
        },
        
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('bad value');
                return
            }
            console.log(valor)
        }
    });
}

const p1 = new Produto('Camiseta', 30, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 'O valor que eu quero';
p1.estoque = 5;


function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('removido', 'reconfigurado')
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
console.log(p2.nome)
p2.nome = 'Isto foi removido';
console.log(p2.nome)
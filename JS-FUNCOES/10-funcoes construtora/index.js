// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 12345;
    const metodoInterno = function() {

    };

    // Atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': eu quem chaaou o método');
    }
}

const p1 = new Pessoa('luiz', 'otavio');
const p2 = new Pessoa('maria', 'oliveira');

console.log(p2.sobrenome);
p2.metodo()
// Factory function (Funcão fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        // GETTER
        get nomeCompleto() { // get = GETTER torna a funcao como um atributo quando for chamada
            return `${this.nome} ${this.sobrenome}`;
        },

        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' '); // cria um array separando os por espaço ' '
            this.nome = valor.shift(); // primeiro valor do array e sobrescreve o this.nome 'luiz'
            this.sobrenome = valor.join(' '); // junta o restante do array ao this.sobrenome
            // console.log(valor); // exibe o array sem o primeiro valor "Fernanda"
        },

        fala: function(assunto = 'falando sobre alguma coisa.') {
            return `${nome} está ${assunto}.`;
        },

        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('luiz', 'otávio', 1.8, 80);
const p2 = criaPessoa('maria', 'holanda', 1.6, 58);
// console.log(p1.fala('falando sobre JS'));
console.log(p1.fala());
// console.log(p1.nome);
// console.log(p1.nomeCompleto); // getter em acao
// console.log(p1.imc());

p1.nomeCompleto = 'Fernanda Oliveira Silva'; // nome de p1 sobrescrito
console.log(p1.nomeCompleto); // getter em acao
console.log(p1.fala());

// console.log(p2.fala('falando sobre JS'));
// console.log(p2.imc());
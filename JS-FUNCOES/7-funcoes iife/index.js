// IIFE -> Immediately invoked function expression

// function qualquerCoisa() {
//     console.log('12354');
// }
// qualquerCoisa() // chama a funcao direta


// funcoes auto invocadas
// nada dentro dessa funcao se associa ao escopo global, variaveis são owner dela
(function(idade, peso, altura) {
    const teste = 'testando...';
    console.log(teste);

    const sobrenome = 'Mendes';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('luiz'));
    }

    falaNome();

    console.log(idade, peso, altura);
})(30, 80, 1.89);

const teste = 'qualquer thing';
console.log(teste);
const nome = 'luiz';
const sobrenome = 'otavio';

function falaNome() {
    const sobrenome = 'renomeado'; // a mais interna é a de maior prioridade
    console.log(nome, sobrenome);
}
falaNome();

function usaFalaNome() {
    const nome = 'otavio'; // não será mexido no escopo lexico da funcao anterior
    falaNome();
}
usaFalaNome();
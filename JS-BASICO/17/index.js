function saudacao(nome) {
    // console.log(`Helloo ${nome}`); // executava direto da funcao
    return `Buongiorno, piacere ${nome}!`
}

saudacao('teste'); // nao exibe nada
const variavel = saudacao('Luiz')
console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 5));
console.log(soma(6, 8));
console.log(soma(2, 2));
console.log(soma());

// const raiz = function (n) {
const raiz = (n) => {
    return n ** 0.5;
};
console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

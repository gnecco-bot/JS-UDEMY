// retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (soma tudo)
const numeros = [5, 10 , 35, 2, 61, 92, 18, 5, 98, 9, 2, 7];
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2;
}).reduce(function(ac, valor) {
    return ac + valor;
});

const numerosPares2 = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);
console.log(numerosPares2);
// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 10 , 35, 2, 61, 92, 18, 5, 98, 9, 2, 7];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total)

const total2 = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total2)


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Jonas', idade: 44},
    {nome: 'Fernando', idade: 23},
    {nome: 'Laiz', idade: 53},
    {nome: 'Junior', idade: 19},
    {nome: 'Luisa', idade: 27},
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha)
// Filter -> retorna a mesma quantidade de elementos ou menos de acordo com a filtragem
// map, reduce

// Retone os números maior que 10
const numeros = [5, 10 , 35, 2, 61, 92, 18, 5, 98, 9, 2, 7];

// function callbackFilter(valor, indice, array) {
//     return valor > 10;
// }

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoa com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Jonas', idade: 44},
    {nome: 'Fernando', idade: 23},
    {nome: 'Laiz', idade: 53},
    {nome: 'Junior', idade: 19},
    {nome: 'Luisa', idade: 27},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentasAnos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log('################################')
console.log(pessoasComNomeGrande);
console.log('################################')
console.log(pessoasComMaisDeCinquentasAnos);
console.log('################################')
console.log(nomeTerminaComA);
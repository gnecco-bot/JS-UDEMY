// Dobrar os números
const numeros = [5, 10 , 35, 2, 61, 92, 18, 5, 98, 9, 2, 7];
const numeroEmDobro = numeros.map(function(valor, indice, array) {
    return valor * 2;
});
// console.log(numeroEmDobro);


// Para cada elemento:
// Retorne apenas um array com os nomes das pessoas
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto {id}
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Jonas', idade: 44},
    {nome: 'Fernando', idade: 23},
    {nome: 'Laiz', idade: 53},
    {nome: 'Junior', idade: 19},
    {nome: 'Luisa', idade: 27},
];
const nomes = pessoas.map(obj => obj.nome); // retorna a os valores da chave nome
console.log(nomes);

const idades = pessoas.map(obj => {
    newObj = {... obj}; // copia o array original
    delete newObj.nome; // deletou chave nome
    return {idade: newObj.idade};
});
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj}; // copia a array original
    newObj.id = indice + 1; // criou uma chave ID dentro do array pessoas
    return newObj;
})
console.log(comIds)
console.log(pessoas)
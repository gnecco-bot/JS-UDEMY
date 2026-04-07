/*
Object.values (retorna os valores das chaves)
Object.entries (retorna um array com chave e valor)
Object.assign (destinatario, quem sera copiado)
Object.getOwnPropertyDescription(o, 'prop') (retorna se a propriedade é writeble, configurable...)
{...(spread)} (espalha os valores de um obj ao outro (copiando))

Já visto:
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.deefineProperty (define uma propriedade)
*/

const produto = {nome: 'produto', preco: 1.8};
// const caneca = {...produto, material: 'porcelana'}; // copia
// const caneca = Object.assign({}, produto, material: 'porcelana'); // copia
const caneca = {nome: produto.nome, preco: produto.preco}; // copia

// caneca.nome = 'outro nome';
// caneca.preco = 2.5;
// console.log(produto)
// console.log(caneca)

Object.defineProperty(produto,  'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
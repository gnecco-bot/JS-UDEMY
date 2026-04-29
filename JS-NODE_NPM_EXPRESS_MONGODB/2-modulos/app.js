// const n = require('./mod');

// console.log(n(2, 2));

const Cachorro = require('./z/mod2');

const c1 = new Cachorro('Dog');
c1.latir();

console.log(__filename); //caminho completo até o arquivo
console.log(__dirname); // caminho completo da pasta

const path = require('path');
console.log(path.resolve(__dirname, '.', 'B', 'C', 'D'))
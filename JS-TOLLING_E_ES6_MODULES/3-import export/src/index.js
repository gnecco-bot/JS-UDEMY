// import * as meuModulo from './modulo1.js'
import { nome as nome2, sobrenome, idade, Pessoa} from './modulo1.js'; // import normal
import somaDefault from './modulo1.js'; // import como default

const nome = 'joão'; // colisão de nomes

console.log(nome, nome2, sobrenome, idade)
// console.log(soma(1, 6)) // com import normal

const p1 = new Pessoa('Luana', 'Silva'); 
console.log(p1)

console.log(somaDefault(4, 4)) // import default
// console.log(meuModulo)
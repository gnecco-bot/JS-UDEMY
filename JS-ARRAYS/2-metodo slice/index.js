//                 -4        -4       -3       -2         -1
//                  0         1        2        3          4
const nomes =  ['eduardo', 'maria', 'joana', 'felipe', 'wallace'];

// nomes.aplice(indice, delete, elem1, elem2, elem3);

console.log(nomes);
const removidos2 = nomes.splice(3, 1, 'luiz') // remove o valor e coloca logo em seguida 'luiz'
console.log(nomes);
const removidos = nomes.splice(3, 2) // (indice, quando remover no sentido horário)
console.log(nomes, removidos);
console.log(removidos2);

// pop remove o ultimo
// nomes.splice(-1, 1);

//shift remove o primeiro
// nomes.splice(0, 1);

//push adiciona ao final
// nomes.splice(nomes.length, 0, 'leandro', 'moura'); 

//unshift adiciona ao começo
// nomes.splice(0, 0, 'mateus', 'fernando');

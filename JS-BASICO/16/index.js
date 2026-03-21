// const alunos = ['luiz', 'maria', 'joão', 1, true, null]; // array, lista 
const alunos = ['luiz', 'maria', 'joão']; // array, lista 
console.log(alunos); // visualizar o array de alunos
console.log(alunos[0]); // visualiza apenas o indice 0
console.log(alunos[2]); // visualiza apenas o indice 2
console.log(alunos.length); // conta o tanto de elementos no array alunos

alunos[0] = 'Eduardo'; // modifica o valor no indice 0
alunos[3] = 'Luiza'; // modifica o valor no indice 3
console.log(alunos);  // visualiza o array de alunos
console.log(alunos.length); // conta o tanto de elementos no array alunos

alunos[alunos.length] = 'Felipe'; // adiciona ao final da lista
alunos[alunos.length] = 'Joana'; // adiciona ao final da lista
alunos[alunos.length] = 'Luana'; // adiciona ao final da lista
console.log(alunos); // visualiza o array de alunos
console.log(alunos.length); // conta o tanto de elementos no array alunos
 
alunos.push('Fabio'); // adiciona o elemento no fim da lista (igual append)
alunos.push('Jeniffer'); // adiciona o elemento no fim da lista (igual append)
console.log(alunos); // visualiza o array de alunos
console.log(alunos.length); // conta o tanto de elementos no array alunos

alunos.unshift('Arthur'); // adiciona ao começo da lista, empurrando os outros elementos
alunos.unshift('Nicole'); // adiciona ao começo da lista, empurrando os outros elementos

// alunos.pop(); // remove o ultimo elemento da lista
const removido = alunos.pop(); // remove o ultimo elemento da lista
console.log(removido); // visualiza os valores removidos
console.log(alunos); // visualiza o array de alunos

const removido_first = alunos.shift(); // remove o primeiro elemento da lista
console.log(removido_first); // visualiza os valores removidos
console.log(alunos); // conta o tanto de elemento na lista

delete alunos[1]; // remove elemento sem modificar as indices
console.log(alunos[1]); // undefined
console.log(alunos); // conta o tanto de elemento na lista

console.log(alunos[50]); // undefined, valor acima do existente de indices na lista

console.log(alunos.slice(0, 3)); // começa do indice x e vai até o indice y (com negativo elimina ultms)
console.log(typeof alunos); // tipo da variavel alunos
console.log(alunos instanceof Array); // verifica se é instancia de um tipo array (lista)


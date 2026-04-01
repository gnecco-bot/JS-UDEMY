// const nomes = new Array ['eduardo', 'maria', 'joana']; // mesma coisa do padrão abaixo
const nomes =  ['eduardo', 'maria', 'joana'];
nomes[2] = 'joão';
const novo = nomes; // referencia o mesmo local na memoria
const novo1 = [...nomes]; // copia array para outro

delete novo.pop(); // remove o ultimo do arraya
const removido = nomes.shift(); // remove o primeiro do array
console.log(nomes);
console.log(novo1);
console.log(removido);

nomes.push('arthur'); // adiciona ao começo da final da array
console.log(nomes);
nomes.unshift('wallece'); // adiciona no começo da array
console.log(nomes);

const novo3 = nomes.slice(1, 3); // corta o array do valor inicial ao final
console.log(novo3);

const novo4 = 'luiz otavio miranda';
const novo4_1 = novo4.split(' '); // separa por espaço e cria um array
console.log(novo4_1);

const novo5 = nomes.join(' '); // união de array concatenando com espaço entre os valores
console.log(novo5);
// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, , quatro, ...resto] = numeros; // parecido com desempacotameto
console.log(um, dois, quatro);
console.log(resto)

const numeros2 =  [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros2[0][2]); // metodo 1

const [,[,,seis]] = numeros2; // metodo 2
console.log(seis);
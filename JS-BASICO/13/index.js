// IEEE 754-2008
let num1 = 10.5182310
let num2 = 22;

console.log(num1.toString() + num2); // por ter uma string o outro numero se torna uma concatenação em str
// num1 = num1.toString(); // converte para string o numero
console.log(num1.toString(2)); // versão binaria da string
console.log(num1.toFixed(2)); // definir cadas decimais
console.log(Number.isInteger(num1)); // verifica se é um numero inteiro
console.log(Number.isInteger(num2)); // verifica se é um numero inteiro
// let temp = num1 * 'Olá'; // me gera um erro NaN
// console.log(Number.isNaN(temp)); // verifica se é um valor NaN
let temp = num1 + '55' // concatena
console.log(temp); // concatena

let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
console.log(num3) // imprecisão valor: 0.79999
num3 = Number(num3.toFixed(2)); // limite o valor em 2 unidades
console.log(num3)
console.log(Number.isInteger(num3));

let num5 = 1.2; // soma mais 1.2 em cima de 0.8 gerando um valor inteiro 2.0
num3 += num5 // 1.2 + 0.8
console.log(num3) // 2
console.log(Number.isInteger(num3)); // por ser um valor redondo é considerado inteiro para o js

num1 = 0.7;
num2 = 0.1;


// paleativo para ter um valor arredondado com precisão diferente da soma padrão do js
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0
console.log(num1);
console.log(Number.isInteger(num1));
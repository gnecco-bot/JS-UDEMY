// Operadores
// + | - | / | * | ** | % 
const num1 = 11;
const num2 = 2;
const num3 = 7;

console.log(num1 * num2 + num3);

/*
Incremento = ++
Decremento = --
*/

let contador = 1;
contador ++; // 2
++ contador; // 3
contador ++; // 4
contador ++; // 5
console.log(++contador);
console.log(--contador);

// Operadores de atribuição
contador *= 2;
console.log(contador);

// NaN - Not a Number
const nu1 = 10;
const nu2Int = parseInt('5');
const nu2Float = parseFloat('5.5');
const nuNumber = Number('5');
const nuNumberNaN = Number('luiz');
console.log(nu1 + nu2Int);
console.log(nu1 + nu2Float);
console.log(nu1 + nuNumber);
console.log(nu1 + nuNumberNaN);
console.log(typeof nuNumber);

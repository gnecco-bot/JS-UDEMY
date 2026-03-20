let num1 = 9.5321;
let num2 = Math.floor(num1); // arrendonda para baixo (9)
let num3 = Math.ceil(num1); // arrendonda para cima (10)
let num4 = Math.round(num1); // arredonda a partir da metade (10)
console.log(num2, num3, num4);

console.log(Math.max(1,2,3,4,5,6,-10,1000,22,5314,534)); // retorna o maior num
console.log(Math.min(1,2,3,4,5,6,-10,1000,22,5314,534)); // retorna o menor num
console.log(Math.random()); // gera um numero aleatorio abaixo de 1.0

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // valor entre 5 e 10
console.log(aleatorio);

console.log(Math.PI); // valor de pi
console.log(Math.pow(2, 10)); // eleva o numero como o 2 ** 10

num1 = 9;
console.log(num1 ** 0.5); // raiz quadrada

console.log(100/0); // nao gera erro, gera True e valor como Infinity
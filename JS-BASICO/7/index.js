const nome = 'teste'; // str
const nome2 = "teste"; // str
const nome3 = `teste`; // str
const num1 = 10; // number 
const num2 = 10.52; // number
let nomeAluno; // Undefined = não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo = não aponta para local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

console.log(typeof sobrenomeAluno, sobrenomeAluno);

const a = [1, 2];
const b = a;

console.log(a,b);

b.push(3);
console.log(a, b);
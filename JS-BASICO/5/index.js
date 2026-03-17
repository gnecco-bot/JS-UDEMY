const nome = 'teste';
const sobrenome = 'testando';
const idade = 29;
const peso = 85;
const altura = 1.89;

let imc = peso / (altura * altura);
console.log(imc)

let anoNascimento = 2026 - idade;
console.log(anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de imc`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
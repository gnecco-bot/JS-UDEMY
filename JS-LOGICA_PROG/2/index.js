/*
Operadores logicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(true && true);
console.log(true || false);
console.log(!true || false);
console.log(true || !false);

const usuario = 'Luiz'
const senha = '12345'

const vaiLogar = usuario == 'Luiz' && senha === '12345';
console.log(vaiLogar);
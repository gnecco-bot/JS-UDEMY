/*
&& -> false && true -> se tiver false, já é parada a condicao// se for true "o valor dele é rtnd" 
|| -> true && false -> vai retonrar "o valor verdadeiro"

FALSY:
false
0
'' "" ``
null / undefined
NaN 
*/
console.log('Luiz' && 'Maria'); // aparece o ultimo valor verdadeiro
console.log('Luiz' && '' && 'Maria'); // aparece '' como false

function falaOi () { 
    return 'Oi'; // retorna true
}

const vaiExecutar = false;
let vaiExecutar2;
let vaiExecutar3 = 'teste';

console.log(vaiExecutar && falaOi()); // retornará false pq existe um falso no meio da condicao
console.log(vaiExecutar2 && falaOi()); // retornará undefined
console.log(vaiExecutar3 && falaOi()); // retornará 'Oi'
console.log(falaOi() && vaiExecutar3); // retornará 'teste'

console.log( 0 || false || null || 'luiz' || true ); // retorna o primeiro valor verdadeiro

const corUsuario = null;
const corPadrao = corUsuario || 'preto'; // retorna o primeiro valor verdadeiro
console.log(corPadrao); // retorna 'preto'

const corUsuario2 = 'vermelho';
const corPadrao2 = corUsuario2 || 'preto'; // retorna o primeiro valor verdadeiro
console.log(corPadrao2); // retorna 'vermelho'

const a = 0;
const b = null;
const c = 'false';
const c2 = false;
const d = false;
const e = NaN;
console.log( a || b || c || d || e ); // retorna o valor de C que é str true "'false'"  
console.log( a || b || c2 || d || e ); // retorna o ultimo valor false "NaN"


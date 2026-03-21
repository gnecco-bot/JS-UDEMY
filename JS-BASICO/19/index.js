/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados
 
Referência (mutável) - array, object, function - Passados por referência (aponta o msm local na mem)
*/

let str1 = 'a';
let str2 = str1; // é copiado para outra variavel quando o valor é string

let a = [1, 2, 3];
let b = a; // aponta para o mesmo endereço na memoria

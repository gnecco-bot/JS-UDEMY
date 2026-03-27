// return
function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a, b);
}

let soma_str = soma(1,2);
console.log(soma_str)

function falaFrase(comeco) { // "Olá" entrará aqui
    function falaResto(resto) { // "mundo!" entrará aqui
        return comeco + ' ' + resto;
    }
    return falaResto; // apenas direciona o endereço de memoria, n esta executando
}

const fala = falaFrase('Olá'); // direciona a const "fala" para a funcao "falaResto"
const resto = fala('mundo!'); // aqui executa a "funcaoResto" que esta dentro da "falaFrase"
console.log(resto);

// function duplica(n) {
//     return n * 2;
// }
// function triplica(n) {
//     return n * 3;
// }
// function quadriplica(n) {
//     return n * 4;
// }

function criaMultipliocador(multiplicador) {
    return function(n) { // retorna o endereço da funcao para const
        return n * multiplicador;
    };
}

const duplica = criaMultipliocador(2); // aponta para a funcao dentro do primeiro return
const triplica = criaMultipliocador(3);
const quadriplica = criaMultipliocador(4);

console.log(duplica(2)); // executa a funcao dentro do return primario
console.log(triplica(2));
console.log(quadriplica(2));
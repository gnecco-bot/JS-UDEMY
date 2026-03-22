// Se (numero >= 0 && numero <=  5) ocorrer, faça isso {código}
// Se-não faça isso {codigo}
// O primeiro verdadeiro será executado por mais que tenha mais verdadeiros nos ifs

if (2 === 2) {
    console.log('"2 é igual de tipo e valor a 2"');
};

const numero = 10;
if (numero >= 0 && numero <= 5) {
    console.log('Sim, o número está entre 0 e 5.');
} else if (numero >=6 && numero <= 8) {
    console.log('O número está entre 0 e 5.');
} else if (1 === 1) {
    console.log('LITERAL'); // Verdadeiro
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
};

console.log('...Aqui vai o restante do código.');
function funcao() {
    console.log('Hello');
    console.log(arguments)
};

funcao('valor'); // não gera erro mesmo a funcao nao esperando parametros

function funcao2() { // sem parametros
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
};

funcao2(1, 1, 3, 4, 5, 6, 7, 8, 9); // não gera erro mesmo a funcao nao esperando parametros

function funcao3(a, b, c, d, e, f) { // com parametros esperando valores 
    console.log(a, b, c, d, e, f);
};

funcao3(1, 3); // não gera erro mesmo tendo menos valores que os parametros esperam

function funcao4(a, b = 2, c = 6) { // com parametros esperando valores 
    b = b || 0; // se nao existir o segundo valor sera zero
    console.log(a + b + c);
};

funcao4(2); 
funcao4(1, 4); 
funcao4(1, 3, 10); 

function funcao5({nome, sobrenome, idade}) { // com parametros esperando valores 
    console.log(nome, sobrenome, idade);
};
let obj = {nome: 'teste', sobrenome: 'testando', idade: 27};
funcao5(obj);

function funcao6([valor1, valor2, valor3]) { // com parametros esperando valores 
    console.log(valor1, valor2, valor3);
};
funcao6(['luiz', 'miranda', 20]);

const conta = (operador, acumulador, ...numeros) => { // rest operation (valor1, ...numeros)
    for(let numero of numeros){
        if (operador === '+' ) acumulador += numero;
        if (operador === '-' ) acumulador -= numero;
        if (operador === '/' ) acumulador /= numero;
        if (operador === '*' ) acumulador *= numero;
    }
    console.log(acumulador);
}
conta('/', 1, 20, 30, 40);
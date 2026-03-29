// Closure tem acesso ao escopo lexical
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
};

const funcao = retornaFuncao('luiz'); // valor declarado
const funcao2 = retornaFuncao('luan'); // valor declarado
console.log(funcao); // funcao anonima, precisa ser executada
console.log(funcao2); // funcao anonima, precisa ser executada

console.log(funcao(), funcao2()); // retorna o valor declarado 
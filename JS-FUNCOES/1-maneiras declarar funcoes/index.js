// Declaracao de funcao (Function hoisting)
falaOi();
function falaOi() {
    console.log('FalaAlgo');
};

// First-class objets (objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Dado here');
};

function exectuaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();      
};
exectuaFuncao(souUmDado);

// Arrom function
const funcaoArrow = () => {
    console.log('sou uma arrow function')
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    fala: function() {
        console.log('Estou no object...');
    }
};
obj.fala();
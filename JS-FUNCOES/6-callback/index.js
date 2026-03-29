// CALLBACK chama quando a anterior terminar, direcionando a linha de execucao

function rand(min = 1000, max = 3000) { // gera numero de 1 a 3 segundos
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());

function f1(callback) {
    setTimeout(function() { // nao execucao de acordo com o tempo dado
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() { // nao execucao de acordo com o tempo dado
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() { // nao execucao de acordo com o tempo dado
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// f1();
// f2();
// f3();

// METODO CALLBACK ARVORE DE NATAL
// f1(function () { 
//     f2(function() {
//         f3(function() {
//             console.log('olá mundo!');
//         });
//     });
// });

f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('Olá mundo!');
}

// f2();
// f3();

console.log('ola')
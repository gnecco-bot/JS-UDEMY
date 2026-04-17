function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }

// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });


// Promise faz execução em pararelo sem pausar o programa para ser executado
function esperaAi(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE'); // exibir no bloco catch

        setTimeout(() => {
            resolve(msg); // exibir no bloco then
        }, tempo);        
    });
}

esperaAi('Conexão com o BD', rand(1, 3)
).then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE DE DADOS', rand(1, 3));
}).then(resposta => {
    console.log(resposta)
    return esperaAi(10, rand(1, 3));
    // return esperaAi('Validando dados', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Finalizei a conexão')
}).catch(e => {
    console.log('ERRO:', e);
});

console.log('Exbindo isso antes do promise')
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

// Promise faz execução em pararelo sem pausar o programa para ser executado
function esperaAi(msg, tempo, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            }; // exibir no bloco catch

            resolve(msg.toUpperCase() + ' - Passei na promise'); // exibir no bloco then
            return;
        }, tempo);        
    });
}

// Promise.all | Promise.race | Promice.resolve | Promise.reject
// const promises = [
//     // 'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(10, 100),
    // 'Outro valor',
// ];

// Retorna todos os valores como true ou apenas o valor false e os outros nao são retornados
// Promise.all(promises).then(function(valor){
//     console.log(valor);
// }).catch(function(erro){
//     console.log(erro);
// })

// retorna a primeira promessa que resolver
// Promise.race(promises).then(function(valor){
//     console.log(valor);
// }).catch(function(erro){
//     console.log(erro);
// })

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log('ERRO', e));
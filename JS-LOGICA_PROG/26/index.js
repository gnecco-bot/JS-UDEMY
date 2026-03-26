function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', { // retorna hora formatada em string
        hour12: false // estrutura 12 horas false (24h true)
    });
}

// function funcaDoInterval() {
//     console.log(mostraHora());
// }
// setInterval(funcaDoInterval, 1000);

// setInterval(function() {console.log(mostraHora())}, 1000); // seta um intervalo de 1000milisegundos

const timer = setInterval(function() {console.log(mostraHora())}, 1000); // seta um intervalo de 1sg 
setTimeout(function() {clearInterval(timer)}, 3000); // tempo de parada no segundo 3
setTimeout(function() {console.log('Depois de 5 segundos sou executado')}, 5000); // no segundo 5
function relogio() {
    function criaHoras(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
    }

    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++; // cada laço 1 seg e adicionado
            relogio.innerHTML = criaHoras(segundos);
        }, 1000); // 1000 = 1 seg
    }

    document.addEventListener('click', function(e) {
        const el = e.target; // captura qualquer evento pelo usuario no site
        console.log(e.target); 

        if (el.classList.contains('iniciar')) { // executa se class existir 
            relogio.classList.remove('pausado'); // remove class "pausada"
            clearInterval(timer); // zera o timer
            iniciaRelogio(); // inicia
        }
        
        if (el.classList.contains('pausar')) { // executa se class existir 
            clearInterval(timer); // zera o timer
            relogio.classList.add('pausado'); // remove class "pausada"
        }
        
        if (el.classList.contains('zerar')) { // executa se class existir 
            clearInterval(timer); // zera o timer
            relogio.innerHTML = '00:00:00'; // reseta segndos na interface
            segundos = 0; // zera segundos
            relogio.classList.remove('pausado'); // remove class "pausada"
        }
    });
};
relogio();
// iniciar.addEventListener('click', function(event) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// })
// pausar.addEventListener('click', function(event) {
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// })
// zerar.addEventListener('click', function(event) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// })
// function calculoIMC() {
//     const form = document.querySelector('#form'); // seleciona o formulario com a class .form
//     const resultado = document.querySelector('.resultado');  // seleciona a div resultado com class
    
//     function recebeEventoForm (evento) {
//         evento.preventDefault(); // evitar links de redirecionamento
//         const peso = form.querySelector('.peso');
//         const altura = form.querySelector('.altura');

//         let resultadoIMC = peso / (altura * altura);

//         if (resultadoIMC < 18.5 ) {
//             resultado.innerHTML = `Seu IMC é ${resultadoIMC} (Abaixo do peso)`
//         } else if (resultadoIMC >= 18.5 && resultadoIMC <= 25.9 ) {
//             resultado.innerHTML = `Seu IMC é ${resultadoIMC} (Peso normal)`
//         } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
//             resultado.innerHTML = `Seu IMC é ${resultadoIMC} (Sobrepeso)`
//         } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
//             resultado.innerHTML = `Seu IMC é ${resultadoIMC} (Obesidade grau 1)`
//         } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
//             resultado.innerHTML = `Seu IMC é ${resultadoIMC} (Obesidade grau 2)`
//         } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
//             resultado.innerHTML = `Seu IMC é ${resultadoIMC} (Obesidade grau 2)`
//         } else if (resultadoIMC >= 40) {
//             resultado.innerHTML = `Seu IMC é ${resultadoIMC} (Obesidade grau 3)`
//         } else {
//             resultado.innerHTML = `Peso inválido`
//         }
//     };
//     form.addEventListener('submit', recebeEventoForm);
// };
// calculoIMC();
// peso / (altura * altura)

const form = document.querySelector('#form');

form.addEventListener('submit', function(e) { // ouvinte de evento
    e.preventDefault();  // nao atualiza a pagina
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    };
    
    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    };

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

/*
Menos do que 18,5
Entre 18,5 e 24,0
Entre 25 e 29,9
Entre 30 e 34,9
Entre 35 e 39,9
Mais do que 40
*/

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5]; 
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
};

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

function criaP () {
    const p = document.createElement('p'); // cria uma tag de paragrafo <p></p>
    return p;
};
 
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};
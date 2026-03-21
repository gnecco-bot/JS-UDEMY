function meuEscopo () {
    // const form = document.querySelector('.form'); // seleciona o formulario com a class .form

    // form.onsubmit = function (evento) { // quando enviar submit do form
    //     evento.preventDefault(); // evitar links de redirecionamento
    //     alert(1); 
    //     console.log('Enviado');
    // };

    // let contador = 1;
    // function recebeEventoForm (evento) {
    //     evento.preventDefault(); // evitar links de redirecionamento
    //     console.log(`Form não foi enviado ${contador}`);
    //     contador++;
    // }

    const form = document.querySelector('.form'); // seleciona o formulario com a class .form
    const resultado = document.querySelector('.resultado');  // seleciona a div resultado com class

    const pessoa = [];

    function recebeEventoForm (evento) {
        evento.preventDefault(); // evitar links de redirecionamento
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        // console.log(nome.value, sobrenome.value, peso.value, altura.value);

        pessoa.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });
        console.log(pessoa);

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Nome é ${nome.value}</p>`
        resultado.innerHTML += `<p>Sobrenome é ${sobrenome.value}</p>`
        resultado.innerHTML += `<p>Peso é ${peso.value}</p>`
        resultado.innerHTML += `<p>Altura é ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();
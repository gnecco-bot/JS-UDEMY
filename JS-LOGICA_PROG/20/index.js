const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Continue - continua para a proxima repeticao
// Break - quebra o laço de repeticao


for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // pula o laço de iteracao atual
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break; // termina o laco de repeticao
    }

}
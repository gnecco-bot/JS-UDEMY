try {
    console.log(naoExisto);
} catch (err) {
    console.log('nao existo nao existe.')
    console.log(err);
};

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisiar ser numeros');
    }
    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch (error) {
    console.log(error);
};
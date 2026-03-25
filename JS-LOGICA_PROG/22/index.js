function ePaisagem(largura, altura) {
    return largura >= altura;
};
console.log(ePaisagem(1080, 1920));
console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1920, 1920));

const ePaisagem2 = (largura, altura) => largura >= altura; // moderna e menor "Arrow Functions"

console.log(ePaisagem2(1080, 1920));
console.log(ePaisagem(1920, 1080));
console.log(ePaisagem2(1920, 1920));
const paragrafos = document.querySelector('.paragrafos'); // seleciona a div class paragrafo
const ps = paragrafos.querySelectorAll('p'); // seleciona o p dentro da div class paragrafo

const estilosBody = getComputedStyle(document.body); // acessa style de body do css
const backgroundColorBody = estilosBody.backgroundColor;  // constante para background-color do css
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody; // seta em p a cor constante 
    p.style.color = '#FFF'; // seta uma nova cor nos caracter do texto
};

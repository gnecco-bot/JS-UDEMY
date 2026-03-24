const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
]

const container = document.querySelector('.container')
const div = document.createElement('div'); // cria div nova

for (let i = 0; i < elementos.length; i++) {
    // console.log(elementos[i])
    let {tag, texto} = elementos[i]; // desestrutura os elementos
    let tagHTML = document.createElement(tag); // cria tag nova
    // tagHTML.innerText = texto; // adiciona o texto a tag nova
    let textoCriado = document.createTextNode(texto); // cria variavel texto para o html
    tagHTML.appendChild(textoCriado); // adiciona o texto criado a tag nova
    div.appendChild(tagHTML); // adiciona dentro da div criada (ainda esta em memoria)
};

container.appendChild(div); // adiciona a div ao container
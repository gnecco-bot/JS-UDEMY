// For classico - geralmlente com iteraveis (arrays ou string)
// For in - retorna o indice ou chave (string, array ou objetos)
// For of - retorna o valor em si (iteraveis, arrays ou strings)

const nome = 'Luiz Otavio';
const nomes = ['luiz', 'luan', 'juan', 'renato']


for (let i = 0; i < nome.length; i++) { // for classico 
    console.log(nome[i]);
};

console.log('####')

for (let i in nome) { // for in (retorna o indice)
    console.log(nome[i]);
};

console.log('####')

for (let valor of nome) { // for of (retorna o valor)
    console.log(valor);
};

for (let valor of nomes) { // for of (retorna o valor)
    console.log(valor);
};

console.log('####')

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
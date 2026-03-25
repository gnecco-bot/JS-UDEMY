const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[index]);
// }

for (let i in frutas) {
    console.log(i);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
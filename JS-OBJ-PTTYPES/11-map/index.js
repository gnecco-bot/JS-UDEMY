const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Luan'},
    { id: 1, nome: 'Renan'},
]

// const novasPessoas = {};
// for (const pessoa of pessoas ) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas ) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);

for (const pessoa of novasPessoas.values())
    console.log(pessoa);

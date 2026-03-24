const pessoa = {
    nome: 'luiz',
    sobrenome: 'mirianda',
    idade: 30,
    endereco: {
        rua: 'av Brasil',
        // numero: 320
    }
};

const { nome = '', sobrenome, idade, endereco, endereco: { rua, numero: n = 555 }} = pessoa;
console.log(nome, sobrenome, idade);
console.log(endereco); // retorna um objecto
console.log(rua, n);
const nome = 'Renato';
let i = 0;

while (i <= nome.length) {
    console.log(nome[i]);
    i++;
}

function random(min, max) {
    const r = Math.random() * (max - min) + min; //
    return Math.floor(r); // arredonda pra baixo
};

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand)

while (rand !== 10) { // não executa se a condição já for falsa
    rand = random(min, max);
    console.log(rand);
};

console.log('########################################')

do { // executa mesmo se a condicao for falsa
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10); 
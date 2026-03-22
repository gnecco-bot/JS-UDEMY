/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

const hora = 10;
if (hora < 12) {
    console.log(`A hora ${hora} é menor que 12`);
};

const hora2 = 12;
if (hora2 < 12) { // não sera exibido nada pois nao entra na condição
    console.log(`A hora ${hora} é menor que 12`);
};

// if pode ser sozinho
// sempre que usar else precisa de um if antes
// Pode usar vários else-if
// Pode ter apenas um else

const horario = 12;
if (horario >= 0 && horario <= 11) {
    console.log('Bom dia!');
} else if (horario >=12 && horario <= 17) {
    console.log('Boa tarde!');
} else if (horario >= 18 && horario <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Não entrou em nenhum das condições');
};

const tenhoGrana = true;
if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
};
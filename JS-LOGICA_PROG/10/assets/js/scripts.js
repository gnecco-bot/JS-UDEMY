// const hora = document.querySelector('.hora');
// const data = new Date();
// const diaSemana = data.getDay(); 
// const diaMes = data.getMonth() + 1; 

// function getDiaSemana(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         return diaSemanaTexto;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         return diaSemanaTexto;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         return diaSemanaTexto;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         return diaSemanaTexto;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         return diaSemanaTexto;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         return diaSemanaTexto;
//     default:
//         diaSemanaTexto = '';
//         return diaSemanaTexto;
//     };
// }

// function getMes(diaMes) {
//     let diaMesTexto;
//     switch (diaMes) {
//     case 1:
//         diaMesTexto = 'Janeiro';
//         return diaMesTexto;
//     case 2:
//         diaMesTexto = 'Fevereiro';
//         return diaMesTexto;
//     case 3:
//         diaMesTexto = 'Março';
//         return diaMesTexto;
//     case 4:
//         diaMesTexto = 'Abril';
//         return diaMesTexto;
//     case 5:
//         diaMesTexto = 'Maio';
//         return diaMesTexto;
//     case 6:
//         diaMesTexto = 'Junho';
//         return diaMesTexto;
//     case 7:
//         diaMesTexto = 'Julho';
//         return diaMesTexto;
//     case 8:
//         diaMesTexto = 'Agosto';
//         return diaMesTexto;
//     case 9:
//         diaMesTexto = 'Setembro';
//         return diaMesTexto;
//     case 10:
//         diaMesTexto = 'Outubro';
//         return diaSemanaTexto;
//     case 11:
//         diaMesTexto = 'Novembro';
//         return diaMesTexto;
//     case 12:
//         diaMesTexto = 'Dezembro';
//         return diaMesTexto;
//     default:
//         diaMesTexto = '';
//         return diaMesTexto;
//     };
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// hora.innerHTML = `${getDiaSemana(diaSemana)}, ${data.getDate()} de ${getMes(diaMes)} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;

const hora = document.querySelector('.hora');
const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };
hora.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});
const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou epoca unix
console.log(data.toString());

const data2 = new Date(2019, 3, 20, 3, 25, 23, 200); // formato 1
console.log(data2.toString());

const data3 = new Date('2020-04-20T20:20:59.200'); // formato 2
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1); // mes começa do zero
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay()); // 0 = domingo | 6 = Sabado
console.log(data3.toString());
console.log(Date.now());

const data4 = new Date(1774306264896); // formato 3
console.log(data4.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
};
const data5 = new Date(); // não especificando pega a data atual da execucao
const dataBrasil = formataData(data5);
console.log(dataBrasil);

const a1 = [5, 10 , 35, 2, 61, 92, 18, 5, 98, 9, 2, 7];
a1.forEach(function(valor, indice, array) {
    console.log(valor, indice);
})
console.log('###########################');
let total = 0;
a1.forEach(valor => {total += valor});
console.log(total);
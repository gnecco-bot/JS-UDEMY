//            01234567
let string = "Um texto";

console.log(string[0]);
console.log(string.charAt(8)); // não gera erro passando do range
console.log(string.concat(' em',' um', ' lindo dia com concat.')); 
console.log(string + ' em um lindo dia com agregação +.'); 
console.log(`${string} em um lindo dia com formatação de string.`);

console.log(string.indexOf('texto')); // onde foi encontrado tal texto
console.log(string.lastIndexOf('o')); // busca de tras para frente

console.log(string.search(/[a-z]/g)); // expressoes regulares
console.log(string.replace('Um', 'Outro')); // sobre escreve algum trecho dito

console.log(string.length); // conta o tanto de caracter
console.log(string.slice(3)); // começa a ler a partir da indice 3
console.log(string.split(' ')); // cria uma lista com divisoes predefinida dentro do split()

console.log(string.toUpperCase()); // texto full upper
console.log(string.toLowerCase()); // texto full lower
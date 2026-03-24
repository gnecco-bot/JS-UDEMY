const verdadeira = true;

// Let tem escopo de bloco { bloco } seu valor é oficial de cada bloco
// Var só tem escopo em fução seu valor é alterado dentro ou fora do bloco, sendo o ultimo executado

let nome = 'luiz'; // criando
var nome2 = 'luiz'; // criando

if (verdadeira) {
    let nome = 'otavio'; // criando
    var nome2 = 'rogerio'; // redeclarando 
    
    if (verdadeira) {
        let nome = 'Qualquer coisa' // criando
        var nome2 = 'ronaldo'; // redeclarando
    }
};

console.log(nome, nome2); // "luiz" do primeiro let e "ronaldo" do ultimo var
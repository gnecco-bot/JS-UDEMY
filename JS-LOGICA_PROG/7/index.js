// Operação ternária
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
// se for verdadeiro o primeiro valor é exibido, se não, o segundo

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUsuario = null; // setado como null, caso tivesse valor ele seria exibido
const corPadrao = corUsuario || 'Preta'; // será executado o primeiro true que tiver
console.log(corPadrao);

// mesma coisa da operacao ternaria acima
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// };
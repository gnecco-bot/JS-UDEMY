try {
    console.log('Abrindo o arquivo')
    console.log('manipulei o arquivo e gerou erro')
    console.log('fechei o arquivo')
} catch (e) {
    console.log('tratando o erro') // tratando o erro caso tenha dado
} finally {
    console.log('FINALLY: eu sempre sou executado') // executa dando erro ou nao
};

function retornaHora(data) {
    if(data && !(data instanceof Date)) { // verifica se o dado e compativel com instancia de Date
        // console.log('Não é');
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) { // so cria a instancia se nao existir dado passado
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
    const hora2 = retornaHora(11); // erro
    console.log(hora2);
} catch (e) {
    // tratar erro
} finally {
    console.log('Tenha um bom dia. (bloco do finally)');
}
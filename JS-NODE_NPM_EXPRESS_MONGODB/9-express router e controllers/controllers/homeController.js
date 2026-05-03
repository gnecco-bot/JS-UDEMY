exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="post">
    Nome do cliente: <input type="text" name="nome_input"></br>
    Outro campo: <input type="text" name="outro_campo">
    <button>Enviar</button>
    </form>
    `);
} 

exports.trataPost = (req, res) => {
    res.send('Vindo da nova rota POST');
}
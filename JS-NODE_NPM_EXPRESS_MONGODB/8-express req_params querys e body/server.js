const express = require('express');
const app = express();

// CRUD = CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE

// http://meusite.com/ <- GET


app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
    Nome do cliente: <input type="text" name="nome_input">
    Outro campo: <input type="text" name="outro_campo">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios/:parametro', (req, res) => {
    console.log(req.params); // profile/teste
    console.log(req.query); // profile/?chave1=valo1&chave2=valor2
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome_input}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor excutando na porta 3000');
});
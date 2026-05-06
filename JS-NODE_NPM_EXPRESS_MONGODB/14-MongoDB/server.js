const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://Lucas:12345@cursoudemy.fvawbb8.mongodb.net/BASEDEDADOS?appName=cursoUdemy';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopoly: true}).then(() => ('Agora que a conexão ocorreu'));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

// arquivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));
// http://localhost:3000/assets/css/style.css

// app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('views', './src/views');
app.set('view engine', 'ejs');

// middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor excutando na porta 3000');
});
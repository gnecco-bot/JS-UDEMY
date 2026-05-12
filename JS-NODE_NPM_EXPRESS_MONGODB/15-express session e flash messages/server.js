require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const connectionString = 'mongodb://Lucas:n7meJMF44WQNcHp2@ac-sb0hzrz-shard-00-00.fvawbb8.mongodb.net:27017,ac-sb0hzrz-shard-00-01.fvawbb8.mongodb.net:27017,ac-sb0hzrz-shard-00-02.fvawbb8.mongodb.net:27017/BASEDEDADOS?ssl=true&replicaSet=atlas-kixwm4-shard-0&authSource=admin';

// Conexão limpa, sem as opções obsoletas (useNewUrlParser, etc)
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conectado à base de dados');
    app.emit('pronto'); // Emite um sinal que o banco está pronto
  })
  .catch(e => console.log('Erro de conexão:', e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});


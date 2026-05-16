require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
  console.log('Conectado à base de dados');
  app.emit('pronto'); // Emite um sinal que o banco está pronto
})
.catch(e => console.log('Erro de conexão:', e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: "fnojndjsçfodiffnjkds",
  store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(routes);

// Só escuta a porta 3000 quando o banco estiver pronto
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});


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
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash'); // mensagens de erros q nao salvam
const routes = require('./routes'); // rotas
const path = require('path'); // caminhos pastas
const helmet = require('helmet'); // segurança
const csrf = require('csurf'); // segurança de formulario
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: "fnojndjsçfodiffnjkds",
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
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
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});


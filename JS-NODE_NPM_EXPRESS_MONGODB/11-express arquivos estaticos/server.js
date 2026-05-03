const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({extended: true}));

// arquivos estaticos
app.use(express.static(path.resolve(__dirname, 'public')));
// http://localhost:3000/assets/css/style.css

// app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor excutando na porta 3000');
});
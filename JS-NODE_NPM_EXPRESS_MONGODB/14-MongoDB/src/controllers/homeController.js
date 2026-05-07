const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Outro titulo',
//     descricao: 'Outra descrição'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));


exports.paginaInicial = (req, res) => {
    // console.log('Respondendo ao cliente')
    res.render('index');
    // console.log(`Olha o que tem na re.session.nome ${req.session.nome}`);
    // next();
    return
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return
}
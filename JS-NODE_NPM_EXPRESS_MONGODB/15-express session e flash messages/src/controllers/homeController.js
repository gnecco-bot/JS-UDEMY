const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Outro titulo',
//     descricao: 'Outra descrição'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));


exports.paginaInicial = (req, res) => {
    // Verifique se a sessão existe antes de atribuir
    if (req.session) {
        req.session.usuario = { nome: 'Luiz', logado: true };
    } else {
        console.log('Sessão não encontrada!');

        // console.log(req.flash('info'))
    }
    
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return
}
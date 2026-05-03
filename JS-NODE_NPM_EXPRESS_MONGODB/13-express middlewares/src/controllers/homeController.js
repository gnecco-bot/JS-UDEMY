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
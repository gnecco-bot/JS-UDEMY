exports.middlewareGlobal = (req, res, next) => {
    // if(req.body.cliente) {
    //     req.body.cliente = req.body.cliente.replace('senha', 'NÃO USE SENHA')
    //     console.log();
    //     console.log(`Vi que você postou ${req.body.cliente}`)
    //     console.log();
    // }

    console.log('Passei pelo middleware')
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou do outro middleware');
    next();
}
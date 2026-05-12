exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local vinda do middleware.'
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou do outro middleware');
    next();
}
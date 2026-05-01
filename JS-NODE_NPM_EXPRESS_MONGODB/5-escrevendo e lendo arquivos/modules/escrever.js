const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' }); 
}

//flag = w: sobreescreve o arquivo caso tenha dados
//flag = a: append, adiciona ao final do arquivo sem excluir o anterior
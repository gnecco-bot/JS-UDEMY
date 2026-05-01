// fs manipulação de pastas e arquivos
const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));
    
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
};

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        
        if (/\.git/g.test(fileFullPath)) continue; // filtra para n aparecer
        if (/node_modules/g.test(fileFullPath)) continue; 

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if(
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
        ) continue; // filtra para apenas arquivos .css e .html
        
        console.log(fileFullPath);
        // console.log(fileFullPath, stats.isDirectory()); // retorna true para pasta
    }
}
readdir('D:/Usuario/Documents/JAVASCRIPT/UDEMY/JS-UDEMY/');
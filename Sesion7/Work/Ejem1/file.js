const path = require('path');
const fs = require('fs');
const pathFile = path.join(__dirname, '/ejem1.txt');

fs.writeFile(pathFile,
    'Este es el contenido de mi archivo', { encoding: 'utf-8' },
    (err) => {
        if (err) throw err;
        console.log('writeFile:', 'Archivo creado!!!')
    }
);
fs.readFile(pathFile, { encoding: 'utf-8' },
    function(err, data) {
        if (err) console.log(err);
        console.log('readFile:', data)
    }
);
fs.appendFile(pathFile,
    '\nEsto es una nueva línea',
    (err) => {
        if (err) throw err;
        console.log('appendFile:', 'Archivo actualizado!!!')
    }
);
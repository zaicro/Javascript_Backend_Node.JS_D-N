const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname, '/ejem1Sync.txt');

fs.writeFileSync(pathFile,
    'Este es el contenido de mi archivo sincrono', { encoding: 'utf-8' },
    (err) => {
        if (err) throw err;
        console.log('writeFileSync:', 'Archivo creado!!!')
    }
);

data = fs.readFileSync(pathFile, { encoding: 'utf-8' });
console.log('readFileSync:', data);

fs.appendFileSync(pathFile, '\nEsto es una nueva línea');
console.log('appendFileSync:', 'Archivo actualizado!!!')
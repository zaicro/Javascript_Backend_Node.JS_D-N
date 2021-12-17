const express = require('express');
const path = require('path');
const app = express();
const APP_PORT = 3001;

app.listen(APP_PORT, () => {
    console.log(`Aplicacion en ejecución por puerto ${APP_PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/calc2', (req, res) => {
    //console.log(res)
    res.sendFile(path.join(__dirname + '/views/calc.html'));
    console.log(res)

});

app.get('/calc', (req, res) => {
    var op = req.query.op;
    var n1 = Number(req.query.n1);
    var n2 = Number(req.query.n2);
    var html = `
    <h1>La ${op} entre ${n1} y ${n2} es: ${calc(op, n1, n2)}</h1>
    `;
    return res.send(html)

    //res.sendFile(path.join(__dirname + '/views/calc.html'));
});

app.get('/calc/:op/:n1/:n2', (req, res) => {
    var op = req.params.op;
    var n1 = Number(req.params.n1);
    var n2 = Number(req.params.n2);
    var html = `
    <h1>La ${op} entre ${n1} y ${n2} es: ${calc(op, n1, n2)}</h1>
    `;
    return res.send(html)
});

function calc(op, n1, n2) {
    switch (op) {
        case 'suma':
            return (n1 + n2);
        case 'resta':
            return (n1 - n2);
        case 'multiplicacion':
            return (n1 * n2);
        case 'division':
            return (n1 / n2);
        default:
            console.log('Operacion no encontrada')
            break;
    }
}
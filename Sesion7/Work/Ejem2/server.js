var http = require('http');

var server = http.createServer(function(req, resp) {
    resp.end(`<h1>Hola Mundo desde el servidor<\h1>`);
});

server.listen(3000, function() {
    console.log(`Servidor escuchando en el puerto ${this.address().port}`);
});
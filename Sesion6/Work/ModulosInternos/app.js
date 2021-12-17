var os = require('os');
var misCpus = os.cpus();
console.log(misCpus);

//Sintaxis para traer nuestros modulos a nuestros archivos.
var VARIABLE_DONDE_SE_GUARDA = require('VARIABLE_DEL_MODULO');
var VARIABLE_DONDE_SE_GUARDA = require('VARIABLE_DEL_MODULO_DE_TERCEROS');
var VARIABLE_DONDE_SE_GUARDA = require('./CARPETA/VARIABLE_DEL_MODULO_DE_TERCEROS');
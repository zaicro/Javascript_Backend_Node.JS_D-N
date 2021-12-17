//Calculadora tipoOperacion === Suma Resta Multiplicacion Division

// node Calculadora.js // node = process.argv[0]; fileName = process.argv[1];
const tipoOperacion = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

switch (tipoOperacion) {
    case 'suma':
        console.log(`El resultado de la suma entre ${a} y ${b} es: ${a + b}`)
        break;
    case 'resta':
        console.log(`El resultado de la resta entre ${a} y ${b} es: ${a - b}`)
        break;
    case 'multiplicacion':
        console.log(`El resultado de la entre ${a} y ${b} multiplicacion es: ${a * b}`)
        break;
    case 'division':
        console.log(`El resultado de la entre ${a} y ${b} division es: ${a / b}`)
        break;
    default:
        console.log('Operacion no encontrada')
        break;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question('¿Quien eres?', name => {
    console.log(`Hola ${name}!`);
    readline.close();
})
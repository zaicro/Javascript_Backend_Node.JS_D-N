//Template Strings
const nombre = "Andres";
// <ES6
console.log("Bienvenido " + nombre);
//ES6
console.log(`Bienvenido ${nombre}`);
//múltiples líneas
const mensaje = `Bienvenido 
${nombre}
Alumnos\nProfesores`;
console.log(mensaje);
//expresiones matemáticas
const a = 10;
const b = 20;
console.log(`${nombre}. El resultado de la suma entre ${a} y ${b} es ${a + b}`);
//Trabajar con arreglos
const colores = ['Azul', 'Rojo', 'Amarillo'];
console.log(`Los colores primarios son: ${colores.join(', ')}`);
//Funciones de alto orden.
//*Reto definir la funcion.
/*La funcion evalua el valor de cada uno de los objetos del arreglo y segun la condicion
retorna los numeros impares*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`numeros impares: ${numeros.filter(function (x) {
    return x % 2 != 0;
})}`);
console.log(`numeros impares: ${numeros.filter(x => x % 2 != 0)}`);
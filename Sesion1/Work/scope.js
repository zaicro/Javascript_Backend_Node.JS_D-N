//Scope Global
console.log('/*** Scope Global ***/')
var nombre = "Vero";

function foo() {
    console.log(nombre);
}
foo();
/*La variable esta declara fuera de la funcion, por lo que puede ser accedida desde cualquier 
funcion del archivo js*/

//Scope Local
console.log('/*** Scope Local ***/')

function foo2() {
    var nombre2 = "pablo";
    console.log(nombre2);
}
foo2();
/*La variable se declara dentro de una funcion, por lo cual queda protegida y solo es 
accesible desde dicha funcion*/

//Scope En Condicional
console.log('/*** Scope En Condicional ***/')
console.log(nombre3);
if (true) {
    var nombre3 = "Pedro";
    console.log(nombre3);
}
console.log(nombre3);
/*La variable sera global, teniendo un valor 'undefined', hasta que sea asignado en el condicional.*/
//Scope En Bucle
console.log('/*** Scope En Bucle ***/')
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var doubles = [];
for (var i = 0; i < numbers.length; i++) {

    var number = numbers[i] * 2;
    doubles.push(number);
}
console.log(numbers);
console.log(doubles);
console.log('original i', i);
i = 10;
console.log('Alterado i', i);
/*El valor de la expresion en el bucle sera de tipo global, lo que permite su uso desde otras funciones del codigo*/
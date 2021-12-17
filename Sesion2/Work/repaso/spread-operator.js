//Spread operator
console.log('/*** Spread operator ***/')
const libro = {
    autor: 'Martin',
    titulo: 'Libro',
    anio: 2018
};
const copiaDeLibro = libro; //valor por referencia.
const copiaDeLibro2 = {...libro, anio: 2019 }; //nuevo valor.
console.log('libro', libro);
console.log('copiaDeLibro por referencia', copiaDeLibro);
console.log('copiaDeLibro2 por valor', copiaDeLibro2);
//Arreglos por referencia
console.log('/*** Arreglos por referencia ***/')
const colores = ['Azul', 'Rojo', 'Amarillo'];
const colores2 = colores;
console.log('Por Referncia, colores', colores);
colores2.push('Verde');
console.log('Por Referncia, colores', colores);
//Arreglos por valor
console.log('/*** Arreglos por valor ***/')
const colores3 = [...colores];
console.log('Por valor, colores', colores);
colores3.push('Verde');
console.log('Por valor, colores', colores);
console.log('Por valor, colores3', colores3);
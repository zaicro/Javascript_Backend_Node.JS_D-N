//Destructuring
document.open();
//Destructuring es etraer valores o propiedades de un arreglo u objeto
//Arreglo
document.write(`<p><b>/*** Caso Arreglo ***/</b></p>`);
const colores = ['Azul', 'Rojo', 'Amarillo'];
const [Azul, Rojo, Amarillo] = colores;
document.write(`<span>Azul ${Azul}</span></br>`);
document.write(`<span>Rojo ${Rojo}</span></br>`);
document.write(`<span>Amarillo ${Amarillo}</span>`);
//Objeto
document.write(`<p><b>/*** Caso Objeto ***/</b></p>`);
const persona = {
    nombre: 'John',
    apellido: 'Doe',
    pais: 'Desconocido'
};
document.write(`<span>Sin Destructuring</span></br>`);
const nombre1 = persona.nombre;
const apellido1 = persona.apellido;
document.write(`<span>${nombre1} ${apellido1}</span></br>`);
document.write(`<span>Con Destructuring</span></br>`);
const { nombre, apellido } = persona;
document.write(`<span>${nombre} ${apellido}</span></br>`);



document.close();
let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numero = Math.random();
        if (numero >= 0.5) resolve(`Exito: ${numero}`)
        reject(`Error: ${numero}`)
    }, 2000);
})
promesa1
    .then((data) => console.log(data))
    .catch((data) => console.log(data))
console.log("Inicio")
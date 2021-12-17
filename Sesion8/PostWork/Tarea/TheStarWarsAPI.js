const https = require('https');
const uri = 'https://swapi.dev/api/people/';

const getPeople = new Promise((resolve, reject) => {
    https.get(uri,
        (resp) => {
            let data = '';
            resp.setEncoding('utf-8');
            resp.on('data', (chunk) => { data += chunk; });
            resp.on('end', () => {
                let body = JSON.parse(data);
                if (body && body.results)
                    resolve(body.results);
                reject('Error al consumir el servicio')
            })
        }
    )
});

getPeople
    .then((data) => {
        console.log('Ordenado por número de participaciones en las películas hechas con el campo "films" de manera ascendente')
        data
            .sort((a, b) => a.films.length - b.films.length)
            .forEach(element => {
                console.log(`pelicula: ${element.name} - cantidad: ${element.films.length}`)
            });
        console.log('\nOrdenado por nombre con el campo "name" de manera descendente')
        data
            .sort((a, b) => (a.name < b.name) ? 1 : -1)
            .forEach(element => {
                console.log(`pelicula: ${element.name} - cantidad: ${element.films.length}`)
            });
    })
    .catch((data) => console.log(data))
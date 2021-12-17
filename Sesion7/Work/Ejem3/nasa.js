var https = require('https');

function getAPOD() {
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
        (resp) => {
            let data = '';
            resp.setEncoding('utf-8');
            resp.on('data',
                (chunk) => {
                    data += chunk;
                    console.log(data);
                }
            );
        }
    );
}

getAPOD();
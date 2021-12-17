const { Console } = require('console');
const express = require('express');
const app = express();
const APP_PORT = 3001;

app.use('/api', require('./routes'))

app.listen(APP_PORT, () => {
    console.log(`Express on port ${APP_PORT}`)
})
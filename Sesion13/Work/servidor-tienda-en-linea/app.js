const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

app.use(helmet());
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes'));
app.listen(3001, () => { console.log('Express ejcutado en puerto 3001') });

//portwork
//que es helmet y cors
const { Sequelize } = require('sequelize');

//Exporting models
const NoteModel = require('./models/note')

//DataBase connection
const sequelize = new Sequelize('<database>', 'user', 'pwd', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
})

//adding models
const models = [NoteModel];

//Registering models
for (let model of models) {
    model(sequelize);
}

module.exports = sequelize;
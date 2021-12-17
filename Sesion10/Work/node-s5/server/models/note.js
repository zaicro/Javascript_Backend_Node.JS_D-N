const { DataTypes } = require('sequelize');

const NoteModel = (sequelize) => sequelize.define({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    heading: DataTypes.STRING,
    content: DataTypes.TEXT
})

module.exports = NoteModel;
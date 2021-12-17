const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('reviews', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    content: DataTypes.TEXT,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE
});
const { Sequelize } = require('sequelize');

const product = require('./models/products');
const review = require('./models/reviews');

const sequelize = new Sequelize('ecommerce-api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
})

const models = [product, review]

for (let model of models) {
    model(sequelize);
}

const { products, reviews } = equelize.models;
reviews.belongsTo(products);

module.exports = sequelize;
const { Sequelize } = require('sequelize');

const products = require('./models/products');
const reviews = require('./models/reviews');
const orders = require('./models/orders');
const users = require('./models/users');

const sequelize = new Sequelize('ecommerce-api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
})

const models = [products, reviews, orders, users]

for (let model of models) {
    model(sequelize);
}

const { products, reviews, orders, users } = sequelize.models;
reviews.belongsTo(products);
orders.belongsTo(products);
orders.belongsTo(users);

module.exports = sequelize;
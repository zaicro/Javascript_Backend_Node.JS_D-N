const { Sequelize } = require('sequelize');

const Products = require('./models/products');
const Reviews = require('./models/reviews');
const Orders = require('./models/orders');
const Users = require('./models/users');

const sequelize = new Sequelize('ecommerce_api', 'anmartinez', 'D1chter1234.', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
})

const models = [Products, Reviews, Orders, Users]

for (let model of models) {
    model(sequelize);
}

const { products, reviews, orders, users } = sequelize.models;
reviews.belongsTo(products);
orders.belongsTo(products);
orders.belongsTo(users);

module.exports = sequelize;
'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('reviews', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            productId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'products',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            content: Sequelize.TEXT,
            createAt: Sequelize.DATE,
            updateAt: Sequelize.DATE
        });
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('reviews');
    }
};
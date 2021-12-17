const express = require('express');
const router = express.Router();
const sequelize = require('../db');

router.get('/', permission('admin', 'client'), async(req, res) => {
    const orders = await sequelize.models.orders.findAndCountAll();
    return res.status(200).json({ data: orders });
})

router.post('/', permission('admin', 'client'), async(req, res) => {
    const { body } = req;
    const order = await sequelize.models.orders.create({
        userId: body.userId,
        productId: body.productId,
        quantity: body.quantity,
    });
    await order.save();
    return res.status(201).json({ data: order });
})

router.put('/:id', permission('admin'), async(req, res) => {
    const { body, params: { id } } = req;
    const order = await sequelize.models.orders.findByPk({ id });
    if (!order) {
        return res.status(404).json({ code: 404, message: 'Order not found' });
    }
    const orderUpdate = await order.update({
        userId: body.userId,
        productId: body.productId,
        quantity: body.quantity,
    });
    return res.status(201).json({ data: orderUpdate });
})

router.delete('/:id', permission('admin'), async(req, res) => {
    const { params: { id } } = req;
    const order = await sequelize.models.orders.findByPk({ id });
    if (!order) {
        return res.status(404).json({ code: 404, message: 'Order not found' });
    }
    await order.destroy();
    return res.status(201).json({ message: 'Deleted successfully' });
})

module.exports = router;
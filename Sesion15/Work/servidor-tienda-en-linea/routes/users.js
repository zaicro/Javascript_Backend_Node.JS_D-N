const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

router.get('/', async(req, res) => {
    const users = await sequelize.models.users.findAndCountAll();
    return res.status(200).json({ data: users });
})

router.post('/', permission('admin'), async(req, res) => {
    const { body } = req;
    const user = await sequelize.models.users.create({
        name: body.name,
        lastname: body.lastname,
        type: body.type,
        email: body.email,
        password: body.password
    });
    await user.save();
    return res.status(201).json({ data: user });
})

router.put('/:id', permission('admin'), async(req, res) => {
    const { body, params: { id } } = req;
    const user = await sequelize.models.users.findByPk({ id });
    if (!user) {
        return res.status(404).json({ code: 404, message: 'User not found' });
    }
    const userUpdate = await user.update({
        name: body.name,
        lastname: body.lastname,
        type: body.type,
        //email: body.email,
        password: body.password
    });
    return res.status(201).json({ data: userUpdate });
})

router.delete('/:id', permission('admin'), async(req, res) => {
    const { params: { id } } = req;
    const user = await sequelize.models.users.findByPk({ id });
    if (!user) {
        return res.status(404).json({ code: 404, message: 'User not found' });
    }
    await user.destroy();
    return res.status(201).json({ message: 'Deleted successfully' });
})

module.exports = router;
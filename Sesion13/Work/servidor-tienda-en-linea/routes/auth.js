const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');


router.post('/login', async(req, res) => {
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

router.post('/signup', async(req, res) => {

})

module.exports = router;
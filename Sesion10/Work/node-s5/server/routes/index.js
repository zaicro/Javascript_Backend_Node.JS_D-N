const express = require('express');
const router = express.Router();

router.use('/notes', require('./notes'))
router.use('/blog', require('./blog'))

module.exports = router;
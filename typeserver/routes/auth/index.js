const express = require('express');

const router = express.Router();
const controller = require('./auth.controller');

const User = require('./../../db/model/User');

router.get('/', controller.index);
router.post('/signup', (req, res, next) => {
    const { username, email, password } = req.body;

})

module.exports = router;

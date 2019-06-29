const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const controller = require('./auth.controller');
const { generateToken } = require('./../../utils/auth');

const User = require('./../../db/model/User');

router.get('/', controller.index);
router.post('/signup', (req, res, next) => {
    const { username, email, password } = req.body;

    User({ username, email, password }).save((err, user) => {
        if (err) {
            throw err;
        }

        const token = generateToken(user);

        res.status(200).json({ user, token });
    });
})

module.exports = router;

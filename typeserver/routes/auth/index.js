const express = require('express');

const router = express.Router();

const controller = require('./auth.controller');

router.get('/', controller.index);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/me/from/token', controller.checkToken);

module.exports = router;

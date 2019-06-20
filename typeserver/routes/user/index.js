const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/', controller.index);
router.post('/', controller.addUser);

module.exports = router;

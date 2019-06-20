const express = require('express');

const router = express.Router();
const controller = require('./game.controller');

router.get('/', controller.index);
router.post('/', controller.addGame);

module.exports = router;

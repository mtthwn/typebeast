const express = require('express');
const router = express.Router();

const controller = require('./quote.controller');

router.get('/', controller.getQuote);
router.post('/', controller.addQuote);

module.exports = router;

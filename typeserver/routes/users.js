const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Sending something' });
});

module.exports = router;

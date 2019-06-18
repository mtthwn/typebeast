const express = require('express');
const User = require('./../model/User');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Sending something' });
});

router.post('/', (req, res) => {
  const { email, password } = req.body;

  new User({ email, password })
    .save()
    .then(user => res.status(200).json({ user }))
    .catch(e => res.status(400).json({ error: e.message }));
});

module.exports = router;

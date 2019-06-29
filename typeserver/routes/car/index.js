const express = require('express');

const router = express.Router();

const User = require('./../../db/model/User');

// router.get('/', (req, res, next) => {
//   res.status(200).json({ success: true, message: 'hello!' });
// });

router.get('/:email', (req, res, next) => {
  const { email } = req.params;
  
  User.findOne({ email }).then((err, user) => {
    if (err) {
      return res.status(400).json({ success: false, message: 'No user found' });
    }

    res.status(200).json({ success: true, car: user.cars });
  });
});

module.exports = router;

const express = require('express');

const router = express.Router();

const User = require('./../../db/model/User');
const Car = require('./../../db/model/Car');

// router.get('/', (req, res, next) => {
//   res.status(200).json({ success: true, message: 'hello!' });
// });

router.post('/', (req, res, next) => {
  const { name, filename, price } = req.body;

  Car({ name, filename, price })
    .save()
    .then(car => {
      res.status(200).json({ car });
    })
    .catch(e => res.status(400).json({ success: false, message: e.message }));
});

router.get('/:email', (req, res, next) => {

  const { email } = req.params;

  User.findOne({ email })
    .populate('cars')
    .exec((err, user) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, message: 'No user found' });
      }

      res.status(200).json({ success: true, cars: user.cars });
    });
});

module.exports = router;

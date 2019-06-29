const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const User = require('./../../db/model/User');
const Car = require('./../../db/model/Car');

// router.get('/', (req, res, next) => {
//   res.status(200).json({ success: true, message: 'hello!' });
// });

router.get('/', (req, res, next) => {
  Car.find()
    .then(cars => {
      res.status(200).json({ cars });
    })
    .catch(e => res.status(400).json({ success: false, message: e.message }));
});

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

router.post('/:email', (req, res, next) => {
  const { email } = req.params;
  const { car } = req.body;

  User.findOneAndUpdate(
    { email },
    { $push: { cars: mongoose.Types.ObjectId(car) } }
  ).exec((err, user) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }

    console.log(car, user);

    res.status(200).json({ success: true, message: 'Car successfully added!' });
  });
});

module.exports = router;

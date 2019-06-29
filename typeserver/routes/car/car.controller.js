const mongoose = require('mongoose');

const User = require('./../../db/model/User');
const Car = require('./../../db/model/Car');

const getCars = (req, res) => {
  Car.find()
    .then(cars => {
      res.status(200).json({ success: true, cars });
    })
    .catch(e => res.status(400).json({ success: false, message: e.message }));
};

const addCar = (req, res) => {
  const { name, filename, price } = req.body;

  Car({ name, filename, price })
    .save()
    .then(car => {
      res.status(200).json({ car });
    })
    .catch(e => res.status(400).json({ success: false, message: e.message }));
};

const getUserCars = (req, res) => {
  const { email } = req.params;

  User.findOne({ email })
    .populate('cars')
    .exec()
    .then(user => {
      res.status(200).json({ success: true, cars: user.cars });
    })
    .catch(e => {
      res.status(400).json({ success: false, message: 'No user found' });
    });
};

const addUserCar = (req, res) => {
  const { email } = req.params;
  const { car } = req.body;

  User.findOneAndUpdate(
    { email },
    { $push: { cars: mongoose.Types.ObjectId(car) } }
  )
    .exec()
    .then(user => {
      res
        .status(200)
        .json({ success: true, message: 'Car successfully added!' });
    })
    .catch(e => {
      res.status(400).json({ success: false, message: e.message });
    });
};

module.exports = {
  getCars,
  addCar,
  getUserCars,
  addUserCar
};

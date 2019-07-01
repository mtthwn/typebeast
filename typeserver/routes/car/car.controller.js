const mongoose = require('mongoose');

const User = require('./../../db/model/User');
const Car = require('./../../db/model/Car');

module.exports = {
  getCars: (req, res) => {

    // const user = req.user ? req.user : 'guest'
    Car.find()
      .then(cars => {
        res.status(200).json({ success: true, cars });
      })
      .catch(e => res.status(400).json({ success: false, message: e.message }));
  },
  addCar: (req, res) => {
    const { name, filename, price } = req.body;

    Car({ name, filename, price })
      .save()
      .then(car => {
        res.status(200).json({ car });
      })
      .catch(e => res.status(400).json({ success: false, message: e.message }));
  },
  getUserCars: (req, res) => {
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
  },
  addUserCar: async (req, res) => {
    try {

       const { car, _id } = req.body;

    const user = User.findOne({ _id }).exec();
    // const car = Car.findOne({ _id: car });
    User.findOneAndUpdate(
      { _id },
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

    } catch (e) {
    
    }
  }
   
};

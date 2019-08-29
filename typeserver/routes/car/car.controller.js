const mongoose = require('mongoose')

const User = require('./../../db/model/User')
const Car = require('./../../db/model/Car')

const { getCleanUser } = require('./../../utils/auth')

module.exports = {
  getCars: (req, res) => {
    // const user = req.user ? req.user : 'guest'
    Car.find()
      .then(cars => {
        res.status(200).json({ success: true, cars })
      })
      .catch(e => res.status(400).json({ success: false, message: e.message }))
  },
  addCar: (req, res) => {
    const { name, filename, price } = req.body

    Car({ name, filename, price })
      .save()
      .then(car => {
        res.status(200).json({ car })
      })
      .catch(e => res.status(400).json({ success: false, message: e.message }))
  },
  getUserCars: (req, res) => {
    const { _id } = req.user

    if (!req.user) {
      Car.findOne({ model: 'Silvia S15' }).then(car => {
        console.log(car)
      })
    }

    User.findOne({ _id })
      .populate('cars')
      .exec()
      .then(user => {
        res.status(200).json({ success: true, cars: user.cars })
      })
      .catch(e => {
        res.status(400).json({ success: false, message: 'No user found' })
      })
  },
  addUserCar: async (req, res) => {
    try {
      const { _id } = req.user
      const { car } = req.body

      const user = await User.findOne({ _id }).exec()

      const { cash, cars } = user

      if (cars.indexOf(car) > -1) {
        return res
          .status(400)
          .json({ success: false, message: 'You already own this car!' })
      }

      const selectedCar = await Car.findOne({ _id: car }).exec()

      if (selectedCar.price > cash) {
        return res
          .status(400)
          .json({ success: false, message: `You can't afford this car!` })
      }
      await User.findOneAndUpdate(
        { _id },
        { $push: { cars: mongoose.Types.ObjectId(car) } }
      )
      await User.findOneAndUpdate(
        { _id },
        { $inc: { cash: -selectedCar.price } }
      )

      const updatedUser = await User.findOne({ _id })

      res.status(200).json({ user: getCleanUser(updatedUser), success: true })
    } catch (e) {
      res.status(400).json({
        success: false,
        message: 'An error occurred while buying a car.'
      })
    }
  },
  setUserCar: (req, res) => {
    const { car } = req.body

    const { _id } = req.user

    User.findOneAndUpdate({ _id }, { currentCar: car })
      .then(user => {
        res.status(200).json({ success: true, user })
      })
      .catch(e => {
        res
          .status(400)
          .json({ success: false, message: 'Car selection unsuccessful!' })
      })
  }
}

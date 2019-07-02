const mongoose = require('mongoose');

const { Schema } = mongoose;

const Car = require('./Car');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  games: {
    type: Array,
    default: []
  },
  password: {
    type: String,
    required: true
  },
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Car'
    }
  ],
  currentCar: {
    type: Schema.Types.ObjectId,
    ref: 'Car'
  },
  cash: {
    type: Number,
    required: true,
    default: 100000
  }
});

UserSchema.pre('save', function(next) {
  let user = this;

  Car.findOne({ model: 'Silvia S15' })
    .then(car => {
      user.currentCar = car._id;
      user.cars = [car._id];
      console.log(user);

      next();
    })
    .catch(e => {
      console.log(e);
    });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

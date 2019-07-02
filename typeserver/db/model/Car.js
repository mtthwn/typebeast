const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarSchema = new Schema({
  model: {
    type: String,
    default: 'default',
    required: true
  },
  make: {
    type: String,
    required: true
  },
  spriteFile: {
    type: String,
    required: true
  },
  mediumImg: {
    type: String,
    required: true
  },
  largeImg: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  maxSpeed: {
    type: String,
    required: true
  },
  accerlation: {
    type: String,
    required: true
  }
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;

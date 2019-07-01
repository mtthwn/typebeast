const mongoose = require('mongoose');

const { Schema } = mongoose;

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
  cars: [{
    type: Schema.Types.ObjectId, 
    ref: 'Car'
  }],
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

const User = mongoose.model('User', UserSchema);

module.exports = User;

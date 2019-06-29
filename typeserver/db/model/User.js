const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true
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
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

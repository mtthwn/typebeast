const mongoose = require('mongoose');

const { Schema } = mongoose;

const GameStatSchema = new Schema({
  player: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  wpm: {
    type: Number,
    required: true,
    default: 0
  }
});

const GameStat = mongoose.model('GameStat', GameStatSchema);

module.exports = GameStat;

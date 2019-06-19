const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const GameStatSchema = new Schema({
  player: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  wpm: {
    type: Number,
    required: true
  }
});

const GameStat = mongoose.model('GameStat', GameStatSchema);

module.exports = GameStat;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const GameSchema = new Schema({
  stats: [{ type: Schema.Types.ObjectId, ref: 'GameStat' }],
  playedAt: {
    type: Date,
    default: Date.now
  },
  socketId: {
    type: String,
    required: true,
  },
  quote: {
    type: Schema.Types.ObjectId,
    ref: 'Quote',
    required: true
  }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;

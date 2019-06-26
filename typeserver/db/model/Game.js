const mongoose = require('mongoose');

const { Schema } = mongoose;

const GameSchema = new Schema({
  stats: [{ type: Schema.Types.ObjectId, ref: 'GameStat' }],
  playedAt: Number,
  quote: {
    type: String,
    required: true
  }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;

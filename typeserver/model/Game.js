const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const GameSchema = new Schema({
  Users: {
    type: Array
  }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;

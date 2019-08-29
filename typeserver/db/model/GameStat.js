const mongoose = require('mongoose')

const { Schema } = mongoose

const GameStatSchema = new Schema({
  player: {
    type: String,
    required: true,
    default: 'Guest'
  },
  wpm: {
    type: Number,
    required: true,
    default: 0
  },
  quote: {
    type: Schema.Types.ObjectId,
    ref: 'Quote',
    required: true
  }
})

const GameStat = mongoose.model('GameStat', GameStatSchema)

module.exports = GameStat

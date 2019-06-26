const mongoose = require('mongoose');

// const { Schema } = mongoose.Schema;

const QuoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true,
    unique: true
  }
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;

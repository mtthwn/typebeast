const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/typebeast', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  process.stdout.write('Connected to MongoDB \n');
});

module.exports = {mongoose};
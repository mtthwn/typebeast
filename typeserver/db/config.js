const mongoose = require('mongoose');

const { MONGO_PASSWORD } = process.env;

const url = `mongodb://admin:${MONGO_PASSWORD}@cluster0-shard-00-00-9hhsv.mongodb.net:27017,cluster0-shard-00-01-9hhsv.mongodb.net:27017,cluster0-shard-00-02-9hhsv.mongodb.net:27017/typebeast?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  process.stdout.write('Connected to MongoDB \n');
});

module.exports = { mongoose, db };

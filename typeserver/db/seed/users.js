const bcrypt = require('bcrypt');

module.exports = [
  {
    username: 'Justin',
    email: 'jskwok@gmail.com',
    games: [],
    password: bcrypt.hashSync('hello', 10)
  },
  {
    username: 'Daniel',
    email: 'dtran23@gmail.com',
    games: [],
    password: bcrypt.hashSync('goodbye', 10)
  }
];
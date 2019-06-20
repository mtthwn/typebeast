const User = require('../../model/User');

function index(req, res) {
  res.status(200).json({
    message: 'welcome to the server'
  });
}

function addUser(req, res) {
  const { name, email, password } = req.body;

  new User({ name, email, password }).save().then(user => {
    res.status(200).json({ user });
  });
}

module.exports = {
  index,
  addUser
};

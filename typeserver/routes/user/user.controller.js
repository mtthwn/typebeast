const User = require('../../db/model/User');

function index(req, res) {
  res.status(200).json({
    message: 'welcome to the server'
  });
}

function getUser(req, res) {
  const { email, password } = req.body;

  User.findOne({ email, password }).then(foundUser => {
    res
      .status(200)
      .json({ success: true, email: foundUser.email, name: foundUser.name });
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
  getUser,
  addUser
};

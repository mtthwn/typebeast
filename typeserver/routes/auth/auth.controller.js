const User = require('./../../db/model/User');

function index(req, res) {
  res.status(200).json({
    message: 'welcome to the auth routes'
  });
}

// function login(req, res) {
//   const { email, password } = req.body;

//   User.findOne({ email, password });
// }

module.exports = {
  index
};

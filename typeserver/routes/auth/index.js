const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const controller = require('./auth.controller');
const { generateToken } = require('./../../utils/auth');

const User = require('./../../db/model/User');

router.get('/', controller.index);

router.post('/register', (req, res, next) => {
  const username = req.body.username.trim();
  const email = req.body.email.trim();
  const password = bcrypt.hashSync(req.body.password.trim(), 10);

  User({ username, email, password })
    .save((err, savedUser) => {
      if (err) {
        return res.status(401).json({ success: false, message: err.message });
      }

      const token = generateToken(savedUser);
      const user = {
        username: savedUser.username,
        email: savedUser.email
      };

      res.status(200).json({ success: true, user, token });
    })
    .catch(e => {
      res.status(401).json({ success: false, error: e.message });
    });
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return res.status(401).json({ success: false, message: err.message });
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'Incorrect username or password' });
    }

    bcrypt.compare(password, user.password, (err, valid) => {
      if (!valid) {
        return res.status(404).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }

      const token = generateToken(user);
      const formattedUser = {
        username: user.username,
        email: user.email
      };

      res.status(200).json({ success: true, token, user: formattedUser });
    });
  });
});

module.exports = router;

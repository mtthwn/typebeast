const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const controller = require('./auth.controller');
const { generateToken, getCleanUser } = require('./../../utils/auth');

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
      const user = getCleanUser(savedUser);

      res.status(200).json({ success: true, user, token });
    })
    .catch(e => {
      res.status(401).json({ success: false, error: e.message });
    });
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, foundUser) => {
    if (err) {
      return res.status(401).json({ success: false, message: err.message });
    }

    if (!foundUser) {
      return res
        .status(404)
        .json({ success: false, message: 'Incorrect username or password' });
    }

    bcrypt.compare(password, foundUser.password, (err, valid) => {
      if (!valid) {
        return res.status(404).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }

      const token = generateToken(foundUser);
      const user = getCleanUser(foundUser);

      res.status(200).json({ success: true, token, user });
    });
  });
});

router.get('/me/from/token', (req, res, next) => {
  const { token } = req.body || req.query;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: 'No token was sent' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, foundUser) => {
    if (err) {
      return res.status(401).json({ success: false, message: err.message });
    }

    User.findById({ _id: user._id }, (err, foundUser) => {
      if (err) {
        return res.status(401).json({ success: false, message: err.message });
      }

      const user = getCleanUser(foundUser);

      res.status(200).json({
        success: true,
        user,
        token
      });
    });
  });
});

module.exports = router;

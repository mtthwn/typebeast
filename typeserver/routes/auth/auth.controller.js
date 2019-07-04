const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const User = require('./../../db/model/User');
const Car = require('./../../db/model/Car');
const { generateToken, getCleanUser } = require('./../../utils/auth');

module.exports = {
  index: (req, res) => {
    res.status(200).json({
      message: 'welcome to the auth routes'
    });
  },
  register: async (req, res) => {
    const username = req.body.username.trim();
    const email = req.body.email.trim();
    const password = bcrypt.hashSync(req.body.password.trim(), 10);

    await User({
      username,
      email,
      password,
    })
      .save()
      .then(async savedUser => {
        const token = generateToken(savedUser);
        const user = getCleanUser(savedUser);

        res.status(200).json({ success: true, user, token });
      })
      .catch(e => {
        res.status(401).json({ success: false, message: e.message });
      });
  },
  login: (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
      .exec()
      .then(foundUser => {
        if (!foundUser) {
          return res.status(404).json({
            success: false,
            message: 'Incorrect username or password'
          });
        }

        bcrypt.compare(password, foundUser.password, (err, valid) => {
          if (!valid) {
            return res.status(401).json({
              success: false,
              message: 'Incorrect username or password'
            });
          }

          const token = generateToken(foundUser);
          const user = getCleanUser(foundUser);

          res.status(200).json({ success: true, token, user });
        });
      })
      .catch(e => {
        res.status(401).json({ success: false, message: e.message });
      });
  },
  checkToken: async (req, res) => {
    const { token } = req.query;

    if (!token) {
      return res.json({
        success: false,
        message: 'No token was sent'
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, tokenUser) => {
      if (err) {
        return res.json({ success: false, message: err.message });
      }

      User.findById({ _id: tokenUser._id})
        .populate('currentCar')
        .then(foundUser => {

          // if (foundUser === null) {
          //   return res.json({ success: false, user: {
          //     username: 'Guest',
          //     email: ''
          //   }})
          // }
          const user = getCleanUser(foundUser);

          res.status(200).json({
            success: true,
            user,
            token
          });
        })
        .catch(e => console.log(e));
    });
  }
};

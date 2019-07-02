const express = require('express');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token = req.headers['authorization'];

  if (!token) {
    return next();
  }

  token = token.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Please login or register before continuing'
      });
    }

    req.user = user;

    next();
  });
};

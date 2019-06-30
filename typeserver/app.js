require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
/* eslint-disable */
const path = require('path');
/* eslint-enable */
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const { mongoose } = require('./db/config');

const middleware = require('./middleware');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/user/');
const authRoutes = require('./routes/auth/');
const quoteRoutes = require('./routes/quote');
const carRoutes = require('./routes/car');
// const gamesRouter = require('./routes/game/index');

const app = express();

app.use(middleware);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
// app.use('/api/users', usersRouter);
app.use('/api/auth', authRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/cars', carRoutes);
app.use('/api', indexRouter);
// app.use('/api/games', gamesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

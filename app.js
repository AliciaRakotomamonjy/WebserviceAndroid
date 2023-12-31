var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/indexRoute');
var usersRouter = require('./routes/usersRoute');
var categorieRouter = require('./routes/categorieRoute');
var deviceTokenRouter = require('./routes/deviceTokenRoute');
var notificationRouter = require('./routes/notificationRoute');
var articleRouter = require('./routes/articleRoute');
var avisRouter = require('./routes/avisRoute');
var favoriRouter = require('./routes/favoriRoute');
var app = express();
require('./dbconnection/db');
require('./notification/notificationAuth');
app.disable('etag');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/categories', categorieRouter);
app.use('/api/deviceTokens', deviceTokenRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/articles', articleRouter);
app.use('/api/avis', avisRouter);
app.use('/api/favoris', favoriRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
});

module.exports = app;

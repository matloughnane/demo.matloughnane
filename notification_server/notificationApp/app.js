var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');
// require('./models/tokens');

var routes = require('./routes/index');
var users = require('./routes/users');

  mongoose.connect('mongodb://localhost/notificationTokens_test/');

  mongoose.connection.on('error', errorHandler);

  var pushAssociationSchema = new db.Schema({
      user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
      },
      type: {
          type: 'String',
          required: true,
          lowercase: true
      },
      token: {
          type: 'String',
          required: true
      }
  });

  // I must ensure uniqueness accross the two properties because two users can have the same token (ex: in apn, 1 token === 1 device)
  pushAssociationSchema.index({ user: 1, token: 1 }, { unique: true });

  PushAssociation = db.model('PushAssociation', pushAssociationSchema);


var errorHandler = function(error) {
    console.error('ERROR: ' + error);
};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
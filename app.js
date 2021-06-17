require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// include reference to handlebars code
const hbs = require('hbs');
const passport = require('passport');
// set up database connection
require('./app_api/models/db');

require('./app_api/config/passport');

// set up routers
var indexRouter = require('./app_server/routes/index_router');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel_router');
var aboutRouter = require('./app_server/routes/about_router');
var contactRouter = require('./app_server/routes/contact_router');
var mealsRouter = require('./app_server/routes/meals_router');
var newsRouter = require('./app_server/routes/news_router');
var roomsRouter = require('./app_server/routes/rooms_router');
const apiRouter = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// allow CORS
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requesteed-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
})

// use routers for specific URLs
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/rooms', roomsRouter);
app.use('/api', apiRouter);

// catch unauthorized error and create 401
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res
      .status(401)
      .json({ "message": err.name + ": " + err.message});
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

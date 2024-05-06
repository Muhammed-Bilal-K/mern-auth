var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

require('./config/database');
require('dotenv').config();

var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, OPTIONS, PATCH, PUT",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(express.static(path.join(__dirname, '/userclient/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'userclient', 'dist', 'index.html'));
});

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // const statuscode = err.
  res.status(err.status || 500);
});

module.exports = app;

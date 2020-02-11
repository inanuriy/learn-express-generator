require("dotenv").config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/');
const cors = require('cors');
var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/todos', require("./routes/todos"))
app.use('/users', require('./routes/users'))
app.use('/assets', express.static("assets"))


module.exports = app;

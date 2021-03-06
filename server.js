'use strict';
var PORT = process.env.PORT || 3005; 
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

// mongoose setup
var mongoURL = process.env.MONGOLAB_URI || 'mongodb://localhost/awesomebookmarks';
var mongoose = require('mongoose');
mongoose.connect(mongoURL, function(err){
  console.log('Connected to MongoDB: ', mongoURL);
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', require('./routes/api'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(PORT, function(){
  console.log("runningo on port", PORT)
})

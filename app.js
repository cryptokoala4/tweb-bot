var express        = require('express');
var path           = require('path');
var debug          = require("debug");
var logger         = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var connect        = require('connect');
var methodOverride = require('method-override');
var moongoose      = require('mongoose');
// var Restaurant     = require("./models/restaurant");
// var District       = require("./models/district");

var app            = express();
var router         = express.Router();
var port           = process.env.PORT || 3000;

var mongoUri       =  process.env.MONGOLAB_URI || 'mongodb://localhost/tinder-bot';
moongoose.connect(mongoUri);


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
app.engine('.html', require('ejs').renderFile);

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var routes = require('./config/routes');
app.use(routes);


// app.use('/api/tindee', router); //namespace
app.listen(process.env.PORT || 3000 );
console.log('i...am....ALIIIVEEEEEEeeeeeee........not.');


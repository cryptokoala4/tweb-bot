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
var session      = require('express-session');
var passport     = require('passport');
var flash        = require('connect-flash');
var cookieParser = require('cookie-parser');
var ejsLayouts   = require("express-ejs-layouts");


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

//sessions
app.use(cookieParser());
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function (req, res, next) {
  global.user = req.user;
  next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
app.engine('.html', require('ejs').renderFile);
app.use(ejsLayouts);

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


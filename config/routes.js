var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require("passport");

// var usersController = require('../controllers/users');
// var staticsController = require('../controllers/statics');
var tindeesControllers = require('../controllers/tindees');
var methodOverride = require('method-override');
var app            = express();
app.use(methodOverride('_method'));


router.route('/')
  .get(tindeesControllers.getHome);

router.route('/tindees')
  .get(tindeesControllers.getAll);

router.route('/tindees')
  .post(tindeesControllers.postTindee);

router.route('/tindees/:id')
  .delete(tindeesControllers.deleteTindee);


module.exports = router;



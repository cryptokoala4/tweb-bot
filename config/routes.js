var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var tindeesControllers = require('../controllers/tindees');
var methodOverride = require('method-override');
var app            = express();
app.use(methodOverride('_method'));

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

router.route('/')
  .get(tindeesControllers.getHome);

router.route("/tindees")
  .get(authenticatedUser, tindeesControllers.getAll);

router.route('/tindees')
  .post(tindeesControllers.postTindee);

router.route('/tindees/:id')
  .delete(tindeesControllers.deleteTindee);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

module.exports = router;
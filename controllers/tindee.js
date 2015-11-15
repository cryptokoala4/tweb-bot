var express    = require('express'),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// var Restaurant = require("../models/restaurant");

//homepage
router.get('/', function(req, res){
      res.render('main.html');
    });

router.get("/tindee", function(req, res){
      res.render('tindee/index');
    });

module.exports = router;

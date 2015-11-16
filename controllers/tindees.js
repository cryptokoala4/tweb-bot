var express    = require('express'),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var Tindee = require("../models/tindee");

//homepage
router.get('/', function(req, res){
      res.render('main.html');
    });

router.get("/tindees", function(req, res){
    Tindee.find({}, function (err, tindees) {
      res.render('tindees/index', { tindees: tindees });
    });
  });

router.post("/tindees", function(req, res){
  console.log('tindee CREATE');
  Tindee.create(req.body.tindee, function (err, tindee) {
    if (err){
      res.send("something wrong happened"+ err)
    } else {
      res.redirect('/tindees');
    }
  });
})

router.delete('/tindees/:id', function (req, res) {
  console.log('hit the delete method');
  Tindee.findById(req.params.id, function (err, tindee){
    if (err) res.send(err)

    tindee.remove(function(err){
      if (err) res.send(err)

      res.redirect('/tindees');
    })
  })
});


module.exports = router;

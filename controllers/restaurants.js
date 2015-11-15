var express    = require('express'),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// var Restaurant = require("../models/restaurant");

//homepage
router.get('/', function(req, res){
      res.render('main.html');
    });

router.get("/restaurants", function(req, res){
    Restaurant.find({}, function (err, restaurants) {
      res.render('restaurants/index', { restaurants: restaurants });
    });
  });

router.post("/restaurants", function(req, res){
  console.log('restaurant CREATE');
  Restaurant.create(req.body.restaurant, function (err, restaurant) {
    if (err){
      res.send("something wrong happened"+ err)
    } else {
      res.redirect('/restaurants');
    }
  });
})

// router.put("/restaurants/:id"), function(req, res){
//   Restaurant.findByIdAndUpdate(req.params.id), function (err, restaurant){
//     if (err){
//       res.send("we f'ed up m8" +err)
//     } else {
//       res.redirect('/restaurants');
//     }
//   }
// }

router.delete('/restaurants/:id', function (req, res) {
  console.log('hit the delete method');
  Restaurant.findById(req.params.id, function(err, restaurant){
    if (err) res.send(err)

    restaurant.remove(function(err){
      if (err) res.send(err)

      res.redirect('/restaurants');
    })
  })
});

module.exports = router;

var Tindee = require("../models/tindee");

//homepage
function getHome(request, response) {
  response.render('main');
};

function getAll(request, response) {
  Tindee.find({}, function (err, tindees) {
    response.render('index', { tindees: tindees });
  });
};

function postTindee(request, response) {
  Tindee.create(request.body.tindee, function (err, tindee) {
    if (err){
      response.send("something wrong happened"+ err)
    } else {
      response.redirect('/tindees');
    }
  });
}

function deleteTindee(request, response) {
  Tindee.findById(request.params.id, function (err, tindee){
    if (err) response.send(err)
    tindee.remove(function(err){
      if (err) response.send(err)
      response.redirect('/tindees');
    })
  })
};



module.exports = {
  getHome: getHome,
  getAll: getAll,
  postTindee: postTindee,
  deleteTindee: deleteTindee
  // getSignup: getSignup,
  // postSignup: postSignup,
  // getLogout: getLogout,
  // secret: secret
};

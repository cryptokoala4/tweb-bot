var mongoose = require('mongoose');

var TindeeSchema = new mongoose.Schema({
  name:                { type: String },
  profile_photo:       { type: String },
  gender:              { type: String },
  age:                 { type: Number },
  email:               { type: String },
  comment:             { type: String },
  created_at:          { type: Date, default: Date.now }
});

var Tindee = mongoose.model('Tindee', TindeeSchema);

module.exports = Tindee;

// var tindee1 = new Tindee({
//   name: "Fer Martin",
//   profile_photo: "https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/3042/thumb_1213b7d.jpg",
//   gender: "Male",
//   age: 25,
//   email: "fer@ga.co",
//   comment: "Sign me up!",
//   created_at: new Date()
// });

// tindee1.save(function(err) {
//   if (err) console.log(err);
//   console.log('Tindee created!');
// });

// var tindee2 = new Tindee ({
//   name: "Charlotte Kwan",
//   profile_photo: "https://avatars0.githubusercontent.com/u/14211437?v=3&s=460",
//   gender: "Female",
//   age: 40,
//   email: "charlotte@ieat.alot",
//   comment: "Gorgeous men all day err day!",
//   created_at: new Date()
// })

// tindee2.save(function(err) {
//   if (err) console.log(err);
//   console.log('Tindee created!');
// });
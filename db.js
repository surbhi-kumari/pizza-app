const mongoose = require('mongoose');

var mongoURl =
  'mongodb+srv://surbhi:surbhimongoose@cluster0.reing.mongodb.net/mern-pizza';

mongoose.connect(mongoURl);
var db = mongoose.connection;
db.on('connected', () => {
  console.log('Mongo DB Connection successfull');
});

db.on('error', () => {
  console.log('Mongo DB Connection Failed');
});

module.exports = mongoose;

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HouseSchema = new Schema({
  name: String,
  description: String,
  number: String,
  residents: String,
  diet: String,
  email: String,
  address: String,
  bonus: String,
  link:String,
  houseId: String,
  user: Object
});

module.exports = mongoose.model('House', HouseSchema);
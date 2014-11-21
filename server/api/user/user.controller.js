'use strict';

var User = require('./user.model');
var House = require('./../house/house.model');
var passport = require('passport');
var _ = require('lodash');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.send(500, err);
    res.json(200, users);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  var newHouse = new House();
  var newHouse = {
    name: "",
    description: "",
    number: "",
    residents: "",
    diet: "",
    email: "",
    bonus: ""
  };
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.houseId = "a"+Math.random()*100000000+"hash";
  newUser.house = newHouse;
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(user.profile);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Change HouseId
 */
// exports.changeHouseId = function(req, res, next) {
//   var userId = req.user.houseId;
//   var oldId = String(req.body.oldId);
//   var newId = String(req.body.newId);

//   User.findById(userId, function (err, user) {
//     user.houseId = newId;
//     user.save(function(err) {
//       if (err) return validationError(res, err);
//       res.send(200);
//     });

//   });
// };

/**
 * Change House
 */
// exports.changeHouse = function(req, res, next) {
//   var userId = req.user.house;
//   var oldId = String(req.body.oldId);
//   var newId = String(req.body.newId);

//   User.findById(userId, function (err, user) {
//     user.house = newId;
//     user.save(function(err) {
//       if (err) return validationError(res, err);
//       res.send(200);
//     });

//   });
// };



/**
 * Updates an existing user in the DB.
 */
exports.update = function(req, res) {
  // console.log('YOYO',req,res)
  if(req.body._id) { delete req.body._id; }
  User.findById(req.params.id, function (err, user) {
    if (err) { return handleError(res, err); }
    if(!user) { return res.send(404); }
    var updated = _.merge(user, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, user);
    });
  });
};


/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    res.json(user);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};

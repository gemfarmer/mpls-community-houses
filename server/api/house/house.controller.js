'use strict';

var _ = require('lodash');
var House = require('./house.model');

// Get list of houses
exports.index = function(req, res) {
  House.find(function (err, houses) {
    if(err) { return handleError(res, err); }
    return res.json(200, houses);
  });
};

// Get a single house
exports.show = function(req, res) {
  House.findById(req.params.id, function (err, house) {
    if(err) { return handleError(res, err); }
    if(!house) { return res.send(404); }
    return res.json(house);
  });
};

// Creates a new house in the DB.
exports.create = function(req, res) {
  House.create(req.body, function(err, house) {
    if(err) { return handleError(res, err); }
    return res.json(201, house);
  });
};

// Updates an existing house in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  House.findById(req.params.id, function (err, house) {
    if (err) { return handleError(res, err); }
    if(!house) { return res.send(404); }
    var updated = _.merge(house, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, house);
    });
  });
};

// Deletes a house from the DB.
exports.destroy = function(req, res) {
  House.findById(req.params.id, function (err, house) {
    if(err) { return handleError(res, err); }
    if(!house) { return res.send(404); }
    house.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
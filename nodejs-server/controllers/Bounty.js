'use strict';

var utils = require('../utils/writer.js');
var Bounty = require('../service/BountyService');

module.exports.getBounties = function getBounties (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Bounty.getBounties(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.register = function register (req, res, next) {
  var bounty = req.swagger.params['bounty'].value;
  Bounty.register(bounty)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

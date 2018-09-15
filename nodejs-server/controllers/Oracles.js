'use strict';

var utils = require('../utils/writer.js');
var Oracles = require('../service/OraclesService');

module.exports.getOracleSummary = function getOracleSummary (req, res, next) {
  Oracles.getOracleSummary()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSwitchState = function getSwitchState (req, res, next) {
  var bountyId = req.swagger.params['bountyId'].value;
  Oracles.getSwitchState(bountyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setDimmer = function setDimmer (req, res, next) {
  var bountyId = req.swagger.params['bountyId'].value;
  var value = req.swagger.params['value'].value;
  Oracles.setDimmer(bountyId,value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setDimmerTimer = function setDimmerTimer (req, res, next) {
  var bountyId = req.swagger.params['bountyId'].value;
  var value = req.swagger.params['value'].value;
  var timeunit = req.swagger.params['timeunit'].value;
  var units = req.swagger.params['units'].value;
  Oracles.setDimmerTimer(bountyId,value,timeunit,units)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setSwitch = function setSwitch (req, res, next) {
  var bountyId = req.swagger.params['bountyId'].value;
  var value = req.swagger.params['value'].value;
  Oracles.setSwitch(bountyId,value)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

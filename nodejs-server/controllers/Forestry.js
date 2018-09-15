'use strict';

var utils = require('../utils/writer.js');
var Forestry = require('../service/ForestryService');

module.exports.carbonOffsetSummary = function carbonOffsetSummary (req, res, next) {
  Forestry.carbonOffsetSummary()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCarbonState = function getCarbonState (req, res, next) {
  var zoneId = req.swagger.params['zoneId'].value;
  Forestry.getCarbonState(zoneId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOracle = function getOracle (req, res, next) {
  var days = req.swagger.params['days'].value;
  Forestry.getOracle(days)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getZoneCarbonOffset = function getZoneCarbonOffset (req, res, next) {
  var zoneId = req.swagger.params['zoneId'].value;
  Forestry.getZoneCarbonOffset(zoneId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setCarbonState = function setCarbonState (req, res, next) {
  var zoneId = req.swagger.params['zoneId'].value;
  var state = req.swagger.params['state'].value;
  Forestry.setCarbonState(zoneId,state)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

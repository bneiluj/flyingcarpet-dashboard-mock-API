'use strict';


/**
 *
 * returns OracleSummary
 **/
exports.getOracleSummary = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatus" : [ {
    "level" : 6,
    "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id"
  }, {
    "level" : 6,
    "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id"
  } ],
  "zones" : [ {
    "bountyId" : 0,
    "zone" : "zone",
    "bountyType" : "dimmer",
    "name" : "name",
    "id" : "id"
  }, {
    "bountyId" : 0,
    "zone" : "zone",
    "bountyType" : "dimmer",
    "name" : "name",
    "id" : "id"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * bountyId String 
 * returns bountyState
 **/
exports.getSwitchState = function(bountyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "level" : 0,
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * bountyId String 
 * value Integer 
 * returns ApiResponse
 **/
exports.setDimmer = function(bountyId,value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "message" : "everything is ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * sets a dimmer to a specific value on a timer
 *
 * bountyId String 
 * value Integer 
 * timeunit Integer 
 * units String  (optional)
 * returns ApiResponse
 **/
exports.setDimmerTimer = function(bountyId,value,timeunit,units) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "message" : "everything is ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * bountyId String 
 * value String 
 * returns ApiResponse
 **/
exports.setSwitch = function(bountyId,value) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "message" : "everything is ok"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


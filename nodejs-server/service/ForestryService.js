'use strict';


/**
 *
 * returns CarbonOffsetSummary
 **/
exports.carbonOffsetSummary = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zoneStatus" : [ {
    "name" : "name",
    "id" : "id",
    "units" : "fahrenheit",
    "value" : 5.962133916683182,
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "name" : "name",
    "id" : "id",
    "units" : "fahrenheit",
    "value" : 5.962133916683182,
    "timestamp" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "zones" : [ {
    "inputPosition" : 6,
    "outputPosition" : 1,
    "zone" : "zone",
    "name" : "name",
    "id" : 0
  }, {
    "inputPosition" : 6,
    "outputPosition" : 1,
    "zone" : "zone",
    "name" : "name",
    "id" : 0
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
 * gets the state of the Carbon
 *
 * zoneId String 
 * returns CarbonState
 **/
exports.getCarbonState = function(zoneId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "state" : "state"
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
 * days Integer 
 * returns OracleResponse
 **/
exports.getOracle = function(days) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Zone" : {
    "country" : "country",
    "name" : "name",
    "lon" : 1.4658129805029452,
    "id" : 0,
    "lat" : 6.027456183070403
  },
  "values" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "weather" : {
      "summary" : "summary",
      "icon" : "icon",
      "description" : "description"
    },
    "humidity" : 5,
    "CarbonOffset" : {
      "high" : 3.616076749251911,
      "low" : 9.301444243932576,
      "night" : 1.2315135367772556,
      "evening" : 7.386281948385884,
      "day" : 4.145608029883936,
      "morning" : 2.027123023002322
    },
    "pressure" : 5.962133916683182,
    "clouds" : 7,
    "windSpeed" : 2.3021358869347655
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "weather" : {
      "summary" : "summary",
      "icon" : "icon",
      "description" : "description"
    },
    "humidity" : 5,
    "CarbonOffset" : {
      "high" : 3.616076749251911,
      "low" : 9.301444243932576,
      "night" : 1.2315135367772556,
      "evening" : 7.386281948385884,
      "day" : 4.145608029883936,
      "morning" : 2.027123023002322
    },
    "pressure" : 5.962133916683182,
    "clouds" : 7,
    "windSpeed" : 2.3021358869347655
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
 * zoneId String 
 * returns CarbonOffsetZoneStatus
 **/
exports.getZoneCarbonOffset = function(zoneId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id",
  "units" : "fahrenheit",
  "value" : 5.962133916683182,
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * turns the Carbon on or off
 *
 * zoneId String 
 * state String 
 * returns ApiResponse
 **/
exports.setCarbonState = function(zoneId,state) {
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


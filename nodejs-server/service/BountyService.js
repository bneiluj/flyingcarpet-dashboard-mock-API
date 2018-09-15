'use strict';


/**
 * returns all registered bounties
 *
 * skip Integer number of records to skip (optional)
 * limit Integer max number of records to return (optional)
 * returns List
 **/
exports.getBounties = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "http://localhost:8080/bounties", "http://localhost:8080/bounties" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * bounty BountyRegistrationInfo  (optional)
 * no response value expected for this operation
 **/
exports.register = function(bounty) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


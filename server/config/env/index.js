'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('The ' + name + ' environment variable is not set');
  }
  return process.env[name];
}

var all = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 9000
  //TODO: add API keys/secrets/callback URLS here
};

module.exports = _.merge(all, require('./' + process.env.NODE_ENV + '.js') || {});
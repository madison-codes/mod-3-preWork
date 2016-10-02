// 'use strict';

const _ = require('lodash');

const worker = function(item) {
  return _.filter(item, {active: true});
};

module.exports = worker;

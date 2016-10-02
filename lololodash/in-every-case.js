const _ = require('lodash');

const worker = function(list) {
  return _.forEach(list, function(item) {
    if (item.population >= 1 ) { return item.size = 'big'; }
    if (item.population < .5) { return item.size = 'small'; }
    else { return item.size = 'med'; }
  });
};
module.exports = worker;

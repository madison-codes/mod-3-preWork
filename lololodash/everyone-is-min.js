const _ = require('lodash');

const tempType = (item) => {
  const output = {
    hot: [],
    warm: []
  };

  const checkTemp = (item) => {
    return item > 19;
  };

  _.forEach(item, (town, townname) => {
    if(_.every(town, checkTemp)) {
      output.hot.push(townname);
    }
    else if(_.some(town, checkTemp)) {
      output.warm.push(townname);
    }

  });
  return output;
};

module.exports = tempType;

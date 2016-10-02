const _ = require('lodash');

const worker = (arr) => {
  let average,
      underperform,
      overperform;

  arr = _.sortBy(arr, 'income');

  average = _.reduce(arr, (sum, num) =>  {
    return sum + num.income;
  }, 0);

  average = average / arr.length;

  underperform = _.filter(arr, (num) => {
    return num.income <= average;
  });

  overperform = _.filter(arr, (num) => {
    return num.income > average;
  });

  return {
    average: average,
    underperform:underperform,
    overperform: overperform
  };

};

module.exports = worker;

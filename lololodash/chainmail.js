const _ = require('lodash');

const worker = (words) => {
  return _.chain(words)
  .map((indWord) => {
    return indWord + 'Chained';
  })
  .map((indWord) => {
    return indWord.toUpperCase();
  })
  .sortBy()
  .value();
};

module.exports = worker;

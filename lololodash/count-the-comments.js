const _ = require('lodash');

const worker = (arr) => {
  return _.chain(arr)
    .groupBy('username')
    .map((user, userName) => {
      return { username: userName, comment_count: _.size(user)};
    })
    .sortBy((counted) => {
    return -counted['comment_count'];
    });
  };
    // return _.sortBy(counted, 'comment_count').reverse();
module.exports = worker;

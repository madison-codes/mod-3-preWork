const _ = require('lodash');

const worker = (arr) => {

  let template = 'Hello <%= name %> (logins: <%= login.length %>)';

  return _.template(template)(arr);
};

module.exports = worker;

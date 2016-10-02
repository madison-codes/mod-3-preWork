'use strict';

var promise = first();
var secondPromise = promise.then(function(val) {
  return second(val);
});

secondPromise.then(console.log);

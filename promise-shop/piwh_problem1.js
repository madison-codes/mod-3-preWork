//
// function message() {
//   console.log('TIMED OUT!');
// }
//
// setTimeout(message,300);
// 
// 'use strict';
//
// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(function () {
//     fulfill('FULFILLED!');
//   }, 300);
// });
//
// promise.then(console.log);
//
// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(function () {
//     reject('REJECTED!');
//   }, 300);
// });
//
// promise.then(null, console.log);
//
// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(function () {
//     fulfill('I FIRED!');
//   }, 300);
// });
//
// function onRejected() {
//   console.log('I DID NOT FIRE');
// }
//
// promise.then(console.log, onRejected());
//
// //
// var promise = new Promise(function(fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });
//
// promise.then(console.log);
//
// console.log('MAIN PROGRAM');

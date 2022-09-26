const assertEqual = require('./assertEqual');

const counterLetters = function (string) {
  const obj = {};
  for (let st of string) {
    if (obj[st]) {
      obj[st]+= 1;
    }
    else {
      obj[st] = 1;
    }

  }
  return obj
}
module.exports = counterLetters;
const assertEqual = require('./assertEqual');

const assertArraysEqual = function (ar1, ar2) {
  if (ar1 === ar2) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} ===  ${ar2}`)
  } else (ar1 !== ar2); {
    console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`)
  }

};

module.exports = assertArraysEqual;
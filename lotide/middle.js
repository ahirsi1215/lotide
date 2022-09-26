const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array){
  let middleHolder = (Math.floor((array.length) / 2) - 1)
  let middleHolder2 = Math.floor((array.length / 2) )
  let midFinal = [];
  if (array.length <= 2){
    return midFinal
  }
  if (array.length % 2 === 0){
    midFinal.push(array[middleHolder], array[middleHolder2])
  } 
  else if (array.length % 2 === 1){
    midFinal.push(middleHolder2 + 1)
  }
  return midFinal;
  }

module.exports = middle;
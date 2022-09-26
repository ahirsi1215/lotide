const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToremove){
  let newArray = []
  for(let index in source){
    if(!itemsToremove.includes(source[index])){
      newArray.push(source[index])
    }
  }
  return newArray
  
   }   
  
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

module.exports = without;
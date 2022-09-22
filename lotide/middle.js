// TEST/ASSERTION FUNCTIONS// TEST/ASSERTION FUNCTIONS
const eqArrays = function(ar1, ar2){
  for (let i = 0; i < ar1.length; i++){
    if (ar1[i] === ar2[i]){
      return true;
     }
     if (ar1[i] !== ar2[i]){
      return false
     }
    }
  }
const assertArraysEqual = function (ar1, ar2) {
  if (ar1 === ar2) {
    console.log(`✅✅✅ Assertion Passed: ${ar1} ===  ${ar2}`)
  } else (ar1 !== ar2); {
    console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`)
  }

};
/// actual function

const middle = function(array){
  let middleHolder = Math.floor((array.length) / 2)
  let middleHolder2 = Math.floor((array.length - 1) / 2)
  let midFinal = [];
  if (array.length <= 2){
    return midFinal
  }
  if (array.length % 2 === 0){
    midFinal.push(array[middleHolder2], array[middleHolder])
  } 
  else if (array.length % 2 === 1){
    midFinal.push(middleHolder)
  }
  return midFinal;
  }
// test code
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
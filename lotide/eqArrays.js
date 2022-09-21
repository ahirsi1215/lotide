const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`)
  } else (actual !== expected); {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }

};

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
//tests
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL
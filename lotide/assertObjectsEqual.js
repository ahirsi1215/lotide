const eqArrays = function(ar1, ar2) {
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] === ar2[i]) {
      return true;
    }
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
};

const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  } else {
    for (const o of obj1) {
      if (Array.isArray(object1[o]) && Array.isArray(object2[o])) {
        return eqArrays(object1[o], object2[o]);
      } else if (object1[o] !== object2[o])
        return false;

    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } else  {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  //obj are equal when they have the same number of keys
  // same values in each key
  let obj1 = Object.keys(object1)
  let obj2 = Object.keys(object2)
  if (obj1.length !== obj2.length){
    return false
  }
  else {
    for(const o of obj1) {
    if (Array.isArray(object1[o]) && Array.isArray(object2[o])){  
    return eqArrays(object1[o], object2[o])
  } 
  else if(object1[o] !== object2[o])
  return false

  }
  }
  return true
}

module.exports = eqObjects;
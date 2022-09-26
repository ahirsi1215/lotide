const assertEqual = require('./assertEqual');

const findKeyByValue = function(key, value){
  let k = Object.keys(key)
 for(const k1 of k){
  if ([k][k1] === value)
  return k
 }
}

const bestTVShowsByGenre = { 
  sci_fi: "The 100",
  action: "The Witcher",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Witcher"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The 100"), "sci_fi");

module.exports = findKeyByValue;
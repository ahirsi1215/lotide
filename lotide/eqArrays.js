const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;
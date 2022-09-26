const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`)
  } else (actual !== expected); {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }

};
const countLetters = function (string) {
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
console.log(countLetters('lighthouse in the house'))
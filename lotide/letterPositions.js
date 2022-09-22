const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    let everyLetter = sentence[i];
    if (!results[everyLetter]){
      results[everyLetter] = [i];
    } else {
      results[everyLetter].push(i);
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"))

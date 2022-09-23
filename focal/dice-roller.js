const diceRoller = function (numberOfRolls) {
  let result = []
  for(i = 0; i < numberOfRolls; i++){
    const dice = 1 + Math.floor(Math.random() * 6)
    result.push(dice)
  }
  return result
}
const numberRolls = process.argv[2]
console.log(diceRoller(numberRolls))
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
console.log("List A:");
var i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i ++;
}
// Write a for loop that prints out the contents of ingredients:
console.log('\nList 2 - ');

for (var k = 0; k < ingredients.length; k++) {
  console.log(ingredients[k]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\nIngredients backwards - ');
for (var j = ingredients.length - 1; j >=0; j--) {
  console.log(ingredients[j]);
}

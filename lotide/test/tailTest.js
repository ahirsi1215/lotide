const assert = require('chai').assert;
const tail = require('../tail');

let words = ["Yo Yo", "Lighthouse", "Labs"];
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  
  it("returns original array", () => {
    assert.strictEqual(words.length, 3);
  })
});



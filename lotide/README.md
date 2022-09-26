# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ahirsi1215/lotide`

**Require it:**

`const _ = require('@ahirsi1215/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: compares two arrays and asserts them if they are equal
* `function2(assertEqual)`: asserts a function behaviour prints a pass or fail
* `function3(assertObjectsEqual)`: compares two objects and asserts them if they are equal
* `function4(counterLetters)`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence
* `function5(countOnly)`: takes in a collection of items and return counts for a specific subset of those items
* `function6(eqArrays)`: compares two arrays
* `function7(eqObjects)`: returns true or false between two objects
* `function8(findKey)`: searches for the key
* `function9(findKeyByValue)`: searches for a key on an object where its value matches a given value
* `function10(head)`: retrieves first element of the array
* `function11(index)`: the index of the project
* `function12(letterPositions)`: return all the indices (zero-based positions) in the string where each character is found.
* `function13(map)`: method creates a new array populated with the results of calling a provided function on every element in the calling array
* `function14(middle)`: returns the middle elements of an array
* `function15(tail)`: retrieves every element except head
* `function16(takeUntil)`: returns a slice of the array with elements taken from the beginning
* `function17(without)`: creates an array removing values we specify 

## Version
* 1.0.0
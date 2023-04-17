const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  
  let output = Array.from({length: arr.length})
  let sortedArray = arr.filter( function (item) { return !(item === -1 )}).sort(function (a, b) {return a - b})
  let x = 0;

  for (elem in output) {
    if (arr[elem] === -1) {output[elem] = -1}
  } 

  for (elem in output) {
    if (output[elem] === undefined) {output[elem] = sortedArray[x]; x+=1}
  } 

  return output;

}

module.exports = {
  sortByHeight
};

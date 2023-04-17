const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let maxN = 0;
  let nArray = n.toString().split('');
  console.log(nArray)

  for (i=0; i < nArray.length; i++) {

    nDel = nArray.slice(0, i).concat(nArray.slice(i+1)).join('');
    if (nDel > maxN) {maxN = nDel};

  }

  return parseInt(maxN);

}

module.exports = {
  deleteDigit
};

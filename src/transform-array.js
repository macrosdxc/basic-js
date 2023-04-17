const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {throw new Error ("'arr' parameter must be an instance of the Array!")}

  else {

  output = [...arr];

  for (elem=0; elem < output.length; elem++) {

    if (output[elem] === '--double-next') { output[elem] = output[elem + 1]}
    if (output[elem] === '--double-prev') { output[elem] = output[elem - 1]}
    if (output[elem] === '--discard-prev' && elem === 0) { output.splice(0, 1); }
    if (output[elem] === '--discard-prev') { delete output[elem]; delete output[elem-1];  }
    if (output[elem] === '--discard-next') { delete output[elem]; delete output[elem+1];  }

  }

  output = output.filter (function ( elem2 ) { return elem2 !== undefined; } )

  console.log(output);
  return output;
}
      }

module.exports = {
  transform
};

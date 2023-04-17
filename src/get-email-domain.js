const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  
  let atContainer;
  let emailArray = email.split('');
  for (elem in emailArray) {
    if ( emailArray[elem] === '@') {atContainer = Number(elem) + 1;} 
  }

  return ( emailArray.slice(atContainer).join('') )
  
}

module.exports = {
  getEmailDomain
};

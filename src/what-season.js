const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!(date instanceof Date && !isNaN(date))) {throw new Error ("Invalid date!")}

  else

  {
    
    switch (date.getMonth()) {

      case 0: case 1: case 11: console.log('winter'); return ('winter');
      case 2: case 3: case 4: console.log('spring'); return('spring');
      case 5: case 6: case 7: console.log('summer'); return('summer');
      case 8: case 9: case 10: console.log('fall'); return('fall');

    }

  }

}

getSeason (new Date(1900, 52, 22, 23, 45, 11, 500))

module.exports = {
  getSeason
};

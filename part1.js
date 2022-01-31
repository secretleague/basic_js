/**
 * return square of a number ex: square(2) => 4
 * return 0 if no value is undefined
 */
function square(num) {
  if (num === undefined) return 0;
   return num * num;
}


module.exports = {
  square
}


/**
 * accepts object as param { height: num, width: num }
 * returns height * width of this object, ex: calSquare({ width: 2, height: 3 }) => 6
 * return 0 if no value is given
 */


function calcSquare(obj) {
  if (typeof obj !== 'object' || !(obj.hasOwnProperty('height') && obj.hasOwnProperty('width'))) return 0;
  return obj.height * obj.width;  
}
console.log(calcSquare({height: 3, width: 2}))

/**
 * accepts string as name, and should return a string "Hello, " and a name value
 * ex: greetings("Ivan") => "Hello, Ivan"
 * return empty string if no value is given
 */
function greetings(name) {
  if (!typeof name === 'string') {
    return '';
  }
  return name ? `Hello, ${name}` : '';
}

/**
 * accepts array of numbers and should return the sum of all numbers
 * ex: sum([1,2,3]) => 6
 * return 0 if no value is given
 */
function sum(arr) {
  if(!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  return arr.reduce((prev, curr) => prev + curr);
}

 module.exports = {
   calcSquare,
   greetings,
   sum
 }
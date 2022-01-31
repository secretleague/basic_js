/**
 * accepts object as param { height: num, width: num }
 * returns height * width of this object, ex: calSquare({ width: 2, height: 3 }) => 6
 * return 0 if no value is given
 */
function calcSquare (obj) {
  if (typeof obj !== 'object') return 0;
  return obj.width * obj.height 
}
/**
 * accepts string as name, and should return a string "Hello, " and a name value
 * ex: greetings("Ivan") => "Hello, Ivan"
 * return empty string if no value is give
 */
function greetings(name) {
  if (!name) return '';
  return "Hello," + name;
}

/**
 * accepts array of numbers and should return the sum of all numbers
 * ex: sum([1,2,3]) => 6
 * return 0 if no value is given
 */
function sum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((sum, num) => sum + num, 0)
}

 module.exports = {
   calcSquare,
   greetings,
   sum
 }
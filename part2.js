/**
 * accepts object as param { height: num, width: num }
 * returns height * width of this object, ex: calSquare({ width: 2, height: 3 }) => 6
 * return 0 if no value is given
 */
 
 let obj = { 
  height: 10, 
  width: 3,
}
function calcSquare(obj) { 
  
  if (obj.height == undefined || obj.width == undefined){
    return 0;
  }  else {
  return obj.height * obj.width;
  }
}
console.log(calcSquare(obj));

/**
 * accepts string as name, and should return a string "Hello, " and a name value
 * ex: greetings("Ivan") => "Hello, Ivan"
 * return empty string if no value is given
 */


function greetings(name) {
  if (name == undefined){
    return ("");
  } else {
    return ("Hello, " + name); 
  } 
}

console.log(greetings("Ivan"))

/**
 * accepts array of numbers and should return the sum of all numbers
 * ex: sum([1,2,3]) => 6
 * return 0 if no value is given
 */
// function sum(arr) {
// }

module.exports = {
   calcSquare,
   greetings,
   sum
 }
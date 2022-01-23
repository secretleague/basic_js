/**
 * return square of a number ex: square(2) => 4
 * return 0 if no value is given
 */



 function square(num){
   if (typeof num !== 'number') return 0;
  return num * num;
}
console.log(square(2));


module.exports = {
  square
}
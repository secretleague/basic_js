  // return square of a number ex: square(2) => 4
  // return 0 if no value is given
 
function square(num) {
  if (num === undefined){
    return 0;
  } else {
    return Math.pow(num, 2); 
  }
}



module.exports = {
  square
}



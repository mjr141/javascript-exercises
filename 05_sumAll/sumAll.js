const sumAll = function(int1, int2) {
  let sum = 0;
  
  for (arg of arguments) {
    if (arg < 0 || !Number.isInteger(arg)) {
      return 'ERROR';
    }
  }

  // swap the variables if first argument is larger, so we can iterate in loop properly
  if (int1 > int2) {
    let tmp = int1; // NO FANCY TRICKS
    int1 = int2;
    int2 = tmp;
  }

  for (x = int1; x <= int2; x++) {
    sum += x;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;

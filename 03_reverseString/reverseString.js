const reverseString = function(stringToReverse) {
  let newString = '';
  const negativeLength = stringToReverse.length * -1; // we use this as we count *backwards* using a negative index
  for (x = -1; x >= negativeLength; x--) {
    newString += stringToReverse.at(x); // .at method can use a negative index to count from the end of the string
  }
  return newString;
}

// Do not edit below this line
module.exports = reverseString;
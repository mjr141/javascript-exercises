const repeatString = function(stringToRepeat, numberOfRepeats) {
  if (numberOfRepeats < 0) {
    return 'ERROR';
  } else {
    let completeString = '';
    for (x = 0; x < numberOfRepeats; x++) {
      completeString = completeString + stringToRepeat;
    }
    return completeString;
  }
};

// Do not edit below this line
module.exports = repeatString;

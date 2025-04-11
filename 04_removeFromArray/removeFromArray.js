const removeFromArray = function(array, ...argsToRemove) {
  for (arg of argsToRemove) {
    while (array.includes(arg)) {
      let position = array.indexOf(arg);
      array = array.toSpliced(position, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

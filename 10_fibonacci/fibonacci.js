const fibonacci = function(sequenceCount) {
  let priorValues = [0,0];
  let nextValue = 1;
  sequenceCount = Number(sequenceCount); // function accepts strings
  sequenceCount = (Math.round(sequenceCount*10))/10; // make sure value is an integer

  if (sequenceCount === 0) {
    return 0;
  } else if (sequenceCount < 0) {
    return 'OOPS'
  } else {
    for (i = 1; i <= sequenceCount; i++) {
      nextValue = priorValues.shift() + nextValue;
      priorValues.push(nextValue);  
    }
  }
  return nextValue;
};

// Do not edit below this line
module.exports = fibonacci;

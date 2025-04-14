const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce ((total, current) => total * current);
};

const power = function(num, exp) {
  return num ** exp;
};

const factorial = function(a) {
  let result = 1;
  for (i = a; i > 1; i--) {
    result *= i;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

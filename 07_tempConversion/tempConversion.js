const convertToCelsius = function(tempC) {
  const factor = 5/9;
  let tempF = ((tempC - 32)*factor);
  tempF = (Math.ceil(tempF*10) / 10); // convert to 1 decimal place
  return tempF;
};

const convertToFahrenheit = function(tempF) {
  const factor = 9/5;
  let tempC = (tempF*factor + 32);
  tempC = (Math.ceil(tempC*10) / 10);
  return tempC;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

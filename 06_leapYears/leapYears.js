const leapYears = function(year) {

  isDivByFour = Number.isInteger(year/4);
  isDivByOneHundred = Number.isInteger(year/100);
  isDivByFourHundred = Number.isInteger(year/400);
 
  if(isDivByFour && (!isDivByOneHundred || (isDivByOneHundred && isDivByFourHundred))) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = leapYears;

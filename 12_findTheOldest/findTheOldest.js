const findTheOldest = function(people) {
  // to get today's year in case people.yearOfDeath is undefined
  const today = new Date();

  // get an array of the ages to examine
  const ages = people.map((person) => 
    (person.yearOfDeath === undefined) ? 
    today.getFullYear() - person.yearOfBirth : 
    person.yearOfDeath - person.yearOfBirth);

  // get the index of the oldest person
  const indexOfOldest = ages.reduce((previousIndex, currentAge, currentIndex, ages) =>
    currentAge > ages[previousIndex] ? currentIndex : previousIndex, 0);

  return people[indexOfOldest];
}

// Do not edit below this line
module.exports = findTheOldest;

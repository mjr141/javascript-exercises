const palindromes = function (string) {
  string = string.replace(/[\W_]/g, "")
    .toLowerCase();
  const stringRev = string.split("")
    .reverse()
    .join("")
  return string === stringRev ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

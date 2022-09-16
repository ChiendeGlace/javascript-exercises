const reverseString = function(string) {
  let newString = [];
  for (let i = string.length; i >= 0; i--) {
    newString.push(string[i])
  }
  return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;

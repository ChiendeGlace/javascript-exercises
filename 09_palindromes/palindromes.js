const palindromes = function (string) {
  const regex = /[a-z]/gi;
  const filtered = string.match(regex);
  let result = [];
  for (let i = filtered.length - 1; i >= 0; i --) {
    result.push(filtered[i]);
  }
  if (result.join('').toLowerCase() === filtered.join('').toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;

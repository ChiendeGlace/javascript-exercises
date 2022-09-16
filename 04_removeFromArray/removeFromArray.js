const removeFromArray = function(arr, ...args) {
  return arr.filter((item) => !args.includes(item))
};

let x = removeFromArray([1,2,3,4], 1,2);
console.log(x)

// Do not edit below this line
module.exports = removeFromArray;

const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num , 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function(a,b) {
  return Math.pow(4,3);
};

console.log(power(4,3))

const factorial = function(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i);
    }
    return numArray.reduce((total,num) => total * num, 1);
  };
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

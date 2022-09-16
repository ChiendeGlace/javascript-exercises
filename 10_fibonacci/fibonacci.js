const fibonacci = function(num) {
  let x = 0;
  let y = 1;
  let z;
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else if (num < 0) {
    return 'OOPS';
  } else {
      for (let i = 1; i < num; i ++) {
        z = x + y;
        x = y;
        y = z;
      }
      return z;
  }
};


// Do not edit below this line
module.exports = fibonacci;

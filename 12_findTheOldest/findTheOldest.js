const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(arr) {
  let currentDate = new Date().getFullYear();
  let ages = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].yearOfDeath === undefined ) {
      arr[i].yearOfDeath = currentDate
    }
  }
  for (let i = 0; i < arr.length; i++) {
    ages.push(arr[i].yearOfDeath - arr[i].yearOfBirth);
  }
  let n = ages.findIndex(age => age === Math.max(...ages));
  return arr[n];
};
let x = findTheOldest(people).name;
console.log(x);
// Do not edit below this line
module.exports = findTheOldest;

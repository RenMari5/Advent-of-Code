import input from "./day1-array";

let str = input;
let num = "0123456789";

// let sum = 0;

let matches = str.match(/\d+/g).map(Number);

if (matches) {
  console.log(matches[0] + ", " + matches[1] + ", " + matches[2]);
}

console.log(matches);

// for (let i = 0; i < myNums.length; i++) {
//   sum += myNums[i];
// }

// console.log(sum);

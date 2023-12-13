import input from "./day1-array";

const str = input;

const firstNumber = str
  .replace(/\d+\.\d+|\d+\b|\d+(?=\w)/g || [])
  .map(function (v) {
    return +v;
  })(/\d+\.\d+|\d+\b|\d+(?=\w)/g || [])
  .map(function (v) {
    return +v;
  })
  .pop();

console.log(firstNumber);

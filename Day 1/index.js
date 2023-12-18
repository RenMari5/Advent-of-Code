const response = await fetch("https://adventofcode.com/2023/day/1/input");
const txt = await response.text();
const inputs = txt.trim().split("\n");

//Part 1
function part1() {
  let sum = 0;

  //iterate over each line
  inputs.forEach((input) => {
    let digit1, digit2;

    //check each char individually
    for (var x of input) {
      //if char is a number and digit1 doesn't yet exist (this will act as "first index of")
      if (!isNaN(x) && !digit1) digit1 = x;

      //if char is a number (this will act as "last index of")
      if (!isNaN(x)) digit2 = x;
    }

    //sum up results per input
    sum += Number(digit1.concat(digit2));
  });
  return sum;
}
console.log(part1());

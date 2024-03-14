const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(" ").map(Number);
    console.log(maximum_occurrence(arr, n));
    rl.close();
  }
});

function maximum_occurrence(arr, n) {
  let obj = {};

  for (let i of arr) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  let max = -1;
  let maxNum = -1;
  for (let key in obj) {
    const count = obj[key];
    const num = parseInt(key);
    if (max < count) {
      max = count;
      maxNum = num;
    }
    if (max == count) {
      if (maxNum > num) {
        maxNum = num;
      }
    }
  }

  return maxNum;
}

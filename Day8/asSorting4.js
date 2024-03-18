const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(" ").map(Number);
  let l = parseInt(input[2]);

  let ans = count(arr, n, l);
  console.log(ans);
});

function count(arr, n, l) {
  // Write your code here
  //step-1 Sorting the array
  let number_of_triplets = 0;
  arr.sort((a, b) => a - b);
  //step-2
  //task-1 selecting x,i.e, Actually creating a pointer to x in arr
  for (let i = 0; i < n - 2; i++) {
    let x = arr[i];
    //task-2 is to select=z
    for (let j = i + 2; j < n; j++) {
      let z = arr[j];
      //implementing the condition for valid triplet
      if (z - x <= l) {
        number_of_triplets += j - i - 1; //indexof(z)-indexof(x)-1
      }
    }
  }
  return number_of_triplets;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let t = Number(input.shift());
  while (t-- > 0) {
    let s = input.shift();
    let n = Number(input.shift());
    let A = [];
    for (let i = 0; i < n; i++) {
      A.push(input.shift());
    }
    console.log(goodStrings(s, A, n));
  }
});

function goodStrings(s, arr, n) {
  let ans = arr.length;
  for (let i = 0; i < arr.length; i++) {
    const currS = new Set(arr[i]);
    const currArr = Array.from(currS);

    for (let j = 0; j < currArr.length; j++) {
      const curr = currArr[j];

      if (!s.includes(curr)) {
        //not my good string
        ans--;
        break;
      }
    }
  }
  return ans;
}

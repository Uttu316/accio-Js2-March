const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    console.log(sum(arr, arr.length));
    readline.close();
  });
});

function sum(arr, n, ans = 0) {
  if (n === 0) {
    return ans;
  }
  return sum(arr, n - 1, arr[n - 1] + ans);
}

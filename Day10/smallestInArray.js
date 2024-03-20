const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    console.log(min(arr, n));
    readline.close();
  });
});

function min(arr, n, ans = Infinity) {
  if (n === 0) {
    return ans;
  }
  ans = Math.min(ans, arr[n - 1]);
  return min(arr, n - 1, ans);
}

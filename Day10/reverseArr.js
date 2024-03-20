const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    print(arr, n);
    readline.close();
  });
});

function print(arr, n) {
  if (n === 0) {
    return;
  }
  // console.log(arr[n-1])
  process.stdout.write(arr[n - 1] + " ");
  print(arr, n - 1);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const arr = a.split(" ").map(Number);
    const result = reverse(arr, N);
    console.log(result ? "Yes" : "No");
    rl.close();
  });
});

function reverse(arr, n) {
  let start = -1;
  let end = -1;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      start = i;
      break;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      end = i;
      break;
    }
  }

  if (start === -1) {
    return true;
  }

  for (let i = start; i < end; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }

  if (end != n - 1) {
    const a = arr[end + 1];
    if (a < arr[start]) {
      return false;
    }
  }
  if (start != 0) {
    const b = arr[start - 1];
    if (b > arr[end]) {
      return false;
    }
  }

  return true;
}

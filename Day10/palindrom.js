const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    console.log(isPalindrome(arr, n));
    readline.close();
  });
});

function isPalindrome(arr, n) {
  let res = palindrom(arr, 0, n - 1);
  if (res === 1) return true;
  return false;
}

function palindrom(arr, i, j) {
  if (i >= j) {
    return 1;
  }
  if (arr[i] === arr[j]) {
    return palindrom(arr, i + 1, j - 1);
  }
  return 0;
}

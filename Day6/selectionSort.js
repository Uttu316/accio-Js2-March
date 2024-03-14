const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let smallest = arr[i];
    let smallestPos = i;
    for (let j = i; j < n; j++) {
      if (smallest > arr[j]) {
        smallest = arr[j];
        smallestPos = j;
      }
    }
    swap(arr, i, smallestPos);
  }
  return arr;
}
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = selectionSort(arr);
    console.log(ans.join(" "));
    readline.close();
  });
});

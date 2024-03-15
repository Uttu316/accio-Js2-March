const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  readline.question("", (a) => {
    a = a.split(" ").map(Number);
    insertionSort1(a, parseInt(n));
    readline.close();
  });
});

function insertionSort1(arr, n) {
  const i = arr.length - 1;
  let j = i - 1;
  const pickedEl = arr[i];

  while (j >= 0 && pickedEl < arr[j]) {
    // O(n)
    arr[j + 1] = arr[j]; //O(1)
    j--; //O(1)
    console.log(arr.join(" "));
  } //O(n)*( O(1) +O(1)) = O(n)
  arr[j + 1] = pickedEl;
  console.log(arr.join(" ")); //O(n) + O(n) = O(n)
}

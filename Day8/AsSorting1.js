const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n, m] = input[0].split(" ").map(Number);
  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(" ").map(Number));
  }
  sortCol(mat, n, m);
});

function sort(arr, n, m) {
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let k = j - 1;
      const pickedEl = arr[j][i];

      while (k >= 0 && pickedEl < arr[k][i]) {
        arr[k + 1][i] = arr[k][i];
        k--;
      }
      arr[k + 1][i] = pickedEl;
    }
  }

  return arr;
}

function sortCol(arr, n, m) {
  const sortArr = sort(arr, n, m);
  for (let i = 0; i < n; i++) {
    console.log(sortArr[i].join(" "));
  }
}

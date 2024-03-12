const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline.question("", (num) => {
  n = parseInt(num);
  readArray(0);
});

function readArray(i) {
  if (i < n) {
    readline.question("", (word) => {
      arr.push(word);
      readArray(i + 1);
    });
  } else {
    let result = getStrings(arr);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    readline.close();
  }
}

function getStrings(arr) {
  const row1 = "qwertyuiop";
  const row2 = "asdfghjkl";
  const row3 = "zxcvbnm";

  let ans = [];
  function getRow(char) {
    if (row1.includes(char)) {
      return 1;
    }
    if (row2.includes(char)) {
      return 2;
    }
    if (row3.includes(char)) {
      return 3;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let lastRow = getRow(word[0]); // 1
    let isBroke = false;

    for (let j = 1; j < word.length; j++) {
      const char = word[j];
      const rowNo = getRow(char); //1
      // console.log({rowNo,lastRow,char})
      if (rowNo !== lastRow) {
        isBroke = true;
        break;
      }
    }
    if (!isBroke) {
      ans.push(word);
    }
  }
  return ans;
}

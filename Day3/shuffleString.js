const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function shuffleString(indices, s) {
  const finalArray = new Array(s.length).fill("");

  for (let i = 0; i < indices.length; i++) {
    const currentPosition = indices[i];
    const currChar = s[i];

    finalArray[currentPosition] = currChar;
  }

  console.log(finalArray.join(""));
}

readline.question("", (n) => {
  readline.question("", (str) => {
    readline.question("", (arr) => {
      arr = arr.split(" ").map(Number);
      shuffleString(arr, str);
      readline.close();
    });
  });
});

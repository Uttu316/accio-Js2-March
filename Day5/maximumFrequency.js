const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (s) => {
  console.log(MaximumFrequencyChar(s));
  readline.close();
});
function MaximumFrequencyChar(s) {
  //task -1 create an array where each index will denote one alphabet
  // let array=new Array(26).fill(0);
  // //task-2 store the frequency of the alphabet at each index of the array
  // for(let i=0;i<s.length;i++){
  //     let index=s.charCodeAt(i)-97;
  //     array[index]++;
  // }
  // //task-3 find the maximum frequency
  // let ma=Math.max(...array);
  // //task-4 print the alphabet with the maximum frequency
  // for(let i=0;i<26;i++){
  //     if(array[i]==ma){
  //         let ASCII=i+97;
  //         return String.fromCharCode(ASCII);
  //     }
  // }
  // return 'a';

  const obj = {};

  function getCounts() {
    for (let ch of s) {
      const currValue = obj[ch];
      obj[ch] = currValue ? currValue + 1 : 1;
    }
  }

  getCounts();

  let max = -1;
  let maxChar = "";

  for (let ch in obj) {
    const value = obj[ch];
    // console.log({value,max,maxChar,ch})
    if (max < value) {
      max = value;
      maxChar = ch;
    }
    if (max == value) {
      if (maxChar > ch) {
        maxChar = ch;
      }
    }
  }
  return maxChar;
}

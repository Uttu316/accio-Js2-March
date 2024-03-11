var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
let strs = [];
let q;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    q = parseInt(line);
  }

  if (lineNumber > 0) {
    strs.push(line);
    q--;
  }

  if (q == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  for (let i = 0; i < strs.length; i++) {
    console.log(compressString(strs[i]));
  }
}

function compressString(s) {
  //step-1
  // let ans="";
  // //step-2
  // let cnt=1;
  // for(let i=0;i<s.length;i++){
  //     if(s[i]!=s[i+1]){
  //         if(cnt==1){
  //             ans+=s[i];
  //         }
  //         else{
  //             ans+=s[i]+cnt;
  //         }
  //         cnt=1;
  //     }
  //     else{
  //         cnt++;
  //     }
  // }
  // return ans;

  let ans = "";
  let last = s[0];
  let c = 1;
  for (let i = 1; i <= s.length; i++) {
    if (last === s[i]) {
      last = s[i];
      c++;
      continue;
    }
    // console.log(c,last,s[i])
    if (c === 1) {
      ans += last;
      last = s[i];
      //  console.log(ans)
      continue;
    }
    ans += `${last + c}`;
    // console.log(ans)
    last = s[i];
    c = 1;
  }
  return ans;
}

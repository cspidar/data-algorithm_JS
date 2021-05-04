function solution(numbers) {
  let arr = [...numbers];
  let rarr = [];

  let ch = Array.from(Array(arr.length));

  let res = [];
  function DFS(i) {
    if (i === arr.length) {
      let tmp = [];
      for (i in ch) {
        if (ch[i] === 0) {
          tmp.push(arr[i]);
        }
      }
      res.push(tmp);
    } else {
      ch[i] = 1;
      DFS(i + 1);
      ch[i] = 0;
      DFS(i + 1);
    }
  }
  DFS(0);

  const chkPrime = (n) => {
    if (n === 0) return false;
    if (n === 1) return false;
    else if (n === 2) return true;
    else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }
  };

  // 중복 제거
  let rset = new Set(rarr);
  let karr = [...rset];

  let cnt = 0;
  for (let i = 0; i < karr.length; i++) {
    if (chkPrime(karr[i])) {
      console.log(karr[i]);
      cnt++;
    }
  }

  return res;
}

const in1 = '17';
const in2 = 0;
const in3 = [5, 6, 3];
console.log(solution(in1, in2, in3));
// !console.table(solution(in1));

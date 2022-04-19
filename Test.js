let arr = [6, 11, 'ㅁ', 'A'];

function arrPr(arr, r) {
  let res = [];
  // let cnt = 0;
  let ch = Array.from({ length: arr.length }, () => 0);
  let tmp = Array.from({ length: r }, () => 0);
  function DFS(L) {
    if (L === arr.length) {
      res.push(tmp.slice());
      // cnt++;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(arr.length - r);
  return res;
  // return cnt;
}

console.log(arrPr(arr, 2));

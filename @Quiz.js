let arr = [1, 2, 3, 4, 5];

function arrPir(arr, r) {
  let res = [];
  let tmp = [];
  // let cnt = 0;
  function DFS(L) {
    if (L === r) {
      res.push(tmp.slice());
      // cnt++;
    } else {
      for (let i = 0; i < arr.length; i++) {
        tmp[L] = arr[i];
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  // return cnt;
  return res;
}
console.log(arrPir(arr, 3));

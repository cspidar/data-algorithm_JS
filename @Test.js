let arr = ['zb', 'bc', 'cc'];

let str = 'ab';

function arrCr(arr, r) {
  let res = [];
  let tmp = Array.from({ length: r }, () => 0);
  function DFS(L, s) {
    if (L === r) {
      res.push(tmp.slice());
    } else {
      for (let i = s; i < arr.length; i++) {
        // s 부터 도는게 포인트
        tmp[L] = arr[i];
        DFS(L + 1, i + 1); // 다음 s 를 i + 1 로 세팅
      }
    }
  }
  DFS(0, 0);
  return res;
}

console.log(arrCr(arr, 2));
!console.table(res);

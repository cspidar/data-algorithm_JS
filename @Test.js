let arr1 = [1, 2, 3];

function partsOfarr(arr) {
  let ch = Array.from(Array(arr.length));
  let res = [];
  // let cnt = 0;
  function DFS(i) {
    if (i === arr.length) {
      let tmp = []; // 아래 tmp 추가 for문 초기화떄문에 위치 여기
      for (i in ch) {
        // 체크배열이 1인 요소만 tmp에 추가
        if (ch[i] === 1) {
          tmp.push(arr[i]);
        }
      }
      res.push(tmp);
      // cnt++;
    } else {
      ch[i] = 1;
      DFS(i + 1);
      ch[i] = 0;
      DFS(i + 1);
    }
  }
  DFS(0);
  // return cnt;
  return res;
}

console.log(partsOfarr(arr1));

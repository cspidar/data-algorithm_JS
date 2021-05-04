let str = '011';
const arr = [1, 2, 3, 4, 5];

// arr 부분 집합 배열을 res 배열에 추가
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

console.log(res);

// !console.table(arr3);

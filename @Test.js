let arr = [1, 2, 3];

let ch = Array.from(Array(arr.length));
let res = [];
let tmp = [];

function DFS(i) {
  if (i === arr.length) {
    for (i in ch) {
      if (ch[i] === 1) {
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
!console.table(res);

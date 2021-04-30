//
//
function solution(p1) {
  const arr = [...p1];
  const n = arr.length;
  let ch = Array.from(Array(n), () => Array(n).fill(0));
  let cnt = 0;

  function maze(v, i) {
    if (v > n - 1 || i > n - 1) return;
    if (v === n - 1 && i === n - 1) {
      cnt++;
    } else {
      if (arr[v + 1][i] === 0 && ch[v + 1][i] === 0) {
        ch[v + 1][i] = 1;
        console.log(v, i);
        maze(v + 1, i);
        ch[v + 1][i] = 0;
      } else if (arr[v - 1][i] === 0 && ch[v - 1][i] === 0) {
        ch[v - 1][i] = 1;
        maze(v - 1, i);
        ch[v - 1][i] = 0;
      } else if (arr[v][i + 1] === 0 && ch[v][i + 1] === 0) {
        ch[v][i + 1] = 1;
        maze(v, i + 1);
        ch[v][i + 1] = 0;
      } else if (arr[v][i - 1] === 0 && ch[v][i - 1] === 0) {
        ch[v][i - 1] = 1;
        maze(v, i + 1);
        ch[v][i - 1] = 0;
      } else return;
    }
  }
  ch[0][0] = 1;
  maze(0, 0);
  return;
}

const in1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
const in2 = 5;

console.log(solution(in1));
!console.table(solution(in1));

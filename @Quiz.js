//
//
function solution(p1) {
  const quiz = [...p1];
  // const time = Number(p2);
  let tmp = [0, 0]; // 0 으로 초기화 안하면 계산값 NaN
  let res = [];
  function DFS(i) {
    if (tmp[1] > 20) return;
    if (i === 5) {
      // console.log(tmp);
      res.push(tmp.slice()); // slice 안하면 복사 안되고 참조만 복사
      return;
    } else {
      tmp[0] += quiz[i][0];
      tmp[1] += quiz[i][1];
      DFS(i + 1);
      tmp[0] -= quiz[i][0];
      tmp[1] -= quiz[i][1];
      DFS(i + 1);
    }
  }
  DFS(0);
  res.sort((a, b) => b[0] - a[0]);
  return res[0][0];
}
// 5문제, 20분
const in1 = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
const in2 = 531;

console.log(solution(in1));
// !console.table(solution(in1));

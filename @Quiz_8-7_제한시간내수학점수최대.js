//

function sol(p1, p2) {
  let arr = [...p1];
  let limit = p2[1];
  const res = [];

  function DFS(i, time, score) {
    if (time > limit) return;
    if (i === arr.length) {
      res.push(score);
    } else {
      DFS(i + 1, time + arr[i][1], score + arr[i][0]);
      DFS(i + 1, time, score);
    }
  }

  DFS(0, 0, 0);
  res.sort((a, b) => b - a);
  return res[0];
}

const in1 = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
const in2 = [5, 20];

console.log(sol(in1, in2));
// !console.table(sol(in1, in2));

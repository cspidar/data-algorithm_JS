function solution(p1, p2, p3, p4, p5) {
  // n, start, end, roads, traps
  const n = Number(p1);
  const start = Number(p2);
  const end = Number(p3);
  const roads = [...p4];
  const traps = [...p5];

  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let res = [];

  for (let [a, b, c] of roads) {
    graph[a][b] = c;
  }

  let time = [];
  let path = [];
  let pre_idx = -1;
  let sum = 0;
  function DFS(start, end) {
    if (traps.indexOf(start) !== -1) {
      reverse_arr(graph);
      ch.fill(0);
      // ch[pre_idx] = 1;
      // ch[traps[traps.indexOf(start)]] = 1;
      ch[start] = 1;
    }
    if (start === end) {
      res.push(path.slice());
      // time.push(sum);
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[start][i] > 0 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          pre_idx = i;
          DFS(i, end); // i 열 검색 호출

          // ch[i] = 0;
          path.pop();
        }
      }
    }
  }

  function reverse_arr(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
      }
    }
  }

  path.push(start);
  ch[start] = 1;
  DFS(start, end);
  //    1, 4

  console.table(graph);

  console.table(res);
  console.table();

  return time;
}

// const in1 = 3;
// const in2 = 1;
// const in3 = 3;
// const in4 = [
//   [1, 2, 2],
//   [3, 2, 3],
// ];
// const in5 = [2];
const in1 = 4;
const in2 = 1;
const in3 = 4;
const in4 = [
  [1, 2, 1],
  [3, 2, 1],
  [2, 4, 1],
];

const in5 = [2, 3];

console.log(solution(in1, in2, in3, in4, in5));
// !console.table(solution(in1));

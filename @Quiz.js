function solution(number, computers) {
  let arr = [...computers];
  let n = number;
  let k = 2;

  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let res = [];

  // 그래프 정보를 인접 행렬에 반영
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  let path = [];
  function DFS(v) {
    if (v === k) {
      res.push(path.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  DFS(1);

  let answer = res;

  return answer;
}

const in1 = 3;
const in2 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
const in3 = [5, 6, 3];
console.log(solution(in1, in2, in3));
// !console.table(solution(in1));

function solution(p1, p2, p3) {
  //

  // graph: 노드 정보 배열 (2차, 초기화: 1e9 ≒ 무한)

  //// 플로이드-워셜 알고리즘: 점화식 사용
  // min(a -> b, a -> k -> b)

  const nodes = Number(p1);
  const arr = [...p2];

  const graph = Array.from(Array(nodes + 1), () => Array(nodes + 1).fill(1e9));

  // graph 자기 자신 거리 = 0
  for (i in graph) {
    graph[i][i] = 0;
  }

  // graph 에 node 정보 입력
  // [출발 노드, 도착 노드, 거리]
  for (v of arr) {
    graph[v[0]][v[1]] = v[2];
  }

  // 점화식 적용
  // min(a -> b, a -> k -> b)
  for (k = 1; k <= nodes; k++) {
    for (a = 1; a <= nodes; a++) {
      for (b = 1; b <= nodes; b++) {
        graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
      }
    }
  }

  console.table(graph);

  return;
}

const in1 = 4; // 노드 수
const in2 = [
  [1, 2, 4],
  [1, 4, 6],
  [2, 1, 3],
  [2, 3, 7],
  [3, 1, 5],
  [3, 4, 4],
  [4, 3, 2],
];
const in3 = 0;
const in4 = 0;
const in5 = 0;

console.log(solution(in1, in2, in3, in4, in5));
// console.table(solution(in1, in2, in3, in4, in5));

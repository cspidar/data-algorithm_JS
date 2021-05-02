//
//
function solution(island) {
  const n = island.length;
  let dx = [1, 0, -1, 0, 1, 1, -1, -1];
  let dy = [0, 1, 0, -1, 1, -1, -1, 1];
  let queue = [];
  let cnt = 0;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (island[i][j] === 1) {
        cnt++;
        queue.push([i, j]);
        BFS(i, j);
      }
    }
  }

  function BFS(x, y) {
    island[x][y] = 0;

    while (queue.length) {
      let s = queue.pop();

      for (k = 0; k < dx.length; k++) {
        let ns = [s[0] + dx[k], s[1] + dy[k]];
        if (
          ns[0] >= 0 &&
          ns[0] < n &&
          ns[1] >= 0 &&
          ns[1] < n &&
          island[ns[0]][ns[1]] === 1
        ) {
          island[ns[0]][ns[1]] = 0;
          queue.push(ns);
        }
      }
    }
  }
  return cnt;
}

const in1 = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(in1));
// !console.table(solution(in1));

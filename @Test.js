let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

let res = 0;
let n = arr.length;
let dx = [1, 0, -1, 0];
let dy = [0, -1, 0, 1];
let queue = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1) {
      arr[i][j] = 0;
      queue.push([i, j]);
      res++; // 큐 호출 갯수 = 섬 갯수
      while (queue.length) {
        let x = queue.shift();
        for (let k = 0; k < dx.length; k++) {
          let nx = x[0] + dx[k];
          let ny = x[1] + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
            arr[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
}

console.log(res);

//
//

function solution(p1, p2) {
  const arr = [...p1];

  let m_edge = arr.length;
  let n_edge = arr[0].length;
  let dy = [0, 1, 0, -1];
  let dx = [-1, 0, 1, 0];
  let res = [];

  let tmp = [];
  // let cnt = 0;
  function DFS(y, x) {
    if (x === n_edge - 1 && y === m_edge - 1) {
      res.push(tmp.slice());
      // cnt++;
    } else {
      for (let k = 0; k < dx.length; k++) {
        let ny = y + dy[k];
        let nx = x + dx[k];
        if (
          ny >= 0 &&
          ny < m_edge &&
          nx >= 0 &&
          nx < n_edge &&
          arr[ny][nx] === 0
        ) {
          // 경계선 처리를 위해 dx, dy 사용 / +1, -1 과 같이 하면 상황에 따른 범위 설정 힘듦 / 조합된 변수는 뒤로 (arr[nx][ny])
          arr[ny][nx] = 1;
          tmp.push([ny, nx]);
          DFS(ny, nx);
          tmp.pop();
          arr[ny][nx] = 0;
        }
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);

  return cnt;
}

const in1 = [
  [0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
const in2 = 0;
const in3 = 0;
const in4 = 0;
const in5 = 0;

console.log(solution(in1, in2, in3, in4, in5));
// console.table(solution(in1, in2, in3, in4, in5));

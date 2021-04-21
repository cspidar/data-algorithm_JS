//
function sol(board, moves) {
  //
  //
  const l = moves.length;
  const m = board[0].length;
  const n = board.length;
  const bd = [...board];
  const mv = [...moves];
  const res = [];

  let cnt = 0;
  for (i = 0; i < l; i++) {
    for (j = 0; j < n; j++) {
      if (bd[j][mv[i] - 1] > 0) {
        if (
          res.length !== 0 &&
          res.lastIndexOf(bd[j][mv[i] - 1]) === res.length - 1
        ) {
          res.pop();
          cnt++;
        } else res.push(bd[j][mv[i] - 1]);
        bd[j][mv[i] - 1] = 0;
        break;
      }
    }
  }

  return cnt * 2;
}

const in1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
]; //board 배열
const in2 = [1, 5, 3, 5, 1, 2, 1, 4]; //moves 배열

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

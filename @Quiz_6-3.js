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

  for (i = 0; i < l; i++) {
    for (j = 0; j < n; j++) {
      const pick = bd[j][mv[i] - 1];
      if (pick > 0) {
        res.push(pick);
        pick = 0;
        break;
      }
    }
  }

  const ans = res;

  return ans;
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

let coins = [1, 2, 5];
let m = 15;

let res = Infinity;

function DFS(L, value) {
  for (let coin of coins) {
    if (L > res) break;
    if (value > m) break;
    if (value === m) {
      res = Math.min(res, L);
    } else {
      value += coin;
      DFS(L + 1, value);
      value -= coin;
    }
  }
}
DFS(0, 0);

console.log(res);

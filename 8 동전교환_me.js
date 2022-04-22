let coins = [1, 2, 5, 15];
let m = 15;

let res = Infinity;

function DFS(L, value) {
  for (let coin of coins) {
    if (L > res) break;
    if (value > m) break;
    if (value === m) {
      res = Math.min(res, L);
    } else {
      DFS(L + 1, value + coin[i]);
    }
  }
}
DFS(0, 0);

console.log(res);

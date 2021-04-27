//

function sol(p1, p2) {
  const arr = [...p1].sort((a, b) => a - b);
  let ch = Array.from({ length: arr.length }, () => 0);
  const max = p2;
  let sum = 0;
  const res = [];

  function DFS(i) {
    if (i === arr.length) {
      res.push(sum);
    } else {
      DFS(i + 1, (sum += arr[i]));
      DFS(i + 1, (sum -= arr[i]));
    }
  }

  DFS(0);

  const fres = res.filter((p) => p < p2).sort((a, b) => b - a);

  return fres[0];
}

const in1 = [81, 58, 42, 33, 61];
const in2 = 259;

console.log(sol(in1, in2));
// !console.table(sol(in1, in2));

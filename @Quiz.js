//

function sol(p1, p2) {
  // const arr = [...p1];
  const n = Number(p1);
  let ch = Array.from({ length: p1.length }, () => 0);
  let res = [];

  function DFS(n) {
    if (n === 1) return 1;
    return n * DFS(n - 1);
  }

  return DFS(n);
  // return ;
}

const in1 = 3;
const in2 = 3;

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

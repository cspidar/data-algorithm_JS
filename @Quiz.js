//

function sol(p1, p2) {
  const N = Number(p1);
  const R = Number(p2);
  const ch = [Array.from({ length: N + 1 }, () => 0)];
  const arr = [];
  for (i = 0; i < N; i++) {
    arr.push(i + 1);
  }
  const res = [];

  //   function DFS(L, sum) {
  //     if (L > N || sum > R) return;
  //     if (L === N && sum === R) {
  //       return;
  //     } else {
  //       for (let i = 1; i <= N; i++) {
  //         if (ch[i] === 0){
  //           ch[i] = 1
  //           res.push(i)
  //         }
  //       }
  //     }
  //   }
  //
  // DFS(0, 0);
  console.log(arr);
}
const in1 = 4;
const in2 = 16;

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

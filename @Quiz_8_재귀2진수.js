//

let ans = [];

function sol(N, p2) {
  if (N < 1) return;
  if (N === 1) {
    ans.unshift(N);
    return ans;
  }

  ans.unshift(N % 2);

  return sol(Math.floor(N / 2));
}

const in1 = 10;
const in2 = 3;

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

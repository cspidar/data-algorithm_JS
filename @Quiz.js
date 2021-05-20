//
//

function solution(p1, p2) {
  //
  let n = Number(p1);
  let coin = [...p2];
  const mem = Array.from(Array(10001), () => -1);

  for (v of coin) {
    mem[v] = 1;
  }

  for (i = coin[coin.length - 1] + 1; i <= n; i++) {
    let flag = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (v of coin) {
      if (mem[i - v] != -1) {
        min = Math.min(min, mem[i - v]);
        flag = 1;
      }
      if (flag === 1) {
        mem[i] = min + 1;
      }
    }
  }

  return mem;
}

const in1 = 13;
const in2 = [3, 7];
const in3 = 0;
const in4 = 0;
const in5 = 0;

console.log(solution(in1, in2, in3, in4, in5));
// console.table(solution(in1, in2, in3, in4, in5));

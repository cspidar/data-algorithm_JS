//
//
function solution(p1, p2) {
  const coin = [...p1];
  const price = Number(p2);

  let dy = Array.from(Array(price + 1), () => 0);
  // 끝나고 빈배열로 해도 잘 돌아가는지 확인; / 안돌아감, undefine 에 수식계산이 안되기 때문

  for (i = 0; i < coin.length; i++) {
    for (j = coin[i]; j < dy.length; j++) {
      let min = Number.MAX_SAFE_INTEGER;
      dy[j] = Math.min(min, dy[j - coin[i]] + 1);
    }
  }

  return dy;
}

const in1 = [
  [5, 20],
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
const in2 = 531;

console.log(solution(in1, in2));
// !console.table(solution(in1));

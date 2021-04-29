//

function solution(n, r) {
  let answer = [];
  let tmp = Array.from({ length: r }, () => 0);
  function DFS(L, s) {
    if (L === r) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

const in1 = 4;
const in2 = 2;

console.log(solution(in1, in2));
!console.table(solution(in1, in2));

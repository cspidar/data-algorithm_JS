//
//
function solution(p1) {
  const arr = [...p1];
  const n = arr.length;
  let cnt = 0;

  function maze(v, i) {}
  ch[0][0] = 1;
  maze(0, 0);
  return;
}

const in1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
const in2 = 5;

console.log(solution(in1));
!console.table(solution(in1));

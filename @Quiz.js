function solution(p1, p2) {
  const arr = [...p1];
  const k = Number(p2);

  let sum_time = arr.reduce((acc, cur) => acc + cur, 0);
  if (sum_time < k) return -1;

  function next_idx(ni) {
    for (j = ni; j < arr.length; j++) {
      if (arr[j] > 0) {
        ni = j;
        break;
      }
    }
    let nzero = arr.filter((p) => p > 0)[0];
    ni = arr.indexOf(nzero);
    return ni;
  }

  let idx = 0;

  for (let i = 1; i <= 4; i++) {
    if (idx >= arr.length || arr[idx] === 0) idx = next_idx(idx);
    arr[idx] = arr[idx] - 1;
    idx++;
  }

  // return idx;
  return arr;
  // return next_idx(idx) + 1;
}

const in1 = [3, 1, 2];
const in2 = 5;
const in3 = 0;
const in4 = 0;
const in5 = 0;

console.log(solution(in1, in2, in3, in4, in5));
// console.table(solution(in1, in2, in3, in4, in5));

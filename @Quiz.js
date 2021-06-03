function solution(p1, p2) {
  //
  const arr = [...p1];
  //
  let m = 1;

  for (m = 0; m < arr.length / 2; m++) {
    for (i = 0; i < arr.length - m; i++) {
      if (arr[i] === arr[i + 1]) {
      }
    }
  }
  //

  return arr;
}

const in1 = 'aaaaba';
const in2 = 5;
const in3 = 0;
const in4 = 0;
const in5 = 0;

console.log(solution(in1, in2, in3, in4, in5));
// console.table(solution(in1, in2, in3, in4, in5));

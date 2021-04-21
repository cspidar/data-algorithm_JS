//
function sol(n1, n2) {
  //
  //
  const arr = [];
  for (i = 0; i < n1; i++) {
    arr.push(i + 1);
  }

  let pos = 0;
  let who = 0;
  while (arr.length <= 1) {
    if (pos == arr.length) {
      pos = 0;
    }
  }

  return arr;
}

const in1 = 8;
const in2 = 3;

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

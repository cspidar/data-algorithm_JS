//
function sol(p1, p2) {
  const arr = [...p1].sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  for (i = 0; i < arr.length; i++) {}

  const ans = arr;
  // const ans = rarr;
  return ans;
}

const in1 = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(sol(in1));
!console.table(sol(in1));

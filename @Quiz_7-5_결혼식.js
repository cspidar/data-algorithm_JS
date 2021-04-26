//
function sol(p1, p2) {
  const arr = [...p1];
  arr.map((v, i, arr) => {
    arr[i] = [
      [v[0], 'in'],
      [v[1], 'out'],
    ];
  });

  const tarr = [...arr].flat().sort((a, b) => {
    if (a[0] === b[0]) return b[1].charCodeAt() - a[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  const rarr = [];
  for (i = 0; i < tarr.length; i++) {
    if (tarr[i][1] === 'in') {
      cnt++;
      rarr.push(cnt);
    } else if (tarr[i][1] === 'out') {
      cnt--;
      rarr.push(cnt);
    }
  }

  const ans = Math.max(...rarr);

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

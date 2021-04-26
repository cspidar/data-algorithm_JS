//
function count(songs, capa) {
  let cnt = 1;
  let sum = 0;
  for (i in songs) {
    if (sum + songs[i] > capa) {
      cnt++;
      sum = songs[i];
    } else sum += songs[i];
  }
  return cnt;
}

function sol(p1, p2) {
  const arr = [...p1];

  let lt = Math.max(...arr);
  let rt = arr.reduce((acc, cur) => acc + cur, 0);
  let res = 0;
  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    if (count(arr, mid) <= p2) {
      res = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }

  return res;
}

const in1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const in2 = 3;

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

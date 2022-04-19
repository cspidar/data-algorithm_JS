// 마구간 5 개, 말 3 마리
// 마구간 좌표 1 2 8 4 9
function count(house, dis) {
  let cnt = 1;
  let ep = 1;
  for (v of house) {
    if (v >= ep + dis) {
      cnt++;
      ep = v;
    }
  }
  return cnt;
}

function sol(p1, p2) {
  const arr = [...p1].sort((a, b) => a - b);

  let lt = 1;
  let rt = arr[arr.length - 1];
  let res = 0;

  while (lt <= rt) {
    mid = Math.floor((lt + rt) / 2);
    if (count(arr, mid) >= p2) {
      res = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return res;
}

const in1 = [1, 2, 8, 4, 9, 10, 15, 17];
const in2 = 3;

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

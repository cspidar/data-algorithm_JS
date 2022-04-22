let m = 3;
let arr = [2, 3, 6, 9, 1, 3, 5, 2];

function count(list, minute) {
  let curr = 0;
  let cnt = 1;
  for (let v of list) {
    if (curr + v <= minute) {
      curr += v;
    } else {
      cnt++;
      curr = v;
    }
  }
  return cnt;
}

// lt: 최대 곡 크기, rt: 전체 곡 크기 합
let lt = Math.max(...arr);
let rt = 0;
for (let v of arr) {
  rt += v;
}

let res;
while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);
  if (count(arr, mid) <= m) {
    res = mid;
    rt = mid - 1;
  } else {
    lt = mid + 1;
  }
}

console.log(res);

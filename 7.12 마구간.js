let m = 3;
let arr = [1, 2, 4, 5, 6, 8, 9];

// 답: 거리
// 함수 - 입력: 배열, 배치 거리  - 리턴: 성공/실패

function count(house, dist) {
  let res;
  let horse = m;
  let curr = house[0];
  horse--;
  for (let v of house) {
    if (v >= curr + dist) {
      curr = v;
      horse--;
    }
  }
  if (horse <= 0) {
    res = true;
  } else {
    res = false;
  }
  return res;
}

let lt = 1;
let rt = arr[arr.length - 1];
let res;

while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);
  if (count(arr, mid)) {
    res = mid;
    lt = mid + 1;
  } else {
    rt = mid - 1;
  }
}

console.log(res);

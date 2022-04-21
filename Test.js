let m = 32;
let arr = [23, 87, 65, 12, 57, 32, 99, 81];
arr = arr.sort((a, b) => b - a);

// console.log(arr);

let lt = arr[0];
let rt = arr[arr.length - 1];
let res;
while (lt >= rt) {
  let mid = Math.floor((lt + rt) / 2);
  if (mid === m) {
    // 답의 조건
    res = mid; // 현상황 답 저장
    break;
  }
  if (mid > m) {
    lt = mid + 1; // mid는 이미 확인했기때문에 rt = mid - 1 / lt = mid + 1
  } else if (mid < m) {
    rt = mid - 1;
  }
}

console.log(res);

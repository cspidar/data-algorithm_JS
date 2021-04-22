//
function sol(arr1, str2) {
  const arr = [...arr1];
  let lt = 0;
  let rt = 1;
  let tmp = 0;

  while (rt < arr.length) {
    if (arr[lt] > arr[rt]) {
      tmp = arr[lt];
      arr[lt] = arr[rt];
      arr[rt] = tmp;
    }
    lt++;
    rt++;
  }

  return arr;
}

const in1 = [13, 5, 11, 7, 23, 15];

console.log(sol(in1));
!console.table(sol(in1));

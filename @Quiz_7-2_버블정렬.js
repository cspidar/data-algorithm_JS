//
function sol(arr1, str2) {
  const arr = [...arr1];
  let lt = 0;
  let j = 1;
  let tmp = 0;

  for (i = arr.length - 1; i >= 0; i--) {
    for (j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}

const in1 = [13, 5, 11, 7, 23, 15];

console.log(sol(in1));
!console.table(sol(in1));

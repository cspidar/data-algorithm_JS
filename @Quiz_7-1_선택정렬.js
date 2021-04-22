//
function sol(arr1, str2) {
  let idx = 0;
  for (i = 0; i < arr1.length - 1; i++) {
    idx = i;
    for (j = i + 1; j < arr1.length; j++) {
      if (arr1[idx] > arr1[j]) {
        idx = j;
      }
    }
    let tmp = arr1[idx];
    arr1.splice(idx, 1);
    arr1.splice(i, 0, tmp);
  }

  return arr1;
}

const in1 = [13, 5, 11, 7, 23, 15];

console.log(sol(in1));
!console.table(sol(in1));

//
function sol(str1, str2) {
  //
  //
  const m = str1.length;
  const n = str2.length;

  const arr1 = str1.split('');
  const arr2 = str2.split('');

  const map1 = new Map();
  const map2 = new Map();

  // arr1 n개 map1
  for (i = 0; i < n; i++) {
    if (map1.has(arr1[i])) {
      map1.set(arr1[i], map1.get(arr1[i]) + 1);
    } else map1.set(arr1[i], 1);
  }

  // arr2 n개 map2
  for (i = 0; i < n; i++) {
    if (map2.has(arr2[i])) {
      map2.set(arr2[i], map2.get(arr2[i]) + 1);
    } else map2.set(arr2[i], 1);
  }

  let lt = 0,
    rt = n,
    count = 0;

  let flag = 1;
  while (lt < m - n) {
    for ([k, v] of map1) {
      if (map1.has(k) != map2.has(k) || map1.get(k) != map2.get(k)) {
        flag = 0;
      }
    }
    if (flag) {
      count++;
    }
    flag = 1;
    map1.delete(arr1[lt++]);
    map1.set(arr1[rt++], 1);
  }

  const ans = count;

  return ans;
}

const in1 = 'bacaAacba';
const in2 = 'abc';

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

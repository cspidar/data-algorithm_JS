//
function sol(str1, str2) {
  //
  //
  const arr1 = str1.split('');
  const arr2 = str2.split('');

  const map1 = new Map();
  const map2 = new Map();

  for (v of arr1) {
    if (map1.has(v)) {
      map1.set(v, map1.get(v) + 1);
    } else map1.set(v, 1);
  }

  let flag = 1;
  for (v of arr2) {
    if (map1.has(v)) {
      map1.set(v, map1.get(v) - 1);
    } else flag = 0;
  }
  for ([k, v] of map1) {
    if (v != 0) {
      flag = 0;
    }
  }

  // for ([k, v] of map1) {
  //   if (map1.has(k) != map1.has(k) || map1.get(k) != map2.get(k)) {
  //     flag = 0;
  //   }
  // }

  const ans = flag;
  return ans;
}

const number = 3;
const in1 = 'AbaAeCe';
const in2 = 'baeeACA';

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

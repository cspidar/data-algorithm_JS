//
function sol(str1, str2) {
  //
  //

  let map1 = new Map();
  let map2 = new Map();

  for (i in str2) {
    if (!map2.has(str2[i])) {
      map2.set(str2[i], 1);
    } else map2.set(str2[i], map2.get(str2[i]) + 1);
  }

  for (i = 0; i < str2.length - 1; i++) {
    if (!map1.has(str1[i])) {
      map1.set(str1[i], 1);
    } else map1.set(str1[i], map1.get(str1[i]) + 1);
  }

  let lt = 0;
  let rt = str2.length - 1;

  let count = 0;
  while (rt < str1.length) {
    if (!map1.has(str1[rt])) {
      map1.set(str1[rt], 1);
    } else {
      map1.set(str1[rt], map1.get(str1[rt]) + 1);
    }
    rt++;
    if (chkMaps(map1, map2)) {
      count++;
    }
    map1.set(str1[lt], map1.get(str1[lt]) - 1);
    if (map1.get(str1[lt]) < 1) map1.delete(str1[lt]);
    lt++;
  }

  function chkMaps(p1, p2) {
    // console.log(p1);
    if (p1.size != p2.size) return false;
    else {
      for ([k, v] of p1) {
        if (p1.get(k) != p2.get(k)) return false;
      }
      return true;
    }
  }

  return count;
}

const in1 = 'bacaAacba';
const in2 = 'abc';

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

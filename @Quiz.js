//
function sol(str1, str2) {
  let rarr = '';
  for (i = 0; i < str2.length; i++) {
    if (str2[i] == 'C' || str2[i] == 'A' || str2[i] == 'B') {
      rarr += str2[i];
    }
  }

  let ans = '';
  if (rarr == str1) {
    ans = 'YES';
  } else ans = 'NO';

  return ans;
}

const in1 = 'CBA';
const in2 = 'CBDAGE';

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

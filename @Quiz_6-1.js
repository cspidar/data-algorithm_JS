//
function sol(str1, str2) {
  //
  //
  const sarr = str1.split('');

  let flag = 1;

  if (sarr.shift() != '(') {
    return 'NO';
    flag = 0;
  }
  if (sarr.pop() != ')') {
    return 'NO';
    flag = 0;
  }

  let count = 0;
  for (i = 0; i < sarr.length; i++) {
    if (sarr[i] == '(') {
      count++;
    } else if (sarr[i] == ')') {
      count--;
    }
    if (count < -1) return 'NO';
  }

  const ans = 'YES';

  return ans;
}

const in1 = '(())()';
const in2 = 'abc';

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

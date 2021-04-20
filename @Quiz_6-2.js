//
function sol(str1, str2) {
  //
  //
  const sarr = str1.split('');
  let rstr = '';

  let count = 0;
  let lt = 0;

  while (lt < sarr.length) {
    if (sarr[lt] == '(') {
      count++;
      lt++;
    } else if (sarr[lt] == ')') {
      count--;
      lt++;
    } else if (count == 0 && sarr[lt] != '(' && sarr[lt] != ')') {
      rstr += sarr[lt];
      lt++;
    } else lt++;
  }

  const ans = rstr;

  return ans;
}

const in1 = 'aaa(A(BC)D)EF(G(H)(IJ)K)LM(N)aaa';
const in2 = 'abc';

console.log(sol(in1, in2));
!console.table(sol(in1, in2));

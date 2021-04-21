//
function sol(str) {
  //
  //
  const stk = [];

  let cnt = 0;
  let tem;
  for (i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stk.push(str[i]);
    } else if (str[i - 1] === '(' && str[i] === ')') {
      stk.pop();
      cnt += stk.length;
    } else if (str[i - 1] === ')' && str[i] === ')') {
      stk.pop();
    }
  }

  return cnt;
}

const in1 = '(((()(()()))(())()))(()())';

console.log(sol(in1));
!console.table(sol(in1));

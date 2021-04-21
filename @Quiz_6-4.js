//
function sol(str) {
  //
  //
  const stk = [];
  for (i = 0; i < str.length; i++) {
    let tmp = '';
    let before = '';
    let after = '';
    if (str[i] == '*' || str[i] == '/' || str[i] == '+' || str[i] == '-') {
      after = stk.pop();
      before = stk.pop();
      tmp += before += str[i] += after;
      stk.push(eval(tmp).toString());
    } else stk.push(str[i]);
  }

  return stk;
}

const in1 = '352+*9-';

console.log(sol(in1));
!console.table(sol(in1));

function sol(str) {
  const res = [];
  for (s of str) {
    if (
      s === '0' ||
      s === '1' ||
      s === '2' ||
      s === '3' ||
      s === '4' ||
      s === '5' ||
      s === '6' ||
      s === '7' ||
      s === '8' ||
      s === '9'
    ) {
      res.push(s);
    }
  }
  const ans = Number(res.join(''));
  return ans;
}
const input1 = 'g0en2T0s8eSoft';

console.log(sol(input1));

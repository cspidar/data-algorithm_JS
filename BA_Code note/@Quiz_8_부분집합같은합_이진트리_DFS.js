//

function sol(p1, p2) {
  const arr = [...p1];
  let ch = Array.from({ length: arr.length }, () => 0);
  let cnt = 0;
  let res = 'NO';

  function DFS(i) {
    if (i === arr.length) {
      let sum0 = 0;
      let sum1 = 0;
      for (i in ch) {
        if (ch[i] === 0) {
          sum0 += arr[i];
        } else sum1 += arr[i];
      }
      if (sum0 === sum1) {
        res = 'YES';
        cnt++;
      }
    } else {
      ch[i] = 1;
      DFS(i + 1);
      ch[i] = 0;
      DFS(i + 1);
    }
  }

  DFS(0);

  return [res, cnt];
}

const in1 = [1, 3, 5, 6, 7, 10];
const in2 = 3;

console.log(sol(in1, in2));
// !console.table(sol(in1, in2));

function solution(p1, p2) {
  const info = [...p1];
  const query = [...p2];

  let ilist = [];
  for (let i in info) {
    ilist.push(info[i].split(' '));
  }

  let qlist = [];
  for (let i in query) {
    qlist.push(query[i].replace(/and /g, '').split(' '));
  }

  let res = Array.from(Array(qlist.length), () => 0);
  for (let i in qlist) {
    let cnt = 0;
    for (let j = 0; j < qlist[i].length - 1; j++) {
      if (qlist[i][j] === ilist[i][j] || qlist[i][j] === '-') cnt++;
    }
    if (qlist[i][4] <= ilist[i][4]) cnt++;
    if (cnt === 5) res[i] += 1;
  }

  // console.table(ilist);
  // console.table(qlist);
  console.log(res);
  return;
}

let res = [];

// [1,1,1,1,2,4]
// 언어는 cpp, java, python, - 중 하나입니다.
// 직군은 backend, frontend, - 중 하나입니다.
// 경력은 junior, senior, - 중 하나입니다.
// 소울푸드는 chicken, pizza, - 중 하나입니다.
// '-' 표시는 해당 조건을 고려하지 않겠다는 의미입니다.

const in1 = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];
const in2 = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];
const in3 = 0;
console.log(solution(in1, in2, in3));
// !console.table(solution(in1));

function solution(ordersin, coursein) {
  let orders = [...ordersin];
  let course = [...coursein];

  function arrCr(arr, r) {
    let res = [];
    let tmp = Array.from({ length: r }, () => Array());
    function DFS(L, s) {
      if (L === r) {
        res.push(tmp.slice().sort().join(''));
      } else {
        for (let i = s; i < arr.length; i++) {
          // s 부터 도는게 포인트
          tmp[L] = arr[i];
          DFS(L + 1, i + 1); // 다음 s 를 i + 1 로 세팅
        }
      }
    }
    DFS(0, 0);
    return res;
  }

  let list = Array.from(Array(11), () => Array());
  for (let i = 0; i < orders.length; i++) {
    for (let j of course) {
      if (orders[i].length >= j) {
        list[j].push(...arrCr(orders[i], j));
      }
    }
  }

  let mlist = new Map();
  for (let v of course) {
    for (let j in list[v]) {
      if (list[v][j] !== undefined && !mlist.has(list[v][j]))
        mlist.set(list[v][j], 1);
      else mlist.set(list[v][j], mlist.get(list[v][j]) + 1);
    }
  }

  let answer = [];

  for (let c of course) {
    list[c] = [...mlist]
      .filter((p) => p[0].length === c)
      .sort((a, b) => b[1] - a[1]);
  }

  for (let c of course) {
    if (list[c][0][1] >= 2) {
      answer.push(list[c][0][0]);
      for (let i = 1; i < list[c].length; i++) {
        if (list[c][0][1] === list[c][i][1]) {
          answer.push(list[c][i][0]);
        }
      }
    } else break;
  }
  // console.log(list);

  return answer.sort();
}
const in1 = ['XYZ', 'XWY', 'WXA'];
const in2 = [2, 3, 4];
const in3 = 0;
console.log(solution(in1, in2, in3));
// !console.table(solution(in1));

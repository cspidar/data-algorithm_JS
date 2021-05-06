function solution(p1, p2, p3, p4, p5) {
  const n = Number(p1); // 6
  const S = Number(p2); // 4
  const A = Number(p3); // 6
  const B = Number(p4); // 2
  const arr = [...p5];

  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b, c] of arr) {
    graph[a][b] = c;
    graph[b][a] = c;
  }

  function getPrice(S1, E1) {
    let pres = [];
    let min = Number.MAX_SAFE_INTEGER;
    function DFS(start, end, price) {
      if (price >= min) return;
      if (start === end) {
        pres.push(price);
        min = Math.min(min, price);
      } else {
        for (let i = 1; i <= n; i++) {
          if (graph[start][i] > 0 && ch[i] === 0) {
            ch[i] = 1;
            DFS(i, end, price + graph[start][i]); // 이렇게 가야함...
            ch[i] = 0;
          }
        }
      }
    }
    // path.push(S1);
    ch[S1] = 1;
    DFS(S1, E1, 0);
    ch[S1] = 0;
    return Math.min(...pres);
    //
  }
  //

  let C = [];
  for (let i = 1; i <= n; i++) {
    if (i == S || i == A || i == B) {
    } else C.push(i);
  }

  let sa = getPrice(S, A);
  let sb = getPrice(S, B);
  let ab = getPrice(A, B);

  // sc cb ca
  let scab = [];
  for (let v of C) {
    scab.push(getPrice(S, v) + getPrice(v, A) + getPrice(v, B));
  }

  // console.table(Math.min(sa + sb, sa + ab, sb + ab));
  // console.table(sa, sb, ab);
  // console.table(ab, ba);

  return Math.min(sa + sb, sa + ab, sb + ab, ...scab);
}

const in1 = 6;
const in2 = 4;
const in3 = 6;
const in4 = 2;
const arr = [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
];
console.log(solution(in1, in2, in3, in4, arr));
// !console.table(solution(in1));

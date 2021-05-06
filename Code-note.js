//

//// Map

// arr -> map 변환
const map = new Map([
  [k1, v1],
  [k2, v2],
  [...k, ...v],
]);

// map ->> arr 변환 (펼침 연산자)
let arr = [...map];

// Value 업데이트
map.set(k, map.get(k) + 1);

// 순회
for ([key, value] of map) {
}
// 함수 - 두 Map 일치 확인
function chkMaps(p1, p2) {
  // console.log(p1);
  if (p1.size != p2.size) return false;
  else {
    for ([k, v] of p1) {
      if (!p2.has(k) || p2.get(k) !== v) return false; // p2에 p1의 k가 있는지 확인 || p2의 v가 p1의 v와 같은지 확인
    }
    return true;
  }
}

//

//// arr

// arr의 i1과 i2의 value 서로 교체
[arr[i1], arr[i2]] = [arr[i2], arr[i1]];

// 2차 배열 정렬 / 0번 인덱스 같을때 1번 인덱스로 정렬
arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

//

//// str

// str 공백 제거
str.trim();

// str 수식 계산
const res = eval('1+2'); // 3

str.charCodeAt(); // ascii num으로 변경
String.fromCharCode(n); // ascii num을 str 반환

// str 정규표현식 사용하여 replace로 교체
str.replace(/A/g, 'B'); // 'A' 를 글로벌 (g) 로 'B'로 교체

// arr 배열 내 문자열 정렬
arr.sort((a, b) => {
  return a[0].charCodeAt() - b[0].charCodeAt();
});

// 정규표현식 - str 알파벳 소문자만 남기고 숫자, 기호 등 제거
str.replace(/[^a-z*]/g, '');

//

//// 함수 - 소수 확인
// n을 Math.sqrt(n) 까지 나눈 나머지가 0이 존재하면 안됨
const chkPrime = (n) => {
  if (n === 0) return false;
  if (n === 1) return false;
  else if (n === 2) return true;
  else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
};

//

//// 정렬
arr.sort(function (a, b) {
  if (a > b) return 1; // 1 이면 바꾼다.
  if (a === b) return 0; // 0 이면 그대로.
  if (a < b) return -1; // -1 이면 규칙대로.
});

// 스트링으로 합쳐서 가장 큰 숫자
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}

//

//

//// 이진 검색 - 결정 알고리즘
// lt: 맨 왼쪽 / rt: 맨 오른쪽 / mid: lt와 rt의 중간
// arr의 mid 값이 count() 함수의 조건 만족할때까지 검색
while (lt <= rt) {
  mid = Math.floor((lt + rt) / 2);
  if (count(arr, mid) >= Condition) {
    res = mid;
    lt = mid + 1; // mid는 이미 확인했기때문에 rt = mid - 1 / lt = mid + 1
  } else rt = mid - 1;
}

//

//// 부분 집합
// 원소를 넣을지 말지 2갈래로 탐색
// arr 의 모든 부분 집합 res 에 추가
let ch = Array.from(Array(arr.length));
let res = [];
function DFS(i) {
  if (i === arr.length) {
    let tmp = []; // 아래 tmp 추가 for문 초기화떄문에 위치 여기
    for (i in ch) {
      // 체크배열이 1인 요소만 tmp에 추가
      if (ch[i] === 1) {
        tmp.push(arr[i]);
      }
    }
    res.push(tmp);
  } else {
    ch[i] = 1;
    DFS(i + 1);
    ch[i] = 0;
    DFS(i + 1);
  }
}
DFS(0);

//

//// 중복 순열
// arr 에서 중복을 허락하여 (arr.length - 1) 개 뽑아 res 에 추가
let res = [];
let tmp = [];
function DFS(L) {
  if (L === arr.length - 1) {
    res.push(tmp.slice());
  } else {
    for (let i = 0; i < arr.length; i++) {
      tmp[L] = arr[i];
      DFS(L + 1);
    }
  }
}
DFS(0);

//

//// 순열
// arr을 (arr.length - 2) 개 뽑는 모든 순열 res 에 추가
let res = [];
let tmp = [];
let ch = Array.from(Array(arr.length + 1), () => 0);
function DFS(L) {
  if (L === arr.length) {
    res.push(tmp.join(''));
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (ch[i] === 0) {
        tmp[L] = arr[i];
        ch[i] = 1;
        DFS(L + 1);
        ch[i] = 0;
      }
    }
  }
}
DFS(2);

//

//// 조합
// arr을 r 개 뽑는 모든 조합 res에 추가
function combi(arr, r) {
  let res = [];
  let tmp = Array.from({ length: r }, () => 0);
  function DFS(L, s) {
    if (L === r) {
      res.push(tmp.slice());
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

//

//// 그래프 탐색 - 인접행렬
// 노드 갯수 n개 (5) 의 arr 로 연결된 그래프를 start에서 end까지 이동하는 경로 res에 추가
let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
let n = 5; // 노드 갯수

let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
let ch = Array.from({ length: n + 1 }, () => 0);

// 그래프 정보를 인접 행렬에 반영
for (let [a, b] of arr) {
  graph[a][b] = 1;
}

let res = [];
let path = [];
function DFS(start, end) {
  if (start === end) {
    res.push(path.slice());
  } else {
    for (let i = 1; i <= n; i++) {
      if (graph[start][i] === 1 && ch[i] === 0) {
        ch[i] = 1;
        path.push(i);
        DFS(i, end); // 이렇게 가야함...
        ch[i] = 0;
        path.pop();
      }
    }
  }
}
path.push(1);
ch[1] = 1;
DFS(1, 4);

//

//// 그래프 탐색 - 인접 리스트
// 노드 갯수 n개 (5) 의 arr 로 연결된 그래프를 1에서 k까지 이동하는 경로 res에 추가
let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
let n = 5; // 노드 갯수
let k = 4; // 목적지

let graph = Array.from(Array(n + 1), () => Array()); // n+1 행 2차 빈배열
let ch = Array.from(Array(n + 1), () => 0);
let res = [];

// 그래프 정보를 인접 리스트에 반영
for ([a, b] of arr) {
  graph[a].push(b);
}

let tmp = [];
function DFS(v) {
  if (v === k) {
    res.push(tmp.slice());
  } else {
    for (let i = 0; i <= graph[v].length; i++) {
      let vi = graph[v][i];
      if (vi && ch[vi] === 0) {
        // 배열을 직접 돌기때문에 i = 0 부터 돌아야함
        // for (let vi of graph[v]) {
        ch[vi] = 1;
        tmp.push(vi);
        DFS(vi); // 이렇게 가야함...
        tmp.pop(vi);
        ch[vi] = 0;
      }
    }
  }
}
tmp.push(1);
ch[1] = 1;
DFS(1);

//

//// 미로 탐색 - DFS
// arr (0, 0) 에서 (6, 6) 까지 미로 탈출 경로를 res에 추가
let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let res = [];

let tmp = [];
function DFS(x, y) {
  if (x === 6 && y === 6) res.push(tmp.slice());
  else {
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && arr[nx][ny] === 0) {
        // 경계선 처리를 위해 dx, dy 사용 / +1, -1 과 같이 하면 상황에 따른 범위 설정 힘듦 / 조합된 변수는 뒤로 (arr[nx][ny])
        arr[nx][ny] = 1;
        tmp.push([nx, ny]);
        DFS(nx, ny);
        arr[nx][ny] = 0;
      }
    }
  }
}
arr[0][0] = 1;
DFS(0, 0);

//

//// 최소 계산 횟수 - BFS
//s (1) 에서 +1/-1/+5 로 e (14) 되는 최소 횟수 res에 출력
let s = 1;
let e = 14;

let res = 0;
let ch = Array.from({ length: 10001 }, () => 0);
let dis = Array.from({ length: 10001 }, () => 0);

let queue = [];
queue.push(s);
ch[s] = 1;
dis[s] = 0;
while (queue.length) {
  let x = queue.shift();
  for (let nx of [x - 1, x + 1, x + 5]) {
    if (nx === e) {
      res = dis[x] + 1;
      break;
    }
    if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
      ch[nx] = 1;
      queue.push(nx);
      dis[nx] = dis[x] + 1;
    }
  }
}

//// 섬 확인 - BFS
// arr 섬 갯수 res에 출력
let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

let res = 0;
let n = arr.length;
let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
let dy = [0, 1, 1, 1, 0, -1, -1, -1];
let queue = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1) {
      arr[i][j] = 0;
      queue.push([i, j]);
      res++; // 큐 호출 갯수 = 섬 갯수
      while (queue.length) {
        let x = queue.shift();
        for (let k = 0; k < 8; k++) {
          let nx = x[0] + dx[k];
          let ny = x[1] + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
            arr[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
}

//// 섬 확인 - DFS
// arr 섬 갯수 res에 출력
let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

let res = 0;
let n = arr.length;
let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
let dy = [0, 1, 1, 1, 0, -1, -1, -1];
function DFS(x, y) {
  arr[x][y] = 0;
  for (let k = 0; k < 8; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
      DFS(nx, ny);
    }
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1) {
      arr[i][j] = 0;
      res++;
      DFS(i, j);
    }
  }
}

//

//// 계단 오르는 모든 경우의 수 - DP
// +1 / +2 로 7 만드는 최소 횟수 res에 출력
const n = 7;
let res = 0;
let dy = Array.from({ length: n + 1 }, () => 0);

dy[1] = 1;
dy[2] = 2;
for (let i = 3; i <= n; i++) {
  dy[i] = dy[i - 2] + dy[i - 1];
}
res = dy[n];

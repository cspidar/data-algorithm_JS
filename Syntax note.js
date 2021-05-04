////
////
////

//// = 조건
/// 조건1? 입력값1 : 조건2? 입력값2 : ...조건? ...입력값
const ans = a > b ? 1 : a > c ? 2 : 3;
if (a > b) {
  ans = 1;
} else if (a > c) {
  ans = 2;
} else ans = 3;

//// = Math, 숫자
// 몫, 나머지
/// 몫: 소수 -> 정수형 변환
/// parseInt(n)
//> 2
/// 나머지
/// a % b
13 % 5;
//> 3
// 올림 Math.ceil(n), 내림 Math.floor(n), 반올림 Math.round(n)

//// = str
// 변수 선언 시 자료형을 넣어주는게 좋다
let x; // (X) 숫자 입력하면 str로 변환됨
let x = 0; // (O)

//// = Number
// 충분히 큰/작은 숫자 변수 선언 - 숫자 계산
const n = Number.MAX_SAFE_INTEGER;
const n = Number.MIN_SAFE_INTEGER;

//// = Math
// arr의 최소값 (배열 자체로 넣으면 NaN 반환)
const n = Math.min(...arr);
const n = Math.min.apply(null, arr);
// arr의 최대값 (배열 자체로 넣으면 NaN 반환)
const n = Math.max(...arr);
// 절대값
Math.abs(n);

//// = arr
// arr의 i 를 splice()로 직접 지우면 뒤의 인덱스가 변하기 때문에 연속 사용 시 주의해야 함, slice()로 원본 배열은 유지한 채 새로운 배열로 반환하는 것이 더 이상적

//// = arr, str
// arr을 변수 선언하면 얕은 복사로 참조만 복사되어 변수를 조작하면 원본도 변경되지만 str은 변수 선언을 하면 string 자체가 복사 (깊은 복사) 되어 원본이 변경되지 않는다.
const arr = [1, 2, 3];
const str = '123123';
//스프레드 연산자를 써서 깊은 복사 하는게 좋은듯 [...arr].sort()

//// = str
// str 정규표현식 사용하여 replace로 교체
str.replace(/A/g, 'B'); // 'A' 를 글로벌 (g) 로 'B'로 교체

//// = 순회
// for in: 대상의 값을 순회 (obj, str(인덱스), arr(인덱스), map(인덱스), set(인덱스) 가능) for of 가 가능 한 대상에게 적용하면 값 대신 인덱스 제공
// for of: 대상의 값을 순회 (arr, str, map, set 가능)
for (i in arr) {
  arr1.push(arr[i] + 1);
}
for (i of arr) {
  arr1.push(i + 1);
}
// for of/in - if 일괄로 분기? 맞음, 분기 한번에 통으로 들어감, 순회 대상의 이터레이터를 사용하기 때문, for in/of 안에 if/else 문 사용 못함 / for of, 인덱스 관련 일괄계산 = for in
//////////// for of/in 도 개별로 분기됨, 좀더 테스트 해보고 이상 없으면 위에 지울 예정
// for - if 개별로 분기? 개별로 분기됨

//// = str
str.charCodeAt(); // ascii num으로 변경
String.fromCharCode(n); // ascii num을 str 반환
// 영어 대문자 65 ~ 90
// 영어 소문자 97 ~ 122

//// = 논리연산자
// && : and (논리곱)
// || : or (논리합)
// ! : not (논리 부정)
n == 1 || 2; // 이렇게 입력하면 인식 못함
n == 1 || n == 2; // 이렇게 해야 인식함.... (다른 방법 없나?..)
// t: true, f: false
t && t == t;
t && f == f;
f && f == f;
t || t == t;
t || f == t;
f || f == f;
!t == f;
!f == t;

//// = str
// 문자열 일부 출력
//str.substring(start, end) start부터 end-1 인덱스까지 반환

//// = Set
// Set 생성 형태
Set(str); // {'s1', 's2', '...s'}
Set(arr); // {i1, i2, ...i}
Set(...arr); // 불가

//// = str, arr
// 중복 문자 / 배열 원소 찾기
str.indexOf(str[i]); // str[i] 의 반복을 무시하고 고유 인덱스를 반환
i != str.indexOf(str[i]); // 반복되는 항목

//// = arr
// arr.filter() index 넣는건 옵션 파라미터
arr.filter((p) => p < 10);
arr.filter((item, index) => item[index]);

//// = arr
// arr[-n] 은 undefined
// n - undefined 은 NaN

//// = arr
// 2차 배열
// arr[행][열]

//// = 조건
// undefined 와 크기 비교는 무조껀 false

//// = console
// 브라우저 콘솔에 배열 표형태로 정리하여 출력
!console.table(arr);

//// = 조건
// flag 활용 - 여집합
// flag = true 선언 후 for - if 에 불만족 조건 걸고 불만족 시 flag = false 후 break, for 문 밖에서 flag 여전히 true인지 확인
let ans = 'NO';
let flag = true;
for (i = 0; i < str.length / 2; i++) {
  if (lstr[i] != lstr[str.length - 1 - i]) {
    flag = false;
    break;
  }
}
if (flag) ans = 'YES';

//// = Math
Math.max(...arr); // 배열이 아님에 주의
Math.min(...arr); // 배열이 아님에 주의

//// = arr
// 문자열화 - 배열 원소의 숫자 자릿수별 인덱스, 원소 길이 (자릿수) 사용 을 위해 적용
arr.map((p) => p.toString());
// 숫자화, 첫자리 0 제거
arr.map((p) => Number(p));

//// = 코드 - 소수 확인
// n Math.sqrt(n) 까지 나눈 나머지가 0이 존재하면 안됨
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

//// = str
// 알파벳 소문자만 남기고 숫자, 기호 등 제거
str.replace(/[^a-z]/g, '');

//////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////////

//// = Number
isNaN(s); // 숫자면 false, 아니면 true

// str -> n
Number(n);
parseInt(str);

//// = arr
// arr.indexOf([1, 2]) 와 같은 2차배열 인덱스는 못찾음

//// = 순회
// sort n개 만 돌려도 시간복잡도 NlogN

//// = 순회
// 후치 연산
res.push(arr[i++]); // arr[i] 를 푸시 하고 i++

//// = Set, arr
// set.has(v) / arr.includes(v)

//// = obj, arr
// obj <-> arr 변환
/// obj -> arr
Object.entries(obj);
/// arr -> obj
Object.fromEntries(arr);

//// = Map
// Map 의 value 연산
map.set(k, (map.get(k) += 1)); // ( X ) += 이 아님, 값을 셋 하는것
map.set(k, map.get(k) + 1); // ( O )

//// = Map
// Map 순회
for ([key, value] of map) {
}

//// = func
// 화살표 함수는 항상 익명, 생성자로 사용 불가

//// = func
// 함수 선언 형태
function func(p) {
  return p + 1;
}
const func = function (p) {
  return p + 1;
};
const fullname = function name(p) {
  return p + 1;
};

//// = 조건
// if 문 조건 안에서 배열 직접조작 하면 원본 배열 수정됨
if (arr.pop()) {
}

//// = 조건
// 0 == false : true
// 0 === false : false

// 슬라이딩 윈도우
// 반복문을 병렬적으로 사용하는건 시간복잡도에 상관없음.
let answer,
  sum = 0;
for (let i = 0; i < k; i++) sum += arr[i];
answer = sum;
for (let i = k; i < arr.length; i++) {
  sum += arr[i] - arr[i - k];
  answer = Math.max(answer, sum);
}

//// = 코드 - 슬라이딩 윈도우
// 슬라이딩 윈도우 형태 반복문의 구조
// 순회 길이가 3이라고 하면 반복문을 적용할 대상을 길이 2, rt = 2 로 세팅
/// for 문
// rt 더해 대상 길이을 3으로 만들고 rt++
// 평가
// lt 빼서 대상 길이 2로 만들고 lt++

//// = Map
// 두 Map 일치 확인 함수
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
/// arr -> map 변환
const map = new Map([
  [k1, v1],
  [k2, v2],
  [...k, ...v],
]);
/// map ->> arr 변환 (펼침 연산자)
const map = [...map];
//> [[k1, v1], [k2, v2], [...k, ...v]]

//// = 조건
// 병렬 if = 순차적으로 조건 확인
// if / else if = 분기점

//// = str
// eval(str)
// str 수식 계산
const res = eval('1+2'); // 3

//// = Number
// 숫자 확인
if (!isNaN(n)) {
}

//// = 코드
// 괄호 (조건쌍) 이 들어가는 문제는 80% 스택

//// = str
// str에 바로 push 등등 배열 메소드 사용 불가, += str[i] 같은것만 가능

//// = arr
// arr의 i1과 i2의 value 서로 교체
[arr[i1], arr[i2]] = [arr[i2], arr[i1]];

//// = arr
// 2차 배열의 정렬
arr.sort((a, b) => a[1] - b[1]).sort((a, b) => a[0] - b[0]);
// a = arr[i] 가 기본, a[1] = arr[i][1]

//// = arr
// 2차 배열 정렬 / 0번 인덱스 같을때 1번 인덱스로 정렬
arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});
// 1번 인덱스 같을때 0번으로 정렬
arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

//// = arr
// map과 foreach의 차이
/// forEach 아무것도 반환 안함, 다른 객체에 트리거 역할
/// map 배열 복사해서 반환
//forEach()는 데이터를 변경하는것이 아닌 외부 객체에 작업 수행에 적합

//// = arr
//메소드 체인 map().flat() 안됨

/////////////////////////////////////////////////////////////////
//// = 코드 - 이진 검색 - 결정 알고리즘
// 이진 검색 - 결정 알고리즘 기본 형태
/// count()로 arr에서 mid값에 따른 결과 반환
const arr = [...p1];
while (lt <= rt) {
  mid = Math.floor((lt + rt) / 2);
  if (count(arr, mid) >= p2) {
    res = mid;
    lt = mid + 1; // mid는 이미 확인했기때문에 rt = mid - 1 / lt = mid + 1
  } else rt = mid - 1;
}

//// 코드 - 재귀
// 재귀 - 콜스택
function DFS(L) {
  if (L == 0) return;
  else {
    console.log(L);
    DFS(L - 1);
  }
}
/// 둘간 차이
function DFS(L) {
  if (L == 0) return;
  else {
    DFS(L - 1);
    console.log(L);
  }
}

//// 코드 - 재귀
// 이진트리 DFS
// 전위순회 출력 : 1 2 4 5 3 6 7
console.log(v);
DFS(v * 2);
DFS(v * 2 + 1);
// 중위순회 출력 : 4 2 5 1 6 3 7
DFS(v * 2);
console.log(v);
DFS(v * 2 + 1);
// 후위순회 출력 : 4 5 2 6 7 3 1
DFS(v * 2);
DFS(v * 2 + 1);
console.log(v);

//// = str
// str 공백 제거
str.trim();

//// = arr
// n 길이의 기본값 0 배열 만들기
let ch = Array.from({ length: n }, () => 0);
const arr = Array.from(Array(n), () => 0);
// n 길이의 기본값 0 2차 배열 만들기
let dy = Array.from(Array(35), () => Array(35).fill(0));

//// = 코드 - DFS - 이진트리
// 부분집합
// 이진검색 DFS / 원소를 넣을것이냐 말것이냐 (이진트리) 로 전체 탐색
/// arr 부분 집합 배열을 res 배열에 추가
let ch = Array.from(Array(arr.length));
let res = [];
function DFS(i) {
  if (i === arr.length) {
    let tmp = [];
    for (i in ch) {
      if (ch[i] === 0) {
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

// 부분집합 같은 합 확인 - sum 파라미터
let answer = 'NO';
function DFS(L, sum) {
  if (flag) return;
  if (L === p2) {
    if (total - sum === sum) {
      answer = 'YES';
      flag = 1;
    }
  } else {
    DFS(L + 1, sum + arr[L]); // '외부 변수일때는 += / 함수 파라미터일때는 +'
    DFS(L + 1, sum); // 파라미터가 그대로인것 전달 해야함,
  }
}
DFS(0, 0);

//// = arr
// arr.filter((p)=> p < 10) 은 새로운 배열 반환 / sort는 배열 직접 변경, 전체 구분 한번 다시 볼 필요 있을듯

//// = 재귀
// 재귀에서 루프를 컷해야 할때는 최상단에 탈출조건 if문을 병렬로 추가하고 리턴

// 배열 깊은 복사 방법 확인 필요
const arr2 = arr.slice(); // 고차 배열 복사 안됨
const arr2 = [...arr]; // 고차 배열 복사 안됨
const arr2 = Object.assign([], arr); // 고차 배열 복사 안됨
// Lodash의 cloneDeep 함수 사용
// JSON.parse()와 JSON.stringify() 함수 사용
// forEach로 되나? (안됨)

// arr.filter((p)=> p < 10) 은 새로운 배열 반환 / sort는 배열 직접 변경, 전체 구분 한번 다시 볼 필요 있을듯
// 부분집합 = 이진검색 DFS / 이런식으로 유형 정리 필요

// 여러 값중 최대값으로 값 유지
res = Math.max(res, n1, n2, ...n);

// 코드 - 재귀 - 제한시간 내 점수 최대값
function sol(p1, p2) {
  let arr = [...p1];
  let limit = p2[1];
  const res = [];
  function DFS(i, time, score) {
    if (time > limit) return;
    if (i === arr.length) {
      res.push(score);
    } else {
      DFS(i + 1, time + arr[i][1], score + arr[i][0]);
      DFS(i + 1, time, score);
    }
  }
  DFS(0, 0, 0);
  res.sort((a, b) => b - a);
  return res[0];
}

// 중복 허락하여 [1,2,3, ...n] 중 m개 뽑기
function DFS(L) {
  if (L === n) {
    // 차수 (뽑는 횟수)
    console.log(gr);
  } else {
    // 분기 1, 2, 3, ... (후보군 갯수)
    for (let v = 1; v <= m; v++) {
      // let v 하고 안하고 차이 있음!!!!!
      gr[L] = v;
      DFS(L + 1);
    }
  }
}
DFS(0);

// arr 내 금액별 동전 합이 sum 되는 최소 갯수 찾기 + 엣지 커팅
function DFS(L, sum) {
  if (sum > change) return;
  if (L >= ans) return; // 최소값 이하 레벨 탐색 자르기
  if (sum === change) {
    console.log(L, sum);
    ans = Math.min(ans, L);
  } else {
    for (let i = 0; i < arr.length; i++) {
      DFS(L + 1, sum + arr[i]);
    }
  }
}
DFS(0, 0);

// for 문과 재귀의 차이점
// 1번 뽑을때마다 for문 차수가 1개씩 증가(i, j, k, ...)
// 뽑는 숫자가 변하면 코드가 바뀌어야한다. / 변수이면 구현 불가

// 중복 없이 [1,2,3, ...n] 중 m개 뽑기 (순열, 외워야함)
let tmp = [];
let res = [];
let ch = Array.from(Array(arr.length + 1), () => 0);
function DFS(L) {
  if (L === arr.length) {
    console.log(res);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (ch[i] === 0) {
        res[L] = arr[i];
        ch[i] = 1;
        DFS(L + 1);
        ch[i] = 0;
      }
    }
  }
}
DFS(0);

// 조합 nCr 값 계산 (nCr = n-1Cr + n-1Cr-1)
function solution(n, r) {
  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  return DFS(10, 3);
}
// 조합 nCr 값 계산 - 메모이제이션
function sol(n, r) {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    // else dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    // 둘의 차이...
  }
  answer = DFS(n, r);
  return answer;
}

// 수열 추측하기
// 1부터 n까지 파스칼 삼각형이 f가 되는 수열 출력
function solution(n, f) {
  // 조합 nCr 계산 - 메모이제이션
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  //
  let answer,
    flag = 0;
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열
  let arr = Array.from({ length: n }, () => 0); // 1부터 n까지
  let pascal = Array.from({ length: n }, () => 0); // 자릿수별 파스칼삼각형 계수
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = arr.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          arr[L] = i;
          DFS(L + 1, sum + pascal[L] * arr[L]);
          ch[i] = 0;
        }
      }
    }
  }
  // 자릿수별 파스칼삼각형 계수 구하기
  for (let i = 0; i < n; i++) {
    pascal[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

// 조합 nCr 각 원소 배열 출력
function solution(n, r) {
  let answer = [];
  let tmp = Array.from({ length: r }, () => 0);
  function DFS(L, s) {
    if (L === r) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        // s 부터 도는게 포인트
        tmp[L] = i;
        DFS(L + 1, i + 1); // 다음 s 를 i + 1 로 세팅
      }
    }
  }
  DFS(0, 1);
  return answer;
}

// 조합 nCr 각 원소의 합이 m의 배수인 경우의 수
function solution(n, r, arr, m) {
  let answer = 0;
  function DFS(L, s, sum) {
    if (L === r) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

// 그래프 - 경로 탐색 - 인접 행렬
// v1 [i1,i2, ...i]
// v2 [i1,i2, ...i]
// v  [i1,i2, ...i]
function solution(n, arr) {
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // n+1 x n+1 배열 0으로 채움
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열 (0으로 꼭 채워야함)
  let path = [];
  // 그래프 정보를 인접 행렬에 반영
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          // graph 경로가 있고 체크배열이 0일때
          ch[i] = 1;
          path.push(i); // 이동가능한 경로인 i를 푸시하고
          DFS(i); // DFS(i) 로 i행 탐색 실행
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1); // 1에서 시작하기 때문에 미리 추가
  ch[1] = 1;
  DFS(1);
  return answer;
}

// 그래프 - 경로 탐색 - 인접 리스트
// v1 [1, 2, 3]
// v2 [1]
// v  [2, 3]
function solution(p1, p2) {
  const arr = [...p1];
  const n = Number(p2);
  let graph = Array.from(Array(n + 1), () => Array()); // n+1 행 2차 빈배열
  let ch = Array.from(Array(n + 1), () => 0);
  let path = [];

  // 그래프 정보를 인접 리스트에 반영
  for ([a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) {
      console.log(path);
    } else {
      for (let i = 0; i <= graph[v].length; i++) {
        let vi = graph[v][i];
        if (vi && ch[vi] === 0) {
          // 배열을 직접 돌기때문에 i = 0 부터 돌아야함
          // for (let vi of graph[v]) {
          ch[vi] = 1;
          path.push(vi);
          DFS(vi);
          path.pop(vi);
          ch[vi] = 0;
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  DFS(1);
  return;
}

// n차 배열 내부 탐색
for (let v of graph[n]) {
}

// 행 [a, b] 을 반환값으로 순회
for (let [a, b] of arr) {
  graph[a].push(b);
}

// 미로 탐색
function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          // 경계선 처리를 위해 dx, dy 사용 / +1, -1 과 같이 하면 상황에 따른 범위 설정 힘듦 / 조합된 변수는 뒤로 (board[nx][ny])
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

// BFS 1~8 출력
function solution() {
  let answer = '';
  let queue = [];
  queue.push(1);
  while (queue.length) {
    console.log(queue);
    let v = queue.shift();
    answer += v + ' ';
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

// BFS +1/-1/+5 로 14되는 최단 횟수
// 1번 집어넣고 while 안에서 shift 하여 변수 선언,
// shift 한 변수에 대한 관계를 다시 push 하고 shift
// ch 배열 (중복 방지)과 dis 배열 (최소 경로 기록) 사용
function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

// 맵 탐색 경계조건 순서에 따라 왜 달라지지?
// if (A && B && C) 와 if (C && A && B) 의 차이 왜?
// C가 A, B 를 포함하는 요소이기 때문에 앞에서 미리 제한조건 설정 해야함.
if (nx >= 0 && nx <= n - 1 && ny >= 0 && ny <= n - 1 && maze[nx][ny] === 0) {
}
if (maze[nx][ny] === 0 && nx >= 0 && nx <= n - 1 && ny >= 0 && ny <= n - 1) {
}

// DFS - 섬찾기
// DFS 호출 횟수 != 섬확인 true 수 왜?
function solution(island) {
  const n = island.length;
  let dx = [1, 0, -1, 0, 1, 1, -1, -1];
  let dy = [0, 1, 0, -1, 1, -1, -1, 1];
  let cnt = 0;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (island[i][j] === 1) {
        cnt++;
        island[i][j] = 0;
        DFS(i, j);
      }
    }
  }
  function DFS(x, y) {
    if (checkIsland(x, y)) {
      // cnt++;
      console.log(x, y);
    } else {
      for (let k = 0; k < dx.length; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (
          nx >= 0 &&
          nx <= n - 1 &&
          ny >= 0 &&
          ny <= n - 1 &&
          island[nx][ny] === 1
        ) {
          island[nx][ny] = 0;
          DFS(nx, ny);
        }
      }
    }
  }
  function checkIsland(x, y) {
    let res = true;
    for (let k = 0; k < dx.length; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        nx >= 0 &&
        nx <= n - 1 &&
        ny >= 0 &&
        ny <= n - 1 &&
        island[nx][ny] === 1
      ) {
        // console.log(x, y);
        res = false;
      }
    }
    return res;
  }
  return cnt;
}
/// 강의 풀이 (체크 함수 필요없음, 호출 숫자 = 섬 숫자)
function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++;
        DFS(i, j);
      }
    }
  }
  return answer;
}

// BFS - 섬찾기
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    if (island[i][j] === 1) {
      cnt++;
      queue.push([i, j]);
      BFS(i, j);
    }
  }
}
function BFS(x, y) {
  island[x][y] = 0;

  while (queue.length) {
    let s = queue.pop();
    for (k = 0; k < dx.length; k++) {
      let ns = [s[0] + dx[k], s[1] + dy[k]];
      if (
        ns[0] >= 0 &&
        ns[0] < n &&
        ns[1] >= 0 &&
        ns[1] < n &&
        island[ns[0]][ns[1]] === 1
      ) {
        island[ns[0]][ns[1]] = 0;
        queue.push(ns);
      }
    }
  }
}
return cnt;

// DP - 계단 오르기
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}

function solution(p1) {
  const quiz = [...p1];
  // const time = Number(p2);
  let tmp = [0, 0]; // 0 으로 초기화 안하면 계산값 NaN
  let res = [];
  function DFS(i) {
    if (tmp[1] > 20) return;
    if (i === 5) {
      // console.log(tmp);
      res.push(tmp.slice()); // slice 안하면 복사 안되고 참조만 복사
      return;
    } else {
      tmp[0] += quiz[i][0];
      tmp[1] += quiz[i][1];
      DFS(i + 1);
      tmp[0] -= quiz[i][0];
      tmp[1] -= quiz[i][1];
      DFS(i + 1);
    }
  }
  DFS(0);
  res.sort((a, b) => b[0] - a[0]);
  return res[0][0];
}

// 큐 스택
// 고차 배열 이런 표현 가능
let a = list.shift()[1];

// 정렬
arr.sort(function (a, b) {
  if (a > b) return 1; // 1 이면 바꾼다.
  if (a === b) return 0; // 0 이면 그대로.
  if (a < b) return -1; // -1 이면 규칙대로.
});
/// 스트링으로 합쳐서 가장 큰 숫자
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}

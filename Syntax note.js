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
  if (n === 1) return false;
  else if (n === 2) return true;
  else {
    for (i = 2; i <= Math.sqrt(n); i++) {
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
      if (!p2.has(k) || p2.get(k) !== v) return false; // p2에 p1의 k가 있는지 확인 || p2의 v와 p1의 v가 같은지 확인
    }
    return true;
  }
}

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
//forEach()는 Array안에 데이터를 변경하려는 것이 아니라 데이터베이스에 저장하거나 로그아웃하는 것과 같은 작업에 유용

//// = arr
//메소드 체인 map().flat() 안됨

//// = 코드 - 이진 검색 - 결정 알고리즘
// 이진 검색 - 결정 알고리즘 기본 형태
/// 별도 함수(count)로 arr에서 mid값에 따른 결과 반환
const arr = [...p1];
while (lt <= rt) {
  mid = Math.floor((lt + rt) / 2);
  if (count(arr, mid) >= p2) {
    res = mid;
    lt = mid + 1; // mid는 이미 확인했기때문에 rt = mid - 1 / lt = mid + 1
  } else rt = mid - 1;
}

//// = 조건
// if 내 조건 계산과 대소 비교에도 괄호 넣어야함
if ((sum += songs[i]) > capa) {
}
// += 와 + 혼동 주의
if (sum + songs[i] > capa) {
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
// n+1 길이의 기본값 0 배열 만들기
let ch = Array.from({ length: n + 1 }, () => 0);
const arr = Array.from(Array(n + 1), () => 0);

//// = 코드 - DFS - 이진트리
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

//// = 코드 - DFS - 이진트리
// arr 부분집합 같은 합 갯수 - 체크배열 (ch)
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

// 부분집합 = 이진검색 DFS / 원소를 넣을것이냐 말것이냐 (이진트리) 로 전체 탐색

//// = arr
// arr.filter((p)=> p < 10) 은 새로운 배열 반환 / sort는 배열 직접 변경, 전체 구분 한번 다시 볼 필요 있을듯

//// = 재귀
// 재귀에서 루프를 컷해야 할때는 최상단에 탈출조건 if문을 병렬로 추가하고 리턴

// 배열 깊은 복사 방법 확인 필요
// arr.filter((p)=> p < 10) 은 새로운 배열 반환 / sort는 배열 직접 변경, 전체 구분 한번 다시 볼 필요 있을듯
// 부분집합 = 이진검색 DFS / 이런식으로 유형 정리 필요

// 여러 값중 최대값으로 값 유지
res = Math.max(res, n1, n2, ...n);

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

// 고차 배열 깊은 복사
const arr2 = arr1.slice();

// 중복 없이 [1,2,3, ...n] 중 m개 뽑기 (순열, 외워야함)
function DFS(L) {
  if (L === m) {
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

// 조합 계산 nCr = n-1Cr + n-1Cr-1
function solution(n, r) {
  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  return DFS(10, 3);
}
// 메모이제이션
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

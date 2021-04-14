

// [문법 - 일반 - ]
// [문법 - 배열 - ]
// [문법 - 일반 - 순회]
// [Math 메소드 - 숫자]
// [Math 메소드 - 배열]


// [문법 - 일반 - 삼항 연산자]
/// 조건1? 입력값1 : 조건2? 입력값2 : ...조건? ...입력값
const ans = a > b ? 1 : a > c ? 2 : 3
if (a > b) {
  ans = 1;
}
else if (a > c) {
  ans = 2;
}
else ans = 3;

// [Math 메소드 - 숫자]
// 몫, 나머지
/// 몫: 소수 -> 정수형 변환 
/// parseInt(n)
Math.floor (13 / 5)
//> 2
/// 나머지
/// a % b
13 % 5
//> 3

// [Math 메소드 - 숫자]
// 올림 Math.ceil(n), 내림 Math.floor(n), 반올림 Math.round(n)

// = [문법 - 일반 - str]
// 변수 선언 시 자료형을 넣어주는게 좋다
let x // (X) 숫자 입력하면 str로 변환됨
let x = 0; // (O) 

// 충분히 큰 숫자 변수 선언 - 숫자 계산
const n = Number.MAX_SAFE_INTEGER

// = Math 메소드 - 배열
// arr의 최소값 (배열 자체로 넣으면 NaN 반환)
const n = Math.min(...arr)
const n = Math.min.apply(null, arr)
// arr의 최대값 (배열 자체로 넣으면 NaN 반환)
const n = Math.max(...arr)

// [문법 - 일반 - arr]
// arr의 i 를 splice()로 직접 지우면 뒤의 인덱스가 변하기 때문에 연속 사용 시 주의해야 함, slice()로 원본 배열은 유지한 채 새로운 배열로 반환하는 것이 더 이상적

// [문법 - 일반 - arr, str]
// arr을 변수 선언하면 얕은 복사로 참조만 복사되어 변수를 조작하면 원본도 변경되지만 str은 변수 선언을 하면 string 자체가 복사 (깊은 복사) 되어 원본이 변경되지 않는다.
const arr = [1,2,3]
const str = '123123'

// [문법 - 일반 - str]
// str 정규표현식 사용하여 replace로 교체
str.replace(/A/g, 'B') // 'A' 를 글로벌 (g) 로 'B'로 교체

// [문법 - 일반 - str]
// str을 for of 로 순회는 가능하나 arr 메소드를 사용 가능한건 아님

// [문법 - 일반 - 순회]
// for in: 대상의 값을 순회 (obj, str, arr(인덱스), map(인덱스), set(인덱스) 가능) for of 가 가능 한 대상에게 적용하면 값 대신 인덱스 제공
// for of: 대상의 값을 순회 (arr, map, set 가능)
for (i in arr){ arr1.push(arr[i] + 1) }
for (i of arr){ arr1.push(i + 1) }



















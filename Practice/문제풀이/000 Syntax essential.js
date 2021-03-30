//=용어: 인덱스, <<요소, 매개변수, 인자 (arr.pop('인자'))>>, <<콜백 함수, 판별 함수, 연산 함수, 리듀서(reducer) 함수>>, 얕게 복사, 반환, 스트링(문자열) 
//=매개변수 (영어 표기): element, start, end, index
//유사 배열 객체 (array-like object): 인덱스와 length 존재
//반복 가능한 객체(iterable object)
// Object 와 Argument (매개변수? 인자?) 의 차이
//=구문: 자주 사용하지 않는 선택 매개변수에 대한 구문 (예. arr.forEach(callback(currentvalue[, index[, array]])[, thisArg]) 은 따로 싣지 않음

//=이터레이터 Iterator (반복기, 반복자, 반복을 수행하는 포인트/앵커?)
arr.entries().next().value;

//=이터러블 Iterable (반복가능, 반복이 가능한 대상: 배열, 객체, 스트링 등?)

//= 메소드
var obj = {
  a : "foo",
  b(){ return this.a; }
};
console.log(obj.b()); // "foo"


//=배열 프로퍼티
Array.prototype.length
arr.length //배열의 길이 (요소의 갯수) 반환


//=배열 메소드
Array.prototype.concat()
  arr1.concat(arr2, arr3, arrN) //배열 or 원소를 합쳐 새배열 반환

Array.prototype.copyWithin()
  arr.copyWithin(target, start, end) //start (옵션: 기본 0) 에서 end (옵션: 기본 this.length (현 배열의 길이)) 인덱스까지 값을 target 인덱스부터 복사.

Array.prototype.entries() //키-값 (배열: 인덱스-값) 이터레이터 반환 

Array.prototype.every() 
  arr.every((element) => element < 10) //판별 함수 조건 불만족 요소 발견 시 false, 모든 값이 참이면 true, 빈 배열은 무조건 true

Array.prototype.fill()
  arr.fill(value, start, end) //start (옵션: 기본 0) 에서 end (옵션: 기본 this.length (현 배열의 길이)) 인덱스까지 값을 value 로 채움

Array.prototype.filter()
  arr.filter(element => element.length >= 3) //판별 함수 만족 요소를 모아 새로운 배열로 반환

Array.prototype.find()
  arr.find(element => element >= 10) //판별 함수를 만족하는 첫번째 요소의 값을 반환, 없으면 undefined 반환
//인덱스 반환: findIndex()
//배열 요소의 위치: indexOf()
//배열 요소존재 확인: indexOf() 또는 includes()

Array.prototype.findIndex()
  arr.find(element => element >= 10) //판별 함수를 만족하는 첫번째 요소의 인덱스를 반환, 없으면 -1 반환

Array.prototype.flat() //고차 배열을 depth 만큼 차수 낮춤, 기본 depth: 1
  arr.flat([depth])
  arr.flat(1) // [1,[2]] -> [1,2] / [1,[2,[3]]] -> [1,2,[3]]
  arr.flat(2) // [1,[2,[3]]] -> [1,2,3]

Array.prototype.flatMap() //=map().flat(1)

Array.prototype.forEach()
  array1.forEach(element => element * 3) // 인덱스 0 부터 끝까지 연산 함수 수행
  //원본 배열 변형 X, 연산 함수가 변형할 수는 있음. undefine 반환: map()과 reduce()와는 달리 메서드 체인 중간에 사용 불가
  //중간에 멈출 수 없음. 멈춰야 한다면 forEach()는 적절한 방법이 아님.
  // 멈추는것이 가능한 항목들
    // 간단한 for 반복문
    // for...of, for...in 반복문
    // Array.prototype.every()
    // Array.prototype.some()
    // Array.prototype.find()
    // Array.prototype.findIndex()
    // every(), some(), find(), findIndex()는 판별 함수의 참/거짓 여부에 따라 반복의 종료 여부 결정.

Array.from()
Array.from('abcd') // ['a','b','c','d']
Array.from([1, 2, 3], x => x + x) //배열, 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사 하고 연산 함수를 적용 (옵션) 해 배열 반환
// 배열 반환 가능 항목: 스트링, Set, Map, 배열 형태의 argument

Array.prototype.includes()
arr.includes('a') // 배열의 요소를 탐색. 존재하면 true, 없으면 false 반환

Array.prototype.indexOf()
arr.indexOf(2, n) // 배열의 요소를 탐색. n 번째 인덱스 (옵션: 기본 1) 를 반환, 없으면 -1 반환.
// 배열의 모든 요소 인덱스 찾기
  var indices = [];
  var array = ['a', 'b', 'a', 'c', 'a', 'd'];
  var element = 'a';
  var idx = array.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
  // [0, 2, 4]
// 배열의 요소 확인 후 없으면 업데이트
  function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('새로운 veggies 컬렉션 : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' 은 이미 veggies 컬렉션에 존재합니다.');
    }
  }
  var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];
  updateVegetablesCollection(veggies, 'spinach');
  // 새로운 veggies 컬렉션 : potato, tomato, chillies, green-pepper, spinach
  updateVegetablesCollection(veggies, 'spinach');
  // spinach 은 이미 veggies 컬렉션에 존재합니다.

Array.isArray()
Array.isArray(arr) // 인자가 배열인지 판별. 참이면 true, 거짓이면 false 반환

Array.prototype.join()
arr.join(arr) // 배열 안의 모든 요소를 더해 문자열을 만듦. 요소가 undefined 또는 null이면 빈 문자열로 변환

Array.prototype.keys()
arr.keys()// 배열의 각 인덱스를 키 값으로 가지는 새로운 Array Iterator 객체를 반환.

Array.prototype.lastIndexOf()
arr.lastIndexOf() // indexOf() 와 달리 마지막 인덱스 반환. 없으면 -1 반환

Array.prototype.map()
arr.map(x => x * 2) // 배열의 요소에 연산 함수를 적용하여 새로운 배열을 반환. 원본 배열 변형 X, 연산 함수가 변형할 수는 있음. 
['1', '2', '3'].map(parseInt) // 두개 이상의 인자를 받는 연산 함수를 적용하면 기대와 다른 결과값이 나오므로 주의.

Array.of()
Array(1, 2, 3) // [1, 2, 3] 형태에 상관 없이 인자로 배열 생성
Array(3) // [ , , ] 인자의 길이를 갖는 배열 생성

Array.prototype.pop()
arr.pop() //배열의 마지막 요소를 제거하고 그 요소를 반환, 빈 배열은  undefined 반환

Array.prototype.push()
arr.push('a','b','c','n') // 배열의 끝에 하나 이상의 요소를 추가, 배열의 새로운 길이를 반환.
Array.prototype.push.apply(arr1, arr2)//두 배열을 합치려면 apply() 사용, apply에는 매개변수 숫자 제한이 있음

Array.prototype.reduce()
arr.reduce((acc, cur) => acc + cur)
arr.reduce((acc, cur, inx, src) => acc + cur, int)// 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
// acc: accumulator, cur: currentValue, idx: currentIndex, src: sourceArray, int: initialValue
// acc: 연산 함수의 반환값을 누적, int가 존재할경우 int에서 시작 
//int를 초기값으로 배열의 각 요소를 cur에 대입하여 연산 함수를 실행, acc에 연속적으로 저장한 뒤 반환


Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()




//=객체 메소드

Object.assign()
Object.create()
Object.defineProperties()
Object.defineProperty()
Object.entries()
Object.freeze()
Object.fromEntries()
Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.getPrototypeOf()
Object.prototype.hasOwnProperty()
Object.is()
Object.isExtensible()
Object.isFrozen()
Object.prototype.isPrototypeOf()
Object.isSealed()
Object.keys()
Object.preventExtensions()
Object.prototype.propertyIsEnumerable()
Object.seal()
Object.setPrototypeOf()
Object.prototype.toLocaleString()
Object.prototype.toString()
Object.prototype.valueOf()
Object.values()










//책 보고 스트링, 배열, 객체 메서드 총정리 필요


//=전체 팁



const arr = [1, 2, 3]
const obj = {a:1, b:2, c:3}
const str = string = 'abc'


`이터러블 iterable 반복 가능한 개체 (문자열, 배열, 객체) 
 원소별 순회가 가능하다. for of 구문이 동작한다. (a[n] or a[n][m] 형태로 접근 가능 의미?)
 `


//= 이터러블 메서드 (반복문을 줄일 수 있다)
arr.map()
arr.filter()
const filterArr = Arr.filter(a => a === '1')

arr.every()
arr.some()
arr.sort()
arr.find()
arr.forEach()

arr.reduce()

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initValue = 0;
const totalResult = numberList.reduce((initialValue, currentValue, currentIndex, array) => {
    return initialValue + currentValue;
}, initValue);
 0 + 1 + 2 + 3 + ... + 9 + 10 = 55 : 초기값 (0) 부터  

callback 함수에는 총 4개의 인자(argument) 를 지정 할 수 있는데
initialValue 는  reduce() 함수의 두번째 인자 initValue 값이 넘어온다. 
currentValue 는 numberList 의 첫번째 데이터  1 이 넘어온다.
currentIndex 는 reduce() 함수의 두번째 인자 인 initValue 를 사용했는지 안했는지에 따라 값이 달라진다.
initValue 를 사용했다면 0 부터, 사용하지 않았다면 1 부터 시작된다.
array 는 reduce() 함수가 호출 된 배열, 이 예제에서는 numberList가 된다.

const fruit = ['apple', 'grape', 'banana', 'apple', 'orange', 'grape', 'apple', 'orange'];
const result = fruit.reduce((object, currentValue) => {
    if (!object[currentValue]) {
        object[currentValue] = 0;
    }
    object[currentValue]++;
    return object;
}, {});

console.log(result);










= 자료구조

== 문자열 '' string
str[0] 과 같이 문자열처럼 글자 선택 가능, but str[0] = 'a' 와 같은 형태로 교체는 불가, 배열로 해야함

== 배열 [] array
번째는 0이 맨앞, 갯수는 0은 0개

=== 배열 만들기
var arr = new Array(); 배열선언
var arr = new Array("a","b","c","d");
var arr = [1,2,3,4];

=== 배열 값 입력, 변경
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

=== 배열 읽기
arr[0];  1
arr[1];  2
arr[2];  3

=== 고차 배열 접근
const arr = [[1,2], [3,4]]
console.log(arr[0][0]);  1

=== 고차 배열 + 객체 선언 및 정렬
for (i = 0; i < arr.length ; i++){
  objArr[i] = {name: arr[i][0],
                width : arr[i][1],
              gap: arr[i][1] - nation} 
}
objArr.sort((a , b) => {
 return a.gap - b.gap
})





=== 배열 스트링 -> 숫자화
arr.map(function(n){return parseInt(n, 10)};


== 객체 {} object
배열과 달리 순서를 보장하지 않는다.

=== 객체 만들기
var obj = new Object();
var obj = {a:1, b:2, c:3};

=== 객체 프로퍼티 추가, 변경 Property = key : value
obj.a = 1;  key 스트링 추가 불가, 일반 추가 가능
obj.b = 2;
obj.c = 3;
obj['a'] = 1;  key 스트링 추가 가능, 일반 추가 불가
obj['b'] = 2;
obj['c'] = 3;

=== 객체 프로퍼티 읽기
obj.a  1;
obj.b  2;
obj.c  3;
obj['a'];  1
obj['b'];  2
obj['c'];  3


=== 객체 메서드
Object.keys(obj) - 키가 담긴 배열을 반환합니다.
Object.values(obj) - 값이 담긴 배열을 반환합니다.
Object.entries(obj) - [key, value] 쌍이 담긴 배열을 반환합니다.
 







== 문자열 자르기 split() 함수  잘라서 배열로 만든다.
"string".split(separator, limit{갯수})
"string".split(" ", 2)  구분자 공백, 갯수제한 2
"string".split("")  한글자씩 자르기 (구분자가 없어도 스트링화('') 필요) (구분자를 없애면서 자른다)
스트링 내 한글자 선택은 a[0], a[1] 과 같은 형태로 가능

== 대문자 변환 toUpperCase() 함수
== 소문자 변환 toLowerCase() 함수
"string".toUpperCase()

== 문자열 숫자 변환 parseFloat("string") 함수  string 을 숫자로 변환

== 문자열 정수 변환 parseInt("string", n ) 함수  string 을 n진법 숫자로 변환

== 문자열로 변환 String( arr ) 함수  [1, 2, 3, 4] -> '1,2,3,4' 공백 없이 쉼표까지, 객체는 자신의 배열 속성 반환 "[object Object]"

== 문자열/배열 검색 indexOf()  주어진 값과 일치하는 값 첫 번째 인덱스, 존재하지 않으면 -1
== 문자열/배열 검색 includes()  있으면 true / 없으면 false
data.indexOf(str/arr);

== 배열 순서 반전 reverse() 

== 배열 원소 붙여 문자열화 join('')  (구분자가 없어도 스트링화('') 필요) (구분자를 추가하면서 합친다)
"string".join(separator, limit{갯수})
const reverseString = 'string'.split('').reverse().join('');  gnirts

== 문자열/배열 합치기 concat() 문자열들을 붙여 새로운 문자열로 반환
'str'.concat('a','b','c','d');  strabcd

== 배열 끝에 아이템 추가, 배열 크기 리턴 arr.push('600')

== 배열 끝에 아이템 제거, 제거 아이템 리턴 arr.pop()  [1,2,3,4,5].pop() => [1,2,3,4]  arr.pop() = 5
=== 반복문 안에서 반복 선언되어야 순차적으로 추출, 밖에있으면 맨 끝 아이템만 무한하게 추출한다.
    while (arr.length < 4){
        let score = ainput.pop();
        if (!arr.includes(score)){
        arr.push(score)
        }
        count += 1;
    }

== 배열 첫번째 아이템 제거, 제거 아이템 리턴 arr.shift()

== 배열 첫번째 아이템 추가, 배열 크기 리턴 arr.unshift('10')

== 배열 아이템 삭제후 추가 arr.splice(2, n, '10000'); 2번째부터 n개 아이템 삭제 후 '10000' 추가 

== 배열 복제 arr.slice(start, end)
  start:undefined인 경우: 0부터
        음수를 지정한 경우: 배열 끝에서부터의 길이 slice(-2) 마지막 2개의 요소 추출
        배열의 길이와 같거나 큰 수를 지정: 빈 배열 반환
    end:지정하지 않을 경우: 배열 끝까지 slice
        음수를 지정한 경우: 배열 끝에서부터의 길이 slice(2, -1)를 하면 세번째부터 끝에서 두번째 요소까지 추출
        배열의 길이와 같거나 큰 수를 지정한 경우: 배열의 끝까지 추출.


== 배열 일치 여부 확인  join() 으로 문자열화 하여 비교


== 배열 정렬 arr.sort(function(){})

=== 문자(ASCII)순 정렬
==== 대문자가 우선됨
arr.sort()   오름차순 : 1, 100, 4, Z, a, b

arr.sort(function(a, b) {  b, a, Z, 4, 100, 1
  if(a < b) return 1;
  if(a > b) return -1;  음수면 그대로: 리턴값 음수 앞 () = 인덱스 기능
  if(a === b) return 0;}

==== 대소문자 상관 없이 정렬
const arr = ['banana', 'b', 'Boy'];
arr.sort(function(a, b) {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();
  if(upperCaseA < upperCaseB) return -1;
  if(upperCaseA > upperCaseB) return 1;   양수면 바꿔
  if(upperCaseA === upperCaseB) return 0;
});

=== 오름 내림 차순 정렬  a - b 형태는 숫자 일때만 사용 가능
arr.sort(function(a, b) { return a - b; })  오름차순 : 1, 2, 3, a, b, c
arr.sort(function(a, b) { return b - a; })  내림차순 : c, b, a, 3, 2, 1

==== 배열 내 객체 정렬
var arr = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
]
===== value 문자열
arr.sort(function(a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});  문자열 오름차순 : 광희, 명수, 재석, 형돈
arr.sort(function(a, b) {
    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
      문자열 내림차순 : 형돈, 재석, 명수, 광희
});

===== value 숫자
arr.sort(function(a, b) {
    return a.age - b.age;
});  숫자 오름차순 : 13, 21, 25, 44
arr.sort(function(a, b) {
    return b.age - a.age;
});  숫자 내림차순 : 44, 25, 21, 13




== Math 메소드

Math.min()  최소값
Math.min(1, 10, -100, -10, 1000, 0);      -100

Math.max()  최대값
Math.max(1, 10, -100, -10, 100, 0);       100

Math.random()   0보다 크거나 같고 1보다 작은 무작위 숫자(random number)

Math.round()  반올림
Math.round(10.49);   10

Math.floor()  소수점 버림
Math.floor(10.95);   10

Math.ceil()  소수점 올림
Math.ceil(10.01);   11

Math.sin() 삼각함수 sin
Math.sin(Math.PI / 2);  1
 Math.PI : 상수: 파이

Math.abs(x) x의 절댓값을 반환함.
Math.cbrt(x) x의 세제곱근을 반환함.
Math.sqrt(x) x의 제곱근을 반환함.
Math.pow(x, y) x의 y승을 반환함.
Math.trunc(x) x의 모든 소수 부분을 삭제하고 정수 부분만을 반환함.

Math.clz32(x) x을 32비트 이진수로 변환한 후, 0이 아닌 비트의 개수를 반환함.
Math.exp(x) ex 의 값을 반환함. (e : 오일러의 수)
Math.expm1(x) 1 - ex 의 값을 반환함.
Math.fround(x) x와 가장 근접한 32비트 부동 소수점 수(single precision float)를 반환함.
Math.hypot(x, y, ...) 인수로 전달받은 값들을 각각 제곱한 후 더한 총합의 제곱근을 반환함.
Math.imul(x, y) 인수로 전달받은 두 값의 32비트 곱셈의 결과를 반환함.
Math.log(x) x의 자연로그 값을 반환함. (ln x)
Math.log1p(x) ln(1 + x)의 값을 반환함.
Math.log10(x) x의 10을 밑으로 가지는 로그 값을 반환함.
Math.log2(x) x의 2를 밑으로 가지는 로그 값을 반환함.
Math.sign(x) x의 부호 값을 반환함.
               






= 데이터 타입
typeof(a)
null : 비어있음을 표현, null 한가지
undefined : 변수가 정의되지 않거나 값이 없을 때
number : 숫자, +무한, -무한, 숫자 아님 (NaN), +0과 -0 가능 (나누기에서 +,- 무한 차이 발생)
string : 문자열
boolean : 불리언 : 논리 요소, true 와 false 두가지 값
object :  객체 (프로퍼티, 함수, 배열, 시간 등)
function : 함수
symbol : 심볼





= 연산자

== 산술 연산자  숫자 계산
+, -, *,  표준 산술 연산자 : 
%  나머지 연산자 (%) : 나눈후 나머지 반환 12 % 5 는 2를 반환
++  증가 연산자 (++) : 단항 연산자, 피연산자에 1을 더함, 앞(++x)에 사용하면, 1 더한 값을 반환; 뒤(x++)에 사용하면, 1을 더하기 전 값을 반환, x 가 3이면 ++x 는 x 를 4로 만들고 4를 반환합니다. 반면 x++ 는 3을 반환하고 x 를 4로 만듭니다.
--  감소 연산자 (--) : 단항 연산자, 피연산자로 부터 1을 뺌, 반환값은 증가 연산자와 유사
-  부호 변환 연산자 (-) : 단항 연산자, 피연산자의 반대값(부호 바뀐값)을 반환, x 가 3이면 -x 는 -3을 반환
+  숫자화 연산자 (+) : 단항연산자, 피연산자가 숫자값이 아니라면 숫자 변환 시도, +"3" 은 3을 반환, +true 는 1. 을 반환

== 할당 연산자
x = y | x = y
x += y | x = x + y
x -= y | x = x - y
x *= y | x = x * y
x /= y | x = x / y
x %= y | x = x % y  x를 y로 나눈 나머지
x **= y | x = x ** y  지수 연산 할당 : x = x^y
왼쪽 이동 연산 할당 x <<= y | x = x << y
오른쪽 이동 연산 할당 x >>= y | x = x >> y
부호 없는 오른쪽 이동 연산 할당 x >>>= y | x = x >>> y
비트 AND 할당 x &= y | x = x & y ; 둘다 1이어야 1, 아니면 0
비트 XOR 할당 x ^= y | x = x ^ y ; 둘의 값이 같으면 1, 아니면 0
비트 OR 할당 x |= y | x = x | y ; 둘중 하나라도 1이면 1, 아니면 0

== 비교 연산자  true / false 반환
==  동등: 값이 같으면 참 반환
!=  부등: 값이 다르면 참 반환
===  일치: 값과 형태가 같으면 참 반환
!==  불일치: 값이나 형태가 다르면 참 반환
>  ~보다 큰
>=  ~보다 크거나 같음
<  ~보다 작음 
<=  ~보다 작거나 같음
참고: => : 화살표 함수(Arrow functions)

== 논리 연산자
AND : a && b : a 를 true로 변환할 수 있을 경우 b 반환, 아니면 a 반환
var a1 =  true && true;      t && t returns true
var a2 =  true && false;     t && f returns false
var a3 = false && true;      f && t returns false
var a4 = false && (3 == 4);  f && f returns false
var a5 = "Cat" && "Dog";     t && t returns Dog
var a6 = false && "Cat";     f && t returns false
var a7 = "Cat" && false;     t && f returns false
OR : a || b : a 를 true로 변환할 수 있을 경우 a 반환, 아니면 b 반환
var o1 =  true || true;      t || t returns true
var o2 = false || true;      f || t returns true
var o3 =  true || false;     t || f returns true
var o4 = false || (3 == 4);  f || f returns false
var o5 = "Cat" || "Dog";     t || t returns Cat
var o6 = false || "Cat";     f || t returns Cat
var o7 = "Cat" || false;     t || f returns Cat
NOT : !a : a 를 true로 변환할 수 있으면 false를 반환, 아니면 true를 반환
var n1 = !true;   !t returns false
var n2 = !false;  !f returns true
var n3 = !"Cat";  !t returns false
false && anything 는 false로 단축 계산
true || anything 는 true로 단축 계산

== 조건 연산자
조건 ? 값1 : 값2
조건이 참이면 값1 할당, 아니면 값2 할당
var status = (age >= 18) ? "adult" : "minor";

=== 다중 삼항 조건 연산자
var obj = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";


== 단항 연산자
delete : 객체, 객체의 속성 또는 배열의 특정한 위치에 있는 객체를 삭제하고 undefined로 설정
  delete objectName;
  delete objectName.property;
  delete objectName[index];
  delete property;  legal only within a with statement

== 관계 연산자
in : 속성 in 객체 : 객체에 특정한 속성 (프로퍼티) 이 있는경우 true를 반환
  propNameOrNumber in objectName
   Arrays
  var trees = ["redwood", "bay", "cedar", "oak", "maple"];
  0 in trees;         returns true
  3 in trees;         returns true
  6 in trees;         returns false
  "bay" in trees;     returns false (you must specify the index number,
                      not the value at that index)
  "length" in trees;  returns true (length is an Array property)
   built-in objects
  "PI" in Math;           returns true
  var myString = new String("coral");
  "length" in myString;   returns true
   Custom objects
  var mycar = { make: "Honda", model: "Accord", year: 1998 };
  "make" in mycar;   returns true
  "model" in mycar;  returns true

instanceof : 객체 instanceof 객체형 : 객체가 명시된 객체형인 경우 true를 반환, if 문과 활용하여 예외 상황 처리에 주로 사용
  objectName instanceof objectType


/*
== 비트 연산자
비트단위 논리곱 a & b : 두 피연산자의 각 자리 비트의 값이 둘다 1일 경우 해당하는 자리에 1을 반환합니다.
비트단위 논리합 a | b : 두 피연산자의 각 자리 비트의 값이 둘다 0일 경우 해당하는 자리에 0을 반환합니다.
비트단위 배타적 논리합 : a ^ b 두 피연산자의 각 자리 비트의 값이 같을 경우 해당하는 자리에 0을 반환합니다.
[두 피연산자의 각 자리 비트의 값이 다를 경우 해당하는 자리에 1을 반환합니다.]
비트단위 부정 ~ a : 피연산자의 각 자리의 비트를 뒤집습니다.
왼쪽 시프트 a << b : 오른쪽에서 0들을 이동시키면서, a의 이진수의 각 비트를 b비트 만큼 왼쪽으로 이동시킨 값을 반환합니다.
부호 전파 오른쪽 시프트 a >> b : 사라지는 비트를 버리면서, a의 이진수의 각 비트를 b비트만큼 이동시킨값을 반환합니다.
부호 없는 오른쪽 시프트 a >>> b : 사라지는 비트를 버리고 왼쪽에서 0을 이동시키면서, a의 이진수의 각 비트를 b비트 만큼 이동시킨 값을 반환합니다.

== 비트 논리 연산자
== 비트 시프트 연산자
*/


= 연산자 우선 순위
맴버 연산자 . []
객체 호출/생성 연산자 () new
부정/증가 연산자 ! ~ - + ++ -- typeof void delete
곱셈/나눗셈 연산자 * / %
덧셈/뺄셈 연산자 + -
비트단위 시프트 연산자 << >> >>>
관계 연산자 < <= > >= in instanceof
같음 비교 연산자 == != === !==
비트 단위 논리곱 연산자 &
비트단위 배타적 논리합 연산자 ^
비트단위 논리합 연산자 |
논리 곱 연산자 &&
논리 합 연산자 ||
조건 연산자 ?:
할당 연산자 = += -= *= /= %= <<= >>= >>>= &= ^= |=
콤마 연산자 ,




=================== 여기부터 아직 정리 X, 예시들 위주로 있음, 문제풀면서 쌓고 필요한것들만 추려서 정리하면 될듯 (책 내용 합쳐서)



= 이중 for 문
예제2) 별표 출력하기
for문을 이용해 다음 실행화면처럼 출력해 주세요.
실행화면:
*****
****
***
**
*

for (var i = 5; i > 0; i--) {
    var result = "";
    for (var m = 0; m < i; m++) {
        result += "*";
    }
    document.write(result, "<br>");
}

출처: https:blueice0414.tistory.com/51 [담이의 세상이야기]



   
   
   
= 함수 형식

== 실행
function addNum(x, y) {     x, y는 이 함수의 매개변수임.
    document.write(x + y);  실행
}
addNum(2, 3);               addNum() 함수에 인수로 2와 3을 전달하여 호출함


== 반환
function multiNum(x, y) {
    return x * y;          x와 y를 곱한 결과를 반환함.
}
var num = multiNum(3, 4);  multiNum() 함수가 호출된 후, 그 반환값이 변수 num에 저장됨.
document.write(num);


== 생성자 함수
function Student(_name, _math, _eng) {
this.name = _name,
this.math = _math,
this.eng = _eng,
this.score = function allinfo() {
return "Student name :" +
this.name + "score math : " + this.math + "eng : " + this.eng;
}
}
출처: https:doitnow-man.tistory.com/132 [즐거운인생 (실패 또하나의 성공)]


== 팩토리 함수 !!!!!!!!!
객체를 반환하는 함수

=== 생성자 함수
function ConstructorFunction() { 생성자 함수
    this.someProp1 = "1";
    this.someProp2 = "2";
 }
 ConstructorFunction.prototype.someMethod = function() { /* whatever */ };
 
=== 팩토리 함수
 function factoryFunction() { 팩토리 함수
    var obj = {
       someProp1 : "1",
       someProp2 : "2",
       someMethod: function() { /* whatever */ }
    };
     other code to manipulate obj in some way here
    return obj;
 }




 
 

   





   
== () => 화살표 함수

=== 함수 표현식 간략화
let sum = function(a, b) {
  return a + b;
};
   
let sum = (a, b) => a + b;
   

=== 인수 없을때 괄호 () 생략 불가  
let sayHi = () => alert("안녕하세요!");
sayHi();

=== 화살표 함수 + 조건문    
let age = prompt("나이를 알려주세요.", 18);
let welcome = (age < 18) ?
  () => alert('안녕') :
  () => alert("안녕하세요!");
welcome();    
   
   
=== 예제

let ask = (question, yes, no) => (confirm(question)) ?
    yes() :
    no() ;
ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);    
/*  
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);    
*/
   
   
   
   
=== 본문이 여러줄일때
let sum = (a, b) => {   중괄호 사용: 본문 여러 줄
  let result = a + b;
  return result;  중괄호 사용: return 필요
};
alert( sum(1, 2) );  3
   
   
   
   
   
   
   
   
   
   
   
   
= class
== 생성
const Wizard = class Wizard {
    constructor (health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack(){
        console.log('attack');
    }
}

== 인자(?) 추가
const x = new Wizard(545, 210, 10);

== 출력
=== 데이터
console.log(x.health, x.mana, x.armor);
=== 메서드
x.attack();







= if 문

function a(){
  if (조건1) {
    실행1
  }
  else if (조건2) {
    실행2
  }
  else {
    실행3
  }
};









= map

 새로운 map 을 만들고 map 에 key, value 엔트리를 추가
let me = new Map();
me.set('name', 'kevin');
me.set('age', 28);
console.log(me.get('age');  28
 대괄호를 사용해서 map 을 선언하는 방법
const roomTypeMap = new Map(
  [
    ["01", "원룸(오픈형)"],
    ["02", "원룸(분리형)"],
    ["03", "원룸(복층형)"],
    ["04", "투룸"],
    ["05", "쓰리룸"]
  ]
);
 새로운 map 을 만들고 그 데이터를 기존의 [key, value] 페어컬렉션으로 채움
let you = new Map().set('name', 'paul').set('age', 34);
console.log(you.get('name'));  'paul'
 has(): 주어진 key 가 존재하는지 확인
console.log(me.has('name'));  true
 size: map 에 담겨진 엔트리의 개수를 조회
console.log(you.size);  2
 delete(): 엔트리를 삭제
me.delete('age');
console.log(me.has('age'));  false
 clear(): 모든 엔트리를 삭제
you.clear();
console.log(you.size);  0



= Set()
중복을 허용하지 않는 데이터 집합, iterable (배열, 스트링 등등, 확인 필요) 만 추가 가능
추가하려는 것이 셋에 이미 있는지 확인하지 않아도 된다
이미 있으면 아무런 일도 일어나지 않음
프로퍼티: .add(), .delete(), .has(), .size,
delete 의 경우 삭제 성공시 true 를 반환하고 실패시 false 를 반환

Set() 은 value 들로 이루어진 컬렉션("집합"이라는 표현이 적절)
Array 와는 다르게 Set 은 같은 value 를 2번 포함할 수 없음
따라서 Set 에 이미 존재하는 값을 추가하려고 하면 아무 일도 없음

 비어있는 새로운 set 을 만듬
let setA = new Set();
 새로운 set 을 만들고 인자로 전달된 iterable 로 인자를 채움
let setB = new Set().add('a').add('b');
setB.add('c');
console.log(setB.size);  3
 has(): 주어진 값이 set 안에 존재할 경우, true 를 반환
 indexOf() 보다 빠름. 단, index 가 없음
console.log(setB.has('b'));  true
 set 에서 주어진 값을 제거
setB.delete('b');
console.log(setB.has('b'));  false
 set 안의 모든 데이터를 제거
setB.clear();
console.log(setB.size);  0






= 심화 반복문

== while(조건){실행}  () 조건이 참인 동안 {} 실행

== arr.forEach(function(item,index,arr2){}  배열 반복 (배열, map, set 사용 가능)
var arr = ['가','나','다','라'];
arr.forEach(function(item,index,arr2){
    첫번쨰 인수는 배열의 각각의 item
    두번쨰 인수는 배열의 index
    세번째 인수는 배열 그자체, arr[index] 입력하면 item 이랑 같음
console.log(item,index,arr2[index]); })
출처: https:dydals5678.tistory.com/66 [아빠개발자의 노트]

== for (key in obj)  객체  반복
var obj = { a: '가', b: '나', c: '다' };
for (var key in obj)
{ console.log(key, obj[key]);}  a 가, b 나, c 다

출처: https:dydals5678.tistory.com/66 [아빠개발자의 노트]

== for of  배열, 스트링 데이터 순회
let iterable = [10, 20, 30];
for (let value of iterable) {
  console.log(value);  10, 20, 30
}






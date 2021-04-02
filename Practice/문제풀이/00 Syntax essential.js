//// 원래 명칭을 단순화시켜 실제 사용되는 형태로 표현했습니다. 그 과정에서 다소 생략, 또는 비약이 있을 수 있습니다.
//// 반환값, 대상의 변경 여부, 항목의 옵션 여부 및 생략 시 기본값을 명확히 하는데 중점을 두고 작성했습니다.

////// 본문 작성 형태: 설명 (원본 변경/유지 여부), 반환값
////// 대상의 변경 여부 표시: 변경된 대상 반환 = (원본 변경) 기존 대상 변경 / 새로운 대상 반환 = (원본 유지) 기존 대상 유지 

////// 옵션 항목과 생략 시 기본값: (옵션: 기본 0)
//// 학습 과정중, 학습을 위해 작성하여 오류가 있을 수 있습니다. 
//// 오류 발견 시 전달해주시면 확인 후 업데이트 하겠습니다.
//// 작성 규칙
// H: 여러 형태가 가능한 대상
// n: 숫자, 1/0: Infinity, true/false: 불리언,
// str: 문자열, 'a': 문자열,  
// arr: 배열, [item1, item2, ...item]: 배열[index], 배열[start]: item1, 배열[end]: ...item, 차례로: start -> end
// obj: 객체, {key1: value1, key2: value2, ...key: ...value}: 객체.key, 
// func: 함수, (p1, p2, ...p) => return : 함수, 
// p => p < 10 : 판별 함수 만족
// p => p + 1 : 연산 함수 적용

///> 코드 실행 결과 표시

////// H. 으로 검색하면 하이브리드 항목들 확인 가능 (전체 정리하면 보일듯)

//// 용어

// 얕게 복사

// 반환 (return)

// 확장

// 동결 (freeze)

// 밀봉 (sealed)

// thisArg: 호출하는데 제공될 this 의 값

// enumerable (열거 가능)

// array-like (유사 배열): length 속성과 index를 가진 객체?

// iterable (이터러블, 순회 가능, 반복 가능?): 반복이 가능한 대상 (스트링, Map, Set)?, Spread 문법을 이용하면 iterable 객체를 해체 할 수 있다.
var text = '123';
console.log([...text]);
// ["1", "2", "3"]
//iterable 프로토콜은 반복 가능한 객체를 나타내는 프로토콜로 for..of 등에서 반복되는 행동을 정의하는 객체를 반복 가능하다고 한다. 반복 가능한 객체로는 내장 객체인 Array, Map, Set, String 등이 있다. (obj는 아니라는 것에 주의, 그래서 이터레이터가 아닌 key or value의 배열을 반환한다.) 또한, [Symbol.iterator]라는 키를 가진다

// iterator (이터레이터, 반복자): 반복을 수행하는 포인트/앵커?, for of ___ 에 와서 전체 순회하는?, iterator는 next() 메소드를 가지고 있다. 객체를 next 메서드로 순환 할 수 있는 객체
//iterator 프로토콜은 반복 가능한 객체의 값을 시퀸스대로 처리하는 프로토콜로 다음은 iterator 에 대한 설명이다. 컬렉션 내의 항목에 대해 한 번에 하나씩 접근하면서 현재의 위치를 추적하는 방법을 알고 있는 객체 반복 가능 인터페이스에 의해 반환되는 객체
//Array는 대표적인 이터러블 객체로서 이터레이터를 사용 할 수 있다. 이터레이터는 단순히 루프를 도는 것이 아니라 현재 어디를 돌고 있는지 알 수 있다. 
//next를 사용할 때 마다 그 다음 값으로 넘어가며 모든 값을 돌고 나면 done이 true로 나오며 끝난다. 한번 끝난 이터레이터는 다시 돌아가지 않으며 value가 undefined로 리턴한다. 이때문에 for of 루프가 가능한 것이며 일반 오브젝트가 루프를 돌 수 없는 이유이기도 하다. 실제로 오브젝트를 for of로 루프를 돌려고 하면 아래와 같은 에러가 나온다. <오브젝트는 이터러블이 아님>
///for of문을 흉내내면 아래와 같다.
const numbers = [1, 2, 3];
const it = numbers.values();
let i = it.next();
while(!i.done) {
  console.log(i.value);
  i = it.next();
}
for (let i of number) {
  console.log(i);
}
//위에서 while문과 for of문은 동일한 동작을 한다. 즉 이터러블 오브젝트란 반복 가능한 오브젝트를 의미하여 이터레이터란 이러한 반복을 정의한 규약이라고 할 수 있다. 이 두가지를 포함한 개념을 이터레이션 프로토콜 이라 한다. 이터레이터란 프로토콜의 하나이므로 일반 오브젝트를 이터레이터 프로토콜을 적용하면 이터레이블 오브젝트로 만들 수 있다. 이때 사용되는 것이 Symbol.iterator이다.
//이터러블 오브젝트로 만들려면 Symbol.iterator와 value, done가 들어있는 오브젝트를 반환하는 next 메서드를 가진 객체를 반환하기만 하면 된다.
//자세한 예제 있음
https://uzihoon.com/post/f27b7310-64e0-11ea-84dc-878832775ccf




for ...in // 객체 순환 (배열 인덱스 순환)
for in obj

for ...of // 배열 값 순환
for of arr


// 원시값: 객체가 아니면서 메서드도 가지지 않는 데이터 (string, number, bigint, boolean, undefined, symbol)

// 메소드: 대상에 할당된 함수
const user = {} // [], new Function, ...
user.sayHi = () => console.log('Hi');
user.sayHi(); // Hi

// 메소드 체인: user.sayHi().sayBye().goToBed(), undefined 를 반환하는 메소드는 체인 중간에 올수 없음



//=배열 프로퍼티

Array.prototype.length
arr.length // item 갯수 반환


//=배열 메소드
Array.prototype.concat()
arr.concat(arr2, ...arr, item, ...item) 
//arr, item 들을 합쳐 새로운 arr 반환

Array.prototype.copyWithin()
arr.copyWithin(target, start, end) 
//start (옵션: 기본 0) 에서 end (옵션: 기본 this.length) index까지 item을 복사하여 target index부터 덮어씌움, 변경된 arr 반환

//Array.prototype.entries() 
//index - value iterator 반환 

Array.prototype.every() 
arr.every(p => p < 10)
// 모든 item이 판별 함수 조건 만족 시 true, 불만족 item 발견 시 false, 빈 배열은 무조건 true 반환

Array.prototype.fill()
arr.fill(value, start, end) 
//start (옵션: 기본 0) 에서 end (옵션: 기본 this.length) 까지 item을 value로 채움, 변경된 arr 반환

Array.prototype.filter()
arr.filter(p => p < 10) 
//판별 함수 만족 item을 모아 새로운 arr 반환

Array.prototype.find()
arr.find(p => p < 10) 
//판별 함수를 만족하는 첫번째 item을 반환, 없으면 undefined 반환

/// 연관 메소드
// index 반환: findIndex()
// item의 위치: indexOf()
// item 존재 확인: indexOf() 또는 includes()

Array.prototype.findIndex()
arr.find(p => p < 10) 
//판별 함수를 만족하는 첫번째 item의 index를 반환, 없으면 -1 반환

Array.prototype.flat() 
arr.flat(n)
//고차 arr을 n 만큼 차수 낮춤 (옵션: 기본 1), 변경된 arr 반환
///
arr.flat(1) // [1,[2]] -> [1,2] / [1,[2,[3]]] -> [1,2,[3]]
arr.flat(2) // [1,[2,[3]]] -> [1,2,3]
///
///배열 구멍 제거
const arr = [1, 2, , 4, 5]
arr.flat()
//> [1, 2, 4, 5]
///

Array.prototype.forEach()
arr.forEach(p => p + 1) 
// start 부터 end 까지 연산 함수 적용, 중간 탈출 불가, undefine 반환

Array.from()
Array.from(H, p => p + 1) 
// H ('a', arr, array-like, iterable, (p1, p2, ...p)) 배열화 후 각 item에 연산 함수 (옵션: 기본 p => p) 적용, 새로운 arr 반환

Array.prototype.includes()
arr.includes(item) 
// arr의 특정 item 존재 여부 확인, 있으면 true 반환, 없으면 false 반환

Array.prototype.indexOf()
arr.indexOf(item, n) 
// arr의 특정 item 존재 여부 확인, n 번째 (옵션: 기본 1) index를 반환, 없으면 -1 반환
/// 특정 item의 모든 index 찾기
  var indices = [];
  var array = ['a', 'b', 'a', 'c', 'a', 'd'];
  var element = 'a';
  var idx = array.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
//> [0, 2, 4]
/// arr내 특정 item 존재 여부 확인 후 없으면 추가
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
//> 새로운 veggies 컬렉션 : potato, tomato, chillies, green-pepper, spinach
  updateVegetablesCollection(veggies, 'spinach');
//> spinach 은 이미 veggies 컬렉션에 존재합니다.

Array.prototype.lastIndexOf()
arr.lastIndexOf() 
// indexOf() 와 달리 마지막 index 반환, 없으면 -1 반환

Array.isArray()
Array.isArray(arr) 
// arr이 배열인지 판별, true/false 반환

Array.prototype.join()
arr.join(arr) /// 동작 이상하게됨
// arr의 모든 item을 더해, 새로운 str로 반환, item이 undefined 또는 null이면 빈 str로 반환

Array.prototype.map()
arr.map(x => x + 1) 
// str의 item에 연산 함수를 적용, 새로운 arr 반환 
/// 두개 이상의 p를 받는 연산 함수를 적용 시 기대와 다른 결과값이 나오므로 주의
['1', '2', '3'].map(parseInt) 

Array.prototype.flatMap() 
// map().flat()
/// flat().map() 이 아님
console.log([1, 2, [3, 3]].flat().map(x => x + 1))
///> [2, 3, 4, 4]
///
console.log([1, 2, [3, 3]].map(x => x + 1).flat())
///> [2, 3, "3,31"]

Array.of()
Array.of(item1, item2, ...item)
// [item1, item2, ...item] 반환

Array.prototype.pop()
arr.pop() 
// arr의 마지막 item을 제거하고 제거한 item을 반환, 빈 배열은 undefined 반환 (원본 변경)

Array.prototype.push()
arr.push(item1, item2, ...item) // arr의 끝에 하나 이상의 item 추가, 배열의 새로운 길이를 반환. (원본 변경)
/// 두 배열 합치기, concat()은 원본 유지
Array.prototype.push.apply(arr1, arr2)
///

Array.prototype.reduce()
arr.reduce((acc, cur) => acc + cur)
arr.reduce((acc, cur, inx, src) => acc + cur, int)// arr의 각 item에 대해 주어진 리듀서(reducer) 함수를 차례로 적용, acc 반환
//리듀서 함수: int (옵션: 기본 0) 를 초기값으로 시작, arr의 각 item이 차례로 cur에 대입되어 연산 함수를 적용한 뒤 acc에 누적 저장
// acc: accumulator, cur: currentValue, idx: currentIndex, src: sourceArray, int: initialValue
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 예시 많음

Array.prototype.reduceRight() // reduce() 와 같으나 item이 end 에서 start 순서로 cur에 대입

Array.prototype.reverse()
arr.reverse() // arr의 순서를 반전 (원본 변경), 변경된 arr 반환

Array.prototype.shift()
arr.shift() // 배열의 첫 번째 요소를 제거하고 (원본 배열 변경), 제거된 요소를 반환.

Array.prototype.slice()
arr.slice(start, end) //start부터 end (옵션: 기본 arr.length) 전까지 (end 미포함) 요소를 새로운 배열로 반환 (원본 유지). 참조 된 객체가 변경되면 변경 내용은 새 배열과 원래 배열 모두 적용.

Array.prototype.some()
arr.some(elem => elem > 10) // 판별 함수 조건 만족 요소 발견 시 true, 모두 불만족하면 false, 빈 배열은 false 반환. 

Array.prototype.sort()
arr.sort((a , b) => a - b ) 
// 정렬 함수 기준으로 정렬 (원본 변경), 변경된 arr 반환
/// 정렬 함수
// a - b 오름차순 : 1, 2, 3, a, b, c
// b - a 내림차순 : c, b, a, 3, 2, 1
// 기본: 문자열 기준 유니코드 

Array.prototype.splice()
arr.splice(start, n, item) 
// start 부터 n개 item 삭제 후 그 자리에 item (옵션) 추가 

Array.prototype.toLocaleString()
H.toLocaleString() 
// 숫자 및 숫자가 포함된 대상을 사용 언어에 따른 표현을 적용한 문자열로 반환 (원본 유지)
///
const num = 12341.23
console.log(num.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW' }));
///> ₩12,341

Array.prototype.toSource() // <현재 지원 안함> 배열의 소스 코드 문자열을 반환

Array.prototype.toString()
arr.toString() // item들을 쉼표를 포함한 새로운 string으로 반환 (원본 유지)

Array.prototype.unshift()
arr.unshift(element) // element 를 첫 요소로 추가하고 새로운 길이를 반환

Array.prototype.keys()
arr.keys()
// arr의 index를 차례로 제공하는 새로운 iterator 반환.

Array.prototype.values()
arr.values() // arr의 item을 차례로 제공하는 새로운 iterator 반환.







//=객체 메소드

Object.assign()
Object.assign(target, source1, source2, ...source) // source 객체를 target 에 복사한 뒤 target 반환 (target 변경), 동일한 속성은 더 뒤의 파라미터 객체에 의해 덮어쓰여짐.
//객체 복사
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
//깊은 클로닝, Object.assign() 은 속성의 값을 복사, 출처 값이 객체에 대한 참조인 경우, 참조 값만 복사.

Object.create() // 객체 생성
var o
o = Object.create(prototype) // prototype을 갖는 객체 생성

Object.defineProperties() // 객체의 새로운 속성들을 정의
Object.defineProperties(object, {
  prop1: {
    value: 42,
    writable: true
  },
  prop2: {},
  prop3: {}
});

Object.defineProperty() // 객체의 새로운 속성을 정의
Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: false
});

Object.entries() // arr, map과 다름
Object.entries(obj) //obj의 [key, value] 쌍에 해당하는 배열을 반환. 속성의 순서는 개체의 속성 값을 수동으로 반복하여 주어진 순서와 동일
//Object.entries({b:2, a:1, c:3})[0] //> ['b',2]

Object.freeze()
Object.freeze(obj) // obj를 변경 불가 상태로 만듦

Object.fromEntries() // entries() 의 반대
Object.fromEntries(arr) // [key, value] 쌍의 arr을 객체로 반환

Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptor(obj, prop) // obj내 prop의 설명을 반환, 없으면 undefined

Object.getOwnPropertyDescriptors()
Object.getOwnPropertyDescriptors(obj) // obj내 전체 prop의 설명을 반환, 없으면 undefined

Object.getOwnPropertyNames()
Object.getOwnPropertyNames(obj) // obj내 전체 속성 이름 (key) 을 배열로 반환,  enumerable = false도 포함


Object.getOwnPropertySymbols() // obj내 전체 심볼을 배열로 반환

Object.getPrototypeOf() // obj의 프로토타입을 반환

Object.prototype.hasOwnProperty()
obj.hasOwnProperty('prop') // obj의 prop (key) 존재 여부를 불리언으로 반환

Object.is()
Object.is(a, b); // a와 b의 같음 여부를 불리언으로 반환

Object.isExtensible() 
Object.isExtensible(obj) // obj에 속성 추가 가능 여부를 불리언으로 반환

Object.isFrozen()
Object.isFrozen(obj) // 객체의 동결 여부를 불리언으로 반환

Object.prototype.isPrototypeOf()
Object.isPrototypeOf(obj) //프로토타입 체인에 해당 객체가 존재하는지 여부를 불리언으로 반환
//instanceof 연산자와 함께 특정 프로토타입으로부터 상속된 객체만 작동하게 하려는(예를 들어 특정 메소드나 속성이 객체에 있다는걸 보장하려는 때) 코드
if (Fi.prototype.isPrototypeOf(obj)) {
  // do something safe
}

Object.isSealed()
Object.isSealed(obj) // obj의 봉인 여부를 불리언으로 반환

Object.keys() // getOwnPropertyNames() 와 유사 (차이점?)
Object.keys(obj) // obj내 전체 속성 이름 (key) 을 배열로 반환, enumerable = true 만

Object.preventExtensions()
Object.preventExtensions(obj) // obj를 확장 불가로 만듦

Object.prototype.propertyIsEnumerable()
obj.propertyIsEnumerable('prop') // obj내 prop의 열거 가능 여부를 불리언으로 반환

Object.seal()
Object.seal(obj) // obj를 밀봉(봉인)

Object.setPrototypeOf()
Object.setPrototypeOf(obj, prototype) // obj를 다른 prototype으로 변경

Object.prototype.toLocaleString() // Array.prototype.toLocaleString() 와 같음
obj.toLocaleString() // obj를 문자열로 반환, 

Object.prototype.toString() // Array.prototype.toString() 와 같음
obj.toString() // obj를 문자열로 변환

Object.prototype.valueOf()
obj.valueOf() // obj의 원시값 반환

Object.values() // Array.prototype.values() 와 같지 않음
Object.values(obj) // obj의 value를 배열로 반환



//// =Map 객체
//키-값 쌍을 저장하며 각 쌍의 삽입 순서도 기억하는 콜렉션, 아무 값이나 저장 가능

let myMap = new Map()

let keyString = '문자열'
let keyObj    = {}
let keyFunc   = function() {}

// 값 설정
myMap.set(keyString, "'문자열'과 관련된 값")
myMap.set(keyObj, 'keyObj와 관련된 값')
myMap.set(keyFunc, 'keyFunc와 관련된 값')

myMap.size              // 3

// getting the values
myMap.get(keyString)    // "'문자열'과 관련된 값"
myMap.get(keyObj)       // "keyObj와 관련된 값"
myMap.get(keyFunc)      // "keyFunc와 관련된 값"

myMap.get('문자열')    // "'문자열'과 관련된 값"
                         // keyString === '문자열'이기 때문
myMap.get({})            // undefined, keyObj !== {}
myMap.get(function() {}) // undefined, keyFunc !== function () {}


////Map 객체 프로퍼티

//get Map[@@species]

//Map.prototype[@@toStringTag]

Map.prototype.size
map.size // 맵 크기 반환


//// Map 객체 메소드

Map.prototype[Symbol.iterator]()
map[Symbol.iterator] // 이터레이터 반환

Map.prototype.clear()
map.clear() // map의 모든 요소를 제거

Map.prototype.delete()
map.delete(key) // map의 key를 제거, 성공 여부 불리언 반환

Map.prototype.entries() // arr.entries() 와 같음, obj.entries() 와 다름
map.entries()// 키-값 (배열: 인덱스-값) 이터레이터 반환

Map.prototype.forEach()
map.forEach((value, key, map) => `${key}: ${value}`) // map 내의 key/value 쌍의 개수 만큼 연산 함수를 순서대로 실행, undefined 반환

Map.prototype.get()
map.get(key) // map의 key에 해당하는 value를 반환, 대상이 없으면 undefined 반환

Map.prototype.has()
map.has(key) // map의 key 존재 여부를 불리언으로 반환

Map.prototype.keys() // arr.keys() 와 유사
map.keys() //map의 key를 Iterator로 반환

Map.prototype.set()
map.set(key, value) // map에 key와 value 추가, key가 이미 존재하면 value를 대체

Map.prototype.values()
map.values() //map의 value를 Iterator로 반환



////Set 객체
//자료형에 관계 없이 유일한 값을 저장, 인덱스는 없다

const set1 = new Set([1, 1, 1, 2, 3]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: false

console.log(set1);
// [1, 2, 3]


////Set 속성
//get Set[@@species]
//Set[Symbol.species]

Set.prototype.size
set.size // set의 원소 수 반환, 중복 원소의 갯수도 포함됨, [1,1,1,2,3].size //> 5




////Set 메소드
//Set.prototype[@@iterator]()
//set1[Symbol.iterator]()

Set.prototype.add()
set.add(item) //set의 맨 뒤에 item을 추가, item이 추가된 set를 반환

Set.prototype.clear()
set.clear() // set의 모든 item 삭제, undefined 반환

Set.prototype.delete()
set.delete(item) // set의 특정 item을 삭제, 성공 여부 반환

// value와 관련된 요소를 제거하고 Set.prototype.has(value)가 이전에 반환했던 값을 반환합니다. Set.prototype.has(value)는 그 뒤에 false를 반환합니다.
// Set.prototype.entries() (en-US)
// 삽입 순으로 Set 객체 내 각 값에 대한 [value, value] 배열을 포함하는 새로운 Iterator 객체를 반환합니다. 이는 Map 객체와 비슷하게 유지되므로 여기서 각 항목은 그 key와 value에 대해 같은 값을 갖습니다.
// Set.prototype.forEach(callbackFn[, thisArg])
// 삽입 순으로 Set 객체 내에 있는 각 값에 대해 한 번 callbackFn을 호출합니다. thisArg 매개변수가 forEach에 제공된 경우, 이는 각 콜백에 대해 this 값으로 사용됩니다.
// Set.prototype.has(value)
// Set 객체 내 주어진 값을 갖는 요소가 있는지를 주장하는(asserting, 나타내는) boolean을 반환합니다.
// Set.prototype.keys() (en-US)
// values() 함수와 같은 함수로 삽입 순으로 Set 객체 내 각 요소에 대한 값을 포함하는 새로운 Iterator 객체를 반환합니다.
// Set.prototype.values()
// 삽입 순으로 Set 객체 내 각 요소에 대한 값을 포함하는 새로운 Iterator 객체를 반환합니다.
// Set.prototype[@@iterator]() (en-US)
// 삽입 순으로 Set 객체 내 각 요소에 대한 값을 포함하는 새로운 Iterator 객체를 반환합니다






////Function
////속성 (프로퍼티)

Function.length
func.length // func의 파라미터 갯수 반환

Function.name
func.name // func의 이름 반환

////메소드
Function.prototype.apply()
func.apply(thisArg, []) // thisArg에 func를 호출하여 [] 를 차례로 적용
//배열 합치기 (concat()은 새 배열을 만들어 반환)
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
// [] 내의 최대값 반환
Math.max.apply(null, [])
// [] 내의 최소값 반환
Math.min.apply(null, numbers);



Function.prototype.bind() // 바인딩 함수 생성 (this 유지)
func.bind(thisArg, arg1, arg2, ...arg) // 어렵.. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

Function.prototype.call() 
// apply(): 파라미터 배열 1개 받음
// call(): 파라미터 목록 받음
func.call(thisArg, p1, p2, ...p) // thisArg에 func를 호출하여 파라미터 목록을 차례로 적용

Function.prototype.toString()
func.toString() // func의 소스코드를 문자열로 반환








//getter
//setter
























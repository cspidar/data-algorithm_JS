




// 삼항 연산자
/// 조건1? 입력값1 : 조건2? 입력값2 : ...조건? ...입력값
const ans = a > b ? 1 : a > c ? 2 : 3

// 몫, 나머지
/// 몫: 소수 -> 정수형 변환 
/// parseInt(n)
parseInt (13 / 5)
//> 2
/// 나머지
/// a % b
13 % 5
//> 3

// 올림 Math.ceil(n), 내림 Math.floor(n), 반올림 Math.round(n)

// 변수 선언 시 자료형을 넣어주는게 좋다
let x // (X) 숫자 들어가면 str로 변환됨
let x = 0; // (O)

// 충분히 큰 숫자 변수 선언
const n = Number.MAX_SAFE_INTEGER

// arr의 최소값 (배열 자체로 넣으면 NaN 반환)
const n = Math.min(...arr)
const n = Math.min.apply(null, arr)
// arr의 최대값 (배열 자체로 넣으면 NaN 반환)
const n = Math.max(...arr)

// arr의 i 를 splice()로 직접 지우면 뒤의 인덱스가 변하기 때문에 연속 사용 시 주의해야 함, slice()로 원본 배열은 유지한 채 새로운 배열로 반환하는 것이 더 이상적

// arr을 변수 선언하면 얕은 복사로 참조만 복사되어 변수를 조작하면 원본도 변경되지만 str은 변수 선언을 하면 string 자체가 복사 (깊은 복사) 되어 원본이 변경되지 않는다.
const arr = [1,2,3]
const str = '123123'

// str 정규표현식 사용하여 replace로 교체
str.replace(/A/g, 'B') // 'A' 를 글로벌 (g) 로 'B'로 교체

// str을 for of 로 순회는 가능하나 arr 메소드를 사용 가능한건 아님

// for in: 대상의 값을 순회 (obj, str, arr(인덱스), map(인덱스), set(인덱스) 가능) for of 가 가능 한 대상에게 적용하면 값 대신 인덱스 제공
// for of: 대상의 값을 순회 (arr, map, set 가능)
for (i in arr){ arr1.push(arr[i] + 1) }
for (i of arr){ arr1.push(i + 1) }






arr.shift()

arr.unshift(i)

arr.pop()

arr.push(i1, i2, ...i)

arr.splice(start, n, i1, i2, ...i) 

arr.fill(i, start, end) 

arr.copyWithin(target, start, end)

arr.sort((a , b) => a - b )

arr.reverse()

arr.flat(n)

arr.concat(h1, h2, ...h) 

arr.join('a')

arr.slice(start, end)

arr.toString()

arr.forEach(p => p + 1)

arr.map(p => p + 1)

arr.flatMap(p => p + 1)

arr.reduce((acc, cur) => acc + cur, int)
arr.reduce((acc, cur, inx, src) => acc + cur, int)

arr.reduceRight((acc, cur) => acc + cur)
arr.reduceRight((acc, cur, inx, src) => acc + cur, int)

Array.from(H, p => p + 1)

arr.every(p => p < 10)

arr.some(p => p > 10)

arr.filter(p => p < 10)

arr.find(p => p < 10)

arr.findIndex(p => p < 10)

arr.includes(i)

arr.indexOf(item, start)

arr.lastIndexOf()


Object.assign(obj, src1, src2, ...src)

Object.keys(obj)

Object.getOwnPropertyNames(obj)

Object.entries(obj)

Object.fromEntries([[k1, k2], [k2, v2], ...[k, v]])

Object.values(obj)

obj.key.toString()

obj.hasOwnProperty('key')

Object.is(H1, H2);


str.concat('s1', 's2', ...'s')

str.slice(start, end)

str.substring(start, end)

str.split('s', n)

str.toLowerCase()

str.toUpperCase()

str.padStart(n, 's')

str.padEnd(n, 's')

str.repeat(n);

str.replace('r1/s1', 's2') - str

str.replace('r/s1', p => p + 1) - func

str.replaceAll('r/s1', 's2')

str.replaceAll('r/a1', p => p + 1)

H.toString()

str.includes('s', start)

str.indexOf('s', start)

str.lastIndexOf('s', end)

str.startsWith('s', n)

str.search(r)

str.endsWith('s')

str.at(index)

str.at(index)


map.size

map.clear()

map.delete(key)

map.get(key)

map.set(k1, v1).set(k2, v2).set(...k, ...v)

map.has(key)

map.forEach((value, key) => value + 1)

map.keys()

map.values()

map.entries()


set.size

set.add(a1).add(a2).add(...a)

set.clear()

set.delete(i)

set.has(i)

set.forEach((p) => p + 1)

set.keys()

set.values()

set.entries()


func.length

func.name

func.bind(p_this, p1, p2, ...p)

func.toString()

func.apply(p_this, [p1, p2, ...p])

func.call(p_this, p1, p2, ...p)













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








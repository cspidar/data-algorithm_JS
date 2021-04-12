const nationWidth = {
  'korea' : 220877,
  'rusia' : 17097232,
  'a' : 200000,
  'b' : 300000,
  'c' : 400000,
  'd' : 500000,
}

const nation = 200000;

let arr = Object.entries(nationWidth);
//객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환

const objArr = []

for (i = 0; i < arr.length ; i++){
  objArr[i] = {name: arr[i][0],
                width : arr[i][1],
              gap: arr[i][1] - nation} 
}

objArr.sort((a , b) => {
 return a.gap - b.gap
})

console.log(objArr);








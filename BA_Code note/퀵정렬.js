// 퀵 정렬 Quick sort

function quickSort(arr){
  if (arr.length <= 1){
    return arr;
  }  


const pivot = arr[0];
const left = [];
const right = [];

for (let i = 1; i < arr.length; i++){
  if (arr[i]<pivot){
    left.push(arr[i])
  } else {
    right.push(arr[i])
  }
}
return quickSort(left).concat(pivot, quickSort(right))
}

const array = '5 3 6 7 0 9 3 4 5 2 4 3 2 1 6 4 3 1'.split(' ').map(n=>parseInt(n,10));

console.log(quickSort(array));


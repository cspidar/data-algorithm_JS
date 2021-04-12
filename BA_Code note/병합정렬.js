// 병합 정렬 Merge Sort

function mergeSort(arr){
  if (arr.length <= 1){
    return arr;
  }  


const mid = Math.floor(arr.length / 2);
const left = arr.slice(0,mid);
const right = arr.slice(mid);

return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let result = [];

  while (left.length && right.length){
    if (left[0]<=right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length){
    result.push(left.shift());
  }
  while (right.length){
    result.push(right.shift());
  }
  return result;
}

const array = '5 3 6 7 0 9 3 4 5 2 4 3 2 1 6 4 3 1'.split(' ').map(n=>parseInt(n,10));

console.log(mergeSort(array));


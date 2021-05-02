const str = 'abbbbcd';
const arr = [1, [1, 2], 2, 3, 4, 5];
const arr1 = [];

///////

///////

// const rarr = arr.map((p) => p);
const rarr = [...arr];

rarr.push('1');

arr3 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

let arr4 = [...arr3];

console.log(arr4);

!console.table(arr4);

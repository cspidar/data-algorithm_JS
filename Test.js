let arr = [
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 2],
  [4, 3],
  [1, 99],
];

function rotateLeft(array) {
  let result = [];
  array.forEach((a, i, aa) => {
    a.forEach((b, j, bb) => {
      result[bb.length - j - 1] = result[bb.length - j - 1] || [];
      result[bb.length - j - 1][i] = b;
    });
  });
  return result;
}

arr = rotateLeft(arr);

console.log(arr);

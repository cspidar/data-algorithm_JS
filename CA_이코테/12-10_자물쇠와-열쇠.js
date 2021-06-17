function solution(p1, p2) {
  //
  const key = [...p1];

  const lock = [...p2];

  const large_lock = Array.from(Array(3 * lock.length), () =>
    Array(3 * lock.length).fill(0),
  );

  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      large_lock[lock.length + i][lock.length + j] = lock[i][j];
    }
  }

  let ans = 'FALSE';

  for (i = 1; i <= 4; i++) {
    let key2 = Right(key);

    for (let m = 0; m < lock.length * 2; m++) {
      for (let n = 0; n < lock.length * 2; n++) {
        //
        for (let i = 0; i < key.length; i++) {
          for (let j = 0; j < key.length; j++) {
            large_lock[m + i][n + j] += key2[i][j];
          }
        }

        let flag = 1;
        for (let i = 0; i < lock.length; i++) {
          for (let j = 0; j < lock.length; j++) {
            if (large_lock[lock.length + i][lock.length + j] !== 1) flag = 0;
          }
        }
        if (flag === 1) {
          ans = 'TURE';
          break;
        }

        for (let i = 0; i < key.length; i++) {
          for (let j = 0; j < key.length; j++) {
            large_lock[m + i][n + j] -= key2[i][j];
          }
        }
      }
    }
  }

  console.table(large_lock);

  function Right(array) {
    var result = [];
    array.forEach((a, i, aa) => {
      a.forEach((b, j, bb) => {
        result[j] = result[j] || [];
        result[j][aa.length - i - 1] = b;
      });
    });

    return result;
  }

  return ans;
}

const in1 = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const in2 = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const in3 = 0;
const in4 = 0;
const in5 = 0;

console.log(solution(in1, in2, in3, in4, in5));
// console.table(solution(in1, in2, in3, in4, in5));

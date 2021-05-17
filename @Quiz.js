//
//

function solution(p1, p2) {
  //
  const arr = [...p2].sort((a, b) => b - a);
  const order = p1[1]; // 6

  function cut(H, arr) {
    let res = 0; // arr[mid]
    for (let v of arr) {
      if (H < v) {
        res += v - H;
      }
    }
    return res;
  }

  let lt = 0;
  let rt = arr[0];
  let res = 0;
  while (lt <= rt) {
    let mid = Math.round((lt + rt) / 2);
    if (cut(mid, arr) === order) {
      res = mid;
      break;
    } else if (cut(mid, arr) < order) rt = mid - 1;
    else lt = mid + 1;
    res = mid;
  }

  return res;
}

const in1 = [4, 6];
const in2 = [19, 15, 10, 17];
const in3 = 0;
const in4 = 0;
const in5 = 0;

console.log(solution(in1, in2, in3, in4, in5));
// console.table(solution(in1, in2, in3, in4, in5));

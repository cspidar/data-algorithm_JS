function solution(priorities, location) {
  let list = priorities.map((p) => [p, 0]);
  list[location][1] = 0.1;
  let cnt = 0;

  while (list.length) {
    if (Math.max(...list) !== list[0][0]) {
      list.push(list.shift());
    } else {
      list.shift();
      cnt++;
    }
    if (list.shift()[1] === 0.1) {
      answer = cnt;
      break;
    }
  }

  return answer;
}

const in1 = [1, 1, 9, 1, 1, 1];
const in2 = 2;
console.log(solution(in1, in2));
// !console.table(solution(in1));

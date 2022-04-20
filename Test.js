let people = 6;

let chk_time = [7];

let sort_chk_time = chk_time.sort((a, b) => a - b);

let min_time = sort_chk_time[0];
let max_time = sort_chk_time[sort_chk_time.length - 1];

let lt = 0;
let rt = max_time * people;

function chk_people(time) {
  let chk_people_num = 0;
  for (let i = 0; i < chk_time.length; i++) {
    chk_people_num += Math.floor(time / chk_time[i]);
  }
  return chk_people_num;
}

let res = 0;
while (lt <= rt) {
  let mid = Math.floor((lt + rt) / 2);

  if (chk_people(mid) < people) {
    lt = mid + 1;
  } else {
    if (res > mid) res = mid;
    rt = mid - 1;
  }
}

console.log(res);

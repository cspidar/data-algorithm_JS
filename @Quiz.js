function solution(p1, p2, p3) {
  //play_time, adv_time, logs
  const play_time = String(p1); //
  const adv_time = String(p2); //
  const logs = [...p3]; //

  // str -> sec
  function strToSec(str) {
    let play_time_s1 = str.split(':').map((p) => Number(p));
    return play_time_s1[0] * 3600 + play_time_s1[1] * 60 + play_time_s1[2];
  }

  let play_time_d = strToSec(play_time);
  let adv_time_d = strToSec(adv_time);

  // logs -> logs_s
  let logs_tmp = logs.map((p) => p.split('-'));
  let logs_tmp1 = [];
  logs_tmp.map((v) => {
    logs_tmp1.push([strToSec(v[0]), 'a'], [strToSec(v[1]), 'b']);
  });
  let logs_s = logs_tmp1.sort((a, b) => a[0] - b[0]);

  //
  let play_graph = [];
  let cnt = 0;
  for (i = 0; i < logs_s.length; i++) {
    if (logs_s[i][1] === 'a') {
      play_graph.push([logs_s[i][0], ++cnt]);
    } else play_graph.push([logs_s[i][0], --cnt]);
  }

  //

  // for (i = 0; i < play_graph.length - 1; i++){
  //   let remain_adv = adv_time_d
  //   for (j = i+1; j <)

  // }

  //

  // console.log('play_time_d', play_time_d);
  // console.log('adv_time_d', adv_time_d);
  // console.table(logs_s);
  console.log(play_graph);

  return;
}

const in1 = '02:03:55';
const in2 = '00:14:15';
const in3 = [
  '01:20:15-01:45:14',
  '00:40:31-01:00:00',
  '00:25:50-00:48:29',
  '01:30:59-01:53:29',
  '01:37:44-02:02:30',
];
const in4 = 0;
const arr = [];
console.log(solution(in1, in2, in3, in4, arr));
// !console.table(solution(in1));

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
  for (let i = 0; i < logs_s.length; i++) {
    if (logs_s[i][1] === 'a') {
      play_graph.push([logs_s[i][0], ++cnt]);
    } else play_graph.push([logs_s[i][0], --cnt]);
  }
  play_graph.unshift([0, 0]);
  play_graph.push([play_time_d, 0]);

  // ->
  let f_adv_score = [];
  for (let i = 0; i < play_graph.length - 1; i++) {
    function FDFS(v, adv, score) {
      let cur_node = play_graph[v];
      let next_node = play_graph[v + 1];
      let gap = next_node[0] - cur_node[0];
      if (adv + cur_node[0] > play_time_d) return;
      if (adv < gap) {
        f_adv_score.push([v, score + adv * cur_node[1], play_graph[v][0]]);
        return;
      } else {
        if (v + 1 < play_graph.length) {
          FDFS(v + 1, adv - gap, gap * next_node[1]);
        } else return;
      }
    }
    FDFS(i, adv_time_d, 0);
  }

  let f_high_score = f_adv_score.sort((a, b) => b[1] - a[1])[0];

  // <-
  let r_adv_score = [];
  for (let i = play_graph.length - 1; i >= 1; i--) {
    function RDFS(v, adv, score) {
      let cur_node = play_graph[v];
      let next_node = play_graph[v - 1];
      let gap = cur_node[0] - next_node[0];
      if (adv > cur_node[0]) return;
      if (adv < gap) {
        r_adv_score.push([
          v,
          score + adv * next_node[1],
          play_graph[v][0] - adv_time_d,
        ]);
        return;
      } else {
        if (v - 1 >= 0) RDFS(v - 1, adv - gap, gap * next_node[1]);
        else return;
      }
    }
    RDFS(i, adv_time_d, 0);
  }

  let r_high_score = r_adv_score.sort((a, b) => b[1] - a[1])[0];
  let total_high_score = [f_high_score, r_high_score].sort(
    (a, b) => b[1] - a[1],
  )[0][2];

  // let top_score = Math.max(f_high_score[0], r_high_score[0]);

  // let top_time = top_score[0][2];

  let top_time_1 = String(Math.floor(total_high_score / 3600));
  if (top_time_1.length === 1) top_time_1 = '0' + top_time_1;

  let top_time_2 = String(Math.floor((total_high_score % 3600) / 60));
  if (top_time_2.length === 1) top_time_2 = '0' + top_time_2;

  let top_time_3 = String(Math.floor((total_high_score % 3600) % 60));
  if (top_time_3.length === 1) top_time_3 = '0' + top_time_3;

  // console.log('play_time_d', play_time_d);
  // console.log('adv_time_d', adv_time_d);
  // console.table(logs_s);
  // console.table(top_time_3);

  // console.log(play_graph);
  return `${top_time_1}:${top_time_2}:${top_time_3}`;
  // return;
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

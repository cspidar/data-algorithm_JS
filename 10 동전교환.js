let coins = [1, 2, 5];
let m = 100;

let dy = Array.from({ length: m + 1 }, () => Infinity);

dy[0] = 0;

for (let coin of coins) {
  for (let i = coin; i < dy.length; i++) {
    dy[i] = dy[i - coin] + 1;
  }
}

console.log(dy);

let w = 8;
let h = 12;
let answer = 0;

let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

let gcd = getGCD(w, h);

let ratio = w / h;
if (ratio > 1) ratio = 1 / ratio;
let gap = (w / gcd) * (h / gcd) * ratio;
answer = w * h - gap;

console.log(answer);

const str = 'abbbbcd';
const arr = [222, 2, 2, 2, 3, 4];
const arr1 = [];

for (let i in arr) {
  arr1.push(arr[i]);
}

const ans = arr1;
const sarr = arr.map((p) => p.toString());

const chkPrime = (n) => {
  if (n === 1) return false;
  else if (n === 2) return true;
  else {
    for (i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
};

console.log(chkPrime(55));

!console.table();

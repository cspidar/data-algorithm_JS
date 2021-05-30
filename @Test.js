arr = [0, 1, 0, 0, 2, 3, 0, 0, 0, 0];

function next_idx(ni) {
  ni++;
  if (arr[ni] === 0) {
    for (j = ni; j < arr.length; j++) {
      if (arr[j] > 0) {
        ni = j;
        break;
      }
      if (ni >= arr.length) {
        let nzero = arr.filter((p) => p > 0)[0];
        ni = arr.indexOf(nzero);
      }
    }
  }
  return ni;
}

console.log(next_idx(arr.length - 1));

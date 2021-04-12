function update (arr, item) {
  if (arr.indexOf(item) === -1) {
      arr.push(item);
      console.log('새로운 arr: ' + arr);
  } else if (arr.indexOf(item) > -1) {
      console.log(item + ' 은 이미 arr에 존재');
  }
}
const arr = ['a', 'b', 'c', 'd'];
update(arr, 'e');
//> 새로운 arr: a, b, c, d, e
update(arr, 'e');
//> e 은 이미 arr에 존재
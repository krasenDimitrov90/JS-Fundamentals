function solve(arr) {
  let arrKNums = arr.shift();
  console.log(arr.slice(0,arrKNums).join(' '));
  console.log(arr.slice(arr.length - arrKNums,arr.length).join(' '));
}
solve([2, 7, 8, 9])
solve([3, 6, 7, 8, 9])
solve([2, 0, 0, 0, 0, 0]);

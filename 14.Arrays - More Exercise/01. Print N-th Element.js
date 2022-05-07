function sequenceOfNElement(arr) {
  let specialNum = Number(arr[arr.length - 1]);
  let arrayLength = arr.length;
  let newArray = [];
  newArray.push(arr[0]);
  let index = 1;
  for (let i = 1; i < arrayLength - 1; i++) {
    if (index % specialNum === 0) {
      newArray.push(arr[i]);
    }
    index++;
  }
  console.log(newArray.join(" "));
}
sequenceOfNElement(["5", "20", "31", "4", "20", "2"]);
sequenceOfNElement(["dsa", "asd", "test", "test", "2"]);
sequenceOfNElement(["1", "2", "3", "4", "5", "6"]);

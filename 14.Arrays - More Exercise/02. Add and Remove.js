function addRemoveElements(arr) {
  let arrayLength = arr.length;
  let newArray = [];
  let numForNewArray = 0;
  for (let i = 0; i < arrayLength; i++) {
    let command = arr[i];
    numForNewArray++;
    switch (command) {
      case "add":
        newArray.push(numForNewArray);
        break;
      case "remove":
        newArray.pop();
        break;
    }
  }
  if (newArray.length < 1) {
    console.log("Empty");
  } else {
    console.log(newArray.join(" "));
  }
}
addRemoveElements(["add", "add", "add", "add"]);
addRemoveElements(["add", "add", "remove", "add", "add"]);
addRemoveElements(["remove", "remove", "remove"]);

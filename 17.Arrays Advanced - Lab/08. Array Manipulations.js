function manipulationOfArray(arr) {
  let array = arr;
  let arrayL = array.length;
  let arrayForManipulating = array[0].split(' ').map(Number);

  for (let i = 1; i < arrayL; i++) {
    let command = array[i].split(" ");
    let action = command[0];
    let number = Number(command[1]);
    switch (action) {
      case "Add":
        arrayForManipulating.push(number);
        break;
      case "Remove":
        let currentArray = arrayForManipulating.filter(x => x !== number );
        arrayForManipulating = currentArray.slice();
        break;
      case "RemoveAt":
        let indexForRemoving = command[1];
        arrayForManipulating.splice(indexForRemoving,1)
        break;
      case "Insert":
        let indexForInsert = command[2];
        arrayForManipulating.splice(indexForInsert,0,number)
        break;
    }
  }
  
  console.log(arrayForManipulating.join(' '));
}
manipulationOfArray([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);

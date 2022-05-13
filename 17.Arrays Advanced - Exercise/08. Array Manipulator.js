function arrManipulation(arrOfNums, arrOfCommands) {
  let index = 0;
  let arrForManipulating = arrOfNums.slice(0);
  let commands = arrOfCommands[index].split(" ");
  let action = commands[0];
  while (action !== "print") {
    if (action === "add") {
      let indexForManipulating = commands[1];
      let numToAdd = Number(commands[2]);
      arrForManipulating.splice(indexForManipulating, 0, numToAdd);

    } else if (action === "addMany") {
      let startIndex = Number(commands[1]);
      commands.splice(0,2);
      let numbersToAdd = commands.map(Number);
      arrForManipulating.splice(startIndex,0,...numbersToAdd);

    } else if (action === "contains") {
      let numToFind = Number(commands[1]);
      let numIndex = arrForManipulating.indexOf(numToFind);
      console.log(numIndex);

    } else if (action === "remove") {
      let indexToRemove = commands[1];
      arrForManipulating.splice(indexToRemove, 1);

    } else if (action === "shift") {
      let rotations = Number(commands[1]);
      for (let i = 0; i < rotations; i++) {
        let firstEl = arrForManipulating.shift();
        arrForManipulating.push(firstEl);
      }
    } else if (action === "sumPairs") {
      let arrForManipulatingL = arrForManipulating.length;
      let arrForSumPairs = [];
      if (arrForManipulatingL % 2 !== 0) {
        arrForManipulating.push(0);
      }
      while (arrForManipulating.length > 0) {
        let firstPairEl = arrForManipulating.shift();
        let secondEl = arrForManipulating.shift();
        let sum = firstPairEl + secondEl;
        arrForSumPairs.push(sum);
      }
      arrForManipulating = arrForSumPairs.slice(0);
    }

    index++;
    commands = arrOfCommands[index].split(" ");
    action = commands[0];
  }
  console.log(`[ ${arrForManipulating.join(', ')} ]`);
}
// arrManipulation(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "print"]
// );
arrManipulation(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);

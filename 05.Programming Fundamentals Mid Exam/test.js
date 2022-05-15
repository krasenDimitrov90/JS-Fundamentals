function arrayModifying(input) {
  let arrForModifying = input.shift().split(" ").map(Number);
  let commands = input.shift().split(" ");
  let action = commands[0];

  while (action !== "end") {
    if (action === "swap") {
        swap(commands);
    } else if (action === "multiply") {
        multiply(commands);
    } else if (action === "decrease") {
        decrease(commands);
    }
    commands = input.shift().split(" ");
    action = commands[0];
  }
  console.log(arrForModifying.join(", "));

  function swap(commands) {
    let firstIndex = Number(commands[1]);
    let secondIndex = Number(commands[2]);
    [arrForModifying[firstIndex], arrForModifying[secondIndex]] = [
      arrForModifying[secondIndex],
      arrForModifying[firstIndex],
    ];
  }
  function multiply(commands) {
    let firstIndex = Number(commands[1]);
    let secondIndex = Number(commands[2]);
    let firstNum = arrForModifying[firstIndex];
    let secondNum = arrForModifying[secondIndex];
    let multiplyNum = firstNum * secondNum;
    arrForModifying.splice(firstIndex, 1, multiplyNum);
  }
  function decrease(commands) {
    let currentArr = arrForModifying.map((el) => el - 1);
    arrForModifying = currentArr.slice(0);
  }

}
arrayModifying([
    "23 -2 321 87 42 90 -123",
    "swap 1 3",
    "swap 3 6",
    "swap 1 0",
    "multiply 1 2",
    "multiply 2 1",
    "decrease",
    "end",
  ])
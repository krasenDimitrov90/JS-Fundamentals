function wagons(arr) {
  let eachWagonContaining = arr.shift().split(" ").map(Number);
  let wagonCapacity = arr.shift();
  let arrayL = arr.length;
  for (let i = 0; i < arrayL; i++) {
    let command = arr[i].split(" ");
    if (command[0] === "Add") {
      let wagonWithPasingersToAdd = Number(command[1]);
      if (wagonWithPasingersToAdd > wagonCapacity) {
        eachWagonContaining.push(wagonCapacity);
      } else {
        eachWagonContaining.push(wagonWithPasingersToAdd);
      }
    } else {
      let pasingersToAdd = Number(command[0]);
      let currentArrayL = eachWagonContaining.length;
      for (let i = 0; i < currentArrayL; i++) {
        let currentPasingers = Number(eachWagonContaining[i]);
        if (currentPasingers + pasingersToAdd <= wagonCapacity) {
          eachWagonContaining.splice(i, 1, pasingersToAdd + currentPasingers);
          break;
        }
      }
    }
  }
  console.log(eachWagonContaining.join(' '));
}
wagons(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);

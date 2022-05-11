function listOfGuests(arr) {
  let arrayOfPeople = arr;
  let arrayOfPeopleL = arrayOfPeople.length;
  let peopleWhoGoing = [];
  for (let i = 0; i < arrayOfPeopleL; i++) {
    let command = arrayOfPeople[i].split(" ");
    let commandL = command.length;
    let guest = command[0];
    if (commandL === 3) {
      // going
      if (peopleWhoGoing.includes(guest)) {
        console.log(`${guest} is already in the list!`);
      } else {
        peopleWhoGoing.push(guest);
      }
    } else {
      // not going
      if (peopleWhoGoing.includes(guest)) {
        let indexOfGuest = peopleWhoGoing.indexOf(guest);
        peopleWhoGoing.splice(indexOfGuest, 1);
      } else {
        console.log(`${guest} is not in the list!`);
      }
    }
  }
  console.log(peopleWhoGoing.join('\n'));
}
listOfGuests([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
listOfGuests([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);

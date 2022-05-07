function dungeonestDark(arr) {
  let strFromArray = arr[0];
  let splitArray = strFromArray.split("|");
  let health = 100;
  let coins = 0;
  let rooms = splitArray.length;
  let reachedRoom = 1;
  let splitArrayL = splitArray.length;

  for (let i = 0; i < splitArrayL; i++) {
    let roomContains = splitArray[i].split(" ");
    switch (roomContains[0]) {
      case "potion":
        healing = Number(roomContains[1]);
        if (healing + health > 100) {
          console.log(`You healed for ${100 - health} hp.`);
          health = 100;
        } else {
          console.log(`You healed for ${healing} hp.`);
          health += healing;
        }
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        let currentCoins = Number(roomContains[1]);
        coins += currentCoins;
        console.log(`You found ${currentCoins} coins.`);
        break;

      default:
        monster = roomContains[0];
        healthLoss = Number(roomContains[1]);
        health -= healthLoss;
        if (health > 0) {
          console.log(`You slayed ${monster}.`);
        } else {
          console.log(`You died! Killed by ${monster}.`);
          console.log(`Best room: ${reachedRoom}`);
          return;
        }
        break;
    }
    reachedRoom++;
  }
  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

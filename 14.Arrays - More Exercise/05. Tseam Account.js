function printGames(arr) {
  let accountGames = arr[0].split(" ");
  let index = 1;
  let command = arr[index].split(" ");
  let action = command[0];
  while (action !== "Play!") {
    let game = command[1];
    switch (action) {
      case "Install":
        accountGames = instalingGame(accountGames, game);
        break;
      case "Uninstall":
        accountGames = removeElFromAccount(accountGames, game);
        break;
      case "Update":
        accountGames = moveElToLastPosition(accountGames, game);
        break;
      case "Expansion":
        accountGames = expansion(accountGames, game);
        break;
    }
    index++;
    command = arr[index].split(" ");
    action = command[0];
  }

  console.log(accountGames.join(" "));

  function instalingGame(games, gameForInstaling) {
    let gamesLength = games.length;
    for (let i = 0; i < gamesLength; i++) {
      if (games[i] === gameForInstaling) {
        return games;
      } else {
        games.push(gameForInstaling);
        return games;
      }
    }
  }

  function removeElFromAccount(games, gameForRemoving) {
    let i = 0;
    while (i < games.length) {
      if (games[i] === gameForRemoving) {
        games.splice(i, 1);
        break;
      } else {
        ++i;
      }
    }
    return games;
  }
  function moveElToLastPosition(games, gameForMoving) {
    let i = 0;

    while (i < games.length) {
      if (games[i] === gameForMoving) {
        let lastElement = games[i];
        games.splice(i, 1);
        games.push(lastElement);
        break;
      } else {
        i++;
      }
    }

    return games;
  }
  function expansion(games, gameExpansion) {
    let index = 0;
    let gameExpansionString = gameExpansion.split("-");
    let gameForExpansion = gameExpansionString[0];
    let gamesLength = games.length;
    for (let i = 0; i < gamesLength; i++) {
      if (games[i] === gameForExpansion) {
        index = i;
        gameExpansion = gameExpansion.replace("-", ":");
        let newGames = games.splice(i + 1, 0, gameExpansion);
        break;
      }
    }
    return games;
  }
}
printGames([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
printGames([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);

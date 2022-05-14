function inventory(arrEquipment) {
  let inventoryArr = arrEquipment.shift().split(" ");
  let arrEquipmentL = arrEquipment.length;

  for (let i = 0; i < arrEquipmentL; i++) {
    let tokens = arrEquipment[i].split(" ");
    let action = tokens[0];

    switch (action) {
      case "Buy":
        let addEquipment = tokens[1];
        if (! inventoryArr.includes(addEquipment)) {
          inventoryArr.push(addEquipment);
        }
        break;
      case "Trash":
        let equipmentToRemove = tokens[1];
        if (inventoryArr.includes(equipmentToRemove)) {
          let index = inventoryArr.indexOf(equipmentToRemove);
          inventoryArr.splice(index, 1);
        }
        break;
      case "Repair":
        let equipmentToRepair = tokens[1];
        if (inventoryArr.includes(equipmentToRepair)) {
          let index = inventoryArr.indexOf(equipmentToRepair);
          inventoryArr.splice(index, 1);
          inventoryArr.push(equipmentToRepair);
        }
        break;
      case "Upgrade":
        let upgrade = tokens[1].split("-");
        if (inventoryArr.includes(upgrade[0])) {
          let upgradeEquipment = tokens[1].replace("-", ":");
          let index = inventoryArr.indexOf(upgrade[0]);
          
          inventoryArr.splice(index + 1, 0, upgradeEquipment);
        }
        break;
    }
  }
  console.log(inventoryArr.join(' '));
}

inventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
inventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);

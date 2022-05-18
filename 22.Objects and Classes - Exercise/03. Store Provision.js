function storeProvisions(provisons, orders) {
  let provisonsInTheStore = {};
  let provisonsL = provisons.length;
  let ordersL = orders.length;
  for (let i = 0; i < provisonsL; i += 2) {
      let item = provisons[i];
      let quantity = provisons[i +1];
      provisonsInTheStore[item] = Number(quantity);
  }
  for (let i = 0; i < ordersL; i += 2) {
      let currentItem = orders[i];
      let currentQuantity = orders[i + 1];
      if (!provisonsInTheStore.hasOwnProperty(currentItem)) {
        provisonsInTheStore[currentItem] = 0;
      }
      provisonsInTheStore[currentItem] += Number(currentQuantity);
  }
  for (const item in provisonsInTheStore) {
      console.log(`${item} -> ${provisonsInTheStore[item]}`);
  }
  
}
storeProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
